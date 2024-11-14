import requests
from bs4 import BeautifulSoup
import time
import os
import logtest
from myemail import send_email


# 获取当前脚本所在的目录路
current_file_path = os.path.realpath(__file__)
# 获取当前 Python 文件所在的目录
current_directory = os.path.dirname(current_file_path)
# 拼接当前目录路径与文件名   # 存储上次活动标题和链接的文件路径
file_path = os.path.join(current_directory, "yysy_activity.txt")



def read_last_activity():
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            lines = file.read().splitlines()
           #  print(f"文件内容: {lines}")  # 打印文件内容
            if len(lines) < 2:
                print("文件内容不够两行")
                return None, None
            return lines[0], lines[1]
    except FileNotFoundError:
        return None, None


# 写入文件的函数
def write_last_activity(title, link):
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(f"{title}\n{link}")  # 写入标题和链接，每个一行


# 定义目标URL
url = "https://gra.csu.edu.cn/yjsytz.htm"
have_error=0
def detect(url):
    global have_error
    # 读取上次检查时的网页内容
    f_title,f_link= read_last_activity()
    print("原来的title:")
    print(f_title)
    print("原来的link:")
    print(f_link)
    # 请求网页并获取内容
    response = requests.get(url)
    if response.status_code != 200:
        #print("网页加载失败")
        have_error=1
        send_email("学术邮件报错！","网页加载失败，出错了！！！")
        print("学术邮件报错！","网页加载失败，出错了！！！")
        #  这里抱一个错 发到邮件里 
        return
    
    #设置编码
    response.encoding=response.apparent_encoding
    if not response.apparent_encoding:
        response.encoding='utf-8'

    soup = BeautifulSoup(response.text, "html.parser")
    activities_section = soup.select("body > section > div.inside-main > ul")
    first_activity = activities_section[0].find("li")   #find方法，找到符合条件的第一个标签
    if first_activity:
        title = first_activity.find("a").get_text(strip=True)  # 提取标题
        href = first_activity.find("a")["href"]  # 提取链接
        full_link = "https://gra.csu.edu.cn/in" + href[2:]  # 拼接完整链接
    else:
        have_error=2
        # 报错返回
        send_email("研究生院邮件报错！","网页加载成功，DOM处理出错了！！！")
        print("学术邮件报错！","网页加载成功，DOM处理出错了！！！")
        return
    # if title!=f_title and full_link!=f_link :
    if  full_link!=f_link :

        print("新的title是：")
        print(title)

        print("新的link是：")
        print(full_link)

        
        # 更新原来的文件
        write_last_activity(title, full_link)  
        #发送邮件
        send_email("研究生院邮件通知",title, full_link,who=1)
        # 写入日志文件
        logtest.mylog(text="研究生院")
    else:
        print("研究生院没有新的通知")


detect(url=url)