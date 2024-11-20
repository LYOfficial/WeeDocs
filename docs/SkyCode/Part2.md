# 宣传部课题第一讲

### Git

**1.Git 简介**

Git是一种分布式版本控制系统，用于跟踪文件的变化，尤其是源代码。它允许多用户协作，支持分支和合并，使得开发过程更加灵活高效。Git广泛应用于软件开发，帮助团队管理项目历史和版本。

**2.Git下载**

**官网：** https://git-scm.com/downloads

在 **Downloads** 文字下选择自己电脑系统，并点击右侧 **Download x.xx for xxx** 进行下载。

官网下载速度较慢，可以使用北科云盘下载：[Git-2.47.0-64-bit.exe](https://yunpan.ustb.edu.cn/link/AA1EB12F2F15F74CCCB035BBAFAC0FDCBA)

**3.Github 注册与访问**

> GitHub 是一个基于 Git 的**在线代码托管平台**，允许用户**存储、管理和共享**代码。它提供了版本控制、协作工具、问题跟踪和代码审查等功能，适合个人和团队开发项目。GitHub 还支持开源项目，促进开发者之间的合作与交流。

Github 官网网址：[https://github.com/](https://github.com/)

由于网络审查原因，Github 在国内访问受限，但是可以通过部分加速器加速浏览。

常用软件如 Watt Toolkit（原 Steam++）：[https://steampp.net/](https://steampp.net/)

可以选择合适版本进行下载，也可以使用北科云盘下载：[Steam  _v3.0.0-rc.11_win_x64.exe](https://yunpan.ustb.edu.cn/link/AABD9114510F6F42F6990D8E3A7EB2F3AC)

在 Watt Toolkit 中点击**网络加速**，在**加速服务**中勾选 **Github** ，点击**一键加速**即可。

加速后进入 Github 官网，点击 **Sign in** 注册 Github 账号。

**4.Git 账号登陆**

在桌面鼠标右键，点击 **Open Git Bash here** 打开 Git 操作页面，在命令行输入：

```plain
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

来登录账号

**5.创建仓库**

创建参仓库有很多方法，可以在 Github 中创建、使用 Github Desktop 创建、使用 Git Bash 创建。

网络上的教程有很多，Git Bash 创建仓库教程：[创建版本库 - Git教程](https://liaoxuefeng.com/books/git/create-repo/index.html)

这里我们教学在 Github 网站中创建仓库。

进入 Github，打开个人主页，点击**仓库（Repositories）**，点击右侧绿色按钮**新建（New）**，设置一个仓库名称，写好描述简介，设置公开还是私有，添加一个 README 文件，选择开源许可证，新建仓库即可。

**6.克隆仓库** 

进入想克隆的仓库，例如：[https://github.com/USTB-SkyCode/2024Task](https://github.com/USTB-SkyCode/2024Task)

点击 Code ，复制 HTTPS URL，在某盘新建一个 Github 文件夹，打开命令行，输入指令：

```
cd Github
git clone https://github.com/USTB-SkyCode/2024Task.git
```

对仓库进行克隆。

> 其他相关资料：[Git基本使用教程（一）：入门及第一次基本完整操作](https://blog.csdn.net/qq_35206244/article/details/97698815)