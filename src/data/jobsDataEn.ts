import { Job } from '../types/types';

export const jobsDataEn: Job[] = [
  {
    id: 'programmer',
    title: 'Software Developer',
    predictedYear: 2035,
    automationProbability: 67,
    riskLevel: 'medium',
    milestones: [
      { year: 2024, event: 'AI pair programming becomes standard practice' },
      { year: 2026, event: 'Automated code generation for basic tasks' },
      { year: 2030, event: 'AI handles 50% of routine coding tasks' },
      { year: 2035, event: 'Major shift to AI-assisted development' }
    ],
    adaptationStrategies: {
      skills: [
        'AI/ML Integration',
        'System Architecture',
        'AI Prompt Engineering',
        'Complex Problem Solving'
      ],
      courses: [
        'Advanced AI Development',
        'Machine Learning Systems',
        'Software Architecture',
        'AI Ethics and Governance'
      ],
      alternatives: [
        'AI Systems Architect',
        'ML Operations Engineer',
        'AI Product Manager',
        'Digital Ethics Officer'
      ]
    },
    skillsNeeded: {
      technical: [
        'AI Framework Integration',
        'Cloud-Native Development',
        'Algorithm Optimization',
        'DevOps Automation'
      ],
      cognitive: [
        'System Architecture Design',
        'Technical Innovation',
        'Complex Problem Analysis',
        'Cross-domain Integration'
      ]
    }
  },
  {
    id: 'doctor',
    title: 'Medical Doctor',
    predictedYear: 2045,
    automationProbability: 42,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI diagnostic systems match specialist accuracy' },
      { year: 2026, event: 'AI-powered robotic surgery becomes common' },
      { year: 2030, event: 'AI creates personalized treatment plans' },
      { year: 2035, event: 'Remote AI diagnostics reduce in-person visits by 50%' },
      { year: 2040, event: 'AI handles routine diagnoses, doctors focus on complex cases' }
    ],
    adaptationStrategies: {
      skills: [
        'AI Diagnostic Interpretation',
        'Advanced Patient Care',
        'Medical AI Systems Management',
        'Complex Case Analysis'
      ],
      courses: [
        'Medical AI Integration',
        'Advanced Diagnostic Systems',
        'Digital Health Technologies',
        'AI-Human Collaboration in Healthcare'
      ],
      alternatives: [
        'Medical AI Specialist',
        'Digital Health Consultant',
        'Healthcare Systems Architect',
        'Medical Technology Director'
      ]
    },
    skillsNeeded: {
      technical: [
        'AI-Assisted Diagnostics',
        'Telemedicine Technologies',
        'Medical Data Analytics',
        'Smart Medical Devices'
      ],
      cognitive: [
        'Clinical Decision Making',
        'Complex Case Analysis',
        'Medical Research Insights',
        'Interdisciplinary Treatment'
      ]
    }
  },
  {
    id: 'teacher',
    title: 'Teacher',
    predictedYear: 2040,
    automationProbability: 35,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI tutoring systems provide personalized learning experiences' },
      { year: 2025, event: 'Virtual reality classrooms enable immersive remote education' },
      { year: 2028, event: 'AI teaching assistants handle grading and administrative tasks' },
      { year: 2032, event: 'Adaptive learning platforms customize curriculum for individual students' },
      { year: 2036, event: 'Teachers transition to learning coaches and mentors' },
      { year: 2040, event: 'Education becomes hybrid with AI handling content delivery and humans focusing on social-emotional learning' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Teaching Tools',
        'Online Course Creation',
        'Learning Analytics',
        'Hybrid Teaching Design'
      ],
      cognitive: [
        'Personalized Learning Design',
        'Educational Innovation',
        'Learning Assessment',
        'Cross-subject Integration'
      ]
    }
  },
  {
    id: 'driver',
    title: 'Driver',
    predictedYear: 2030,
    automationProbability: 90,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'Level 3 autonomous vehicles available in consumer market' },
      { year: 2025, event: 'Autonomous trucking deployed on major highways' },
      { year: 2027, event: 'Ride-sharing services begin large-scale autonomous vehicle deployment' },
      { year: 2028, event: 'First cities approve driverless taxis without safety drivers' },
      { year: 2030, event: 'Majority of new commercial vehicles sold are fully autonomous' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Driving Systems',
        'Route Analysis Software',
        'Vehicle Diagnostics',
        'Fleet Management Tools'
      ],
      cognitive: [
        'Emergency Decision Making',
        'Route Optimization',
        'Multi-task Coordination',
        'Risk Assessment'
      ]
    }
  },
  {
    id: 'accountant',
    title: 'Accountant',
    predictedYear: 2032,
    automationProbability: 85,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI systems automate routine bookkeeping and tax preparation' },
      { year: 2025, event: 'Blockchain-based accounting systems reduce need for manual auditing' },
      { year: 2027, event: 'AI financial advisors provide personalized tax optimization strategies' },
      { year: 2030, event: 'Automated systems handle 90% of compliance and reporting tasks' },
      { year: 2032, event: 'Accountants transition to strategic advisors as routine tasks are fully automated' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Financial Software',
        'Data Analytics & Visualization',
        'Blockchain Accounting',
        'Automated Auditing'
      ],
      cognitive: [
        'Financial Risk Assessment',
        'Tax Planning Analysis',
        'Strategic Financial Planning',
        'Business Model Analysis'
      ]
    }
  },
  {
    id: 'lawyer',
    title: 'Lawyer',
    predictedYear: 2038,
    automationProbability: 60,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI legal research tools reduce document review time by 80%' },
      { year: 2026, event: 'Contract analysis and generation becomes largely automated' },
      { year: 2030, event: 'AI systems predict case outcomes with high accuracy' },
      { year: 2033, event: 'Virtual legal assistants handle routine client inquiries and document preparation' },
      { year: 2036, event: 'Legal profession splits between AI operators and high-touch specialists' },
      { year: 2038, event: 'Most routine legal services delivered through automated platforms' }
    ],
    skillsNeeded: {
      technical: [
        'Legal AI Tools',
        'Smart Contract Analysis',
        'Case Research Systems',
        'Legal Document Automation'
      ],
      cognitive: [
        'Legal Reasoning',
        'Complex Case Analysis',
        'Legal Innovation',
        'Cross-jurisdiction Integration'
      ]
    }
  },
  {
    id: 'designer',
    title: 'Designer',
    predictedYear: 2035,
    automationProbability: 55,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI design tools generate multiple concepts based on text prompts' },
      { year: 2025, event: 'Generative design systems create optimized product designs' },
      { year: 2028, event: 'AI can create complete brand identities from basic parameters' },
      { year: 2030, event: 'Virtual reality design tools enable collaborative creation with AI' },
      { year: 2033, event: 'Designers become curators and directors of AI-generated content' },
      { year: 2035, event: 'Design process becomes iterative conversation between humans and AI' }
    ],
    skillsNeeded: {
      technical: [
        'AI Design Tools',
        '3D Modeling & Rendering',
        'Interactive Design Tools',
        'Digital Prototyping'
      ],
      cognitive: [
        'Design Innovation',
        'User Experience Analysis',
        'Cross-platform Design',
        'Design Systems'
      ]
    }
  },
  {
    id: 'chef',
    title: 'Chef',
    predictedYear: 2037,
    automationProbability: 50,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Robotic kitchen assistants deployed in fast food restaurants' },
      { year: 2026, event: 'AI recipe generation creates novel dishes optimized for taste and nutrition' },
      { year: 2029, event: 'Automated cooking systems handle 70% of food preparation in chain restaurants' },
      { year: 2032, event: 'Food 3D printing becomes mainstream for complex dishes' },
      { year: 2035, event: 'Chefs focus on creative direction while AI and robots handle execution' },
      { year: 2037, event: 'High-end dining emphasizes human touch as differentiator from automated experiences' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Kitchen Equipment',
        'Ingredient Analysis',
        'Recipe Development Tools',
        'Automated Cooking Systems'
      ],
      cognitive: [
        'Culinary Innovation',
        'Flavor Profiling',
        'Food Trend Analysis',
        'Cost-benefit Optimization'
      ]
    }
  },
  {
    id: 'nurse',
    title: 'Nurse',
    predictedYear: 2050,
    automationProbability: 30,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI triage systems prioritize patient care in hospitals' },
      { year: 2026, event: 'Robotic assistants help with patient lifting and movement' },
      { year: 2030, event: 'Automated medication management systems reduce errors' },
      { year: 2035, event: 'Remote monitoring allows nurses to oversee more patients' },
      { year: 2040, event: 'Nursing becomes more specialized with routine tasks automated' },
      { year: 2050, event: 'Human touch and empathy remain essential nursing qualities despite automation' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Medical Devices',
        'Patient Monitoring Systems',
        'Healthcare Analytics',
        'Telehealth Platforms'
      ],
      cognitive: [
        'Clinical Decision Making',
        'Patient Assessment',
        'Care Plan Optimization',
        'Interdisciplinary Care'
      ]
    }
  },
  {
    id: 'journalist',
    title: 'Journalist',
    predictedYear: 2033,
    automationProbability: 75,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI generates routine news stories about sports, finance, and weather' },
      { year: 2025, event: 'Automated fact-checking tools verify information in real-time' },
      { year: 2027, event: 'AI systems can conduct and transcribe interviews' },
      { year: 2030, event: 'Personalized news feeds created by AI for individual preferences' },
      { year: 2033, event: 'Investigative journalism and opinion pieces remain human-driven while routine reporting is automated' }
    ],
    skillsNeeded: {
      technical: [
        'Data Journalism Tools',
        'Multimedia Production',
        'Social Media Analytics',
        'Visual Storytelling'
      ],
      cognitive: [
        'In-depth Research Planning',
        'Fact Verification',
        'Narrative Structure',
        'Trend Analysis'
      ]
    }
  },
  {
    id: 'financial_analyst',
    title: 'Financial Analyst',
    predictedYear: 2034,
    automationProbability: 70,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI algorithms outperform humans in market prediction tasks' },
      { year: 2025, event: 'Automated systems handle routine financial reporting and analysis' },
      { year: 2028, event: 'AI advisors provide personalized investment recommendations' },
      { year: 2031, event: 'Quantum computing enables unprecedented market modeling capabilities' },
      { year: 2034, event: 'Financial analysts shift to strategic roles overseeing AI systems' }
    ],
    skillsNeeded: {
      technical: [
        'Financial Analysis Tools',
        'Quantitative Modeling',
        'Market Data Visualization',
        'Robo-Advisory Systems'
      ],
      cognitive: [
        'Investment Strategy',
        'Risk Assessment',
        'Market Trend Analysis',
        'Financial Innovation'
      ]
    }
  },
  {
    id: 'customer_service',
    title: 'Customer Service Representative',
    predictedYear: 2029,
    automationProbability: 95,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI chatbots handle 50% of routine customer inquiries' },
      { year: 2025, event: 'Voice AI systems indistinguishable from human agents' },
      { year: 2027, event: 'Emotional intelligence algorithms detect and respond to customer sentiment' },
      { year: 2029, event: 'Virtual agents handle 95% of customer interactions across all channels' }
    ],
    skillsNeeded: {
      technical: [
        'AI Service Systems',
        'Customer Data Analytics',
        'Omnichannel Tools',
        'CRM Applications'
      ],
      cognitive: [
        'Service Process Optimization',
        'Customer Need Analysis',
        'Problem-Solving Strategy',
        'Service Quality Assessment'
      ]
    }
  },
  {
    id: 'translator',
    title: 'Translator',
    predictedYear: 2028,
    automationProbability: 85,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'Neural machine translation reaches near-human quality for common language pairs' },
      { year: 2024, event: 'Real-time translation devices become mainstream for business and travel' },
      { year: 2026, event: 'AI systems preserve cultural nuances and idioms in translation' },
      { year: 2028, event: 'Human translators primarily focus on literary works and specialized content' }
    ],
    skillsNeeded: {
      technical: [
        'AI Translation Tools',
        'Language Databases',
        'Terminology Management',
        'Localization Software'
      ],
      cognitive: [
        'Cross-cultural Understanding',
        'Language Logic Analysis',
        'Domain Expertise',
        'Quality Assessment'
      ]
    }
  },
  {
    id: 'hr_specialist',
    title: 'HR Specialist',
    predictedYear: 2036,
    automationProbability: 65,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI recruitment systems screen candidates and reduce bias' },
      { year: 2026, event: 'Automated onboarding and training systems personalize employee experiences' },
      { year: 2030, event: 'Predictive analytics forecast employee performance and retention' },
      { year: 2033, event: 'AI mediators help resolve workplace conflicts' },
      { year: 2036, event: 'HR specialists focus on strategic workforce planning and culture development' }
    ],
    skillsNeeded: {
      technical: [
        'HR Management Systems',
        'Talent Analytics Tools',
        'Recruitment Platforms',
        'Employee Data Analysis'
      ],
      cognitive: [
        'Talent Strategy Planning',
        'Organizational Development',
        'Employee Relations',
        'Culture Building'
      ]
    }
  },
  {
    id: 'data_scientist',
    title: 'Data Scientist',
    predictedYear: 2040,
    automationProbability: 45,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AutoML platforms automate routine model building and feature engineering' },
      { year: 2027, event: 'AI systems can generate and test hypotheses independently' },
      { year: 2032, event: 'Self-optimizing algorithms surpass human-designed models in most domains' },
      { year: 2036, event: 'Data scientists shift to interpreting AI insights and ethical oversight' },
      { year: 2040, event: 'Human-AI collaboration becomes standard for complex data problems' }
    ],
    skillsNeeded: {
      technical: [
        'Machine Learning Development',
        'Big Data Analytics',
        'Data Visualization',
        'Cloud Computing'
      ],
      cognitive: [
        'Data Insights',
        'Model Architecture',
        'Business Analysis',
        'Research Innovation'
      ]
    }
  },
  {
    id: 'marketing_specialist',
    title: 'Marketing Specialist',
    predictedYear: 2033,
    automationProbability: 60,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI generates personalized marketing content at scale' },
      { year: 2025, event: 'Predictive analytics optimize campaign targeting and timing' },
      { year: 2028, event: 'Virtual influencers become mainstream marketing channels' },
      { year: 2030, event: 'AI systems autonomously adjust campaigns based on real-time performance' },
      { year: 2033, event: 'Marketing specialists focus on strategy and creativity while AI handles execution' }
    ],
    skillsNeeded: {
      technical: [
        'Marketing Automation',
        'Analytics Platforms',
        'Social Media Tools',
        'Content Creation Systems'
      ],
      cognitive: [
        'Marketing Strategy',
        'Consumer Behavior Analysis',
        'Brand Value Design',
        'Market Trend Assessment'
      ]
    }
  },
  {
    id: 'pharmacist',
    title: 'Pharmacist',
    predictedYear: 2035,
    automationProbability: 65,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Automated dispensing systems reduce medication errors' },
      { year: 2026, event: 'AI systems detect potential drug interactions with near-perfect accuracy' },
      { year: 2030, event: 'Personalized medicine algorithms tailor dosages to individual genetics' },
      { year: 2033, event: '3D printing of medications becomes common in pharmacies' },
      { year: 2035, event: 'Pharmacists shift to patient counseling and specialized medicine management' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Dispensing Systems',
        'Drug Interaction Analysis',
        'Prescription Review Tools',
        'Inventory Management'
      ],
      cognitive: [
        'Medication Planning',
        'Therapy Assessment',
        'Patient Education',
        'Drug Safety Management'
      ]
    }
  },
  {
    id: 'architect',
    title: 'Architect',
    predictedYear: 2038,
    automationProbability: 50,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Generative design algorithms create optimized building layouts' },
      { year: 2026, event: 'AI systems ensure compliance with building codes automatically' },
      { year: 2030, event: 'Virtual reality enables immersive design collaboration with AI' },
      { year: 2034, event: 'Autonomous construction systems build from AI-generated plans' },
      { year: 2038, event: 'Architects focus on aesthetics and human experience while AI handles technical aspects' }
    ],
    skillsNeeded: {
      technical: [
        'BIM Technology',
        'Parametric Design Tools',
        'Sustainability Analysis',
        'Virtual Reality Systems'
      ],
      cognitive: [
        'Spatial Design Thinking',
        'Architectural Innovation',
        'Project Planning',
        'Environmental Assessment'
      ]
    }
  },
  {
    id: 'psychologist',
    title: 'Psychologist',
    predictedYear: 2045,
    automationProbability: 25,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI therapy apps provide basic mental health support' },
      { year: 2027, event: 'Advanced emotion recognition systems assist in diagnosis' },
      { year: 2032, event: 'Virtual reality treatments for phobias and PTSD become standard' },
      { year: 2038, event: 'AI systems predict mental health crises before they occur' },
      { year: 2045, event: 'Human psychologists collaborate with AI for enhanced therapy, but maintain primary care role' }
    ],
    skillsNeeded: {
      technical: [
        'Psychological Assessment Tools',
        'Teletherapy Platforms',
        'VR Therapy Systems',
        'Mental Health Analytics'
      ],
      cognitive: [
        'Clinical Decision Making',
        'Treatment Planning',
        'Crisis Intervention',
        'Cross-cultural Analysis'
      ]
    }
  },
  {
    id: 'dentist',
    title: 'Dentist',
    predictedYear: 2042,
    automationProbability: 40,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI diagnostic systems detect cavities from dental scans' },
      { year: 2027, event: 'Robotic systems assist with routine procedures like fillings' },
      { year: 2032, event: '3D printing of dental implants and crowns becomes standard' },
      { year: 2037, event: 'Automated preventive treatments reduce need for invasive procedures' },
      { year: 2042, event: 'Dentists oversee AI and robotic systems while focusing on complex cases' }
    ],
    skillsNeeded: {
      technical: [
        'Digital Dental Equipment',
        '3D Printing Technology',
        'Smart Diagnostic Systems',
        'Teledentistry Platforms'
      ],
      cognitive: [
        'Treatment Planning',
        'Aesthetic Design',
        'Complex Case Analysis',
        'Technology Integration'
      ]
    }
  },
  {
    id: 'electrician',
    title: 'Electrician',
    predictedYear: 2040,
    automationProbability: 35,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'Diagnostic tools with AI identify electrical problems remotely' },
      { year: 2028, event: 'Robotic assistants help with routine wiring and installation' },
      { year: 2033, event: 'Smart buildings self-diagnose and report electrical issues' },
      { year: 2037, event: 'Prefabricated electrical systems reduce need for on-site wiring' },
      { year: 2040, event: 'Electricians focus on complex systems integration and troubleshooting' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Electrical Systems',
        'Diagnostic Tools',
        'Automation Controls',
        'Energy Management'
      ],
      cognitive: [
        'System Integration',
        'Troubleshooting Analysis',
        'Safety Risk Assessment',
        'Energy Efficiency Planning'
      ]
    }
  },
  {
    id: 'pilot',
    title: 'Pilot',
    predictedYear: 2035,
    automationProbability: 70,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'Autonomous systems handle most flight operations with human oversight' },
      { year: 2026, event: 'Single-pilot operations become standard for commercial flights' },
      { year: 2030, event: 'AI systems can handle emergency situations with human-level skill' },
      { year: 2033, event: 'Cargo flights operate fully autonomously on major routes' },
      { year: 2035, event: 'Passenger flights begin transitioning to fully autonomous operation' }
    ],
    skillsNeeded: {
      technical: [
        'Automated Flight Systems',
        'Flight Management Tools',
        'Weather Analysis Software',
        'Emergency Response Systems'
      ],
      cognitive: [
        'Complex Decision Making',
        'Risk Assessment',
        'Route Optimization',
        'Systems Coordination'
      ]
    }
  },
  {
    id: 'real_estate_agent',
    title: 'Real Estate Agent',
    predictedYear: 2030,
    automationProbability: 80,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'Virtual tours and AI property matching reduce need for in-person showings' },
      { year: 2025, event: 'Blockchain-based smart contracts streamline property transactions' },
      { year: 2027, event: 'AI systems accurately predict property values and market trends' },
      { year: 2030, event: 'Digital platforms handle most property transactions with minimal human involvement' }
    ],
    skillsNeeded: {
      technical: [
        'Property Analysis Tools',
        'Virtual Tour Technology',
        'CRM Systems',
        'Market Prediction Models'
      ],
      cognitive: [
        'Property Valuation',
        'Market Opportunity Analysis',
        'Negotiation Strategy',
        'Client Need Assessment'
      ]
    }
  },
  {
    id: 'fitness_trainer',
    title: 'Fitness Trainer',
    predictedYear: 2035,
    automationProbability: 55,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI fitness apps provide personalized workout plans and form correction' },
      { year: 2026, event: 'Virtual reality fitness programs offer immersive training experiences' },
      { year: 2030, event: 'Wearable technology provides real-time coaching and health monitoring' },
      { year: 2033, event: 'Robotic systems assist with spotting and equipment setup' },
      { year: 2035, event: 'Fitness trainers focus on motivation and specialized training while AI handles routine guidance' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Fitness Equipment',
        'Exercise Analytics',
        'Remote Training Platforms',
        'Health Monitoring Systems'
      ],
      cognitive: [
        'Training Program Design',
        'Performance Assessment',
        'Nutrition Planning',
        'Injury Prevention'
      ]
    }
  },
  {
    id: 'social_worker',
    title: 'Social Worker',
    predictedYear: 2045,
    automationProbability: 30,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI systems help identify at-risk individuals and families' },
      { year: 2028, event: 'Automated case management systems optimize resource allocation' },
      { year: 2033, event: 'Virtual assistants provide basic support and information to clients' },
      { year: 2038, event: 'Predictive analytics prevent social issues before they escalate' },
      { year: 2045, event: 'Social workers maintain essential human connection while leveraging AI tools' }
    ]
  },
  {
    id: 'photographer',
    title: 'Photographer',
    predictedYear: 2032,
    automationProbability: 75,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI image enhancement and editing becomes indistinguishable from professional work' },
      { year: 2025, event: 'Automated camera systems capture optimal shots based on scene analysis' },
      { year: 2028, event: 'Generative AI creates photorealistic images from text descriptions' },
      { year: 2030, event: 'Drone and robot photographers handle routine event photography' },
      { year: 2032, event: 'Photographers focus on artistic direction while AI handles technical execution' }
    ],
    skillsNeeded: {
      technical: [
        'Digital Photography Equipment',
        'Image Processing Software',
        'Drone Photography',
        'Virtual Photography Tools'
      ],
      cognitive: [
        'Creative Conceptualization',
        'Visual Aesthetics',
        'Scene Composition',
        'Lighting Design'
      ]
    }
  },
  {
    id: 'farmer',
    title: 'Farmer',
    predictedYear: 2038,
    automationProbability: 60,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Autonomous tractors and harvesters operate with minimal supervision' },
      { year: 2026, event: 'Drone monitoring and AI crop analysis optimize growing conditions' },
      { year: 2030, event: 'Vertical farming with robotic tending becomes mainstream in urban areas' },
      { year: 2034, event: 'Precision agriculture reduces resource use while increasing yields' },
      { year: 2038, event: 'Farmers become agricultural system managers overseeing automated operations' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Farming Equipment',
        'Agricultural Analytics',
        'Automated Irrigation',
        'IoT Applications'
      ],
      cognitive: [
        'Production Planning',
        'Resource Management',
        'Ecosystem Assessment',
        'Market Trend Analysis'
      ]
    }
  },
  {
    id: 'construction_worker',
    title: 'Construction Worker',
    predictedYear: 2040,
    automationProbability: 45,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Prefabrication and modular construction reduce on-site labor needs' },
      { year: 2027, event: 'Robotic systems handle bricklaying and concrete pouring' },
      { year: 2032, event: 'Exoskeletons enhance worker capabilities and reduce injuries' },
      { year: 2036, event: '3D printing of building components becomes standard practice' },
      { year: 2040, event: 'Construction workers specialize in system integration and oversight of automated processes' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Construction Tools',
        'Building Information Models',
        'Safety Monitoring Systems',
        'Automated Equipment'
      ],
      cognitive: [
        'Construction Planning',
        'Quality Control Analysis',
        'Safety Risk Assessment',
        'Project Coordination'
      ]
    }
  },
  {
    id: 'actor',
    title: 'Actor',
    predictedYear: 2035,
    automationProbability: 60,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Deepfake technology creates realistic digital performances' },
      { year: 2026, event: 'AI-generated characters appear in supporting roles in major productions' },
      { year: 2030, event: 'Digital resurrection of deceased actors becomes common practice' },
      { year: 2033, event: 'Virtual actors indistinguishable from humans in many contexts' },
      { year: 2035, event: 'Human actors focus on motion capture and voice work for AI characters' }
    ],
    skillsNeeded: {
      technical: [
        'Motion Capture Technology',
        'Virtual Reality Acting',
        'Digital Character Creation',
        'Audio Processing Tools'
      ],
      cognitive: [
        'Character Development',
        'Performance Innovation',
        'Cross-media Adaptation',
        'Improvisation Skills'
      ]
    }
  },
  {
    id: 'insurance_agent',
    title: 'Insurance Agent',
    predictedYear: 2030,
    automationProbability: 85,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI systems automate policy recommendations and quotes' },
      { year: 2025, event: 'Blockchain-based smart contracts handle claims processing' },
      { year: 2027, event: 'Predictive analytics personalize coverage and pricing' },
      { year: 2030, event: 'Digital platforms handle most insurance transactions with minimal human involvement' }
    ],
    skillsNeeded: {
      technical: [
        'Insurtech Platforms',
        'Risk Assessment Tools',
        'Client Management Systems',
        'Claims Analysis Software'
      ],
      cognitive: [
        'Insurance Plan Design',
        'Risk Management',
        'Client Need Analysis',
        'Claims Strategy'
      ]
    }
  },
  {
    id: 'librarian',
    title: 'Librarian',
    predictedYear: 2035,
    automationProbability: 65,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI recommendation systems personalize reading suggestions' },
      { year: 2026, event: 'Automated systems handle cataloging and resource management' },
      { year: 2030, event: 'Virtual librarians provide 24/7 research assistance' },
      { year: 2033, event: 'Libraries transform into community technology hubs' },
      { year: 2035, event: 'Librarians focus on digital literacy education and community programming' }
    ],
    skillsNeeded: {
      technical: [
        'Digital Resource Management',
        'Information Retrieval',
        'Database Administration',
        'Multimedia Platforms'
      ],
      cognitive: [
        'Information Literacy',
        'Resource Planning',
        'User Needs Analysis',
        'Knowledge Organization'
      ]
    }
  },
  {
    id: 'musician',
    title: 'Musician',
    predictedYear: 2038,
    automationProbability: 40,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI composition tools generate professional-quality music in any style' },
      { year: 2026, event: 'Virtual instruments and performers reduce need for session musicians' },
      { year: 2030, event: 'AI-generated music becomes mainstream in commercial applications' },
      { year: 2034, event: 'Live performances incorporate AI-generated elements and augmentation' },
      { year: 2038, event: 'Musicians focus on emotional expression and innovation while collaborating with AI' }
    ],
    skillsNeeded: {
      technical: [
        'Digital Music Production',
        'Audio Processing Software',
        'Virtual Instruments',
        'Live Sound Systems'
      ],
      cognitive: [
        'Musical Innovation',
        'Cross-genre Integration',
        'Artistic Style Development',
        'Audience Experience Design'
      ]
    }
  },
  {
    id: 'security_guard',
    title: 'Security Guard',
    predictedYear: 2032,
    automationProbability: 75,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI surveillance systems detect suspicious activity with high accuracy' },
      { year: 2025, event: 'Security robots patrol predictable routes and environments' },
      { year: 2028, event: 'Biometric identification systems automate access control' },
      { year: 2030, event: 'Drone networks provide aerial surveillance of large areas' },
      { year: 2032, event: 'Security personnel shift to system monitoring and emergency response' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Surveillance Systems',
        'Security Equipment',
        'Emergency Response Tools',
        'Data Analysis Software'
      ],
      cognitive: [
        'Risk Assessment',
        'Emergency Response Planning',
        'Security Strategy Design',
        'Team Coordination'
      ]
    }
  },
  {
    id: 'veterinarian',
    title: 'Veterinarian',
    predictedYear: 2042,
    automationProbability: 35,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI diagnostic systems analyze animal symptoms and test results' },
      { year: 2027, event: 'Robotic systems assist with routine procedures and surgeries' },
      { year: 2032, event: 'Remote monitoring allows continuous tracking of animal health' },
      { year: 2037, event: 'Automated treatment systems administer medications and therapy' },
      { year: 2042, event: 'Veterinarians focus on complex cases and emotional support while AI handles routine care' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Diagnostic Tools',
        'Remote Monitoring Systems',
        'Surgical Assistance Robots',
        'Medical Data Analytics'
      ],
      cognitive: [
        'Diagnostic Decision Making',
        'Treatment Planning',
        'Animal Behavior Analysis',
        'Emergency Response'
      ]
    }
  },
  {
    id: 'event_planner',
    title: 'Event Planner',
    predictedYear: 2034,
    automationProbability: 60,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI systems coordinate scheduling and vendor management' },
      { year: 2026, event: 'Virtual reality enables remote event previews and planning' },
      { year: 2029, event: 'Automated systems handle logistics and resource allocation' },
      { year: 2032, event: 'Robotic staff manage setup, service, and breakdown' },
      { year: 2034, event: 'Event planners focus on creative direction and client relationships' }
    ],
    skillsNeeded: {
      technical: [
        'Event Management Platforms',
        'Virtual Preview Technology',
        'Digital Marketing Tools',
        'Budget Analysis Systems'
      ],
      cognitive: [
        'Creative Solution Design',
        'Resource Integration',
        'Risk Management',
        'Client Need Assessment'
      ]
    }
  },
  {
    id: 'plumber',
    title: 'Plumber',
    predictedYear: 2040,
    automationProbability: 35,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI diagnostic tools identify plumbing issues remotely' },
      { year: 2028, event: 'Robotic systems handle routine pipe repairs and installations' },
      { year: 2033, event: 'Smart plumbing systems self-diagnose and report problems' },
      { year: 2037, event: 'Prefabricated modular plumbing reduces need for custom work' },
      { year: 2040, event: 'Plumbers focus on system design and complex troubleshooting' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Pipe Diagnostics',
        'Automated Repair Tools',
        'Building Information Models',
        'Remote Diagnostic Systems'
      ],
      cognitive: [
        'System Troubleshooting',
        'Solution Design',
        'Preventive Maintenance',
        'Installation Planning'
      ]
    }
  },
  {
    id: 'interior_designer',
    title: 'Interior Designer',
    predictedYear: 2036,
    automationProbability: 55,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI visualization tools create photorealistic renderings of design concepts' },
      { year: 2026, event: 'Virtual reality enables immersive design experiences' },
      { year: 2030, event: 'Generative design algorithms create optimized space layouts' },
      { year: 2033, event: 'Automated systems handle material selection and procurement' },
      { year: 2036, event: 'Interior designers focus on client relationships and creative direction' }
    ],
    skillsNeeded: {
      technical: [
        'Interior Design Software',
        'Virtual Reality Design',
        'Material Selection Systems'
      ],
      cognitive: [
        'Interior Design',
        'Client Relationship Management',
        'Creative Direction'
      ]
    }
  },
  {
    id: 'personal_trainer',
    title: 'Personal Trainer',
    predictedYear: 2035,
    automationProbability: 55,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI fitness apps provide personalized workout plans and form correction' },
      { year: 2026, event: 'Virtual reality fitness programs offer immersive training experiences' },
      { year: 2030, event: 'Wearable technology provides real-time coaching and health monitoring' },
      { year: 2033, event: 'Robotic systems assist with spotting and equipment setup' },
      { year: 2035, event: 'Personal trainers focus on motivation and specialized training while AI handles routine guidance' }
    ],
    skillsNeeded: {
      technical: [
        'Fitness App Development',
        'Virtual Reality Training',
        'Wearable Technology'
      ],
      cognitive: [
        'Workout Design',
        'Motivational Coaching',
        'Client Relationship Management'
      ]
    }
  },
  {
    id: 'mechanical_engineer',
    title: 'Mechanical Engineer',
    predictedYear: 2038,
    automationProbability: 50,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Generative design algorithms create optimized mechanical components' },
      { year: 2027, event: 'Digital twins enable virtual testing of complex mechanical systems' },
      { year: 2031, event: 'AI systems automate routine design tasks and documentation' },
      { year: 2035, event: 'Self-improving robots build and iterate mechanical prototypes' },
      { year: 2038, event: 'Engineers focus on innovation and system architecture while AI handles detailed design' }
    ],
    skillsNeeded: {
      technical: [
        'Generative Design Algorithms',
        'Digital Twin Technology',
        'Self-Improving Robots'
      ],
      cognitive: [
        'Mechanical Design',
        'System Architecture',
        'Iterative Design'
      ]
    }
  },
  {
    id: 'civil_engineer',
    title: 'Civil Engineer',
    predictedYear: 2040,
    automationProbability: 45,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI systems optimize structural designs for safety and efficiency' },
      { year: 2027, event: 'Digital twins model infrastructure performance under various conditions' },
      { year: 2032, event: 'Automated compliance checking ensures designs meet all regulations' },
      { year: 2036, event: 'Self-healing materials reduce maintenance requirements' },
      { year: 2040, event: 'Civil engineers focus on sustainability and innovation while AI handles routine analysis' }
    ],
    skillsNeeded: {
      technical: [
        'Structural Analysis Software',
        'Digital Twin Technology',
        'Sustainability Tools'
      ],
      cognitive: [
        'Structural Design',
        'Sustainability Analysis',
        'Regulatory Compliance'
      ]
    }
  },
  {
    id: 'financial_advisor',
    title: 'Financial Advisor',
    predictedYear: 2032,
    automationProbability: 75,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'Robo-advisors provide automated investment management for most clients' },
      { year: 2025, event: 'AI systems generate personalized financial plans based on life goals' },
      { year: 2028, event: 'Predictive analytics forecast financial needs with high accuracy' },
      { year: 2030, event: 'Virtual advisors available 24/7 for financial guidance' },
      { year: 2032, event: 'Human advisors focus on high-net-worth clients and complex situations' }
    ],
    skillsNeeded: {
      technical: [
        'Robo-advisors',
        'Predictive Analytics',
        'Financial Planning Software'
      ],
      cognitive: [
        'Financial Planning',
        'Investment Management',
        'Risk Analysis'
      ]
    }
  },
  {
    id: 'physical_therapist',
    title: 'Physical Therapist',
    predictedYear: 2040,
    automationProbability: 35,
    riskLevel: 'low',
    milestones: [
      { year: 2023, event: 'AI systems create personalized rehabilitation programs' },
      { year: 2027, event: 'Robotic exoskeletons assist with patient movement and therapy' },
      { year: 2032, event: 'Virtual reality environments provide immersive rehabilitation experiences' },
      { year: 2036, event: 'Wearable sensors monitor patient progress and adjust therapy in real-time' },
      { year: 2040, event: 'Physical therapists focus on complex cases while AI and robots handle routine therapy' }
    ],
    skillsNeeded: {
      technical: [
        'Robotic Rehabilitation Systems',
        'Wearable Sensor Technology',
        'Virtual Rehabilitation Environments'
      ],
      cognitive: [
        'Rehabilitation Science',
        'Patient Care',
        'Therapy Planning'
      ]
    }
  },
  {
    id: 'nutritionist',
    title: 'Nutritionist',
    predictedYear: 2035,
    automationProbability: 60,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI apps create personalized meal plans based on health goals and preferences' },
      { year: 2026, event: 'Wearable devices monitor nutritional intake and metabolic responses' },
      { year: 2030, event: 'Predictive analytics forecast health outcomes based on dietary patterns' },
      { year: 2033, event: 'Virtual nutritionists provide 24/7 guidance and support' },
      { year: 2035, event: 'Human nutritionists focus on complex medical cases and psychological aspects of eating' }
    ],
    skillsNeeded: {
      technical: [
        'Nutritional Analysis Software',
        'Wearable Device Integration',
        'Predictive Analytics'
      ],
      cognitive: [
        'Nutritional Science',
        'Health Psychology',
        'Clinical Nutrition'
      ]
    }
  },
  {
    id: 'travel_agent',
    title: 'Travel Agent',
    predictedYear: 2028,
    automationProbability: 90,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI travel platforms create personalized itineraries based on preferences' },
      { year: 2025, event: 'Virtual reality previews allow travelers to experience destinations before booking' },
      { year: 2026, event: 'Predictive pricing algorithms optimize travel timing and costs' },
      { year: 2028, event: 'Digital platforms handle most travel arrangements with minimal human involvement' }
    ],
    skillsNeeded: {
      technical: [
        'Travel Booking Platforms',
        'Predictive Analytics',
        'Virtual Reality Experiences'
      ],
      cognitive: [
        'Travel Planning',
        'Customer Service',
        'Market Research'
      ]
    }
  },
  {
    id: 'paralegal',
    title: 'Paralegal',
    predictedYear: 2030,
    automationProbability: 80,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI systems automate document review and legal research' },
      { year: 2025, event: 'Natural language processing extracts relevant information from legal documents' },
      { year: 2027, event: 'Automated systems prepare standard legal documents and filings' },
      { year: 2030, event: 'Paralegals transition to AI system operators and quality control specialists' }
    ]
  },
  {
    id: 'graphic_designer',
    title: 'Graphic Designer',
    predictedYear: 2033,
    automationProbability: 65,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI tools generate multiple design concepts based on text prompts' },
      { year: 2026, event: 'Automated systems create brand-consistent designs across platforms' },
      { year: 2029, event: 'AI handles routine design tasks like resizing and formatting' },
      { year: 2031, event: 'Generative design systems create complete visual identities' },
      { year: 2033, event: 'Designers focus on creative direction and strategy while AI handles execution' }
    ],
    skillsNeeded: {
      technical: [
        'Design Software',
        'Branding Tools',
        'Visual Identity Systems'
      ],
      cognitive: [
        'Creative Direction',
        'Brand Strategy',
        'Design Execution'
      ]
    }
  },
  {
    id: 'hotel_manager',
    title: 'Hotel Manager',
    predictedYear: 2037,
    automationProbability: 55,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI systems optimize room pricing and staff scheduling' },
      { year: 2026, event: 'Automated check-in and service robots handle routine guest interactions' },
      { year: 2030, event: 'Smart building systems manage energy use and maintenance needs' },
      { year: 2034, event: 'Predictive analytics forecast occupancy and resource requirements' },
      { year: 2037, event: 'Hotel managers focus on guest experience strategy and staff development' }
    ],
    skillsNeeded: {
      technical: [
        'Hotel Management Software',
        'Energy Management Systems',
        'Guest Experience Optimization'
      ],
      cognitive: [
        'Guest Service',
        'Staff Training',
        'Strategic Planning'
      ]
    }
  },
  {
    id: 'optometrist',
    title: 'Optometrist',
    predictedYear: 2038,
    automationProbability: 45,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI diagnostic systems detect eye conditions from retinal scans' },
      { year: 2027, event: 'Automated refraction systems determine prescriptions with high accuracy' },
      { year: 2031, event: 'Remote eye exams become standard for routine checkups' },
      { year: 2035, event: 'AI systems predict eye health issues before symptoms appear' },
      { year: 2038, event: 'Optometrists focus on complex cases and treatment while AI handles routine exams' }
    ],
    skillsNeeded: {
      technical: [
        'Eye Exam Software',
        'Remote Monitoring Systems',
        'Prescription Generation Algorithms'
      ],
      cognitive: [
        'Eye Health Analysis',
        'Patient Care',
        'Medical Diagnosis'
      ]
    }
  },
  {
    id: 'baker',
    title: 'Baker',
    predictedYear: 2036,
    automationProbability: 55,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Automated systems handle mixing and kneading in commercial bakeries' },
      { year: 2026, event: 'AI recipe generation creates novel baked goods optimized for taste and texture' },
      { year: 2030, event: 'Robotic systems handle routine baking tasks with precision' },
      { year: 2033, event: '3D food printing creates complex pastries and decorations' },
      { year: 2036, event: 'Bakers focus on artisanal creations and innovation while automation handles production' }
    ],
    skillsNeeded: {
      technical: [
        'Smart Baking Equipment',
        'Recipe Management Systems',
        'Food Analysis Tools',
        'Automated Production Lines'
      ],
      cognitive: [
        'Product Innovation',
        'Quality Control',
        'Process Optimization',
        'Market Need Analysis'
      ]
    }
  },
  {
    id: 'urban_planner',
    title: 'Urban Planner',
    predictedYear: 2038,
    automationProbability: 50,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI simulations model traffic flow and urban development outcomes' },
      { year: 2027, event: 'Digital twins of cities enable testing of planning scenarios' },
      { year: 2031, event: 'Generative design algorithms create optimized urban layouts' },
      { year: 2035, event: 'Automated systems ensure compliance with regulations and sustainability goals' },
      { year: 2038, event: 'Urban planners focus on community engagement and policy while AI handles technical analysis' }
    ],
    skillsNeeded: {
      technical: [
        'Urban Simulation Software',
        'Digital Twin Technology',
        'Generative Design Algorithms'
      ],
      cognitive: [
        'Urban Planning',
        'Community Engagement',
        'Policy Analysis'
      ]
    }    
  },
  {
    id: 'florist',
    title: 'Florist',
    predictedYear: 2034,
    automationProbability: 60,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI design systems generate floral arrangement concepts' },
      { year: 2026, event: 'Automated systems handle flower processing and preservation' },
      { year: 2029, event: 'Robotic systems create standard arrangements with precision' },
      { year: 2032, event: 'Virtual reality enables remote design and approval of custom arrangements' },
      { year: 2034, event: 'Florists focus on artistic direction and special events while automation handles production' }
    ],
    skillsNeeded: {
      technical: [
        'Floral Design Software',
        'Smart Care Systems',
        'Order Management Tools',
        'Inventory Prediction'
      ],
      cognitive: [
        'Artistic Design',
        'Color Coordination',
        'Seasonal Planning',
        'Customer Need Analysis'
      ]
    }
  },
  {
    id: 'flight_attendant',
    title: 'Flight Attendant',
    predictedYear: 2038,
    automationProbability: 55,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Automated systems handle routine passenger information and services' },
      { year: 2027, event: 'Service robots assist with meal service and basic passenger needs' },
      { year: 2031, event: 'Virtual reality entertainment reduces need for in-flight service' },
      { year: 2035, event: 'Advanced monitoring systems detect passenger health and safety issues' },
      { year: 2038, event: 'Flight attendants focus on emergency management and premium service' }
    ],
    skillsNeeded: {
      technical: [
        'Service Robot Systems',
        'Virtual Reality Entertainment',
        'Advanced Monitoring Systems'
      ],
      cognitive: [
        'Customer Service',
        'Emergency Management',
        'Cultural Awareness'
      ]
    }
  },
  {
    id: 'jeweler',
    title: 'Jeweler',
    predictedYear: 2035,
    automationProbability: 60,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'CAD systems and 3D printing create precise jewelry designs' },
      { year: 2026, event: 'Robotic systems handle routine cutting and polishing tasks' },
      { year: 2030, event: 'AI design systems generate custom jewelry based on customer preferences' },
      { year: 2033, event: 'Automated systems handle quality control and stone setting' },
      { year: 2035, event: 'Jewelers focus on artistic direction and custom high-end pieces' }
    ],
    skillsNeeded: {
      technical: [
        'Jewelry Design Software',
        'Automated Cutting Systems',
        'Quality Control Tools',
        '3D Printing Technology'  
      ],
      cognitive: [
        'Artistic Design',
        'Color Coordination',
        'Seasonal Planning',
        'Customer Need Analysis'
      ]
    }
  },
  {
    id: 'massage_therapist',
    title: 'Massage Therapist',
    predictedYear: 2040,
    automationProbability: 40,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Robotic massage chairs provide basic therapeutic treatments' },
      { year: 2028, event: 'Advanced robotic systems adapt to individual body structures' },
      { year: 2033, event: 'AI systems create personalized treatment plans based on health data' },
      { year: 2037, event: 'Haptic feedback systems allow remote massage therapy' },
      { year: 2040, event: 'Massage therapists focus on emotional well-being and complex cases' }
    ]
  },
  {
    id: 'web_developer',
    title: 'Web Developer',
    predictedYear: 2032,
    automationProbability: 70,
    riskLevel: 'high',
    milestones: [
      { year: 2023, event: 'AI systems generate complete websites from text descriptions' },
      { year: 2025, event: 'Automated testing and optimization improve site performance' },
      { year: 2028, event: 'Self-healing code fixes bugs and security issues automatically' },
      { year: 2030, event: 'No-code platforms handle most business website needs' },
      { year: 2032, event: 'Web developers focus on complex applications and innovation' }
    ]
  },
  {
    id: 'tailor',
    title: 'Tailor',
    predictedYear: 2036,
    automationProbability: 55,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'Body scanning technology creates precise digital measurements' },
      { year: 2027, event: 'Automated cutting systems ensure perfect pattern matching' },
      { year: 2031, event: 'Robotic systems handle routine alterations with high precision' },
      { year: 2034, event: '3D printing of custom garments reduces need for traditional tailoring' },
      { year: 2036, event: 'Tailors focus on high-end custom designs and artistic elements' }
    ]
  },
  {
    id: 'writer',
    title: 'Writer',
    predictedYear: 2038,
    automationProbability: 40,
    riskLevel: 'medium',
    milestones: [
      { year: 2023, event: 'AI composition tools generate professional-quality music in any style' },
      { year: 2026, event: 'Virtual instruments and performers reduce need for session musicians' },
      { year: 2030, event: 'AI-generated music becomes mainstream in commercial applications' },
      { year: 2034, event: 'Live performances incorporate AI-generated elements and augmentation' },
      { year: 2038, event: 'Musicians focus on emotional expression and innovation while collaborating with AI' }
    ],
    skillsNeeded: {
      technical: [
        'Content Creation Platforms',
        'Digital Publishing Tools',
        'Collaborative Writing Systems',
        'Analytics Applications'
      ],
      cognitive: [
        'Creative Writing',
        'Narrative Structure',
        'Market Trend Analysis',
        'Audience Insight'
      ]
    }
  }
]; 