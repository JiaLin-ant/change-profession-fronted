import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface ProbabilityMeterProps {
  probability: number; // 0-100
}

const ProbabilityMeter: React.FC<ProbabilityMeterProps> = ({ probability }) => {
  const { t } = useLanguage();
  const [animatedValue, setAnimatedValue] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(probability);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [probability]);
  
  // 根据概率值确定颜色
  const getColor = () => {
    if (probability >= 80) return '#F44336'; // 红色 - 高风险
    if (probability >= 50) return '#FF9800'; // 橙色 - 中风险
    return '#4CAF50'; // 绿色 - 低风险
  };
  
  // 根据概率值确定风险等级文本
  const getRiskLevelText = () => {
    if (probability >= 80) return '高度风险';
    if (probability >= 50) return '中度风险';
    return '低度风险';
  };
  
  // 根据概率值确定描述文本
  const getDescriptionText = () => {
    if (probability >= 80) {
      return '该职业极有可能被AI完全自动化，建议尽快转型或提升技能。';
    } else if (probability >= 50) {
      return '该职业有较大可能被部分自动化，需要适应AI辅助工作模式。';
    } else {
      return '该职业短期内受AI影响较小，但仍需关注技术发展趋势。';
    }
  };
  
  // 计算圆环进度
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference * (1 - animatedValue / 100);
  
  const getRiskLevel = () => {
    if (probability >= 70) return { level: 'high', color: 'var(--danger-color)' };
    if (probability >= 40) return { level: 'medium', color: 'var(--warning-color)' };
    return { level: 'low', color: 'var(--success-color)' };
  };
  
  const risk = getRiskLevel();
  const riskTitle = risk.level === 'high' 
    ? t('probability.highRisk') 
    : risk.level === 'medium' 
      ? t('probability.mediumRisk') 
      : t('probability.lowRisk');
  
  const riskDescription = risk.level === 'high' 
    ? t('probability.highRiskDesc') 
    : risk.level === 'medium' 
      ? t('probability.mediumRiskDesc') 
      : t('probability.lowRiskDesc');
  
  return (
    <motion.div 
      className="probability-meter-compact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3>{t('probability.title')}</h3>
      
      <div className="meter-content-compact">
        <div className="gauge-and-risk">
          <div className="circular-gauge-compact">
            <svg viewBox="0 0 120 120">
              {/* 背景圆环 */}
              <circle 
                cx="60" 
                cy="60" 
                r="45" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.1)" 
                strokeWidth="8"
              />
              
              {/* 进度圆环 */}
              <circle 
                className="progress-ring"
                cx="60" 
                cy="60" 
                r="45" 
                fill="none" 
                stroke={getColor()} 
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
              
              {/* 概率值 */}
              <text 
                x="60" 
                y="65" 
                textAnchor="middle" 
                fontSize="20" 
                fontWeight="bold"
                fill="white"
              >
                {animatedValue}%
              </text>
            </svg>
          </div>
          
          <div className="risk-info">
            <div className="risk-level" style={{ color: getColor() }}>
              {riskTitle}
            </div>
            <div className="risk-description-compact">
              {riskDescription}
            </div>
            <div className="risk-scale">
              <span className="risk-low">Low</span>
              <span className="risk-medium">Medium</span>
              <span className="risk-high">High</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProbabilityMeter; 