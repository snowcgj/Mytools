# 导入 Pillow 库中的 Image 类
from PIL import Image
 
# 定义字符集合
ascii_char = list("$@B%8&W#*oahkbdpqwmZO0QLCJYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,\"^`'. ")
 
# 将 RGB 值转换为 ASCII 字符
def get_char(r, g, b, alpha=256):
    # 如果 alpha 值为 0，则返回一个空格
    if alpha == 0:
        return ' '
    # 计算灰度值
    gray = int(0.2126*r + 0.7152*g + 0.0722*b)
    # 将灰度值映射到字符集合的区间内，获得相应的字符，并返回该字符
    return ascii_char[int(gray/256*len(ascii_char))]
 
def main():
    # 打开要处理的图片
    im = Image.open("E:\Coding\mytools\Mytools\python\pic2char\p.jpg")
    # 设置字符画的尺寸
    w, h = 160, 120
    # 对图片进行缩放
    im = im.resize((w, h), Image.NEAREST)
    txt = ""
    for i in range(h):
        for j in range(w):
            # 获取像素值，并将 RGB 值转换为相应的字符
            txt += get_char(*im.getpixel((j, i)))
        # 换行
        txt += '\n'
    # 将字符画写入到一个文本文件中
    with open('output.txt', 'w') as f:
        f.write(txt)
 
# 判断该文件是否为主程序
if __name__ == '__main__':
    main()