# 宣传部课题第六讲

### ComfyUI 入门体验

ComfyUI 是功能最强大、模块化程度最高的稳定扩散图形用户界面和后台。学习本地部署 ComfyUI 并能正确地调用模型，是我们本次培训的重要环节，经过本讲，你可以学会使用 ComfyUI 流程图来进行文生图。

**1.ComfyUI 介绍**

ComfyUI 是目前功能最强大的文生图工具，它同时包含后端和网页 GUI 前端，不需要代码编写和手动输入命令即可完成文生图操作。

ComfyUI 的工作是通过**工作流**来完成的，工作流有点类似于编写程序中的流程图，它有一个个图形输入框，通过输入框两端不同的节点相连接，构成复杂庞大的工作流网络，从加载模型开始，一步步生成最终我们需要的图片。

**2.ComfyUI 下载和部署**

作为一个开源的工具，ComfyUI 可以在 Github 下载发行版或直接克隆仓库代码。ComfyUI 在不断更新，各版本之间可能有细微差异但基本功能差别不大，无需频繁下载更新。

> - Windows 用户：ComfyUI 为 Windows 用户提供了可移植独立版本，它应该适用于在 Nvidia GPU 上运行或仅在 CPU 上运行，发行版下载链接：https://github.com/comfyanonymous/ComfyUI/releases/download/v0.3.4/ComfyUI_windows_portable_nvidia.7z
>
> - Mac/Linux 用户：请直接在命令行克隆原仓库
>
>   ```
>   git clone https://github.com/comfyanonymous/ComfyUI.git
>   ```

前情提要，ComfyUI 的部分依赖不支持 Python 3.13，因此建议使用 Python 版本为 3.10 - 3.12 ，如果版本不符合可以使用 Anaconda 新建一个虚拟环境再进行部署。

**3.手动安装的环境配置**

- AMD GPU（仅限 Linux）

如果您还没有安装 rocm 和 pytorch，AMD 用户可以使用 pip 安装 rocm，这是安装稳定版本的命令：

```
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.2
```

以下是使用 ROCm 6.2 安装 nightly 的命令，它可能会有一些性能改进：

```
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/rocm6.2
```

- Nvidia

Nvidia 用户应使用以下命令安装稳定的 pytorch：

```
pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu124
```

这是在 nightly 上安装 pytorch 的命令，它可能会提高性能：

```
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu124
```

**4.一键安装依赖**

打开或者在命令行 cd 进入 ComfyUI 文件夹，找到 `requirements.txt` 文件，在同级下的命令行输入下面的命令来安装 ComfyUI 运行所需要的所有模块依赖。

```
pip install -r requirements.txt
```

**5.首次运行 ComfyUI**

> - Windows 用户：ComfyUI 可以使用 GPU 和 CPU，请检查你的电脑设备是否有 Nvidia 显卡，如果不清楚请及时提问。
>    - Nvidia 显卡用户：直接执行 `run_nvidia_gpu.bat` 文件
>    - 其他 GPU 或者核显用户：执行 `run_cpu.bat` 文件
>
> - Mac/Linux 用户：确保电脑 Python 正常使用，在同级命令行输入命令启动 ComfyUI ：
>
>   ```
>   python main.py
>   ```

**6.模型分类**

ComfyUI 目录下有 models 文件夹，这个文件夹是用来放模型文件的，在 models 文件夹下使用 `ls` 命令可以看到文件夹列表如下：

Mode      Length Name
----                 -------------         ------ ----
d-----      checkpoints
d-----      clip
d-----      clip_vision
d-----      configs
d-----      controlnet
d-----      diffusers
d-----      diffusion_models
d-----      embeddings
d-----      gligen
d-----      hypernetworks
d-----      loras
d-----      photomaker
d----       style_models
d-----      unet
d-----      upscale_models
d-----      vae
d-----      vae_approx

(1) **checkpoints**

checkpoints 汉译为**检查点** ，指在模型训练过程中保存的模型状态。这些检查点通常包括模型的参数（权重和偏置）、优化器状态和其他相关的训练信息。

checkpoints 使我们可以在 Stable Diffusion WebUI 和 ComfyUI 中直接加载使用的模型，我们常用的 SD1.5 、SD2.0、SDXL 以及最新的 SD3.5 和 FLUX 都是 checkpoints ，我们可以直接调用，也可以使用它们进一步训练 LoRA 供我们使用。

checkpoints 文件夹的位置如下：

```
📁ComfyUI_windows_portable      
├── 📁ComfyUI                   
│  ├──📁 models                     
│  |  └── 📁 checkpoints         
│  │       ├── 📁 SD1.5                
│  │       ├── 📁 SD2.0           
│  │       ├── 📁 SDXL        
│  │       ├── 📁 FLUX   
│  │       └── ...      
│  └── ...                  
└── ...                         
```

请把大家下载好的模型比如 `sd_xl_base_1.0.safetensors` 放到 checkpoints 文件夹内，后期如果大家感兴趣可以从网上下载更多不同种类的模型来使用，为了方便分辨，可以在 checkpoints 文件夹下再新建文件夹，并以模型的名字命名，将 checkpoints 模型放入其中。

![checkpoint](https://comfyui-wiki.com/loaders/Load_Checkpoint.jpg)

ComfyUI 工作流中需要我们手动选择模型，它可以识别 checkpoints 文件夹内的所有模型，不用担心新建文件夹导致模型不被识别。

(2) **LoRA**

**LORA**是一种低资源微调大模型方法，使用 **LORA**，训练参数仅为整体参数的万分之一、GPU 显存使用量减少2/3且不会引入额外的推理耗时。

LoRA模型，全称 Low-Rank Adaptation of Large Language Model，是一种用于微调大型语言模型的低秩适应技术。

在 Stable Diffusion（SD）模型的应用中，LoRA 被用作一种插件，允许用户在不修改SD模型的情况下，利用少量数据训练出具有特定画风、IP或人物特征的模型。这种技术在社区使用和个人开发者中非常受欢迎。例如，可以通过 LoRA 模型改变SD模型的生成风格，或者为SD模型添加新的人物/IP。

LoRA 文件夹的位置如下：

```
📁ComfyUI_windows_portable      
├── 📁ComfyUI                   
│  ├──📁 models                     
│  |  └── 📁 loras         
│  │       ├── 📁 xxx  
│  │       └── ...
│  └── ...                  
└── ...                         
```

本次入门体验我们暂时用不到 LoRA，大家可以课下自行了解 LoRA 更多内容，并尝试调用和自我训练。

(3) **CLIP**

CLIP（Contrastive Language-Image Pretraining）是 OpenAI 开发的一种模型，旨在将图像和文本进行对齐。它通过同时处理图像和文本数据来学习它们之间的关系，从而能够理解和生成与文本描述相对应的图像。

体量很大的 checkpoint 模型已经具有文本理解的能力，可以做到一些基础的文生图。这些模型通常在大规模的图像-文本对齐数据集上进行训练，因此具备了基本的文本到图像的映射能力。

虽然 checkpoint 模型可以独立生成图像，但 CLIP 模型的引入可以进一步增强文本和图像之间的对齐能力。例如，CLIP 可以用于优化生成的图像，使其更符合特定的文本提示，或者在图像编辑时提供更好的指导。CLIP 也适用于复杂的多模态任务，如图像检索、图像编辑等，这些任务可能超出了单纯的文本到图像生成。

CLIP 文件夹的位置如下：

```
📁ComfyUI_windows_portable      
├── 📁ComfyUI                   
│  ├──📁 models                     
│  |  └── 📁 clip         
│  │       ├── 📁 SD3.5
│  │       │    ├──📃 clip_l.safetensors
│  │       │    ├──📃 clip_g.safetensors
│  │       │    └──📃 t5xxl_fp8_e4m3fn.safetensors
│  │       ├── 📁 FLUX   
│  │       └── ...            
└── ...                         
```

和 checkpoint 一样，由于不同的模型会用到不同的 CLIP ，所以可以在 clip 文件夹将不同版本的模型分开放置。

