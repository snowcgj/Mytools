import cv2
import numpy as np
import matplotlib.pyplot as plt
from scipy import ndimage
import warnings

warnings.filterwarnings("ignore") #不显示警告
plt.rc('font', family='SimHei', size=7)  ##显示中文
# 设置字体为SimHei以支持中文，并确保负号正常显示
plt.rcParams['font.sans-serif'] = ['SimHei']  # 指定默认字体
plt.rcParams['axes.unicode_minus'] = False  # 正常显示负号

def load_image(path):
    """
    读取图像并转换为灰度图像。
    """
    image = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    if image is None:
        raise ValueError("图像路径无效或图像无法读取。")
    return image


def gaussian_filter(image, kernel_size=5, sigma=1.4):
    """
    应用高斯滤波器平滑图像。
    """
    return ndimage.gaussian_filter(image, sigma=sigma)


def sobel_filters(image):
    """
    计算图像的水平和垂直梯度。
    """
    Kx = np.array([[-1, 0, +1],
                   [-2, 0, +2],
                   [-1, 0, +1]], dtype=np.float32)

    Ky = np.array([[-1, -2, -1],
                   [0, 0, 0],
                   [+1, +2, +1]], dtype=np.float32)

    Ix = ndimage.convolve(image, Kx)
    Iy = ndimage.convolve(image, Ky)

    G = np.hypot(Ix, Iy)  # 计算梯度强度  hypotenuse斜边
    G = G / G.max() * 255  # 归一化到0-255
    theta = np.arctan2(Iy, Ix)  # 计算梯度方向
    return (G, theta)


def non_max_suppression(G, theta):
    """
    非极大值抑制，细化边缘。
    通过四个方向 获得相邻的两个点，再进行处理
    """
    M, N = G.shape
    Z = np.zeros((M, N), dtype=np.int32)
    angle = theta * 180. / np.pi
    angle[angle < 0] += 180

    for i in range(1, M - 1):
        for j in range(1, N - 1):
            try:
                q = 255
                r = 255

                # 四个主要方向
                if (0 <= angle[i, j] < 22.5) or (157.5 <= angle[i, j] <= 180):
                    q = G[i, j + 1]
                    r = G[i, j - 1]
                elif (22.5 <= angle[i, j] < 67.5):
                    q = G[i + 1, j - 1]
                    r = G[i - 1, j + 1]
                elif (67.5 <= angle[i, j] < 112.5):
                    q = G[i + 1, j]
                    r = G[i - 1, j]
                elif (112.5 <= angle[i, j] < 157.5):
                    q = G[i - 1, j - 1]
                    r = G[i + 1, j + 1]

                if (G[i, j] >= q) and (G[i, j] >= r):
                    Z[i, j] = G[i, j]
                else:
                    Z[i, j] = 0

            except IndexError as e:
                pass

    return Z


def threshold(img, lowThresholdRatio=0.1, highThresholdRatio=0.2):
    """
    双阈值处理，分类强边缘、弱边缘和非边缘。
    """
    highThreshold = img.max() * highThresholdRatio
    # 低阈值当成高阈值的某个比例进行处理
    lowThreshold = highThreshold * lowThresholdRatio

    M, N = img.shape
    res = np.zeros((M, N), dtype=np.int32)

    weak = np.int32(25)
    strong = np.int32(255)

    # 强边缘坐标值
    strong_i, strong_j = np.where(img >= highThreshold)
    # 这里的其实没用到，先保留一下吧
    zeros_i, zeros_j = np.where(img < lowThreshold)
    # 弱边缘坐标值
    weak_i, weak_j = np.where((img <= highThreshold) & (img >= lowThreshold))

    # 根据上面坐标结果更新矩阵
    res[strong_i, strong_j] = strong
    res[weak_i, weak_j] = weak

    return (res, weak, strong)


def hysteresis(img, weak, strong=255):
    """
    边缘连接，将弱边缘连接到强边缘。
    """
    M, N = img.shape
    for i in range(1, M - 1):
        for j in range(1, N - 1):
            if img[i, j] == weak:
                # 检查8个邻居是否有强边缘
                if ((img[i + 1, j - 1] == strong) or (img[i + 1, j] == strong) or (img[i + 1, j + 1] == strong)
                        or (img[i, j - 1] == strong) or (img[i, j + 1] == strong)
                        or (img[i - 1, j - 1] == strong) or (img[i - 1, j] == strong) or (img[i - 1, j + 1] == strong)):
                    img[i, j] = strong
                else:
                    img[i, j] = 0
    return img


def canny_edge_detector(image_path):
    """
    完整的Canny边缘检测器实现。
    """
    # 1. 读取图像
    img = load_image(image_path)
    plt.figure(figsize=(12, 8))
    plt.subplot(2, 3, 1)
    plt.title('原始图像')
    plt.imshow(img, cmap='gray')
    plt.axis('off')

    # 2. 高斯滤波
    blurred = gaussian_filter(img, kernel_size=5, sigma=1.4)
    plt.subplot(2, 3, 2)
    plt.title('高斯滤波')
    plt.imshow(blurred, cmap='gray')
    plt.axis('off')

    # 3. 计算梯度
    G, theta = sobel_filters(blurred)
    plt.subplot(2, 3, 3)
    plt.title('梯度强度')
    plt.imshow(G, cmap='gray')
    plt.axis('off')

    # 4. 非极大值抑制
    nonMaxImg = non_max_suppression(G, theta)
    plt.subplot(2, 3, 4)
    plt.title('非极大值抑制')
    plt.imshow(nonMaxImg, cmap='gray')
    plt.axis('off')

    # 5. 双阈值处理
    thresh, weak, strong = threshold(nonMaxImg)
    plt.subplot(2, 3, 5)
    plt.title('双阈值处理')
    plt.imshow(thresh, cmap='gray')
    plt.axis('off')

    # 6. 边缘连接
    img_final = hysteresis(thresh, weak, strong)
    plt.subplot(2, 3, 6)
    plt.title('最终边缘')
    plt.imshow(img_final, cmap='gray')
    plt.axis('off')

    plt.tight_layout()
    plt.show()

    return img_final


if __name__ == "__main__":
    # 替换为你自己的图像路径
    image_path = 'bad.png'
    edges = canny_edge_detector(image_path)
