from PIL import Image

file_path = "down.jpg"

try:
    # 打开图像文件
    with Image.open(file_path) as img:
        # 确定要分割的部分数量
        num_parts = 4
        width, height = img.size
        part_height = height // num_parts

        # 创建空的列表来保存每个部分
        parts = []

        # 分割图片并保存每一部分
        for i in range(num_parts):
            box = (0, i * part_height, width, (i + 1) * part_height if i < num_parts - 1 else height)
            part = img.crop(box)
            part_path = f"image_part_{i + 1}.jpg"
            part.save(part_path)
            parts.append(part_path)

        print("图片已成功分割。每个部分的路径如下：")
        for part in parts:
            print(part)

except Exception as e:
    print(f"分割图片时出错：{e}")
    parts = []  # 确保变量 parts 始终被定义

