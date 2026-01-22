import React from 'react';

const ResultSection: React.FC = () => {
  return (
    <div className="card" style={{ 
      padding: '16px 24px', 
      maxWidth: '552px', 
      margin: '0 auto',
      border: '1px solid var(--border-color)',
      textAlign: 'left'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h3 style={{ fontSize: '16px', color: 'var(--text-primary)' }}>Suggested Optimization</h3>
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Generated 2 mins ago</span>
      </div>
      
      <div style={{ 
        backgroundColor: '#F9FAFB', 
        padding: '12px', 
        borderRadius: '4px', 
        border: '1px solid #EEF0F2',
        marginBottom: '16px'
      }}>
        <p style={{ fontSize: '14px', color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>
          Your current headline is good, but adding "Strategist" could increase search visibility by 14%. Try: "Senior Product Manager | Growth Strategist | B2B SaaS Expert"
        </p>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '14px' }}>Copy Text</button>
        <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '14px', color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}>Regenerate</button>
      </div>
    </div>
  );
};

export default ResultSection;
