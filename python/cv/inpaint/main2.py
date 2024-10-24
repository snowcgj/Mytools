import cv2
import numpy as np

# 读取图像
img = cv2.imread('b1.jpg')

# 假设已经生成了水印区域的掩膜，掩膜为白色区域
# 你可以通过边缘检测或其他方法生成掩膜
mask = cv2.imread('saved_mask.png', cv2.IMREAD_GRAYSCALE)

# 提取水印区域
watermark_region = cv2.bitwise_and(img, img, mask=mask)

# 反色处理，将水印区域的颜色取反
watermark_inverted = 255 - watermark_region

# 将反色的水印与原图像进行叠加，达到中和效果
result = cv2.addWeighted(img, 1.0, watermark_inverted, 1.0, 0)

# 显示结果
cv2.imshow('Original Image', img)
cv2.imshow('Watermark Removed', result)
cv2.waitKey(0)
cv2.destroyAllWindows()
