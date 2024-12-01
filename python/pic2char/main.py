from PIL import Image
import numpy as np
import os

# 定义字符集，字符根据灰度值从浅到深排列
ASCII_CHARS = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.']

# 将图片调整到合适大小
def resize_image(image, new_width=100):
    width, height = image.size
    ratio = height / width
    new_height = int(new_width * ratio)
    resized_image = image.resize((new_width, new_height))
    return resized_image

# 将图片转为灰度图
def grayscale_image(image):
    return image.convert("L")

# 将灰度值转换为字符
def pixel_to_ascii(pixel_value):
    return ASCII_CHARS[pixel_value // 25]

# 将图像转换为字符表示
def image_to_ascii(image):
    image = resize_image(image)
    image = grayscale_image(image)

    # 将图像的像素数据转为数组
    pixels = np.array(image)
    
    ascii_str = ""
    for row in pixels:
        for pixel in row:
            ascii_str += pixel_to_ascii(pixel)
        ascii_str += '\n'
    
    return ascii_str

# 主程序
def main(image_path, new_width=100):
    try:
        # 打开图片
        image = Image.open(image_path)
    except Exception as e:
        print(f"无法打开图像文件: {e}")
        return
    
    # 转换图像为字符表示
    ascii_image = image_to_ascii(image)
    
    # 将结果输出到控制台
    print(ascii_image)
    
    # 可选择将字符图像保存到文件
    with open(os.getcwd()+"\python\pic2char\pic.txt","a") as f:
        f.write(ascii_image)

if __name__ == "__main__":
    #image_path = input("请输入图片路径: ")
    pt1=os.getcwd()


    image_path=pt1+"\python\pic2char\p.jpg"
    main(image_path)
