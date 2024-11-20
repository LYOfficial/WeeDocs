# 宣传部课题第三讲

### 命令行工具及其安装

在 Windows、macOS 和 Linux 中，命令行工具是开发和管理软件的重要组成部分。以下是对这些工具的详细解释：

**1. apt-get 和 apt**

apt-get  和 apt 是用于管理 Debian 及其衍生发行版（如Ubuntu）软件包的命令行工具。

> - apt-get install: 用于安装软件包。
> - apt install: 功能类似，但提供了更现代的用户界面和一些额外功能。
>

下载方法: 从软件包管理器的官方存储库中下载软件包。

安装: 

> - 在 Ubuntu 或 Debian 中，这些工具默认已安装。
> - 使用命令更新包列表：`sudo apt update`
> - 安装软件包：`sudo apt install package-name`
>

**2. pip**

pip 是 Python 的包管理工具，用于安装和管理 Python 包。

> - pip install: 用于从Python Package Index (PyPI) 安装 Python 包。

下载方法: 从PyPI下载，或在 [Python 官网](https://www.python.org/downloads/)下载新版本 Python。

安装:
> - 在 Windows 和 macOS 上，通常通过安装 Python 时附带安装。
> - 在 Linux上，可能需要安装：`sudo apt install python3-pip`
>

安装 Python 时，请先进入官网 Downloads 界面，找到适配自己系统版本，例如 Download [Windows installer (64-bit)](https://www.python.org/ftp/python/3.13.0/python-3.13.0-amd64.exe) 或者 Download [macOS 64-bit universal2 installer](https://www.python.org/ftp/python/3.13.0/python-3.13.0-macos11.pkg)  或者 Download [Gzipped source tarball](https://www.python.org/ftp/python/3.13.0/Python-3.13.0.tgz) 。

Windows 也可以使用 Microsoft Store （微软商店）下载，注意选择合适的驱动盘和安装文件夹。

Windows 下载的是 .exe 文件，MacOS下载的是 .pkg 文件，二者下载后均可点击后直接安装，Linux 下载的 tgz 文件为代码压缩包，需要使用 `tar -zxvf Python-3.13.0.tgz` 命令解压后编译安装。

以下是我推荐的网上可行性比较高的教程，若不会安装或安装时出现问题可以参考：

> Windows 安装教程：[超详细的Python安装和环境搭建教程](https://blog.csdn.net/qq_53280175/article/details/121107748)
>
> MacOS 安装教程：[如何在 Mac 上安装 Python 3（图文教程）](https://www.sysgeek.cn/macos-install-python/)
>
> Linux 安装教程：[Linux系统安装Python3环境（超详细）](https://blog.csdn.net/hd243608836/article/details/121417965)

安装后可以使用 `where python` 命令找到 python 路径，并在高级系统设置中添加 Path 环境变量。

完成后输入命令检测是否安装成功：

```
python -V

pip -V
```

**3. npm**

npm 是Node.js的包管理工具，用于管理JavaScript包。

> - **npm init**: 初始化一个新的Node.js项目，并创建一个 `package.json` 文件。
> - **npm install**: 安装项目的依赖包。
>

下载方法: 从 [nodejs 官网](https://nodejs.org/zh-cn/)下载。

安装:

> - 在Windows和macOS上，选择 [Node.js 的预购建安装程序](https://nodejs.org/zh-cn/download/prebuilt-installer)安装。
> - 在Linux上，可以通过包管理器安装：`sudo apt install nodejs npm`
>

安装时请等待响应完毕后点击 Next 即可，记得选好安装路径。

以下是我推荐的网上可行性比较高的教程，若不会安装或安装时出现问题可以参考：

> Windows 安装教程：[windows系统 Node.js](https://www.cnblogs.com/webloo/p/nodejs.html)
>
> MacOS 安装教程：[MacOS系统安装NodeJS以及配置全局安装路径](https://juejin.cn/post/7277828214246883347)
>
> Linux 安装教程：[Linux环境安装配置nodejs详细教程](https://blog.csdn.net/qq_40743057/article/details/139139574)

完成后输入命令检测是否安装成功：

```
node -v

npm -v
```

