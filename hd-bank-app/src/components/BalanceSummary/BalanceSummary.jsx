import React, { useState } from 'react';
import styles from './BalanceSummary.module.css';
import { FaEye, FaEyeSlash, FaUserCircle } from 'react-icons/fa'; // Cần cài react-icons

// Hàm format tiền tệ, không thay đổi
function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN', { 
    style: 'currency', 
    currency: 'VND', 
    maximumFractionDigits: 0 
  }).format(value);
}

// === THAY ĐỔI CHÍNH NẰM Ở ĐÂY ===
// Component con giờ sẽ tự quản lý trạng thái của mình
function BalanceItem({ label, amount }) {
  // 1. Mỗi BalanceItem có một state riêng, mặc định là ẩn (false)
  const [isVisible, setIsVisible] = useState(false);

  // 2. Hàm để bật/tắt hiển thị cho riêng item này
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.item}>
      <div className={styles.label}>{label}</div>
      <div className={styles.amountWrapper}>
        {/* 3. Hiển thị số tiền hoặc dấu '*' dựa vào state riêng của nó */}
        <span className={styles.amount}>
          {isVisible ? formatCurrency(amount) : '***.***.*** VND'}
        </span>
        {/* 4. Mỗi item có nút bấm riêng */}
        <button onClick={toggleVisibility} className={styles.iconButton}>
          {isVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}

// Component cha giữ nguyên logic layout ban đầu của bạn
function BalanceSummary() {
  // Dữ liệu `amount` giờ là SỐ THẬT để tính toán
  const data = [
    { label: 'tổng có:', amount: 150000000 },
    { label: 'tài khoản thanh toán:', amount: 25000000 },
    { label: 'tài khoản tiết kiệm ', amount: 125000000 },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.topFull}>
        {/* Component cha chỉ cần truyền dữ liệu, không cần quan tâm đến việc ẩn/hiện */}
        <BalanceItem label={data[0].label} amount={data[0].amount} />
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.bottomLeft}>
          <BalanceItem label={data[1].label} amount={data[1].amount} />
          <BalanceItem label={data[2].label} amount={data[2].amount} />
          <button className={styles.upgradeCard} type="button">
            Nâng cấp hạn mức
          </button>
        </div>
        <div className={styles.bottomRight}>
          <FaUserCircle className={styles.userIcon} />
        </div>
      </div>
    </div>
  );
}

export default BalanceSummary;