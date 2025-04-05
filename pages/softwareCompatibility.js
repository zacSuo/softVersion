const softwareCompatibility = [
  {
    "name": "tensorflow",
    "versions": [
      {
        "version": "2.13.0",
        "compatibleWith": ["keras==2.13.0"],
        "installcode": "pip install tensorflow==2.13.0"
      },
      {
        "version": "2.12.0",
        "compatibleWith": ["keras==2.12.0"],
        "installcode": "pip install tensorflow==2.12.0"
      }
    ]
  },
  {
    "name": "pytorch",
    "versions": [
      {
        "version": "2.6.0",
        "compatibleWith": [
          " --index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu126、cpu、rocm6.2.4"
        ],
        "installcode": "pip3 install torch torchvision torchaudio"
      },
      {
        "version": "2.5.1",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cu124、cpu、rocm6.1、rocm6.2",
          "conda install pytorch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 -c pytorch",
          "pytorch-cuda=11.8、12.1、12.4、cpuonly"
        ],
        "installcode": "pip install torch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1"
      },
      {
        "version": "2.5.0",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",          
          "cu118、cu121、cu124、cpu、rocm6.1、rocm6.2",
          "conda install pytorch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0 -c pytorch",
          "pytorch-cuda=11.8、12.1、12.4、cpuonly"
        ],
        "installcode":"pip install torch==2.5.0 torchvision==0.20.0 torchaudio==2.5.0"
      },
      {
        "version": "2.4.1",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cu124、cpu、rocm6.1",
          "conda install pytorch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1 -c pytorch",
          "pytorch-cuda=11.8、12.1、12.4、cpuonly"
        ],
        "installcode":"pip install torch==2.4.1 torchvision==0.19.1 torchaudio==2.4.1"
      },
      {
        "version": "2.4.0",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cu124、cpu、rocm6.1",
          "conda install pytorch==2.4.0 torchvision==0.19.0 torchaudio==2.4.0 -c pytorch",
          "pytorch-cuda=11.8、12.1、12.4、cpuonly"
        ],
        "installcode":"pip install torch==2.4.0 torchvision==0.19.0 torchaudio==2.4.0"
      },
      {
        "version": "2.3.1",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cpu、rocm6.0",
          "conda install pytorch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 -c pytorch",
          "pytorch-cuda=11.8、12.1、cpuonly"
        ],
        "installcode":"pip install torch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1"
      },
      {
        "version": "2.3.0",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cpu、rocm6.0",
          "conda install pytorch==2.3.0 torchvision==0.18.0 torchaudio==2.3.0 -c pytorch",
          "pytorch-cuda=11.8、12.1、cpuonly"
        ],
        "installcode":"pip install torch==2.3.0 torchvision==0.18.0 torchaudio==2.3.0"
      },
      {
        "version": "2.2.2",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cpu、rocm5.7",
          "conda install pytorch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2 -c pytorch",
          "pytorch-cuda=11.8、12.1、cpuonly"
        ],
        "installcode":"pip install torch==2.2.2 torchvision==0.17.2 torchaudio==2.2.2"
      },
      {
        "version": "2.2.1",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cpu、rocm5.7",
          "conda install pytorch==2.2.1 torchvision==0.17.1 torchaudio==2.2.1 -c pytorch",
          "pytorch-cuda=11.8、12.1、cpuonly"
        ],
        "installcode":"pip install torch==2.2.1 torchvision==0.17.1 torchaudio==2.2.1"
      },
      {
        "version": "2.2.0",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cpu、rocm5.6",
          "conda install pytorch==2.2.0 torchvision==0.17.0 torchaudio==2.2.0 -c pytorch",
          "pytorch-cuda=11.8、12.1、cpuonly"
        ],
        "installcode":"pip install torch==2.2.0 torchvision==0.17.0 torchaudio==2.2.0"
      },
      {
        "version": "2.1.2",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cpu、rocm5.6",
          "conda install pytorch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2 -c pytorch",
          "pytorch-cuda=11.8、12.1、cpuonly"
        ],
        "installcode":"pip install torch==2.1.2 torchvision==0.16.2 torchaudio==2.1.2"
      },
      {
        "version": "2.1.1",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cpu、rocm5.6",
          "conda install pytorch==2.1.1 torchvision==0.16.1 torchaudio==2.1.1 -c pytorch",
          "pytorch-cuda=11.8、12.1、cpuonly",
        ],
        "installcode":"pip install torch==2.1.1 torchvision==0.16.1 torchaudio==2.1.1"
      },
      {
        "version": "2.1.0",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cu121、cpu、rocm5.6",
          "conda install pytorch==2.1.0 torchvision==0.16.0 torchaudio==2.1.0 -c pytorch",
          "pytorch-cuda=11.8、12.1、cpuonly",
        ],
        "installcode":"pip install torch==2.1.0 torchvision==0.16.0 torchaudio==2.1.0"
      },
      {
        "version": "2.0.1",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cpu、rocm5.4.2",
          "conda install pytorch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2 -c pytorch",
          "pytorch-cuda=11.8、11.7、cpuonly",
        ],
        "installcode":"pip install torch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2"
      },
      {
        "version": "2.0.0",
        "compatibleWith": [
          "--index-url https://download.pytorch.org/whl/cu118",
          "cu118、cpu、rocm5.4.2",
          "conda install pytorch==2.0.0 torchvision==0.15.0 torchaudio==2.0.0 -c pytorch",
          "pytorch-cuda=11.8、11.7、cpuonly",
        ],
        "installcode":"pip install torch==2.0.0 torchvision==0.15.1 torchaudio==2.0.1"
      }
    ]
  },
  {
    "name": "CUDA",
    "versions": [
      {
        "version": "12.x",
        "compatibleWith": ["linux 驱动 ≥ 525.60.13", "windows 驱动 ≥ 527.41", "cuDNN 8.9.x"],
        "installcode": "wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2404/x86_64/cuda-keyring_1.1-1_all.deb"
      },
      {
        "version": "12.8",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 570"],
        "installcode": "sudo apt-get -y install cuda-toolkit-12-8"
      },
      {
        "version": "12.6",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 570"],
        "installcode":"sudo apt-get -y install cuda-toolkit-12-6"
      },
      {
        "version": "12.5",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 570"],
        "installcode":"sudo apt-get -y install cuda-toolkit-12-5"
      },
      {
        "version": "12.4",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 550"],
        "installcode":"sudo apt-get -y install cuda-toolkit-12-4"
      },
      {
        "version": "12.3",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 550"],
        "installcode":"sudo apt-get -y install cuda-toolkit-12-3"
      },
      {
        "version": "11.x",
        "compatibleWith": ["linux 驱动 ≥ 450.80.02",  "windows 驱动 ≥ 452.39", "cuDNN 8.6.x"],
        "installcode":"sudo apt-get -y install cuda"
      },
      {
        "version": "10.2",
        "compatibleWith": ["linux 驱动 ≥ 440.33",  "windows 驱动 ≥ 441.22"],
        "installcode":"sudo apt-get -y install cuda"
      },
      {
        "version": "10.1",
        "compatibleWith": ["linux 驱动 ≥ 418.39",  "windows 驱动 ≥ 418.96"],
        "installcode":"sudo apt-get -y install cuda"
      },
      {
        "version": "10.0",
        "compatibleWith": ["linux 驱动 ≥ 410.48",  "windows 驱动 ≥ 411.31"],
        "installcode":"sudo apt-get install cuda"
      }
    ]
  },
  {
    "name": "cuDNN",
    "versions": [
      {
        "version": "9.8.0",
        "compatibleWith": ["CUDA 12.x", "CUDA 11.x"],
        "installcode":"sudo apt-get -y install cudnn"
      },
      {
        "version": "8.9.x",
        "compatibleWith": ["CUDA 12.x", "CUDA 11.x"],
        "installcode":"wget https://developer.nvidia.com/rdp/cudnn-archive"
      },
      {
        "version": "8.8.x",
        "compatibleWith": ["CUDA 12.0", "CUDA 11.x"],
        "installcode":"wget https://developer.nvidia.com/rdp/cudnn-archive"
      },
      {
        "version": "8.[4-7].0",
        "compatibleWith": ["CUDA 11.x", "CUDA 10.2"],
        "installcode":"wget https://developer.nvidia.com/rdp/cudnn-archive"
      },
      {
        "version": "8.3.x",
        "compatibleWith": ["CUDA 11.5", "CUDA 10.2"],
        "installcode":"wget https://developer.nvidia.com/rdp/cudnn-archive"
      },
      {
        "version": "8.2.x",
        "compatibleWith": ["CUDA 11.4", "CUDA 10.2"],
        "installcode":"wget https://developer.nvidia.com/rdp/cudnn-archive"
      },
      {
        "version": "8.1.x",
        "compatibleWith": ["CUDA 11.[0-2]", "CUDA 10.2"],
        "installcode":"wget https://developer.nvidia.com/rdp/cudnn-archive"
      }
    ]
  },
  {
    "name": "NVIDIA Driver",
    "versions": [
      {
        "version": "[4-5]xx.xx",
        "compatibleWith": ["GeForce RTX 30 Series", "GeForce RTX 40 Series"],
        "installcode":"wget https://www.nvidia.com/en-us/drivers/"
      }
    ]
  }
];

const softwareList = softwareCompatibility.map((software, index) => ({
  id: index + 1,
  name: software.name
}));

module.exports = {
  softwareCompatibility,
  softwareList
};
