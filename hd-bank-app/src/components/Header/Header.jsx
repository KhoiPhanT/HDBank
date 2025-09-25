import React from 'react';
import styles from './Header.module.css';
import logoSrc from '/Vikki-logo-09.02.2025.png';
import { FaCreditCard, FaRegBell } from 'react-icons/fa';

const Header = () => {
  const navTabs = ['Sản phẩm', 'Dịch vụ', 'Đăng ký / Đăng nhập'];
  const actionIcons = [<FaCreditCard key="card" />, <FaRegBell key="bell" />];
  return ( <header className={styles.header}> <div className={styles.headerInner}> <div className={styles.logo}> <img src={logoSrc} alt="Vikki Logo" className={styles.logoImg} /> </div> <nav className={styles.tabs}> {navTabs.map((tab, index) => ( <button key={tab} className={`${styles.tab} ${index === 2 ? styles.active : ''}`} > {tab} </button> ))} </nav> <div className={styles.headerActions}> {actionIcons.map((icon, index) => ( <button key={index} className={styles.iconBtn}> {icon} </button> ))} </div> </div> </header> );
};
export default Header;