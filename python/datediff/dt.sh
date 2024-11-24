#!/bin/bash

# 交互式输入
read -p "请输入第一个日期 (YYYYMMDD): " day1
read -p "请输入第二个日期 (YYYYMMDD): " day2

# 获取当前日期
current_date=$(date +"%Y%m%d")

# 如果第一个日期是 '.'，使用当前日期
if [ "$day1" == "." ]; then
    day1="$current_date"
fi

# 将第一个日期和第二个日期解析为标准格式
formatted_date1=$(date -d "${day1:0:4}-${day1:4:2}-${day1:6:2}" +%Y-%m-%d 2>/dev/null)
formatted_date2=$(date -d "${day2:0:4}-${day2:4:2}-${day2:6:2}" +%Y-%m-%d 2>/dev/null)

# 检查日期是否有效
if [ -z "$formatted_date1" ] || [ -z "$formatted_date2" ]; then
    echo "错误: 无效的日期格式。"
    read -n 1 -s -r -p "按任意键继续..."
    exit 1
fi

# 将日期转换为自纪元以来的秒数
epoch1=$(date -d "$formatted_date1" +%s)
epoch2=$(date -d "$formatted_date2" +%s)

# 计算时间差（秒）
diff_sec=$((epoch1 - epoch2))

# 取绝对值
if [ "$diff_sec" -lt 0 ]; then
    diff_sec=$(( -diff_sec ))
fi

# 将秒数转换为天数
diff_days=$(( diff_sec / 86400 ))

echo "相差 $diff_days 天"

# 暂停以防止窗口关闭
read -n 1 -s -r -p "按任意键继续..."
# -n 1表示读取一个字符
# -s  slient  启用此选项后，用户的输入不会显示在屏幕上。
# -r  表示“原样读取”（raw mode），防止反斜杠 \ 被解释为转义字符。
# -p 表示提示符选项，允许在等待用户输入之前显示一段提示信息。