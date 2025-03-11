import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 切换下拉菜单的开关状态
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 选择语言
  const selectLanguage = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language-switcher-container" ref={dropdownRef}>
      <motion.button
        className="language-switcher-button"
        onClick={toggleDropdown}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {language === 'en' ? 'English' : '中文'} <span className="dropdown-arrow">▼</span>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="language-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className={`language-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => selectLanguage('en')}
            >
              English
            </div>
            <div 
              className={`language-option ${language === 'zh' ? 'active' : ''}`}
              onClick={() => selectLanguage('zh')}
            >
              中文
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher; 