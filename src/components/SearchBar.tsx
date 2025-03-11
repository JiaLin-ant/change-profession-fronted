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

  // ... 其余代码保持不变

  return (
    // ... 组件渲染代码
  );
};

export default SearchBar; 