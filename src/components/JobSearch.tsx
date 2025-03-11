import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Job } from '../types/types';
import { useJob } from '../contexts/JobContext';
import { useLanguage } from '../contexts/LanguageContext';

const JobSearch: React.FC = () => {
  const { t } = useLanguage();
  const { selectedJob, setSelectedJob, availableJobs } = useJob();
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(availableJobs);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // 处理搜索输入变化
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setFilteredJobs(availableJobs);
    } else {
      const filtered = availableJobs.filter((job: Job) => 
        job.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
    
    setIsDropdownOpen(true);
  };
  
  // 处理职业选择
  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
    setSearchTerm(job.title);
    setIsDropdownOpen(false);
  };
  
  // 处理下拉菜单切换
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止事件冒泡
    if (!isDropdownOpen) {
      setFilteredJobs(availableJobs);
    }
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // 初始化过滤后的职业列表
  useEffect(() => {
    setFilteredJobs(availableJobs);
  }, [availableJobs]);
  
  return (
    <motion.div 
      className="job-search"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{t('search.title')}</h2>
      <div className="search-container" ref={dropdownRef}>
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder={t('search.placeholder')}
            value={searchTerm}
            onChange={handleSearchChange}
            onClick={() => setIsDropdownOpen(true)}
          />
          <button 
            className="dropdown-toggle" 
            onClick={toggleDropdown}
          >
            {isDropdownOpen ? '▲' : '▼'}
          </button>
        </div>
        
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              className="dropdown-list"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <li 
                    key={job.id} 
                    className="dropdown-item"
                    onClick={() => handleJobSelect(job)}
                  >
                    {job.title}
                  </li>
                ))
              ) : (
                <li className="dropdown-item no-results">{t('search.noResults')}</li>
              )}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default JobSearch; 