# Mytools
self-practice  for programming
# python   
## csu6h
csu force us to watch 6-hour  boring video, this is a python script which my roommate code,and all I do is just to understand it and learn it, and review some knowledge about internet.
## mybase64
just learn what is the logic of mybase64.
## cv
### canny
just to learn canny detection in CV, and implement a simple version on my own.
### inpaint
想去除水印来着，思路很简单，就是对像素值进行处理，但是怎么处理呢？ 比较简单的情况就是就几种固定的像素，并且水印原来的值不影响原来的图片，就是黑白文档里的灰色水印一样。
inpaint和反色中和处理都试了试，效果很差。
搜索了一些其他的方法，还得承认ps这种专业工具还有一些其他p图的，算法确实好呀。 
传统和新型方法，传统算法， 现在的基于深度学习的。

## comic_failure
2024 10 25，晚上科北楼 19：00-20：30
尝试爬取漫画图片，一开始F12看了看页面元素，发现不是简单的jpg静态文件。
然后通过查看网络活动，看到了几个blob文件，是图片的不正确显示。猜测会有拼接算法。
javascript代码中，有一些数字，应该是把一些字符串编码了，没有进行足够的逆向，就没有搞出来。
不得不感慨，21年春就能够自动下载抖音的那个年代已经不存在了，反爬机制越来越严格呀。

## inform 
2024 11 11
学术活动更新时，老得点开网站检查，python自动检测，有变化，就自动发邮件（附上链接和内容）。
beautifulsoup->F12开发者模式->selector 再利用beautiful的内容

主要还是分为4个部分吧
一个是解析html文件  使用beautifulsoup
一个是发送邮件  可以有个列表来发送邮件
一个是日志写入，报错信息也及时反馈到邮件
一个是远程linux服务器，定时运行这个脚本
## datediff
计算两个日期差距多少天
bash和python两种
但是python由于datetime库考虑的情况较为完备，功能执行的更好

## pic2char
图片转字符串图片， 刚弄，问题有点大， 核心就是一个视觉上的效果问题
12 2 下午+晚上 学习 https://github.com/amchii/video2char ，推荐去看看这个， 后的结果
12 3 上午和中午 
这个就是一些tqdm easygui的简单示范

加的东西有点多，新建了个项目，功能，学习，总结都在那个项目中进行
## 2FA_TOTP
github强制2FA登录，就了解下背后的计算算法， 感觉还是很适合登陆的。 就是应用广告有点多， 后续也可以再考虑点这个。
2024 12 5 ， 最简单的版本，简单学习下， 最简单样例
## totp
2024 12 15
纯js手撸totp动态验证码，过程中一个小验证， python实现对比一下


# js      
## diff
diff的算法，就是DOM树，热更新，<li>指代key的结果， 
只是在简单认识下node js这些基本知识， 和diff算法  ，这个代码更像一个伪代码，还没运行成功
```bash
node js/diff/index.js
file:///E:/Coding/mytools/Mytools/js/diff/utill.js:74
    const maxLen = Math.max(oldChildren.length(), newChildren.length());
    const maxLen = Math.max(oldChildren.length(), newChildren.length());
                                        ^

TypeError: oldChildren.length is not a function
    at diffChildren (file:///E:/Coding/mytools/Mytools/js/diff/utill.js:74:41)
    at diff (file:///E:/Coding/mytools/Mytools/js/diff/utill.js:25:31) 
    ```