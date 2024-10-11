def base64_encode(data):
    #这是 Base64 的字符集。Base64 使用 64 个字符（大写字母、小写字母、数字、+ 和 /）来表示数据
    base64_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    binary_string = ''
    #这个函数会将输入的字符串转换成字节（即二进制数据），以便我们能对其进行进一步处理。encode()
    # 将字符串按照默认的 UTF-8 编码转换为字节数据。例如，"A".encode() 会得到 b'A'，即 ASCII 值 65 对应的字节。
    for byte in data.encode():
    #这个函数将每个字节转换成 8 位的二进制字符串。'08b' 是格式说明符，表示将数值格式化为 8 位的二进制形式。
        binary_string += format(byte, '08b')

    padding = len(binary_string) % 6
    if padding != 0:
        binary_string += '0' * (6 - padding)
    encoded = ''
    for i in range(0, len(binary_string), 6):
        index = int(binary_string[i:i+6], 2)
        encoded += base64_chars[index]
    if padding == 2:
        encoded += '=='
    elif padding == 4:
        encoded += '='
    return encoded
