import React, { useState } from 'react';
import styles from './Footer.module.css';

// Import icons đẹp và nhất quán hơn
import {
  FaRegCreditCard,
  FaQrcode,
  FaHandHoldingUsd,
  FaPiggyBank,
} from 'react-icons/fa';

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { label: 'CK trong HD', icon: <FaRegCreditCard /> },
    { label: 'CK ngoài HD', icon: <FaQrcode /> },
    { label: 'CK qua thẻ', icon: <FaHandHoldingUsd /> },
    { label: 'Nạp tiền ĐT', icon: <FaPiggyBank /> },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.tabbar}>
        {navItems.map((item, index) => (
          <button
            key={item.label}
            className={`${styles.tabbarItem} ${
              index === activeIndex ? styles.active : ''
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.label}>{item.label}</div>
          </button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;