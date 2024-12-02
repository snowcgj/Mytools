from PIL import Image
import os

# 字符集（可以增加更多字符以提高效果）
CHARSET = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@']

# 将像素转换为字符的函数
def pixel_to_char(pixel_value, charset):
    """根据像素值从字符集中选择一个字符表示"""
    # 像素值范围从0到255，将其映射到字符集的索引
    return charset[int(pixel_value / 256 * len(charset))]

# 图片转字符画的函数
def image_to_ascii(image_path, width=100, height=50):
    # 打开图片并进行处理
    image = Image.open(image_path)
    
    # 调整图片大小，使其适应字符画显示（字符的宽高比大约是2:1）
    aspect_ratio = image.height / image.width
    new_height = int(height)
    new_width = int(width * aspect_ratio / 2)  # 缩小宽度，保持比例
    image = image.resize((new_width, new_height))
    
    # 转换为灰度图
    image = image.convert('L')  # 转换为灰度图像
    
    # 获取图像的像素数据
    pixels = image.getdata()
    
    # 将每个像素的亮度值转换为对应的字符
    ascii_image = ''
    for i in range(0, len(pixels), new_width):
        for j in range(new_width):
            pixel_value = pixels[i + j]
            ascii_image += pixel_to_char(pixel_value, CHARSET)
        ascii_image += '\n'  # 每行结束后换行

    return ascii_image

# 打印字符画
def save_ascii_image(image_path, output_path='output.txt', width=100, height=50):
    ascii_image = image_to_ascii(image_path, width, height)
    
    with open(output_path, 'w') as f:
        f.write(ascii_image)

# 示例：读取图片并保存字符画到txt文件

p1=os.getcwd()
print(p1)

save_ascii_image(p1+'\python\pic2char\p.jpg', 'output.txt', width=150, height=80)

