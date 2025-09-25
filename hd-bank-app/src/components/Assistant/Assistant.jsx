import React, { useState } from 'react';

function Assistant() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'fixed', right: '16px', bottom: '16px', zIndex: 1000 }}>
      {open && (
        <div style={{
          width: '280px',
          height: '360px',
          background: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          marginBottom: '12px',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ fontWeight: 600, marginBottom: '8px' }}>Vikki Assistant</div>
          <div style={{ flex: 1, overflow: 'auto', fontSize: '14px', color: '#333' }}>
            Xin chào! Tôi có thể giúp gì cho bạn hôm nay?
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.24)'
        }}
        aria-label="Toggle assistant"
      >
        {open ? '×' : '🤖'}
      </button>
    </div>
  );
}

export default Assistant;


