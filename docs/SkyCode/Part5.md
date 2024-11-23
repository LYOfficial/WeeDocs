# 宣传部课题第五讲

### Jupyter 入门体验

Jupyter Notebook 是 Anaconda 的一个工具，可以在 WebUI 中分步或一键执行代码，而且可以便捷地调用文件和编辑代码，是一款十分实用的工具。

**1.安装 Jupyter Notebook**

   - 由于不同的程序所需要的 Python 版本不同，我们在使用 Jupyter Notebook 之前经常需要创建和进入一个特定版本 Python 的 conda 虚拟环境，具体参考上一讲内容，创建并激活环境后，我们运行以下命令安装 Jupyter Notebook：

     ```bash
     conda install jupyter
     ```

**2.启动 Jupyter Notebook**

   - 在终端中输入以下命令启动 Jupyter Notebook：

     ```bash
     jupyter notebook
     ```

   - 浏览器将自动打开 Jupyter Notebook 的界面。

**3.基本操作**

   - 在 Jupyter Notebook 的主页中，点击右上角的“New”按钮，并选择“Python 3”来创建一个新的 Notebook。

   - 运行单元格: 选择单元格后，按 `Shift + Enter` 运行代码。
   - 添加单元格: 点击工具栏上的“+”按钮。
   - 删除单元格: 选择单元格后，点击工具栏上的剪刀图标或按 `dd`。

   - 点击工具栏上的“File”菜单，可以保存 Notebook 或导出为不同格式（如 PDF、HTML）。

**4.使用 Jupyter 进行数据集识别训练**

下载我们的代码之后，在同级目录下新建 datasets 文件夹，文件夹内包含 wear_debris 文件夹，在此文件夹内的 train 文件夹内图片即为训练集图片， test文件夹内图片即为测试集图片，训练完成后，运行代码，将使用测试集检测训练识别准确度。