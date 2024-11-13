import os
from datetime import datetime

def mylog(text=""):
    # 获取当前脚本所在的目录路
    current_file_path = os.path.realpath(__file__)
    # 获取当前 Python 文件所在的目录
    current_directory = os.path.dirname(current_file_path)
    # 拼接当前目录路径与文件名
    logfile = os.path.join(current_directory, "my_log.txt")
    #print(logfile)


    # 获取当前时间并格式化
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open(logfile,"+a",encoding="utf-8") as file:
        file.write(current_time )
        file.write("   写入成功 \n")

