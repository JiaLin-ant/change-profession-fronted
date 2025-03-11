import React, { useEffect, useState } from 'react';

interface JobSubmission {
  id: string;
  title: string;
  timestamp: string;
}

interface AdminPageProps {
  onBack: () => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ onBack }) => {
  const [submissions, setSubmissions] = useState<JobSubmission[]>([]);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  
  useEffect(() => {
    if (authenticated) {
      // 从本地存储加载提交的职业
      const savedSubmissions = JSON.parse(localStorage.getItem('jobSubmissions') || '[]');
      setSubmissions(savedSubmissions);
    }
  }, [authenticated]);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 简单的密码验证，实际应用中应使用更安全的方法
    if (password === 'admin123') {
      setAuthenticated(true);
    } else {
      alert('密码错误');
    }
  };
  
  const handleClearSubmissions = () => {
    if (window.confirm('确定要清空所有提交记录吗？')) {
      localStorage.removeItem('jobSubmissions');
      setSubmissions([]);
    }
  };
  
  if (!authenticated) {
    return (
      <div className="admin-login">
        <h2>管理员登录</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入管理员密码"
            />
          </div>
          <button type="submit" className="login-button">登录</button>
        </form>
        <button onClick={onBack} className="back-link">返回首页</button>
      </div>
    );
  }
  
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h2>用户提交的职业</h2>
        <div className="admin-actions">
          <button onClick={handleClearSubmissions} className="clear-button">
            清空记录
          </button>
          <button onClick={onBack} className="back-button">
            返回首页
          </button>
        </div>
      </div>
      
      {submissions.length > 0 ? (
        <div className="submissions-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>职业名称</th>
                <th>提交时间</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(submission => (
                <tr key={submission.id}>
                  <td>{submission.id}</td>
                  <td>{submission.title}</td>
                  <td>{new Date(submission.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-submissions">
          <p>暂无提交记录</p>
        </div>
      )}
    </div>
  );
};

export default AdminPage; 