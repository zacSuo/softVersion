const concepts = [
  {
    name: "test",
    overview: "测试概念的描述",
    principle: "测试概念的原理",
    application: "测试概念的应用",
    otherInfo: "测试概念的其他信息"
  },
  {
    name: "人工智能",
    overview: "人工智能是一种模拟、延伸和扩展人的智能的理论、方法、技术及应用系统。",
    principle: "基于机器学习、深度学习等算法。",
    application: "智能家居、自动驾驶等。",
    otherInfo: "人工智能是计算机科学的一个分支。"
  },
  {
    name: "区块链",
    overview: "区块链是一种去中心化的分布式数据库。",
    principle: "利用哈希算法和共识机制。",
    application: "数字货币、供应链管理等。",
    otherInfo: "区块链技术提供了透明、安全的数据存储方式。"
  },
  {
    name: "神经形态芯片",
    overview: "模拟生物神经网络结构的低功耗专用处理器",
    principle: "采用事件驱动型脉冲神经网络计算范式",
    application: "机器人实时环境感知与决策系统",
    otherInfo: "英特尔Loihi、IBM TrueNorth为典型代表"
  },
  {
    name: "柔性电子皮肤",
    overview: "模仿人类皮肤感知能力的柔性传感器阵列",
    principle: "基于压阻/电容式微结构传感单元",
    application: "仿生机械手触觉反馈系统",
    otherInfo: "可实现温度/压力/材质多模态感知"
  },
  {
    name: "仿生肌肉纤维束",
    overview: "模拟生物肌肉收缩特性的智能材料系统",
    principle: "形状记忆合金/介电弹性体驱动",
    application: "人形机器人肢体运动",
    otherInfo: "功率密度比传统电机高3倍"
  },
  {
    name: "动态视觉传感器",
    overview: "基于生物视网膜原理的事件触发型图像采集设备",
    principle: "像素级异步亮度变化检测",
    application: "高速运动物体追踪",
    otherInfo: "功耗仅为传统摄像头的1/100"
  },
  {
    name: "液态金属致动器",
    overview: "利用电场控制液态金属形变的柔性驱动装置",
    principle: "电润湿效应引发界面张力变化",
    application: "微型软体机器人关节",
    otherInfo: "响应速度达毫秒级"
  },
  {
    name: "强化学习运动框架",
    overview: "通过试错优化机器人动作策略的算法体系",
    principle: "基于PPO/SAC等深度强化学习算法",
    application: "双足机器人步态优化",
    otherInfo: "需构建精确物理仿真环境"
  },
  {
    name: "多模态融合中间件",
    overview: "整合视觉/触觉/本体感知的决策系统",
    principle: "注意力机制特征加权融合",
    application: "复杂环境自主导航",
    otherInfo: "延迟低于50ms"
  },
  {
    name: "具身认知预训练模型",
    overview: "融合物理交互经验的基础认知架构",
    principle: "多模态对比学习框架",
    application: "机器人常识推理能力构建",
    otherInfo: "需百万级物理交互轨迹数据"
  },
  {
    name: "跨实体知识迁移网络",
    overview: "不同形态智能体间的技能传递系统",
    principle: "基于图神经网络的表征对齐",
    application: "四足到双足机器人动作迁移",
    otherInfo: "解决形态差异导致的现实鸿沟"
  },
  {
    name: "仿生群体协同算法",
    overview: "模拟蚁群/鸟群行为的分布式控制系统",
    principle: "局部交互规则与全局涌现特性",
    application: "无人机编队/水下机器人集群",
    otherInfo: "具备自修复与抗干扰能力"
  },
  {
    name: "预训练模型",
    overview: "融合物理交互经验的基础认知架构",
    principle: "多模态对比学习框架",
    application: "机器人常识推理能力构建",
    otherInfo: "需百万级物理交互轨迹数据"
  },
  {
    name: "知识迁移网络",
    overview: "不同形态智能体间的技能传递系统",
    principle: "基于图神经网络的表征对齐",
    application: "四足到双足机器人动作迁移",
    otherInfo: "解决形态差异导致的现实鸿沟"
  },
  {
    name: "强化学习运动控制框架",
    overview: "通过试错优化机器人动作策略的算法体系",
    principle: "基于PPO/SAC等深度强化学习算法",
    application: "双足机器人步态优化",
    otherInfo: "需构建精确物理仿真环境"
  },
  {
    name: "本体感知数字孪生系统",
    overview: "实体机器人的高保真虚拟映射模型",
    principle: "多物理场实时仿真技术",
    application: "安全测试与算法预训练",
    otherInfo: "需毫米级运动精度标定"
  }, 
  {
    name: "柔性电子皮肤",
    overview: "模仿人类皮肤感知能力的柔性传感器阵列",
    principle: "基于压阻/电容式微结构传感单元",
    application: "仿生机械手触觉反馈系统",
    otherInfo: "可实现温度/压力/材质多模态感知"
  },
  {
    name: "视觉-语言-动作多模态大模型",
    overview: "整合视觉理解、语言交互与运动控制的综合AI系统",
    principle: "基于Transformer架构的多任务联合训练",
    application: "人形机器人自主任务执行",
    otherInfo: "需超大规模跨模态数据集支持"
  },
  {
    name: "仿生设计",
    overview: "模仿人类形态与运动方式的机器人设计方法",
    principle: "基于生物力学分析与柔性材料技术实现自然动作",
    application: "家庭服务机器人行走与抓取",
    otherInfo: "需平衡运动精度与能耗"
  },
  {
    name: "多模态交互",
    overview: "融合语音、手势、视觉的综合交互方式",
    principle: "通过传感器融合技术实现意图理解",
    application: "人形机器人家庭助手控制家电",
    otherInfo: "依赖NLP与CV算法协同"
  },
  {
    name: "自主导航",
    overview: "机器人在动态环境中的路径规划能力",
    principle: "结合SLAM算法与实时避障技术",
    application: "家庭清洁机器人全域覆盖",
    otherInfo: "需配合激光雷达等传感器"
  },
  {
    name: "情感识别",
    overview: "通过面部表情与语音分析用户情绪状态",
    principle: "基于深度学习模型识别人类情感特征",
    application: "养老陪伴机器人情绪安抚",
    otherInfo: "涉及隐私保护伦理问题"
  },
  {
    name: "柔性执行器",
    overview: "模拟人类肌肉运动的软体驱动装置",
    principle: "利用形状记忆合金或气动结构实现柔性变形",
    application: "家庭服务机器人精细操作",
    otherInfo: "需突破材料耐久性限制"
  },
  {
    name: "边缘计算架构",
    overview: "机器人本地化数据处理与决策系统",
    principle: "通过嵌入式AI芯片实现低延迟响应",
    application: "安防机器人实时异常检测",
    otherInfo: "需模型轻量化部署技术"
  },
  {
    name: "数字孪生系统",
    overview: "机器人物理实体与虚拟模型的实时映射",
    principle: "通过传感器数据驱动仿真模型更新",
    application: "工业人形机器人远程运维",
    otherInfo: "依赖高精度建模工具"
  },
  {
    name: "联邦学习框架",
    overview: "多机器人分布式协同学习机制",
    principle: "在保护数据隐私前提下共享模型参数",
    application: "跨家庭服务机器人知识共享",
    otherInfo: "需解决异构设备兼容性"
  },
  {
    name: "动态路径规划",
    overview: "复杂环境下实时最优路径生成技术",
    principle: "结合强化学习与环境预测模型",
    application: "物流机器人仓库作业",
    otherInfo: "需处理动态障碍物干扰"
  },
  {
    name: "SLAM算法优化",
    overview: "同步定位与地图构建的高效实现",
    principle: "融合视觉与惯性导航数据提升鲁棒性",
    application: "家庭服务机器人空间认知",
    otherInfo: "计算资源需求较高"
  }, {
    name: "强化学习框架",
    overview: "通过奖励机制训练智能体的算法框架",
    principle: "智能体通过试错学习最优策略",
    application: "机器人动作技能训练与决策优化",
    otherInfo: "常与仿真环境结合提升训练效率"
  },
  {
    name: "联邦学习系统",
    overview: "分布式隐私保护训练架构",
    principle: "多设备协同训练模型而不共享原始数据",
    application: "跨场景机器人知识迁移",
    otherInfo: "需解决数据异构性问题"
  },
  {
    name: "仿真到现实迁移",
    overview: "将仿真训练成果迁移至真实场景的技术",
    principle: "通过领域随机化增强模型泛化能力",
    application: "工业机器人快速部署",
    otherInfo: "降低实际调试成本"
  },
  {
    name: "多模态训练数据集",
    overview: "融合文本/图像/动作的复合型数据集",
    principle: "通过跨模态对齐标注构建训练样本",
    application: "家庭服务机器人交互训练",
    otherInfo: "需解决数据标注成本问题"
  },
  {
    name: "边缘计算训练节点",
    overview: "本地化模型训练与推理系统",
    principle: "利用终端设备算力实现低延迟训练",
    application: "安防机器人实时行为识别",
    otherInfo: "需模型轻量化技术支撑"
  },
  {
    name: "动态路径规划训练",
    overview: "复杂环境下的导航策略训练",
    principle: "结合强化学习与环境预测模型",
    application: "物流机器人仓库作业优化",
    otherInfo: "需处理动态障碍物干扰"
  },
  {
    name: "SLAM算法优化训练",
    overview: "同步定位与地图构建的高效实现",
    principle: "融合视觉与惯性导航数据提升鲁棒性",
    application: "家庭服务机器人空间认知",
    otherInfo: "计算资源需求较高"
  },
  {
    name: "神经辐射场训练",
    overview: "三维场景重建与渲染技术训练",
    principle: "通过多视角图像训练隐式场表示模型",
    application: "AR辅助训练场景构建",
    otherInfo: "需高性能算力支持"
  },
  {
    name: "数字孪生训练系统",
    overview: "物理实体与虚拟模型的实时映射训练",
    principle: "通过传感器数据驱动仿真模型更新",
    application: "工业机器人远程运维模拟",
    otherInfo: "依赖高精度建模工具"
  },
  {
    name: "持续学习框架",
    overview: "模型在线更新与知识累积系统",
    principle: "在动态环境中持续吸收新数据优化模型",
    application: "服务机器人个性化服务进化",
    otherInfo: "需解决灾难性遗忘问题"
  },
  {
    name: "YOLOv5",
    overview: "YOLO系列的主流版本，由Glenn Jocher开发，强调易用性和高性能",
    principle: "基于PyTorch实现，采用CSPDarknet53骨干网络和PANet特征融合",
    application: "实时目标检测、工业质检、无人机监控",
    otherInfo: "支持自定义数据集训练，社区生态活跃"
  },
  {
    name: "非极大值抑制",
    overview: "YOLO后处理关键步骤，用于过滤冗余检测框",
    principle: "保留最高置信度框，剔除IoU超过阈值的重叠框",
    application: "提升目标检测精度，减少重复检测",
    otherInfo: "YOLOv5默认使用加权NMS（Weighted NMS）"
  },
  {
    name: "锚框",
    overview: "预定义的边界框模板，用于优化目标位置预测",
    principle: "通过K-means聚类训练数据得到最佳宽高比",
    application: "提升小目标检测能力，适应不同物体形状",
    otherInfo: "YOLOv3/v4/v5均采用多尺度锚框"
  },
  {
    name: "马赛克数据增强",
    overview: "YOLOv4/v5采用的创新数据增强技术",
    principle: "随机拼接4张训练图像，模拟复杂场景",
    application: "增强模型对小目标和遮挡情况的鲁棒性",
    otherInfo: "可减少GPU显存需求，提升训练效率"
  },
  {
    name: "Focus结构",
    overview: "YOLOv5的独特下采样模块",
    principle: "通过切片操作保留空间信息，减少计算量",
    application: "替代传统卷积下采样，提升推理速度",
    otherInfo: "在保持精度的同时降低FLOPs"
  },
  {
    name: "CIoU Loss",
    overview: "YOLOv4采用的边界框回归损失函数",
    principle: "综合考虑重叠区域、中心点距离和长宽比",
    application: "提升边界框定位精度，加速收敛",
    otherInfo: "比传统IoU Loss更适合小目标检测"
  },
  {
    name: "特征金字塔网络",
    overview: "YOLOv3/v4/v5的多尺度特征融合架构",
    principle: "自上而下路径融合深层语义和浅层位置信息",
    application: "同时检测不同尺寸目标，提升mAP",
    otherInfo: "PANet进一步优化了特征融合流程"
  },
  {
    name: "TensorRT加速",
    overview: "NVIDIA针对YOLO的推理优化方案",
    principle: "通过层融合、精度校准和内核优化提升速度",
    application: "嵌入式设备部署，实现超实时检测",
    otherInfo: " Jetson系列芯片可达到100+FPS"
  },
  {
    name: "YOLO-Pose",
    overview: "YOLO系列的人体姿态估计扩展",
    principle: "在检测框基础上预测关键点坐标",
    application: "实时动作识别、运动分析",
    otherInfo: "保持YOLO速度优势的同时增加姿态输出"
  },
  {
    name: "YOLO-NAS",
    overview: "Neural Architecture Search优化的YOLO变体",
    principle: "自动化搜索最优网络结构和超参数",
    application: "边缘设备上的高效目标检测",
    otherInfo: "在精度-速度权衡上超越人工设计模型"
  },
  {
    name: "大语言模型",
    overview: "基于海量文本数据训练的深度学习模型，能够理解和生成自然语言",
    principle: "采用Transformer架构，通过自注意力机制处理长序列依赖",
    application: "文本生成、机器翻译、智能对话（如ChatGPT）",
    otherInfo: "代表模型包括GPT-4、DeepSeek-R1等"
  },
  {
    name: "Transformer",
    overview: "自然语言处理领域的核心神经网络结构",
    principle: "依赖自注意力机制并行处理序列数据，替代传统RNN/CNN",
    application: "支撑GPT、BERT等大模型的底层框架",
    otherInfo: "2017年由Google团队首次提出"
  },
  {
    name: "模型蒸馏",
    overview: "将大模型知识压缩至小模型的技术",
    principle: "通过师生模型架构迁移关键特征表示",
    application: "移动端部署、边缘计算等资源受限场景",
    otherInfo: "可减少90%参数量而保留80%以上性能"
  },
  {
    name: "涌现能力",
    overview: "模型规模突破临界点时突然展现的新能力",
    principle: "量变引发质变，如GPT-3的少样本学习",
    application: "未明确训练过的复杂推理任务",
    otherInfo: "OpenAI发现参数需超100B才出现该现象"
  },
  {
    name: "多模态大模型",
    overview: "同时处理文本、图像、音频等多种数据类型的模型",
    principle: "跨模态注意力机制对齐不同数据表征",
    application: "图文生成、视频理解、智能医疗诊断",
    otherInfo: "代表模型如GPT-4V、DeepSeek-Vision"
  },
  {
    name: "Scaling Law",
    overview: "模型性能随规模扩大持续提升的规律",
    principle: "参数/数据量/算力与效果呈幂律关系",
    application: "指导大模型研发资源分配",
    otherInfo: "当前千亿参数仍是性价比拐点"
  },
  {
    name: "人工反馈强化学习",
    overview: "通过人类偏好数据优化模型输出的方法",
    principle: "构建奖励模型引导生成符合期望的内容",
    application: "ChatGPT对话对齐、内容安全过滤",
    otherInfo: "关键解决大模型价值观对齐问题"
  },
  {
    name: "模型量化",
    overview: "降低模型参数数值精度的压缩技术",
    principle: "将FP32浮点参数转换为INT8/INT4整数",
    application: "终端设备推理加速，内存占用减少75%",
    otherInfo: "可能导致1-2%精度损失"
  },
  {
    name: "AI幻觉",
    overview: "模型生成虚假但看似合理的内容",
    principle: "统计生成机制缺乏事实验证能力",
    application: "需结合检索增强（RAG）缓解",
    otherInfo: "GPT-4幻觉率仍达15-20%"
  },
  {
    name: "数据飞轮",
    overview: "用户反馈驱动模型迭代的增强循环",
    principle: "更多使用→更多数据→模型改进→更多用户",
    application: "ChatGPT持续进化核心机制",
    otherInfo: "Meta最新研究显示每轮可提升3-7%效果"
  }
];

module.exports = {
  concepts
};
