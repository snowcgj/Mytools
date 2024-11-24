import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# 邮件配置
sender_email = "batmanwithoutwings@foxmail.com"  # 发件人邮箱
receiver_email = "241812019@csu.edu.cn"  # 收件人邮箱

# 维护一个收邮件列表
emails=[
    ["241812019@csu.edu.cn"],
    ["3216184305@qq.com","241812019@csu.edu.cn"]
    ]

email_password = "matmtcojtdojdcgi"  #  发送者个人授权码
smtp_server = "smtp.qq.com"  # SMTP服务器地址（例如Gmail为smtp.gmail.com）
smtp_port = 587  # 邮件服务器端口（Gmail使用587）  smtp_port = 465  # or 587 for TLS

# 定义发送邮件的函数
def send_email(subject, body, link="",who=0):
    # 创建邮件对象
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject
    global emails

    # 邮件正文内容
    body_html = f"""
    <html>
        <body>
            <p>{body}</p>
            <p>点击这里查看学术活动：<a href="{link}">学术活动链接</a></p>
        </body>
    </html>
    """
    # message.attach(MIMEText(body, "plain"))
    # message.attach(Mi)
    message.attach(MIMEText(body_html,"html"))


    try:
        # 连接SMTP服务器
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()  # 启用TLS加密
        server.login(sender_email, email_password)
        print("走到这里了")
        # 发送邮件
        # for addr in emails[who]:
        #     print("ad是:")
        #     print(addr)
        server.sendmail(sender_email, emails[who], message.as_string()) # 收件人可以直接是列表
        server.quit()
        print("邮件已发送！")
    except Exception as e:
        print(f"邮件发送失败: {e}")

