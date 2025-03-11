import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Milestone } from '../types/types';
import '../styles/Timeline.css';

interface TimelineProps {
  milestones: Milestone[];
}

const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
  const { t } = useLanguage();  // 确保正确使用语言上下文

  // 按年份排序
  const sortedMilestones = [...milestones].sort((a, b) => a.year - b.year);
  
  return (
    <motion.div 
      className="timeline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h3>{t('timeline.title')}</h3>  {/* 使用翻译键获取标题 */}
      <div className="timeline-container">
        {sortedMilestones.map((milestone, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-year">{milestone.year}</div>
              <div className="timeline-event">{milestone.event}</div>
            </div>
          </motion.div>
        ))}
        <div className="timeline-line" />
      </div>
    </motion.div>
  );
};

export default Timeline; 