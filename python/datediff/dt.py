# 要获得两个输入
import argparse
from datetime import datetime

 # 创建解析器
parser = argparse.ArgumentParser(description="这是一个计算日期差的脚本")

# 添加参数  加上 --day1  的话 就需要指定参数 ，这样的话是 位置参数， 还可以默认参数 
# parser.add_argument("--day1", type=str, default="2023-01-01", help="第一个日期，格式为 YYYY-MM-DD，默认为 2023-01-01")   这样子

parser.add_argument("day1", type=str, help="谁减")
parser.add_argument("day2", type=str, help="谁被减")

# 解析参数
args = parser.parse_args()


if args.day1== ".":
    day1=datetime.now()
else:
    day1=datetime.strptime(args.day1,"%Y%m%d")
day2=datetime.strptime(args.day2,"%Y%m%d")

date_diff = day1 - day2

print("相差"+str(date_diff.days)+"天")
print("为"+ str(int(date_diff.days/356)) + "年")


