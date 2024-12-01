# 宣传部课题第四讲——Anaconda下载及安装


### 1.Anaconda 的下载安装

(1) 下载 Anaconda:
- 访问 [Anaconda 官方网站](https://www.anaconda.com/products/distribution)。
- 根据你的操作系统（Windows、macOS、Linux）选择合适的版本进行下载。

(2) 安装 Anaconda:
> - Windows:
>      - 双击下载的 `.exe` 文件。
>      - 按照安装向导进行操作，建议选择“为所有用户安装”和“添加 Anaconda 到系统 PATH 环境变量”。
> - macOS 和 Linux:
>      - 打开终端，使用 `bash` 命令运行下载的 `.sh` 文件。
>      - 按照提示完成安装。
>

### 2.创建和管理虚拟环境

(1) 打开终端或 Anaconda Prompt:

(2) 创建虚拟环境:
- 使用以下命令创建一个新的虚拟环境，命名为 `myenv`，并指定 Python 版本：
     ```bash
     conda create --name myenv python=3.8
     ```
- 你可以根据需要更改 Python 的版本。

(3) 激活虚拟环境:

> - Windows:
>   ```bash
>   conda activate myenv
>   ```
>   
> - macOS 和 Linux:
>   ```bash
>   source activate myenv
>   ```

(4) 安装包:

   在激活的环境中安装所需的 Python 包，例如 NumPy：
   ```bash
   conda install numpy
   ```

(5) 列出所有环境:
   ```bash
   conda env list
   ```

(6) 关闭虚拟环境:

   使用以下命令退出当前激活的环境：
   ```bash
   conda deactivate
   ```

(7) 删除虚拟环境:

   如果你不再需要某个环境，可以删除它：
   ```bash
   conda remove --name myenv --all
   ```

