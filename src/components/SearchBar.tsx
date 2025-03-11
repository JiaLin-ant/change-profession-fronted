import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useJob } from '../contexts/JobContext';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/SearchBar.css';

const SearchBar: React.FC = () => {
  const { t, language } = useLanguage();
  const { jobs, setSelectedJob } = useJob();
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  // 监听语言变化，清空搜索
  useEffect(() => {
    setSearchTerm('');
    setShowResults(false);
  }, [language]);

  // Either use the variables or remove them if not needed
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowResults(e.target.value.length > 0);
  };

  const handleSelectJob = (job: any) => {
    setSelectedJob(job);
    setShowResults(false);
  };

  // ... 其余代码保持不变

  return (
    <div className="search-container">
      <input 
        type="text" 
        value={searchTerm}
        onChange={handleSearch}
        placeholder={t('searchJobs')}
      />
      {/* ... 组件渲染代码 */}
    </div>
  );
};

export default SearchBar; 