from PIL import Image
import numpy as np
import os
import tkinter as tk
from tkinter import filedialog


# 定义字符集，字符根据灰度值从浅到深排列
ASCII_CHARS = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.']

# 将图片调整到合适大小
def resize_image(image, new_width=50):
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


# 打开文件选择对话框
def open_file_dialog():
    root = tk.Tk()
    root.withdraw()  # 隐藏主窗口

    # 设置主窗口的图标
    # root.iconbitmap("\python\pic2char\df.ico")  # 修改为你自己的图标路径

    file_path = filedialog.askopenfilename(title="选择图片", filetypes=[("Image files", "*.png;*.jpg;*.jpeg;*.bmp")])
    return file_path


# 主程序
def main(new_width=100, new_height=50):
     # 弹出文件选择对话框
    print(23453456375677)
    image_path = open_file_dialog()

    if not image_path:
        print("未选择任何文件，程序结束。")
        return

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
    with open(os.getcwd()+"\python\pic2char\pic.html", "w") as f:
        f.write(f"<pre>{ascii_image}</pre>")  # 通过HTML标签保存，方便在浏览器查看
    
    # 可选择将字符图像保存到文件
    with open(os.getcwd()+"\python\pic2char\pic.txt","w") as f:
        f.write(ascii_image)

if __name__ == "__main__":
    # #image_path = input("请输入图片路径: ")
    # pt1=os.getcwd()


    # image_path=pt1+"\python\pic2char\p.jpg"
    # main(image_path)
    main(new_width=100, new_height=100)  # 可以调整显示的宽度和高度
