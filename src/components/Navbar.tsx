import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      backgroundColor: 'white',
      borderBottom: '1px solid var(--border-color)',
      padding: '0 24px',
      height: '52px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{ 
          fontSize: '20px', 
          fontWeight: 700, 
          color: 'var(--linkedin-blue)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '2px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ 
              backgroundColor: 'var(--linkedin-blue)', 
              color: 'white', 
              padding: '2px 6px', 
              borderRadius: '2px',
              fontSize: '18px'
            }}>L</div>
            <span>LinkedIn Headline Wizard</span>
          </div>
          <a href="https://artificialstudio.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '10px',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontWeight: 500,
            letterSpacing: '0.02em',
            paddingLeft: '32px'
          }}>
            a product of Artificial Studio
          </a>
        </div>
        

      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600 }}>Login</a>
        <a href="https://steadypulseai.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ 
          textDecoration: 'none',
          color: 'var(--text-primary)',
          fontSize: '14px',
          fontWeight: 600,
          border: '1px solid var(--border-color)',
          padding: '6px 16px',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.2s ease'
        }}>
          Steady Pulse AI
        </a>
        <button className="btn-primary" style={{ borderRadius: '16px', fontSize: '14px', padding: '6px 16px' }}>Use Tool</button>
      </div>
    </nav>
  );
};

export default Navbar;
