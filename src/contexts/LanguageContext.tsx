import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '../data/translations';

type Language = 'en' | 'zh';

// 定义翻译对象的类型
type TranslationsType = typeof translations;
type TranslationKeys = keyof TranslationsType['en'] | keyof TranslationsType['zh'];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // 默认英文

  const t = (key: string): string => {
    // 使用索引访问操作符和类型断言的组合
    const currentTranslations = translations[language];
    return key in currentTranslations 
      ? (currentTranslations as any)[key] 
      : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 