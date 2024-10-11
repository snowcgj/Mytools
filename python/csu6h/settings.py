import base64
import hashlib
import time
# 练习每次都需的值
practiceUuid = ""
T = "c640ca392cd45fb3a55b00a63a86c618"
L = "=IGM4cTYlhTNiBDNwITMzkjM1EWNiJDOwUzM3IWZjZGO"

cgauthorization = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNDE4MTIwMTkiLCJyb2xlIjoyMiwidXNlck5vIjoxMjUwMTMsIm1vYmlsZSI6bnVsbCwib3JnX3R5cGUiOiIiLCJyb2xlX2NvZGUiOiJzdHVkZW50Iiwib3JnX2lkcyI6IiIsIm9yZ190eXBlX2NvZGUiOiIiLCJ1c2VyaWQiOiIyNDE4MTIwMTkiLCJyb2xlX25hbWUiOiLlrabnlJ8iLCJjYXMiOiJjYXMiLCJzeXN0ZW1Db2RlIjoiZXhhbSIsInBob25lIjpudWxsLCJuYW1lIjoi5bCa6ZGr5YmRIiwidXNlclR5cGUiOjIsIm9yZ19uYW1lIjoiIiwiZXhwIjoxNzMwODE1NDkyLCJpYXQiOjE3MjgyMjM0OTIsInJwIjoiX3J6SDZNZCIsImp0aSI6IjcyMWE5NDhmLWI2M2YtNDc4MS1hNTlhLTkxYzQ2ZTMyYWNmOCIsInRpbWVzdGFtcCI6MTcyODIyMzQ5MjYxOX0.5DSa3ntAxyA31VWBkzoy-ZZ92H-n1pYV18l41AseurA"
app_key = "8fceb735082b5a529312040b58ea780b"
# 固定值
size = "20"
questions_path = "/api/user_practise/subject"
questions_url = "https://aqks.csu.edu.cn/cg-exam-server/api/user_practise/subject"
answer_path = "/api/user_practise/answer"
answer_url = "https://aqks.csu.edu.cn/cg-exam-server/api/user_practise/answer"
o = str(int(time.time()) * 1000)
L2 = "".join(reversed(list(L)))
r = base64.b64decode(L2).decode("utf-8")


def R(e, n, a):
    t = T + n
    keys = sorted(list(a.keys()))
    for key in keys:
        t += key + a[key]
    t += e + " " + T
    return hashlib.md5(t.encode()).hexdigest()
#  t.encode()  字符串转换为自己序列，进行哈希算法处理，生成的数据是128位的数据，之后转化为16进制显示， 这就生成签名了
#  "sign": R(timestamp, path, data),
#'uploadTime'+真正的时间+
# uploadTime2024-10-102024-10-10 "c640ca392cd45fb3a55b00a63a86c618"    注意path是服务器端发过来
# 重点是里面的哪个study_id

# 这个R函数的逻辑应该是看浏览器里面怎么生成的

# 下面这个函数并没有被用到
def answer_question(subject_id, practise_answer, session):
    # 变动
    t = str(int(time.time()) * 1000)
    data = {
        "practiseUuid": practiceUuid,
        "practiseAnswer": practise_answer,
        "subjectId": subject_id
    }
    headers = {
        "app-key": app_key,
        "cgauthorization": cgauthorization,
        "sign": R(t, answer_path, data),
        "timestamp": t,
        "host": "aqks.csu.edu.cn",
        "origin": "https://aqks.csu.edu.cn",
        "referer": "https://aqks.csu.edu.cn/lab-study-front/questionBank/exercises/23?practiseSubjectType",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0"
    }
    response = session.post(answer_url, data=data, headers=headers)
    result = response.json()
    return result['data']['rightAnswer']