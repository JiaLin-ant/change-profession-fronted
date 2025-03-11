import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface CountdownClockProps {
  predictedYear: number;
  automationProbability: number;
}

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownClock: React.FC<CountdownClockProps> = ({ predictedYear, automationProbability }) => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // 添加秒针动画状态
  const [secondAngle, setSecondAngle] = useState(0);

  // 计算剩余时间，但只更新秒数
  const calculateSeconds = useCallback(() => {
    const now = new Date();
    const targetDate = new Date(predictedYear, 0, 1);
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference > 0) {
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTimeLeft(prev => ({
        ...prev,
        seconds
      }));
    } else {
      setTimeLeft(prev => ({
        ...prev,
        seconds: 0
      }));
    }
  }, [predictedYear]);

  // 计算所有时间单位
  const calculateAllTimeUnits = useCallback(() => {
    const now = new Date();
    const targetDate = new Date(predictedYear, 0, 1);
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference > 0) {
      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const years = Math.floor(days / 365);
      const months = Math.floor((days % 365) / 30);
      const remainingDays = days % 30;
      
      setTimeLeft({
        years,
        months,
        days: remainingDays,
        hours,
        minutes,
        seconds
      });
    } else {
      setTimeLeft({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    }
  }, [predictedYear]);

  // 更新秒针角度
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const seconds = now.getSeconds();
      const angle = seconds * 6; // 每秒6度
      setSecondAngle(angle);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // 每秒更新秒数
  useEffect(() => {
    calculateSeconds();
    const secondsTimer = setInterval(calculateSeconds, 1000);
    
    return () => {
      clearInterval(secondsTimer);
    };
  }, [calculateSeconds]);

  // 每分钟更新所有时间单位
  useEffect(() => {
    calculateAllTimeUnits();
    
    // 计算到下一分钟开始的毫秒数
    const now = new Date();
    const nextMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0, 0);
    const delay = nextMinute.getTime() - now.getTime();
    
    // 先设置一个定时器到下一分钟开始
    const initialTimer = setTimeout(() => {
      calculateAllTimeUnits();
      
      // 然后每分钟更新一次
      const minuteTimer = setInterval(calculateAllTimeUnits, 60000);
      
      return () => {
        clearInterval(minuteTimer);
      };
    }, delay);
    
    return () => {
      clearTimeout(initialTimer);
    };
  }, [calculateAllTimeUnits]);

  // 获取紧迫感颜色
  const getUrgencyColor = () => {
    if (timeLeft.years <= 2) return '#F44336'; // 红色 - 非常紧急
    if (timeLeft.years <= 5) return '#FF9800'; // 橙色 - 中等紧急
    return '#2196F3'; // 蓝色 - 不太紧急
  };

  // 获取紧迫感文本
  const getUrgencyText = () => {
    if (timeLeft.years <= 2) return t('countdown.highUrgency');
    if (timeLeft.years <= 5) return t('countdown.mediumUrgency');
    return '';  // 低度紧迫时不显示文本
  };

  // 判断是否显示紧迫感指示器
  const showUrgencyIndicator = timeLeft.years <= 5;

  // 计算进度百分比
  const calculateProgress = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const totalYears = predictedYear - currentYear;
    const elapsedYears = totalYears - timeLeft.years;
    return Math.min(100, Math.max(0, (elapsedYears / totalYears) * 100));
  }, [predictedYear, timeLeft.years]);

  // 生成时钟刻度
  const clockTicks = useMemo(() => {
    return Array.from({ length: 12 }).map((_, index) => {
      const angle = (index * 30) * (Math.PI / 180);
      const x = 50 + 40 * Math.sin(angle);
      const y = 50 - 40 * Math.cos(angle);
      return { x, y, angle };
    });
  }, []);

  // 计算时针和分针的角度
  const { hourAngle, minuteAngle } = useMemo(() => {
    const progress = calculateProgress / 100;
    const hourAngle = progress * 360;
    const minuteAngle = (progress * 12) % 1 * 360;
    return { hourAngle, minuteAngle };
  }, [calculateProgress]);

  // 静态数字显示
  const StaticDigit = ({ value, label }: { value: number; label: string }) => {
    return (
      <div className="time-unit">
        <span 
          className="time-value"
          style={{ color: getUrgencyColor() }}
        >
          {value < 10 ? `0${value}` : value}{label}
        </span>
      </div>
    );
  };

  // 动态秒数显示
  const SecondDigit = ({ value }: { value: number }) => (
    <div className="time-unit">
      <AnimatePresence mode="wait">
        <motion.span 
          key={value}
          className="time-value"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: getUrgencyColor() }}
        >
          {value < 10 ? `0${value}` : value}
        </motion.span>
      </AnimatePresence>
      <span className="time-label">秒</span>
    </div>
  );

  return (
    <motion.div 
      className="countdown-clock"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3>{t('countdown.title')}</h3>
      
      <div className="predicted-year-banner">
        {t('countdown.predictedYear')} <span className="highlight-year">{predictedYear}</span>
      </div>
      
      <div className="clock-container">
        <div className="clock-background">
          <div className="clock-face">
            {/* 时钟刻度 */}
            {clockTicks.map((tick, index) => (
              <div 
                key={index} 
                className="clock-tick"
                style={{
                  left: `${tick.x}%`,
                  top: `${tick.y}%`,
                  transform: `translate(-50%, -50%) rotate(${tick.angle}rad)`
                }}
              />
            ))}
            
            {/* 时针 */}
            <div 
              className="clock-hand hour-hand"
              style={{ transform: `translateX(-50%) rotate(${hourAngle}deg)` }}
            />
            
            {/* 分针 */}
            <div 
              className="clock-hand minute-hand"
              style={{ transform: `translateX(-50%) rotate(${minuteAngle}deg)` }}
            />
            
            {/* 秒针 */}
            <div 
              className="clock-hand second-hand"
              style={{ transform: `translateX(-50%) rotate(${secondAngle}deg)` }}
            />
            
            {/* 中心点 */}
            <div className="clock-center" />
            
            {/* 进度环 */}
            <svg className="progress-ring" viewBox="0 0 100 100">
              <circle 
                className="progress-ring-circle-bg"
                cx="50" 
                cy="50" 
                r="45"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="5"
              />
              <circle 
                className="progress-ring-circle"
                cx="50" 
                cy="50" 
                r="45"
                fill="none"
                stroke={getUrgencyColor()}
                strokeWidth="5"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - calculateProgress / 100)}`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        
        <div className="time-display">
          <div className="time-units">
            <StaticDigit value={timeLeft.years} label={t('countdown.years')} />
            <StaticDigit value={timeLeft.months} label={t('countdown.months')} />
            <StaticDigit value={timeLeft.days} label={t('countdown.days')} />
            <StaticDigit value={timeLeft.hours} label={t('countdown.hours')} />
          </div>
          
          <div className="time-units time-units-small">
            <StaticDigit value={timeLeft.minutes} label="分" />
            <SecondDigit value={timeLeft.seconds} />
          </div>
          
          {showUrgencyIndicator && (
            <motion.div 
              className="urgency-indicator"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
              style={{ 
                backgroundColor: `${getUrgencyColor()}20`,
                borderColor: getUrgencyColor()
              }}
            >
              <span className="urgency-dot" style={{ backgroundColor: getUrgencyColor() }}></span>
              <span className="urgency-text" style={{ color: getUrgencyColor() }}>
                {getUrgencyText()}
              </span>
            </motion.div>
          )}
        </div>
        
        <div className="automation-probability-container">
          <div className="probability-header">
            <span className="probability-label">{t('countdown.automationProbability')}</span>
            <span className="probability-value">{automationProbability}%</span>
          </div>
          
          <div className="probability-bar-container">
            <motion.div 
              className="probability-bar" 
              initial={{ width: 0 }}
              animate={{ width: `${automationProbability}%` }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ backgroundColor: getUrgencyColor() }}
            />
          </div>
          
          <div className="probability-scale">
            <span>{t('countdown.low')}</span>
            <span>{t('countdown.medium')}</span>
            <span>{t('countdown.high')}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownClock; 