import pyotp
import qrcode
import time
import random
import string
import os

current_file_path=os.path.realpath(__file__)
print(current_file_path)
current_directory = os.path.dirname(current_file_path)
print(current_directory)


current_directory = os.path.dirname(current_file_path)
# 1. 生成 TOTP 密钥 TOTP 算法所要求的 Base32 编码格式 也可以生成，但是需要满足base32要求
def generate_totp_secret():
    secret = pyotp.random_base32()  # 生成随机密钥
    return secret

# 2. 生成二维码供用户扫描
def generate_qr_code(secret, user_email):
    totp = pyotp.TOTP(secret)
    uri = totp.provisioning_uri(user_email, issuer_name="MyApp")
    img = qrcode.make(uri)
    filename=current_directory+"\\"+user_email+"_qrcode.png"
    img.save(filename)  # 保存二维码图像
    print(f"二维码已生成：{user_email}_qrcode.png")
    
# 3. 验证用户输入的验证码
def verify_totp(secret, user_input_code):
    totp = pyotp.TOTP(secret)
    if totp.verify(user_input_code):
        print("验证码验证成功！")
        return True
    else:
        print("验证码错误，请重试。")
        return False

# 4. 生成恢复代码（一次性使用）
def generate_recovery_codes(num_codes=5):
    codes = []
    for _ in range(num_codes):
        code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
        codes.append(code)
    return codes

# 5. 演示代码：使用 TOTP 和恢复代码进行验证
def demo_2fa():
    # 假设用户的邮箱
    user_email = "user@example.com"
    
    # 第一步：生成 TOTP 密钥并生成二维码
    secret = generate_totp_secret()
    generate_qr_code(secret, user_email)
    
    # 第二步：用户扫描二维码并获取动态验证码
    print("请扫描二维码并输入验证码：")
    # 模拟用户输入的验证码
    user_input_code = input("请输入验证码：")
    
    # 验证验证码
    verify_totp(secret, user_input_code)

    # 第三步：生成恢复代码
    recovery_codes = generate_recovery_codes()
    print("\n已生成的恢复代码：")
    for i, code in enumerate(recovery_codes, 1):
        print(f"恢复代码 {i}: {code}")

    # 假设用户丢失了手机，需要使用恢复代码
    print("\n用户丢失了手机，使用恢复代码验证身份：")
    recovery_code_input = input("请输入恢复代码：")
    
    if recovery_code_input in recovery_codes:
        print("恢复代码验证成功！")
        recovery_codes.remove(recovery_code_input)
        print(f"已删除恢复代码 {recovery_code_input}")
    else:
        print("恢复代码无效。")

# 运行示例
if __name__ == "__main__":
    demo_2fa()
