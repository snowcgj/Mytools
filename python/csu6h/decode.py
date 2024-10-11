def mybase64(str):
    '''
    不对 这是一个md5哈希计算
    :param str:
    :return:
    '''

import base64

# 1. 十六进制字符串转换为二进制字符串
hex_str = "b4f328a7006a47079b68a49679fe1bae"
binary_str = bin(int(hex_str, 16))[2:].zfill(len(hex_str) * 4)  # 二进制补足位数
print("二进制表示: ", binary_str)

# 2. 十六进制转换为字节流
byte_data = bytes.fromhex(hex_str)

# 3. Base64 编码
base64_encoded = base64.b64encode(byte_data).decode('utf-8')
print("Base64 编码: ", base64_encoded)

# 4. Base64 解码
base64_decoded = base64.b64decode(base64_encoded)
print("Base64 解码后的字节: ", base64_decoded)

