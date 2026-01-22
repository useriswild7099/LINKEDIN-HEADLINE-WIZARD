import React from 'react';

const ToolCard: React.FC = () => {
  return (
    <div className="card" style={{ 
      padding: '24px', 
      maxWidth: '552px', 
      margin: '0 auto 24px',
      border: '1px solid var(--border-color)' 
    }}>
      <h2 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--text-primary)' }}>Analyze Your Profile</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>LinkedIn Profile URL</label>
          <input 
            type="text" 
            placeholder="https://www.linkedin.com/in/username"
            style={{ 
              padding: '8px 12px', 
              borderRadius: '4px', 
              border: '1px solid var(--border-color)',
              fontSize: '14px',
              outline: 'none'
            }} 
          />
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Enter the full URL to get started.</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)' }}>Focus Area</label>
          <select style={{ 
            padding: '8px 12px', 
            borderRadius: '4px', 
            border: '1px solid var(--border-color)',
            fontSize: '14px',
            outline: 'none',
            backgroundColor: 'white'
          }}>
            <option>Headlines & Bio</option>
            <option>Experience Section</option>
            <option>Skills & Endorsements</option>
          </select>
        </div>

        <button className="btn-primary" style={{ marginTop: '8px', padding: '10px' }}>Apply Analysis</button>
      </div>
    </div>
  );
};

export default ToolCard;
