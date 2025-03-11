import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface JobSubmissionFormProps {
  onClose: () => void;
}

const JobSubmissionForm: React.FC<JobSubmissionFormProps> = ({ onClose }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobTitle.trim()) {
      setError('请输入职业名称');
      return;
    }
    
    setSubmitting(true);
    setError('');
    
    try {
      // 将提交的职业保存到本地存储，以便后续处理
      const submissions = JSON.parse(localStorage.getItem('jobSubmissions') || '[]');
      submissions.push({
        title: jobTitle.trim(),
        timestamp: new Date().toISOString(),
        id: `submission_${Date.now()}`
      });
      localStorage.setItem('jobSubmissions', JSON.stringify(submissions));
      
      // 模拟网络请求
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setJobTitle('');
    } catch (err) {
      setError('提交失败，请稍后再试');
      console.error('提交失败:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="job-submission-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="form-header">
        <h3>提交新职业</h3>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="jobTitle">职业名称</label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="请输入您的职业名称"
              disabled={submitting}
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-button"
              onClick={onClose}
              disabled={submitting}
            >
              取消
            </button>
            <button 
              type="submit" 
              className="submit-button"
              disabled={submitting}
            >
              {submitting ? '提交中...' : '提交'}
            </button>
          </div>
        </form>
      ) : (
        <div className="submission-success">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="success-icon"
          >
            ✓
          </motion.div>
          <p>感谢您的提交！</p>
          <p>我们会定期审核新职业建议，并在未来的更新中添加。</p>
          <button 
            className="close-success-button"
            onClick={onClose}
          >
            关闭
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default JobSubmissionForm; 