import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--border-color)', 
      marginTop: '60px', 
      padding: '32px 24px',
      backgroundColor: 'white'
    }}>
      <div style={{ 
        maxWidth: '1128px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: '16px'
      }}>
          <a href="https://steadypulseai.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#000',
            color: '#fff',
            textDecoration: 'none',
            padding: '12px 32px',
            borderRadius: '999px',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            marginBottom: '16px',
            display: 'inline-block',
            transition: 'transform 0.2s ease',
          }}>
            STEADYPULSE.AI
          </a>
          <div style={{ width: '100%', borderTop: '1px solid #eee', margin: '16px 0' }}></div>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#" style={{ fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>About</a>
          <a href="#" style={{ fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>Privacy Policy</a>
          <a href="#" style={{ fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>Sales Solutions</a>
          <a href="#" style={{ fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>Help Center</a>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          © 2026 LinkedIn Headline Wizard
        </p>
      </div>
    </footer>
  );
};

export default Footer;
