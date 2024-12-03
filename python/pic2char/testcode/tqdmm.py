from tqdm import tqdm
import time

with tqdm(total=100, desc="My Processing") as pbar:
    for i in range(10):
        time.sleep(0.1)  # 模拟工作
        pbar.update(10)  # 每次更新 10 单位
