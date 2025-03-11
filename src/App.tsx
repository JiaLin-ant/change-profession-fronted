import React from 'react';
import JobSearch from './components/JobSearch';
import JobDetails from './components/JobDetails';
import { LanguageProvider } from './contexts/LanguageContext';
import { JobProvider } from './contexts/JobContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './contexts/LanguageContext';
import { useJob } from './contexts/JobContext';
import './App.css';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const { selectedJob } = useJob();
  
  return (
    <div className="app">
      <header>
        <LanguageSwitcher />
        <h1>{t('app.title')}</h1>
        <p>{t('app.subtitle')}</p>
      </header>
      <main>
        <JobSearch />
        {selectedJob && <JobDetails />}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <JobProvider>
        <AppContent />
      </JobProvider>
    </LanguageProvider>
  );
};

export default App; 