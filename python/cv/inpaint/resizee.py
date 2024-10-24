import cv2

img=cv2.imread('./bubu.jpg')
h,w=img.shape[:2]
new_h=470
ratio=w/h
new_w=  int(new_h * ratio)
# 最后一个参数是插入风格，因为涉及像素的变化，变大变小会对某些像素进行处理，这里就是处理选择的策略
new_img=cv2.resize(img,(new_w,new_h),interpolation=cv2.INTER_AREA)
cv2.imwrite('./bubu2.jpg',new_img)
