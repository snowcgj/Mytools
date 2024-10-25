# data-src=
# ("https://bmigmi-global-wuwu.ccavbox.com/break_2/static/upload/book/4330/25521"
#  "/829528.jpg") style="height: 3011px;"><canvas id="canvas_829528" class="canvas-fit" width="720" height="3008">

import requests

url = "https://www.comicbox.xyz/chapter/25521/829528.jpg"
filename = "downloaded_image.jpg"

response = requests.get(url)

if response.status_code == 200:
    with open(filename, 'wb') as file:
        file.write(response.content)
    print("图片已成功下载并保存为", filename)
else:
    print("无法下载图片，状态码：", response.status_code)
