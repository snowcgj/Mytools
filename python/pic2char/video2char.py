'''
@time: 2024 12 2 下午学习github后，学习修改后结果  效果很不错
@author: battab
@vision: 1.0
'''

# -*- coding: utf-8 -*-

#conda env mycv2

import cv2
import time
from config import *
from util import open_file_dialog as openPic
import os
import enum

#region 根据平台选择不同的命令
class Platform(enum.IntEnum):
    NT = 1
    POSIX = 2


if os.name == "nt":
    platform = Platform.NT
elif os.name == "posix":
    platform = Platform.POSIX
else:
    platform = Platform.POSIX


def clear_screen():
    if platform == Platform.NT:
        cmd = "cls"
    else:
        cmd = "clear"
    os.system(cmd)
#endregion


# region 配置的字符串以及长度
ascii_char = ASCII_CHAR
char_len = len(ascii_char)
# endregion


def show_image(img, timeout=0):
    cv2.namedWindow("image")
    cv2.imshow("image", img)
    cv2.waitKey(timeout * 1000)
    cv2.destroyAllWindows()

# 自动调整，也就是没输入什么大小，自动进行这个调整
def auto_thumb(img):
    height, width = img.shape[:2]
    if width >= D_WIDTH:
        height = height / (width / D_WIDTH) * 0.5
        width = D_WIDTH
    else:
        height = height / 2
    return cv2.resize(img, (int(width), int(height)))

# 转化为字符串
def to_chars(img, w_thumb=1.0, h_thumb=1.0):
    height, width = img.shape[:2]
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    if w_thumb == h_thumb == 1 and AUTO_THUMB is True:
        img_gray_resize = auto_thumb(img_gray)
    else:
        print("Coming......")
        img_gray_resize = cv2.resize(
            img_gray, (int(width / w_thumb), int(height / h_thumb))
        )
    chars = ""

    # print("调整后的长宽为：")
    # print(img_gray_resize.shape)
    # print("  ")
    # print("  ")
    # print("  ")
  
    for row in img_gray_resize:
        for pixel in row:
            chars += ascii_char[int(pixel / 256 * char_len)]
        chars += "\n"
    return chars


def to_chars_print(img, w_thumb=1.0, h_thumb=1.0):
    #  clear_screen()
    chars=to_chars(img, w_thumb, h_thumb)
    print(to_chars(img, w_thumb, h_thumb))
    return chars 


def video2char_sync(file):
    video = cv2.VideoCapture(file)
    if video.isOpened():
        play = input("是否播放同步视频？(y/n)(字符画可能会闪烁,这取决于你的机器)\n:")
        flag, frame = video.read()
        if play.lower() == "y":
            cv2.namedWindow(
                "video", flags=cv2.WINDOW_NORMAL
            )  # flags == WINDOW_AUTOSIZE | WINDOW_KEEPRATIO | WINDOW_GUI_EXPANDED
            while flag:
                to_chars_print(frame, VIDEO_W_THUMB, VIDEO_H_THUMB)
                cv2.imshow("video", frame)
                # cv2.waitKey(1)
                key = cv2.waitKey(1)
                if key == ord('q'):  # 按下 'q' 键退出播放
                    break
                time.sleep(VIDEO_FLASH_TIME)
                flag, frame = video.read()
        else:
            while flag:
                to_chars_print(frame, VIDEO_W_THUMB, VIDEO_H_THUMB)
                time.sleep(VIDEO_FLASH_TIME)
                flag, frame = video.read()
        cv2.destroyAllWindows()

    else:
        print("非支持的文件...")
        exit(1)


def video2char_async(file):
    """
    先加载完再打印
    """
    video = cv2.VideoCapture(file)
    fps = video.get(cv2.CAP_PROP_FPS)
    frame_count = int(video.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"fps: {fps}, frame count: {frame_count}")
    char_frames = []

    if video.isOpened():
        flag, frame = video.read()
        i = 1
        while flag:
            print(f"{i}/{frame_count}", end="\r", flush=True)
            char_frames.append(to_chars(frame))
            i += 1
            flag, frame = video.read()

    else:
        print("非支持的文件...")
        exit(1)

    for char_frame in char_frames:
        clear_screen()
        print(char_frame)
        time.sleep(1 / fps)





if __name__ == "__main__":
    print(
        "------------建议按分辨率将宽度缩小至百级像素,高缩小倍数为宽2倍,缩小控制台输出字体效果更佳(默认宽度为%s)-------------"
        % D_WIDTH
    )
    print("当前路径：%s" % os.path.abspath("."))
    while True:
        # file_path = input("请输入图片或视频路径：")
        file_path = openPic()
        print("选择文件路径为："+file_path)
        if os.path.isfile(file_path):
            break
        print("路径错误:目标不是文件")

    img = cv2.imread(file_path)
    if img is not None:
        print("当前图片尺寸为宽：%s 高：%s" % (img.shape[1], img.shape[0]))
        show_image(img, 1)
        #  这里回车的话，下面判断为yes的条件就不会成立，就给人一种存在默认值的结果
        flag = input("是否手动缩小比例(Y/n)?:")
        if flag.lower() == "y":
            print("缩小倍数为：")
            w_thumb = float(input("宽："))
            h_thumb = float(input("高："))
            print("新输出的倍数要求为： " +str(w_thumb) +"   "+str(h_thumb))
            chars=to_chars_print(img, w_thumb, h_thumb)
        else:
            chars=to_chars_print(img)
        outpath=os.getcwd()+"\output.txt"
        print(outpath)
        with open(outpath,"w+")as f:
            f.write(chars)

    else:
        print("文件非图片,尝试打开为视频...")
        sync = input("请选择模式：\n\t加载时打印：1\n\t加载完打印：2\n:")
        if sync == "1":
            video2char_sync(file_path)
        elif sync == "2":
            video2char_async(file_path)
