import React, { useState } from 'react';
import { FaCoins, FaExchangeAlt, FaRobot } from 'react-icons/fa';

function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(value || 0);
}

const rate = 10000; // 1 Token = 10,000 VND (ví dụ)

const ConvertToken = () => {
  const [mode, setMode] = useState('vnd-to-token'); // 'vnd-to-token' | 'token-to-vnd'
  const [vnd, setVnd] = useState('');
  const [tokenInput, setTokenInput] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [history, setHistory] = useState([]); // {deltaToken:number, note:string, ts:number}[]
  const vndNumber = Number(vnd.replace(/\D/g, '')) || 0;
  const tokenNumber = Number(tokenInput.replace(/[^0-9.]/g, '')) || 0;
  const token = mode === 'vnd-to-token' ? (vndNumber / rate) : tokenNumber;
  const vndFromToken = Math.round(tokenNumber * rate);

  return (
    <main style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800 }}>
        <FaCoins color="#e00000" /> Đổi tiền sang Token
      </div>
      {/* Chuyển đổi hai chiều */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => setMode('vnd-to-token')} style={{ padding: '8px 10px', borderRadius: 10, border: `1px solid ${mode==='vnd-to-token' ? 'var(--primary)' : 'var(--border-color)'}`, background: mode==='vnd-to-token' ? 'var(--primary)' : '#fff', color: mode==='vnd-to-token' ? '#fff' : 'var(--text)', fontWeight: 800, cursor: 'pointer', flex: 1 }}>VND → Token</button>
        <button onClick={() => setMode('token-to-vnd')} style={{ padding: '8px 10px', borderRadius: 10, border: `1px solid ${mode==='token-to-vnd' ? 'var(--primary)' : 'var(--border-color)'}`, background: mode==='token-to-vnd' ? 'var(--primary)' : '#fff', color: mode==='token-to-vnd' ? '#fff' : 'var(--text)', fontWeight: 800, cursor: 'pointer', flex: 1 }}>Token → VND</button>
      </div>

      {/* Số dư Token hiện tại */}
      <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: 12, padding: 12, boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>Số dư Token hiện tại</div>
        <div style={{ fontWeight: 800 }}>12,345 Token</div>
      </div>
      <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: 12, padding: 12, boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {mode === 'vnd-to-token' ? (
          <>
            <label style={{ fontSize: 12, color: 'var(--muted)' }}>Nhập số tiền (VND)</label>
            <input
              value={vnd}
              onChange={(e) => setVnd(e.target.value)}
              placeholder="Ví dụ: 1.000.000"
              style={{ padding: '10px 12px', borderRadius: 10, border: '1px solid var(--border-color)', outline: 'none' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--muted)' }}>
              <FaExchangeAlt /> Tỉ lệ quy đổi: 1 Token = {formatCurrency(rate)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ background: '#fff', border: '1px dashed var(--border-color)', borderRadius: 10, padding: 10 }}>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>Số tiền</div>
                <div style={{ fontWeight: 800 }}>{formatCurrency(vndNumber)}</div>
              </div>
              <div style={{ background: '#fff', border: '1px dashed var(--border-color)', borderRadius: 10, padding: 10 }}>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>Token nhận được</div>
                <div style={{ fontWeight: 800 }}>{(vndNumber / rate).toLocaleString('vi-VN', { maximumFractionDigits: 2 })} Token</div>
              </div>
            </div>
            <button onClick={() => setHistory([{ deltaToken: +(vndNumber / rate).toFixed(2), note: 'Đổi VND → Token', ts: Date.now() }, ...history])} style={{ marginTop: 6, padding: '10px 12px', borderRadius: 10, border: '1px solid var(--primary)', background: 'var(--primary)', color: '#fff', fontWeight: 800, cursor: 'pointer' }}>
              Xác nhận đổi
            </button>
          </>
        ) : (
          <>
            <label style={{ fontSize: 12, color: 'var(--muted)' }}>Nhập số Token</label>
            <input
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              placeholder="Ví dụ: 100"
              style={{ padding: '10px 12px', borderRadius: 10, border: '1px solid var(--border-color)', outline: 'none' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--muted)' }}>
              <FaExchangeAlt /> Tỉ lệ quy đổi: 1 Token = {formatCurrency(rate)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ background: '#fff', border: '1px dashed var(--border-color)', borderRadius: 10, padding: 10 }}>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>Token</div>
                <div style={{ fontWeight: 800 }}>{tokenNumber.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}</div>
              </div>
              <div style={{ background: '#fff', border: '1px dashed var(--border-color)', borderRadius: 10, padding: 10 }}>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>Số tiền nhận</div>
                <div style={{ fontWeight: 800 }}>{formatCurrency(vndFromToken)}</div>
              </div>
            </div>
            <button onClick={() => setHistory([{ deltaToken: -Number(tokenNumber.toFixed(2)), note: 'Đổi Token → VND', ts: Date.now() }, ...history])} style={{ marginTop: 6, padding: '10px 12px', borderRadius: 10, border: '1px solid var(--primary)', background: 'var(--primary)', color: '#fff', fontWeight: 800, cursor: 'pointer' }}>
              Xác nhận đổi
            </button>
          </>
        )}
      </div>
      {/* Gợi ý của AI (placeholder) */}
      <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: 12, padding: 12, boxShadow: 'var(--shadow-sm)', display: 'flex', gap: 10 }}>
        <div style={{ fontSize: 20, color: 'var(--primary)', display: 'grid', placeItems: 'center' }}>
          <FaRobot />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontWeight: 700 }}>Gợi ý của AI</div>
          <div style={{ color: 'var(--muted)', fontSize: 14 }}>
            Dựa trên lịch sử giao dịch, bạn nên đổi khoảng {Math.max(1, Math.floor(token || 0)).toLocaleString('vi-VN')} Token để tối ưu chi phí.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setAiSuggestion('Nạp 5tr để nhận 10 token')} style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid var(--primary-2)', background: 'linear-gradient(160deg, #ffd400, #ffb300)', color: '#7a4b00', fontWeight: 800, cursor: 'pointer' }}>Áp dụng</button>
            <button style={{ padding: '8px 10px', borderRadius: 10, border: '1px solid var(--border-color)', background: '#fff', color: 'var(--text)', fontWeight: 700, cursor: 'pointer' }}>Bỏ qua</button>
          </div>
          {aiSuggestion && (
            <div style={{ marginTop: 8, padding: 10, borderRadius: 10, background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700 }}>
              {aiSuggestion}
            </div>
          )}
        </div>
      </div>

      {/* Lịch sử +- Token */}
      <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: 12, padding: 12, boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontWeight: 800 }}>Lịch sử Token</div>
        {history.length === 0 ? (
          <div style={{ color: 'var(--muted)', fontSize: 14 }}>Chưa có giao dịch</div>
        ) : (
          history.map((h, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ color: 'var(--muted)' }}>{h.note}</div>
              <div style={{ fontWeight: 800, color: h.deltaToken >= 0 ? '#16a34a' : '#dc2626' }}>
                {h.deltaToken >= 0 ? '+' : ''}{h.deltaToken.toLocaleString('vi-VN', { maximumFractionDigits: 2 })} Token
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default ConvertToken;


