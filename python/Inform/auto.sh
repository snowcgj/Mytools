#!/bin/bash

# 激活虚拟环境
source /root/miniconda3/bin/activate mytools

# 执行第一个 Python 脚本，并记录日志
/root/miniconda3/envs/mytools/bin/python /home/coding/python/infromcsu/Inform/yssyinform.py >> /home/coding/python/infromcsu/Inform/main.log 2>&1

# 执行第二个 Python 脚本，并记录日志
/root/miniconda3/envs/mytools/bin/python /home/coding/python/infromcsu/Inform/main.py >> /home/coding/python/infromcsu/Inform/main.log 2>&1


echo "$(date) - Script executed" >> /home/coding/python/infromcsu/Inform/main.log