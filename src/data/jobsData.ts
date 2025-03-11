import { Job } from '../types/types';

export const jobsData: Job[] = [
  {
    id: 'programmer',
    title: '程序员',
    automationProbability: 67,
    predictedYear: 2035,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'GitHub Copilot等AI编程助手广泛应用' },
      { year: 2025, event: 'AI能够自主开发简单应用程序' },
      { year: 2030, event: 'AI可以重构和优化复杂代码库' },
      { year: 2035, event: 'AI能够从需求描述直接生成完整应用' }
    ],
    skillsNeeded: {
      technical: [
        'AI编程框架应用能力',
        '云原生技术开发',
        '数据结构与算法优化',
        '自动化测试与部署'
      ],
      cognitive: [
        '系统架构设计思维',
        '技术方案创新能力',
        '复杂问题分析能力',
        '跨领域知识整合'
      ]
    }
  },
  {
    id: 'doctor',
    title: '医生',
    automationProbability: 42,
    predictedYear: 2045,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI辅助诊断系统在多家医院投入使用' },
      { year: 2028, event: 'AI在某些专科诊断准确率超过普通医生' },
      { year: 2035, event: 'AI可以独立进行常见疾病的诊断和治疗方案制定' },
      { year: 2045, event: 'AI医生可以处理大部分医疗咨询和初级诊断' }
    ],
    skillsNeeded: {
      technical: [
        'AI辅助诊断应用',
        '远程医疗技术使用',
        '医疗数据分析能力',
        '智能医疗设备操作'
      ],
      cognitive: [
        '临床决策分析能力',
        '疑难病例诊断思维',
        '医学前沿跟踪能力',
        '多学科诊疗整合'
      ]
    }
  },
  {
    id: 'teacher',
    title: '教师',
    automationProbability: 56,
    predictedYear: 2040,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI辅助教学工具在课堂中普及' },
      { year: 2027, event: 'AI可以生成个性化学习计划和教材' },
      { year: 2033, event: 'AI虚拟教师可以进行基础知识教学' },
      { year: 2040, event: 'AI教师可以替代大部分标准化教学内容' }
    ],
    skillsNeeded: {
      technical: [
        '智能教学工具应用',
        '在线课程制作能力',
        '教学数据分析应用',
        '混合式教学设计'
      ],
      cognitive: [
        '个性化教学规划',
        '学习方法创新能力',
        '教学效果评估分析',
        '跨学科知识融合'
      ]
    }
  },
  {
    id: 'driver',
    title: '司机',
    automationProbability: 89,
    predictedYear: 2030,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '自动驾驶技术在特定区域和路线商用' },
      { year: 2025, event: '自动驾驶卡车开始在高速公路上运营' },
      { year: 2028, event: '城市出租车队开始大规模采用无人驾驶技术' },
      { year: 2030, event: '大部分运输和配送工作由自动驾驶车辆完成' }
    ],
    skillsNeeded: {
      technical: [
        '智能驾驶系统操作',
        '路况分析软件应用',
        '车载设备故障处理',
        '运输调度系统使用'
      ],
      cognitive: [
        '紧急状况决策能力',
        '路线优化规划能力',
        '多任务协调思维',
        '安全风险评估'
      ]
    }
  },
  {
    id: 'accountant',
    title: '会计',
    automationProbability: 94,
    predictedYear: 2028,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI自动化处理大部分日常记账工作' },
      { year: 2025, event: 'AI系统可以自主完成税务申报和财务报表' },
      { year: 2027, event: 'AI会计顾问开始提供财务规划建议' },
      { year: 2028, event: '大部分传统会计工作被AI系统取代' }
    ],
    skillsNeeded: {
      technical: [
        '智能财务软件应用',
        '数据分析与可视化',
        '区块链账务处理',
        '自动化审计工具'
      ],
      cognitive: [
        '财务风险评估能力',
        '税务筹划分析思维',
        '财务战略规划能力',
        '商业模式理解'
      ]
    }
  },
  {
    id: 'lawyer',
    title: '律师',
    automationProbability: 40,
    predictedYear: 2040,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI法律助手可以自动生成常见法律文件' },
      { year: 2028, event: 'AI可以分析判例并提供法律建议' },
      { year: 2035, event: 'AI可以处理简单的法律案件和诉讼' },
      { year: 2040, event: 'AI可以替代大部分文书工作和初级法律咨询' }
    ],
    skillsNeeded: {
      technical: [
        '法律AI工具应用',
        '智能合同分析',
        '案例检索系统使用',
        '法律文档自动化'
      ],
      cognitive: [
        '法律推理与判断',
        '复杂案件分析能力',
        '法律创新思维',
        '跨领域法律整合'
      ]
    }
  },
  {
    id: 'designer',
    title: '设计师',
    automationProbability: 63,
    predictedYear: 2032,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI可以生成高质量的图像和设计方案' },
      { year: 2026, event: 'AI可以根据简单描述创建完整的品牌标识' },
      { year: 2030, event: 'AI可以自主完成大部分平面设计工作' },
      { year: 2032, event: 'AI设计系统可以替代大部分常规设计工作' }
    ],
    skillsNeeded: {
      technical: [
        'AI设计工具应用',
        '3D建模与渲染',
        '交互设计工具使用',
        '数字原型制作'
      ],
      cognitive: [
        '设计创新思维',
        '用户体验分析',
        '跨平台设计能力',
        '设计系统构建'
      ]
    }
  },
  {
    id: 'journalist',
    title: '记者',
    automationProbability: 55,
    predictedYear: 2035,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI可以自动生成新闻简讯和数据报道' },
      { year: 2027, event: 'AI可以撰写完整的新闻报道和分析文章' },
      { year: 2032, event: 'AI记者可以进行基础采访和事实核查' },
      { year: 2035, event: 'AI可以替代大部分日常新闻报道工作' }
    ],
    skillsNeeded: {
      technical: [
        '数据新闻工具应用',
        '多媒体内容制作',
        '社交媒体分析',
        '可视化报道技术'
      ],
      cognitive: [
        '深度报道策划',
        '信息真伪验证',
        '叙事结构设计',
        '趋势洞察分析'
      ]
    }
  },
  {
    id: 'chef',
    title: '厨师',
    automationProbability: 38,
    predictedYear: 2045,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI可以生成创新菜谱和烹饪指导' },
      { year: 2030, event: '机器人厨师可以在快餐店制作标准化食品' },
      { year: 2038, event: 'AI烹饪系统可以适应食材变化并调整烹饪方法' },
      { year: 2045, event: '自动化厨房可以替代大部分基础烹饪工作' }
    ],
    skillsNeeded: {
      technical: [
        '智能厨房设备应用',
        '食材分析系统使用',
        '菜品研发工具',
        '自动化烹饪控制'
      ],
      cognitive: [
        '创新菜品研发',
        '食材搭配分析',
        '餐饮趋势判断',
        '成本效益优化'
      ]
    }
  },
  {
    id: 'customer_service',
    title: '客服人员',
    automationProbability: 96,
    predictedYear: 2026,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI客服聊天机器人处理大部分常见问题' },
      { year: 2024, event: 'AI语音客服系统可以理解复杂问题并提供解决方案' },
      { year: 2025, event: 'AI客服可以处理情绪化投诉并提供个性化服务' },
      { year: 2026, event: '大部分客服中心由AI系统取代人工客服' }
    ],
    skillsNeeded: {
      technical: [
        'AI客服系统操作',
        '客户数据分析',
        '多渠道服务工具',
        'CRM系统应用'
      ],
      cognitive: [
        '服务流程优化',
        '客户需求分析',
        '问题解决策略',
        '服务质量评估'
      ]
    }
  },
  {
    id: 'nurse',
    title: '护士',
    automationProbability: 35,
    predictedYear: 2045,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI系统辅助护士进行患者监测和药物管理' },
      { year: 2030, event: '护理机器人可以执行基础护理任务' },
      { year: 2038, event: '自动化系统可以处理大部分常规护理工作' },
      { year: 2045, event: '人类护士专注于复杂护理和情感支持' }
    ],
    skillsNeeded: {
      technical: [
        '智能护理设备操作',
        '医疗监测系统使用',
        '护理数据分析应用',
        '远程护理平台操作'
      ],
      cognitive: [
        '临床护理决策能力',
        '病情评估与预判',
        '护理方案优化',
        '跨学科护理整合'
      ]
    }
  },
  {
    id: 'financial_analyst',
    title: '金融分析师',
    automationProbability: 72,
    predictedYear: 2030,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI系统可以分析市场数据并生成投资建议' },
      { year: 2025, event: '算法交易系统在金融市场中占主导地位' },
      { year: 2028, event: 'AI可以预测市场趋势并制定投资策略' },
      { year: 2030, event: '人类分析师主要负责高风险决策和客户关系' }
    ],
    skillsNeeded: {
      technical: [
        '金融分析工具应用',
        '量化分析模型开发',
        '市场数据可视化',
        '智能投顾系统使用'
      ],
      cognitive: [
        '投资策略规划',
        '风险评估分析',
        '市场趋势研判',
        '金融创新思维'
      ]
    }
  },
  {
    id: 'translator',
    title: '翻译',
    automationProbability: 87,
    predictedYear: 2028,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI翻译系统已经可以处理大部分常见语言翻译' },
      { year: 2025, event: 'AI可以理解文化背景并进行本地化翻译' },
      { year: 2027, event: '实时语音翻译技术在商务和旅游中广泛应用' },
      { year: 2028, event: '人类翻译主要负责文学作品和高度专业化内容' }
    ],
    skillsNeeded: {
      technical: [
        'AI翻译工具应用',
        '语言数据库使用',
        '术语管理系统',
        '本地化工具操作'
      ],
      cognitive: [
        '跨文化理解能力',
        '语言逻辑分析',
        '专业领域翻译',
        '翻译质量评估'
      ]
    }
  },
  {
    id: 'pharmacist',
    title: '药剂师',
    automationProbability: 61,
    predictedYear: 2035,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: '自动配药系统已经在许多药房使用' },
      { year: 2027, event: 'AI系统可以检查药物相互作用并提供用药建议' },
      { year: 2032, event: '自动化系统可以处理大部分处方药配制' },
      { year: 2035, event: '人类药剂师专注于复杂用药咨询和特殊药物' }
    ],
    skillsNeeded: {
      technical: [
        '智能配药系统',
        '药物相互作用分析',
        '处方审核工具',
        '库存管理平台'
      ],
      cognitive: [
        '用药方案设计',
        '药物治疗评估',
        '患者教育规划',
        '药品安全管理'
      ]
    }
  },
  {
    id: 'hr_specialist',
    title: '人力资源专员',
    automationProbability: 73,
    predictedYear: 2032,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI系统可以筛选简历和安排面试' },
      { year: 2026, event: '自动化系统可以处理大部分人事行政工作' },
      { year: 2030, event: 'AI可以进行初步面试和员工绩效评估' },
      { year: 2032, event: '人类HR专注于企业文化建设和复杂人际关系' }
    ],
    skillsNeeded: {
      technical: [
        'HR管理系统应用',
        '人才分析工具使用',
        '招聘平台操作',
        '员工数据分析'
      ],
      cognitive: [
        '人才战略规划',
        '组织发展分析',
        '员工关系管理',
        '文化建设能力'
      ]
    }
  },
  {
    id: 'security_guard',
    title: '保安',
    automationProbability: 84,
    predictedYear: 2030,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '智能监控系统已经减少了对人工巡逻的需求' },
      { year: 2025, event: '安保机器人可以进行基础巡逻和异常检测' },
      { year: 2028, event: '自动化系统可以处理大部分安保监控工作' },
      { year: 2030, event: '人类保安主要负责复杂情况处理和VIP保护' }
    ],
    skillsNeeded: {
      technical: [
        '智能监控系统',
        '安防设备操作',
        '应急响应平台',
        '数据分析工具'
      ],
      cognitive: [
        '风险评估能力',
        '应急处置决策',
        '安保方案设计',
        '团队协调管理'
      ]
    }
  },
  {
    id: 'real_estate_agent',
    title: '房地产经纪人',
    automationProbability: 86,
    predictedYear: 2030,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '虚拟看房和在线交易平台已经减少了对经纪人的需求' },
      { year: 2025, event: 'AI系统可以匹配买家需求和可用房源' },
      { year: 2028, event: '自动化系统可以处理大部分房产交易流程' },
      { year: 2030, event: '人类经纪人主要服务于高端市场和复杂交易' }
    ],
    skillsNeeded: {
      technical: [
        '房产分析工具',
        '虚拟展示技术',
        'CRM系统应用',
        '市场预测模型'
      ],
      cognitive: [
        '房产价值评估',
        '市场机会分析',
        '谈判策略设计',
        '客户需求洞察'
      ]
    }
  },
  {
    id: 'data_entry',
    title: '数据录入员',
    automationProbability: 99,
    predictedYear: 2025,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '自动化数据采集和处理系统已经广泛应用' },
      { year: 2024, event: 'AI可以从非结构化文档中提取和整理数据' },
      { year: 2025, event: '几乎所有数据录入工作都可以由AI系统完成' },
      { year: 2026, event: '人类数据专家专注于数据质量控制和异常处理' }
    ],
    skillsNeeded: {
      technical: [
        '数据清洗工具',
        '数据提取技术',
        '数据处理平台'
      ],
      cognitive: [
        '数据分析能力',
        '数据处理技巧',
        '数据质量控制'
      ]
    }
  },
  {
    id: 'cashier',
    title: '收银员',
    automationProbability: 97,
    predictedYear: 2026,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '自助收银系统已经在大多数零售店使用' },
      { year: 2024, event: '无人商店技术开始在城市普及' },
      { year: 2025, event: '移动支付和智能购物车减少了收银环节' },
      { year: 2026, event: '人类收银员主要出现在特殊服务场景' }
    ],
    skillsNeeded: {
      technical: [
        '自助收银系统',
        '移动支付工具',
        '智能购物车',
        '数据分析工具'
      ],
      cognitive: [
        '顾客服务技巧',
        '快速计算能力',
        '数据分析能力',
        '客户关系管理'
      ]
    }
  },
  {
    id: 'construction_worker',
    title: '建筑工人',
    automationProbability: 71,
    predictedYear: 2035,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '预制建筑和自动化设备已经减少了人工需求' },
      { year: 2028, event: '建筑机器人可以进行砌墙和基础施工' },
      { year: 2032, event: '3D打印建筑技术在住宅建设中普及' },
      { year: 2035, event: '人类建筑工人专注于精细工作和特殊项目' }
    ],
    skillsNeeded: {
      technical: [
        '智能施工设备',
        '建筑信息模型',
        '安全监测系统',
        '自动化施工工具'
      ],
      cognitive: [
        '施工方案优化',
        '质量控制分析',
        '安全风险评估',
        '工程协调能力'
      ]
    }
  },
  {
    id: 'social_worker',
    title: '社工',
    automationProbability: 39,
    predictedYear: 2045,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI系统可以协助案例管理和资源分配' },
      { year: 2030, event: '虚拟助手可以提供基础社会支持和信息' },
      { year: 2038, event: '自动化系统可以处理大部分行政工作和初步评估' },
      { year: 2045, event: '人类社工专注于复杂案例和深度干预' }
    ],
    skillsNeeded: {
      technical: [
        '社会工作管理系统',
        '资源分配工具',
        '案例管理平台'
      ],
      cognitive: [
        '社会工作理论应用',
        '跨文化服务能力',
        '危机干预技巧',
        '社会工作伦理'
      ]
    }
  },
  {
    id: 'electrician',
    title: '电工',
    automationProbability: 52,
    predictedYear: 2040,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: '智能诊断工具可以识别电气问题' },
      { year: 2030, event: '机器人可以执行标准化电气安装工作' },
      { year: 2035, event: '自动化系统可以进行基础维修和布线' },
      { year: 2040, event: '人类电工专注于复杂系统和创新解决方案' }
    ],
    skillsNeeded: {
      technical: [
        '智能电气系统',
        '故障诊断工具',
        '自动化控制设备',
        '能源管理系统'
      ],
      cognitive: [
        '系统集成规划',
        '故障排查分析',
        '安全风险评估',
        '节能方案设计'
      ]
    }
  },
  {
    id: 'veterinarian',
    title: '兽医',
    automationProbability: 33,
    predictedYear: 2050,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI辅助诊断系统可以识别常见动物疾病' },
      { year: 2030, event: '机器人辅助手术系统在兽医诊所应用' },
      { year: 2040, event: '自动化系统可以进行常规检查和治疗' },
      { year: 2050, event: '人类兽医专注于复杂手术和特殊病例' }
    ],
    skillsNeeded: {
      technical: [
        '智能诊断设备',
        '远程监护系统',
        '手术辅助机器人',
        '医疗数据分析'
      ],
      cognitive: [
        '疾病诊断决策',
        '治疗方案设计',
        '动物行为分析',
        '紧急情况处理'
      ]
    }
  },
  {
    id: 'travel_agent',
    title: '旅行社顾问',
    automationProbability: 97,
    predictedYear: 2026,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '在线旅行平台已经取代大部分传统旅行社' },
      { year: 2024, event: 'AI可以根据用户偏好规划完整旅行行程' },
      { year: 2025, event: '虚拟旅行顾问可以提供24/7实时支持' },
      { year: 2026, event: '人类旅行顾问仅服务于高端定制旅行市场' }
    ],
    skillsNeeded: {
      technical: [
        '在线旅行平台',
        '虚拟旅行顾问',
        '旅行规划工具'
      ],
      cognitive: [
        '客户服务技巧',
        '旅行规划能力',
        '危机处理能力',
        '跨文化沟通'
      ]
    }
  },
  {
    id: 'architect',
    title: '建筑师',
    automationProbability: 52,
    predictedYear: 2040,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI辅助设计工具可以生成建筑方案' },
      { year: 2030, event: 'AI可以根据约束条件自动生成完整建筑设计' },
      { year: 2035, event: '自动化系统可以处理大部分技术图纸和规范' },
      { year: 2040, event: '人类建筑师专注于创新概念和复杂项目' }
    ],
    skillsNeeded: {
      technical: [
        'BIM建模技术',
        '参数化设计工具',
        '可持续分析软件',
        '虚拟现实应用'
      ],
      cognitive: [
        '空间设计思维',
        '建筑创新能力',
        '项目整体规划',
        '环境影响评估'
      ]
    }
  },
  {
    id: 'waiter',
    title: '服务员',
    automationProbability: 94,
    predictedYear: 2028,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '自助点餐系统和送餐机器人在餐厅普及' },
      { year: 2025, event: '服务机器人可以接待顾客并提供基础服务' },
      { year: 2027, event: '自动化系统可以处理大部分餐厅服务流程' },
      { year: 2028, event: '人类服务员主要出现在高端餐厅和特色体验中' }
    ],
    skillsNeeded: {
      technical: [
        '自助点餐系统',
        '送餐机器人',
        '服务机器人'
      ],
      cognitive: [
        '顾客服务技巧',
        '危机处理能力',
        '跨文化沟通'
      ]
    }
  },
  {
    id: 'farmer',
    title: '农民',
    automationProbability: 76,
    predictedYear: 2032,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '自动化农业设备已经减少了人工需求' },
      { year: 2026, event: '农业机器人可以进行播种、除草和收获' },
      { year: 2030, event: '垂直农场和精准农业大幅提高自动化程度' },
      { year: 2032, event: '人类农民主要负责决策和特殊作物种植' }
    ],
    skillsNeeded: {
      technical: [
        '智能农业设备',
        '农业数据分析',
        '自动化灌溉系统',
        '农业物联网应用'
      ],
      cognitive: [
        '农业生产规划',
        '资源优化管理',
        '生态系统评估',
        '市场趋势分析'
      ]
    }
  },
  {
    id: 'plumber',
    title: '水管工',
    automationProbability: 49,
    predictedYear: 2040,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: '智能诊断工具可以识别管道问题' },
      { year: 2030, event: '机器人可以进行标准化管道安装' },
      { year: 2035, event: '自动化系统可以处理常见维修任务' },
      { year: 2040, event: '人类水管工专注于复杂系统和紧急情况' }
    ],
    skillsNeeded: {
      technical: [
        '智能管道检测',
        '自动化维修工具',
        '建筑信息模型',
        '远程诊断系统'
      ],
      cognitive: [
        '系统故障分析',
        '解决方案设计',
        '预防性维护规划',
        '施工方案优化'
      ]
    }
  },
  {
    id: 'marketing_specialist',
    title: '市场营销专员',
    automationProbability: 61,
    predictedYear: 2035,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI可以生成营销内容和分析市场数据' },
      { year: 2027, event: '自动化系统可以管理和优化营销活动' },
      { year: 2032, event: 'AI可以预测市场趋势并制定营销策略' },
      { year: 2035, event: '人类营销专员专注于创意概念和品牌建设' }
    ],
    skillsNeeded: {
      technical: [
        '营销自动化工具',
        '数据分析平台',
        '社媒管理系统',
        '内容创作工具'
      ],
      cognitive: [
        '营销策略规划',
        '用户行为分析',
        '品牌价值设计',
        '市场趋势判断'
      ]
    }
  },
  {
    id: 'hairdresser',
    title: '理发师',
    automationProbability: 31,
    predictedYear: 2050,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI可以模拟发型效果并提供建议' },
      { year: 2030, event: '自动化系统可以进行基础剪发' },
      { year: 2040, event: '机器人理发师可以执行标准发型' },
      { year: 2050, event: '人类理发师专注于创意造型和个性化服务' }
    ],
    skillsNeeded: {
      technical: [
        '理发机器人',
        '虚拟发型设计',
        '美容数据分析'
      ],
      cognitive: [
        '发型设计创意',
        '顾客沟通技巧',
        '审美判断能力',
        '服务流程优化'
      ]
    }
  },
  {
    id: 'psychologist',
    title: '心理学家',
    automationProbability: 28,
    predictedYear: 2050,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI辅助系统可以进行初步心理评估' },
      { year: 2030, event: '虚拟治疗师可以提供基础心理支持' },
      { year: 2040, event: 'AI系统可以处理常见心理问题的咨询' },
      { year: 2050, event: '人类心理学家专注于复杂案例和深度治疗' }
    ],
    skillsNeeded: {
      technical: [
        '心理测评工具应用',
        '远程咨询平台使用',
        'VR治疗系统操作',
        '心理数据分析'
      ],
      cognitive: [
        '临床诊断决策',
        '治疗方案设计',
        '危机干预能力',
        '跨文化心理分析'
      ]
    }
  },
  {
    id: 'pilot',
    title: '飞行员',
    automationProbability: 55,
    predictedYear: 2040,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: '自动驾驶系统已经可以处理大部分飞行过程' },
      { year: 2030, event: '无人机和自动驾驶飞机在货运领域应用' },
      { year: 2035, event: '部分商业航班开始采用单飞行员或无飞行员模式' },
      { year: 2040, event: '人类飞行员主要负责复杂情况和特殊航线' }
    ],
    skillsNeeded: {
      technical: [
        '自动驾驶系统',
        '飞行管理设备',
        '气象分析工具',
        '应急处理系统'
      ],
      cognitive: [
        '复杂情况决策',
        '风险评估能力',
        '航线优化分析',
        '多系统协调'
      ]
    }
  },
  {
    id: 'fitness_trainer',
    title: '健身教练',
    automationProbability: 38,
    predictedYear: 2045,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: '智能健身应用可以提供个性化训练计划' },
      { year: 2030, event: '虚拟教练可以通过摄像头监测和纠正动作' },
      { year: 2038, event: '机器人教练可以提供物理辅助和指导' },
      { year: 2045, event: '人类教练专注于高级训练和心理激励' }
    ],
    skillsNeeded: {
      technical: [
        '智能健身设备',
        '运动数据分析',
        '远程训练平台',
        '康复监测系统'
      ],
      cognitive: [
        '训练计划定制',
        '体能评估分析',
        '营养方案设计',
        '伤病预防规划'
      ]
    }
  },
  {
    id: 'dentist',
    title: '牙医',
    automationProbability: 44,
    predictedYear: 2045,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI辅助诊断系统可以识别牙科问题' },
      { year: 2030, event: '机器人辅助系统可以进行基础牙科治疗' },
      { year: 2038, event: '自动化系统可以进行标准化牙科手术' },
      { year: 2045, event: '人类牙医专注于复杂治疗和美容牙科' }
    ],
    skillsNeeded: {
      technical: [
        '数字化口腔设备',
        '3D打印技术应用',
        '智能诊断系统',
        '远程会诊平台'
      ],
      cognitive: [
        '口腔治疗规划',
        '美学设计能力',
        '复杂病例分析',
        '新技术整合应用'
      ]
    }
  },
  {
    id: 'librarian',
    title: '图书管理员',
    automationProbability: 95,
    predictedYear: 2027,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '自助借还系统和电子书已经减少了对图书管理员的需求' },
      { year: 2025, event: 'AI系统可以提供个性化阅读推荐和资源导航' },
      { year: 2026, event: '机器人可以进行图书整理和馆藏管理' },
      { year: 2027, event: '人类图书管理员专注于社区活动和特殊收藏' }
    ],
    skillsNeeded: {
      technical: [
        '数字资源管理',
        '信息检索系统',
        '数据库维护工具',
        '多媒体平台应用'
      ],
      cognitive: [
        '信息素养教育',
        '资源规划能力',
        '用户需求分析',
        '知识体系构建'
      ]
    }
  },
  {
    id: 'insurance_agent',
    title: '保险代理人',
    automationProbability: 92,
    predictedYear: 2028,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: '在线保险平台已经减少了对代理人的需求' },
      { year: 2025, event: 'AI系统可以根据客户需求推荐保险产品' },
      { year: 2027, event: '自动化系统可以处理大部分保险申请和理赔' },
      { year: 2028, event: '人类代理人主要服务于复杂需求和高净值客户' }
    ],
    skillsNeeded: {
      technical: [
        '保险科技平台',
        '风险评估工具',
        '客户管理系统',
        '理赔分析软件'
      ],
      cognitive: [
        '保险方案设计',
        '风险管理规划',
        '客户需求分析',
        '理赔策略优化'
      ]
    }
  },
  {
    id: 'photographer',
    title: '摄影师',
    automationProbability: 59,
    predictedYear: 2035,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI图像生成技术可以创建高质量照片' },
      { year: 2027, event: '自动化摄影系统可以处理产品和活动拍摄' },
      { year: 2032, event: 'AI可以根据场景自动调整参数并捕捉最佳时刻' },
      { year: 2035, event: '人类摄影师专注于艺术创作和特殊项目' }
    ],
    skillsNeeded: {
      technical: [
        '数码摄影设备操作',
        '图像处理软件',
        '无人机航拍技术',
        '虚拟摄影工具'
      ],
      cognitive: [
        '艺术创意构思',
        '视觉美学设计',
        '场景布局规划',
        '光影效果把控'
      ]
    }
  },
  {
    id: 'actor',
    title: '演员',
    automationProbability: 25,
    predictedYear: 2050,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI生成的数字演员已经出现在某些作品中' },
      { year: 2030, event: '深度伪造技术可以创建逼真的虚拟表演' },
      { year: 2040, event: 'AI演员可以在标准化角色和背景演员中应用' },
      { year: 2050, event: '人类演员专注于复杂角色和情感表达' }
    ],
    skillsNeeded: {
      technical: [
        '动作捕捉技术',
        '虚拟现实表演',
        '数字角色创建',
        '音频处理工具'
      ],
      cognitive: [
        '角色塑造能力',
        '表演技巧创新',
        '跨媒体适应',
        '即兴表演能力'
      ]
    }
  },
  {
    id: 'baker',
    title: '面包师',
    automationProbability: 41,
    predictedYear: 2045,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: '自动化烘焙设备已经应用于大型面包厂' },
      { year: 2030, event: '机器人可以制作标准化面包和糕点' },
      { year: 2038, event: 'AI可以开发新配方并优化烘焙过程' },
      { year: 2045, event: '人类面包师专注于工艺面包和创新产品' }
    ],
    skillsNeeded: {
      technical: [
        '智能烘焙设备',
        '配方管理系统',
        '食品分析工具',
        '自动化生产线'
      ],
      cognitive: [
        '产品创新研发',
        '品质控制评估',
        '工艺流程优化',
        '市场需求分析'
      ]
    }
  },
  {
    id: 'event_planner',
    title: '活动策划师',
    automationProbability: 46,
    predictedYear: 2040,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI系统可以协助活动规划和供应商管理' },
      { year: 2030, event: '虚拟活动平台减少了对现场活动的需求' },
      { year: 2035, event: '自动化系统可以处理大部分活动物流和协调' },
      { year: 2040, event: '人类策划师专注于创意概念和客户关系' }
    ],
    skillsNeeded: {
      technical: [
        '活动管理平台',
        '虚拟展示技术',
        '数字营销工具',
        '预算分析系统'
      ],
      cognitive: [
        '创意方案设计',
        '资源整合能力',
        '风险管理规划',
        '客户需求分析'
      ]
    }
  },
  {
    id: 'florist',
    title: '花艺师',
    automationProbability: 47,
    predictedYear: 2040,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI可以生成花艺设计方案和搭配建议' },
      { year: 2030, event: '机器人可以制作标准化花束和装饰' },
      { year: 2035, event: '自动化系统可以处理大部分商业花艺需求' },
      { year: 2040, event: '人类花艺师专注于艺术创作和特殊场合' }
    ],
    skillsNeeded: {
      technical: [
        '花艺设计软件',
        '智能养护系统',
        '订单管理平台',
        '库存预测工具'
      ],
      cognitive: [
        '艺术创意设计',
        '色彩搭配规划',
        '季节性预测',
        '客户需求理解'
      ]
    }
  },
  {
    id: 'scientist',
    title: '科学家',
    automationProbability: 43,
    predictedYear: 2045,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI可以分析实验数据并提出假设' },
      { year: 2030, event: '自动化实验系统可以独立进行标准实验' },
      { year: 2038, event: 'AI可以发现新模式并提出创新理论' },
      { year: 2045, event: '人类科学家专注于跨学科研究和创新方向' }
    ],
    skillsNeeded: {
      technical: [
        '机器学习算法开发',
        '大数据分析工具',
        '数据可视化设计',
        '云计算平台应用'
      ],
      cognitive: [
        '数据洞察能力',
        '模型设计思维',
        '业务问题分析',
        '研究方法创新'
      ]
    }
  },
  {
    id: 'musician',
    title: '音乐家',
    automationProbability: 32,
    predictedYear: 2045,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI可以创作商业音乐和背景音乐' },
      { year: 2030, event: 'AI音乐创作在流媒体平台上占据一定份额' },
      { year: 2038, event: 'AI可以模仿各种风格并创作复杂作品' },
      { year: 2045, event: '人类音乐家专注于情感表达和现场表演' }
    ],
    skillsNeeded: {
      technical: [
        '数字音乐创作',
        '音频处理软件',
        '虚拟乐器应用',
        '现场音效系统'
      ],
      cognitive: [
        '音乐创意开发',
        '跨界融合能力',
        '艺术风格创新',
        '听众体验设计'
      ]
    }
  },
  {
    id: 'writer',
    title: '作家',
    automationProbability: 49,
    predictedYear: 2040,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI可以生成商业文案和基础内容' },
      { year: 2030, event: 'AI小说和剧本在数字平台上占据一定份额' },
      { year: 2035, event: 'AI可以根据读者反馈调整创作风格和内容' },
      { year: 2040, event: '人类作家专注于深度主题和情感共鸣' }
    ],
    skillsNeeded: {
      technical: [
        '内容创作平台',
        '数字出版工具',
        '协作写作系统',
        '数据分析应用'
      ],
      cognitive: [
        '创意写作能力',
        '叙事结构设计',
        '市场趋势分析',
        '读者需求洞察'
      ]
    }
  },
  {
    id: 'personal_trainer',
    title: '私人教练',
    automationProbability: 38,
    predictedYear: 2045,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: '智能健身应用可以提供个性化训练计划' },
      { year: 2030, event: '虚拟教练可以通过摄像头监测和纠正动作' },
      { year: 2038, event: '机器人教练可以提供物理辅助和指导' },
      { year: 2045, event: '人类教练专注于高级训练和心理激励' }
    ],
    skillsNeeded: {
      technical: [
        '智能健身设备',
        '运动数据分析',
        '远程训练平台',
        '康复监测系统'
      ],
      cognitive: [
        '训练计划定制',
        '体能评估分析',
        '营养方案设计',
        '伤病预防规划'
      ]
    }
  },
  {
    id: 'data_analyst',
    title: '数据分析师',
    automationProbability: 75,
    predictedYear: 2030,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI可以自动处理和可视化数据' },
      { year: 2025, event: '自动化系统可以生成数据洞察和报告' },
      { year: 2028, event: 'AI可以预测趋势并提出业务建议' },
      { year: 2030, event: '人类分析师专注于复杂问题和战略决策' }
    ],
    skillsNeeded: {
      technical: [
        '机器学习算法开发',
        '大数据分析工具',
        '数据可视化设计',
        '云计算平台应用'
      ],
      cognitive: [
        '数据洞察能力',
        '模型设计思维',
        '业务问题分析',
        '研究方法创新'
      ]
    }
  },
  {
    id: 'data_scientist',
    title: '数据科学家',
    automationProbability: 43,
    predictedYear: 2045,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI可以分析实验数据并提出假设' },
      { year: 2030, event: '自动化实验系统可以独立进行标准实验' },
      { year: 2038, event: 'AI可以发现新模式并提出创新理论' },
      { year: 2045, event: '人类科学家专注于跨学科研究和创新方向' }
    ],
    skillsNeeded: {
      technical: [
        '机器学习算法开发',
        '大数据分析工具',
        '数据可视化设计',
        '云计算平台应用'
      ],
      cognitive: [
        '数据洞察能力',
        '模型设计思维',
        '业务问题分析',
        '研究方法创新'
      ]
    }
  }
];

export const getJobByTitle = (title: string): Job | undefined => {
  return jobsData.find(job => job.title === title);
};

export const getJobById = (id: string): Job | undefined => {
  return jobsData.find(job => job.id === id);
};