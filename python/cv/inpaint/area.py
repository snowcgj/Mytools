import cv2
import numpy as np

# 读取图像
img = cv2.imread('./b1.jpg')

h,w=img.shape[:2]
# 转换为灰度图
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# 使用阈值分割亮度较高的部分 (假设水印颜色较浅)
_, mask = cv2.threshold(gray, 248, 255, cv2.THRESH_BINARY)

# 保存mask图像为 PNG 格式
cv2.imwrite('saved_mask.png', mask)

# 显示结果
cv2.imshow('Detected Watermark', mask)
cv2.waitKey(0)
cv2.destroyAllWindows()

#  这个好像也没什么用，因为有的水印和图片中其他水印颜色是一样的
