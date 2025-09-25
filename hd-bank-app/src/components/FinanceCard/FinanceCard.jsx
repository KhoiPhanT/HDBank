import React from 'react';
import styles from './FinanceCard.module.css';

const FinanceCard = ({ title, desc, cta = 'Đăng ký ngay' }) => (
  <div className={styles.card}>
    <div className={styles.media} />
    <div className={styles.body}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <button className={styles.btnPrimary}>{cta}</button>
    </div>
  </div>
);

export default FinanceCard;