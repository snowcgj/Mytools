from datetime import datetime

# 交互式输入
day1 = input("请输入第一个日期 (YYYYMMDD): ")
day2 = input("请输入第二个日期 (YYYYMMDD): ")

if(day1=="."):
    date1=datetime.now()
else:
    date1 = datetime.strptime(day1, "%Y%m%d")
# 将字符串解析为 datetime 对象
date2 = datetime.strptime(day2, "%Y%m%d")

# 计算日期差
date_diff = date1 - date2

# 输出日期差
print(f"相差 {date_diff.days} 天")

print("按下任意键继续...")
input()
