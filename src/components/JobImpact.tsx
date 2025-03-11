import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useJob } from '../contexts/JobContext';
import '../styles/JobImpact.css';

// 文本翻译
const translations = {
  zh: {
    title: '技能提升指南',
    description: 'AI 时代必备的核心能力与学习方向',
    technical: '技术能力',
    cognitive: '认知能力'
  },
  en: {
    title: 'Skills Development Guide',
    description: 'Essential capabilities for the AI era',
    technical: 'Technical Skills',
    cognitive: 'Cognitive Skills'
  }
};

// 默认技能列表，当职业没有特定技能时使用
const defaultSkills = {
  technical: [
    'AI 工具使用与集成能力',
    '数据分析与解读能力',
    '数字化工作流程掌握',
    '新技术快速学习能力'
  ],
  cognitive: [
    '复杂问题解决能力',
    '系统性思维方式',
    '创新与创造性思维',
    '跨领域知识整合'
  ]
};

const JobImpact: React.FC = () => {
  const { language } = useLanguage();
  const { selectedJob } = useJob();
  
  if (!selectedJob) {
    return null;
  }
  
  // 使用职业特定技能或默认技能
  const skills = selectedJob.skillsNeeded || defaultSkills;
  const text = translations[language];
  
  return (
    <motion.div 
      className="job-impact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="impact-header">
        <h3>{text.title}</h3>
        <p className="impact-description">{text.description}</p>
      </div>
      
      <div className="impact-content">
        <div className="impact-details">
          <div className="impact-section technical">
            <div className="section-header">
              <h4>{text.technical}</h4>
              <span className="section-icon">💻</span>
            </div>
            <ul>
              {skills.technical.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="impact-section cognitive">
            <div className="section-header">
              <h4>{text.cognitive}</h4>
              <span className="section-icon">🧠</span>
            </div>
            <ul>
              {skills.cognitive.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobImpact; 