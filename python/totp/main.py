import base64
import hmac
import hashlib
import time

def base32_decode(secret):
    """Base32 解码"""
    return base64.b32decode(secret, casefold=True)  # 支持大写小写混合的Base32

def get_time_step(interval=30):
    """生成 8 字节的时间步"""
    current_time = int(time.time())  # 获取当前的时间戳（单位：秒）
    time_step = current_time // interval  # 计算当前时间步
    time_bytes = time_step.to_bytes(8, 'big')  # 转换为8字节的Big-Endian格式
    return time_bytes

def hmac_sha1(key, message):
    """生成 HMAC-SHA1"""
    hmac_result = hmac.new(key, message, hashlib.sha1).digest()  # HMAC 生成 20字节的哈希值
    return hmac_result

def dynamic_truncate(hmac_result):
    """动态截断，从 HMAC 中截取 4 字节"""
    offset = hmac_result[-1] & 0x0F  # 获取最后一个字节的低4位，作为偏移量
    binary = ((hmac_result[offset] & 0x7F) << 24) | \
             ((hmac_result[offset + 1] & 0xFF) << 16) | \
             ((hmac_result[offset + 2] & 0xFF) << 8) | \
             (hmac_result[offset + 3] & 0xFF)
    return binary

def generate_totp(secret, interval=30, digits=6):
    """生成 TOTP 动态验证码"""
    key = base32_decode(secret)  # 1. Base32 解码密钥
    time_step = get_time_step(interval)  # 2. 生成时间步
    hmac_result = hmac_sha1(key, time_step)  # 3. 生成 HMAC
    binary = dynamic_truncate(hmac_result)  # 4. 动态截断
    otp = binary % (10 ** digits)  # 5. 取模，生成6位TOTP
    return str(otp).zfill(digits)  # 不足6位的，前面补0

# 示例：生成 TOTP 动态验证码
secret = "JBSWY3DPEHPK3PXP"  # 这是 Base32 编码的密钥
otp = generate_totp(secret)
print(f"TOTP 动态验证码: {otp}")
