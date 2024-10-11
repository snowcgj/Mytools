import random

import requests

from settings import *

# 要学习的页面
a = range(28, 57)
b = range(140, 150)
c = range(305, 330)
d = list(a) + list(b) + list(c)
# 1. 先获取study_id
for i in d:
    session = requests.session() #为每个页面创建一个新的会话
    print(i)
    path = f"/api/study/4/{i}"
    url = f"https://aqks.csu.edu.cn/cg-exam-server{path}"
    # 这就是启动一个会话
    timestamp = str(int(time.time()) * 1000)
    begin_time = str(int(time.time() * 1000))   #当前时间的毫秒级时间戳，用于请求的数据和签名。
    # 这上面就是启动的一个时间
    data = {
        "beginTime": begin_time
    }
    headers = {
        "app-key": app_key,
        "cgauthorization": cgauthorization,
        "sign": R(timestamp, path, data),
        "timestamp": timestamp,
        "host": "aqks.csu.edu.cn",
        "origin": "https://aqks.csu.edu.cn",
        "referer": "https://aqks.csu.edu.cn/lab-study-front/security/safetyknowledgeList/2/4/1"
    }

    response = session.post(url, data=data, headers=headers)
    # 发送data header就发过去了
    # 发送POST请求以获取 study_id：
    study_id = response.json()['data']['studyId']
    # response：服务器响应，解析出study_id
    print(study_id)
    # 这个study是一个平台的规定，所以要先获得


    # 每15秒提交一次学习时长
    # 随机随机学习5-7分钟
    study_duration = random.randint(5, 7)
    study_time = study_duration * 60 // 15
    # 计算需要提交的次数（每15秒一次）。
    path = f"/api/study_upload/{study_id}"
    url = f"https://aqks.csu.edu.cn/cg-exam-server{path}"
    for j in range(study_time):
        time.sleep(15)
        timestamp = str(int(time.time()) * 1000)
        uploadTime = str(int(time.time() * 1000))
        data = {
            "uploadTime": uploadTime
        }
        headers = {
            "app-key": app_key,
            "cgauthorization": cgauthorization,
            "sign": R(timestamp, path, data),
            "timestamp": timestamp,
            "host": "aqks.csu.edu.cn",
            "origin": "https://aqks.csu.edu.cn",
            "referer": "https://aqks.csu.edu.cn/lab-study-front/security/safetyknowledgeList/9/4/6"
        }
        response = session.post(url, data=data, headers=headers)
        print(response.json())
        if response.json()['code'] != 200:
            break
    session.close()