import cv2
import numpy as np
from matplotlib import pyplot as plt

# 读取图像
img = cv2.imread('./b1.jpg')
cv2.imshow('img',img)
# 创建一个掩膜，并标记出需要修复的区域
# 这里假设我们手动确定了水印区域（实际应用中可以使用图像处理算法自动标记）
# mask = np.zeros(img.shape[:2], dtype=np.uint8)
# mask[50:150, 50:250] = 255  # 假设水印区域是位于这个矩形中
# 这里进行一下水印区域处理
mask = cv2.imread('saved_mask.png', 0)  # 使用0表示以灰度模式读取

if img is None:
    print("报错1 : Could not load image 'b2.jpg'")
if mask is None:
    print("报错2 : Could not load mask 'saved_mask.png'")

# 使用 inpaint 函数修复图像
restored_img_telea = cv2.inpaint(img, mask, 500, cv2.INPAINT_TELEA)
restored_img_ns = cv2.inpaint(img, mask, 500, cv2.INPAINT_NS)

# 显示修复前和修复后的图像对比
plt.subplot(1, 3, 1)
plt.title('Original Image')
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))

plt.subplot(1, 3, 2)
plt.title('Restored Image (Telea)')
plt.imshow(cv2.cvtColor(restored_img_telea, cv2.COLOR_BGR2RGB))

plt.subplot(1, 3, 3)
plt.title('Restored Image (Navier-Stokes)')
plt.imshow(cv2.cvtColor(restored_img_ns, cv2.COLOR_BGR2RGB))

plt.savefig('test.png')
plt.show()

