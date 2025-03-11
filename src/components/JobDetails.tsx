import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useJob } from '../contexts/JobContext';
import CountdownClock from './CountdownClock';
import ProbabilityMeter from './ProbabilityMeter';
import Timeline from './Timeline';
import JobIcon3D from './JobIcon3D';
import JobImpact from './JobImpact';

const JobDetails: React.FC = () => {
  const { t } = useLanguage();
  const { selectedJob } = useJob();
  
  // 组件挂载和更新时记录
  useEffect(() => {
    if (selectedJob) {
      console.log('JobDetails mounted/updated with job:', selectedJob.title);
      
      return () => {
        console.log('JobDetails unmounting from job:', selectedJob.title);
      };
    }
  }, [selectedJob]);
  
  if (!selectedJob) {
    return null;
  }
  
  console.log('Rendering JobDetails for:', selectedJob.title, 'with ID:', selectedJob.id);
  
  return (
    <motion.div 
      className="job-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      key={selectedJob.id}
    >
      <h2>{selectedJob.title}</h2>
      
      <div className="data-visualization">
        <div className="visualization-row">
          <CountdownClock 
            predictedYear={selectedJob.predictedYear} 
            automationProbability={selectedJob.automationProbability}
          />
          <ProbabilityMeter probability={selectedJob.automationProbability} />
        </div>
        
        <div className="visualization-row">
          <JobImpact />
          <Timeline milestones={selectedJob.milestones} />
        </div>

      </div>
    </motion.div>
  );
};

export default JobDetails; 