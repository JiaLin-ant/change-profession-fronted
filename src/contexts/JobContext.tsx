import React, { createContext, useState, useContext, useEffect } from 'react';
import { Job } from '../types/types';
import { jobsData } from '../data/jobsData';
import { jobsDataEn } from '../data/jobsDataEn';
import { useLanguage } from './LanguageContext';

interface JobContextType {
  selectedJob: Job | null;
  setSelectedJob: (job: Job) => void;
  availableJobs: Job[];
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedJob, setSelectedJobState] = useState<Job | null>(null);
  const { language } = useLanguage();
  
  // 根据当前语言选择职业数据
  const currentJobsData = language === 'en' ? jobsDataEn : jobsData;
  
  // 从URL获取职业ID
  const getJobIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('job');
  };
  
  // 设置URL中的职业ID
  const setJobIdInUrl = (jobId: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('job', jobId);
    window.history.pushState({}, '', url);
  };
  
  // 当语言改变时更新选中的职业
  useEffect(() => {
    if (selectedJob) {
      const jobId = selectedJob.id;
      const newJob = currentJobsData.find(job => job.id === jobId);
      if (newJob) {
        console.log('Updating job for language change:', language);
        setSelectedJobState(newJob);
      }
    }
  }, [language, currentJobsData, selectedJob]);
  
  // 设置选中的职业
  const setSelectedJob = (job: Job) => {
    console.log('Setting selected job:', job.title, 'Language:', language);
    setSelectedJobState(job);
    localStorage.setItem('selectedJobId', job.id);
    setJobIdInUrl(job.id);
  };
  
  // 在组件加载时从URL或本地存储加载选择的职业ID，或使用默认职业
  useEffect(() => {
    // 首先尝试从URL获取职业ID
    const urlJobId = getJobIdFromUrl();
    // 然后尝试从localStorage获取职业ID
    const savedJobId = localStorage.getItem('selectedJobId');
    
    let jobToUse: Job | null = null;
    
    if (urlJobId) {
      // 如果URL中有职业ID，则使用它
      jobToUse = currentJobsData.find(job => job.id === urlJobId) || null;
      console.log('Using job from URL:', urlJobId, jobToUse?.title);
    } else if (savedJobId) {
      // 如果localStorage中有职业ID，则使用它并更新URL
      jobToUse = currentJobsData.find(job => job.id === savedJobId) || null;
      console.log('Using job from localStorage:', savedJobId, jobToUse?.title);
      if (jobToUse) {
        setJobIdInUrl(jobToUse.id);
      }
    }
    
    // 如果没有找到职业，则使用默认职业
    if (!jobToUse) {
      jobToUse = currentJobsData.find(job => job.id === "programmer") || currentJobsData[0];
      console.log('Using default job:', jobToUse.title);
      setJobIdInUrl(jobToUse.id);
    }
    
    setSelectedJobState(jobToUse);
  }, [language, currentJobsData]);
  
  return (
    <JobContext.Provider value={{ selectedJob, setSelectedJob, availableJobs: currentJobsData }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJob must be used within a JobProvider');
  }
  return context;
}; 