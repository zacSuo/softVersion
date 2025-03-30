const softwareCompatibility = [
  {
    "name": "test",
    "versions": [
      {
      "version": "1.0.0",
      "compatibleWith": ["test==1.0.0"]
      }
  ]
  },
  {
    "name": "tensorflow",
    "versions": [
      {
        "version": "2.13.0",
        "compatibleWith": ["keras==2.13.0"]
      },
      {
        "version": "2.12.0",
        "compatibleWith": ["keras==2.12.0"]
      }
    ]
  },
  {
    "name": "pytorch",
    "versions": [
      {
        "version": "2.5.1",
        "compatibleWith": ["torchvision==0.20.1", "torchaudio==2.5.1"]
      },
      {
        "version": "2.5.0",
        "compatibleWith": ["torchvision==0.20.0", "torchaudio==2.5.0"]
      },
      {
        "version": "2.4.1",
        "compatibleWith": ["torchvision==0.19.1", "torchaudio==2.4.1"]
      },
      {
        "version": "2.4.0",
        "compatibleWith": ["torchvision==0.19.0", "torchaudio==2.4.0"]
      },
      {
        "version": "2.3.1",
        "compatibleWith": ["torchvision==0.18.1", "torchaudio==2.3.1"]
      },
      {
        "version": "2.3.0",
        "compatibleWith": ["torchvision==0.18.0", "torchaudio==2.3.0"]
      },
      {
        "version": "2.2.2",
        "compatibleWith": ["torchvision==0.17.2", "torchaudio==2.2.2"]
      },
      {
        "version": "2.2.1",
        "compatibleWith": ["torchvision==0.17.1", "torchaudio==2.2.1"]
      },
      {
        "version": "2.2.0",
        "compatibleWith": ["torchvision==0.17.0", "torchaudio==2.2.0"]
      },
      {
        "version": "2.1.2",
        "compatibleWith": ["torchvision==0.16.2", "torchaudio==2.1.2"]
      },
      {
        "version": "2.1.1",
        "compatibleWith": ["torchvision==0.16.1", "torchaudio==2.1.1"]
      },
      {
        "version": "2.1.0",
        "compatibleWith": ["torchvision==0.16.0", "torchaudio==2.1.0"]
      },
      {
        "version": "2.0.1",
        "compatibleWith": ["torchvision==0.15.2", "torchaudio==2.0.2"]
      },
      {
        "version": "1.13.1",
        "compatibleWith": ["torchvision==0.14.1", "torchaudio==0.13.1"]
      },
      {
        "version": "1.13.0",
        "compatibleWith": ["torchvision==0.14.0", "torchaudio==0.13.0"]
      },
      {
        "version": "1.12.1",
        "compatibleWith": ["torchvision==0.13.1", "torchaudio==0.12.1"]
      },
      {
        "version": "1.12.0",
        "compatibleWith": ["torchvision==0.13.0", "torchaudio==0.12.0"]
      },
      {
        "version": "1.11.0",
        "compatibleWith": ["torchvision==0.12.0", "torchaudio==0.11.0"]
      },
      {
        "version": "1.10.1",
        "compatibleWith": ["torchvision==0.11.2", "torchaudio==0.10.1"]
      },
      {
        "version": "1.10.0",
        "compatibleWith": ["torchvision==0.11.0", "torchaudio==0.10.0"]
      },
      {
        "version": "1.9.1",
        "compatibleWith": ["torchvision==0.10.1", "torchaudio==0.9.1"]
      },
      {
        "version": "1.9.0",
        "compatibleWith": ["torchvision==0.10.0", "torchaudio==0.9.0"]
      },
      {
        "version": "1.8.2",
        "compatibleWith": ["torchvision==0.9.2", "torchaudio==0.8.2"]
      },
      {
        "version": "1.8.1",
        "compatibleWith": ["torchvision==0.9.1", "torchaudio==0.8.1"]
      },
      {
        "version": "1.8.0",
        "compatibleWith": ["torchvision==0.9.0", "torchaudio==0.8.0"]
      },
      {
        "version": "1.7.1",
        "compatibleWith": ["torchvision==0.8.2", "torchaudio==0.7.2"]
      },
      {
        "version": "1.7.0",
        "compatibleWith": ["torchvision==0.8.0", "torchaudio==0.7.0"]
      },
      {
        "version": "1.6.0",
        "compatibleWith": ["torchvision==0.7.0"]
      },
      {
        "version": "1.5.1",
        "compatibleWith": ["torchvision==0.6.1"]
      },
      {
        "version": "1.5.0",
        "compatibleWith": ["torchvision==0.6.0"]
      },
      {
        "version": "1.4.0",
        "compatibleWith": ["torchvision==0.5.0"]
      },
      {
        "version": "1.2.0",
        "compatibleWith": ["torchvision==0.4.0"]
      },
      {
        "version": "1.1.0",
        "compatibleWith": ["torchvision==0.3.0"]
      },
      {
        "version": "1.0.1",
        "compatibleWith": ["torchvision==0.2.2"]
      },
      {
        "version": "1.0.0",
        "compatibleWith": ["torchvision==0.2.1"]
      }
    ]
  },
  {
    "name": "CUDA",
    "versions": [
      {
        "version": "12.x",
        "compatibleWith": ["linux 驱动 ≥ 525.60.13", "windows 驱动 ≥ 527.41", "cuDNN 8.9.x"]
      },
      {
        "version": "12.8",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 570"]
      },
      {
        "version": "12.6",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 570"]
      },
      {
        "version": "12.5",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 570"]
      },
      {
        "version": "12.4",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 550"]
      },
      {
        "version": "12.3",
        "compatibleWith": ["驱动 ≥ 535",  "驱动 ＜ 550"]
      },
      {
        "version": "11.x",
        "compatibleWith": ["linux 驱动 ≥ 450.80.02",  "windows 驱动 ≥ 452.39", "cuDNN 8.6.x"]
      },
      {
        "version": "10.2",
        "compatibleWith": ["linux 驱动 ≥ 440.33",  "windows 驱动 ≥ 441.22"]
      },
      {
        "version": "10.1",
        "compatibleWith": ["linux 驱动 ≥ 418.39",  "windows 驱动 ≥ 418.96"]
      },
      {
        "version": "10.0",
        "compatibleWith": ["linux 驱动 ≥ 410.48",  "windows 驱动 ≥ 411.31"]
      }
    ]
  }
];

module.exports = {
  softwareCompatibility
};
