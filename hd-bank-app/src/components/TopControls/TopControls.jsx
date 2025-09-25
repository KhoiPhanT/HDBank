import React from 'react';
import styles from './TopControls.module.css';
import { FaBars, FaBell, FaCreditCard, FaUser, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import hdBankLogo from '../../data/Logo-HDBank.webp';

function TopControls() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const goBack = () => navigate(-1);
  return (
    <div className={styles.topBar}>
      <div className={styles.leftGroup}>
        {!isHome && (
          <button className={styles.leftBtn} aria-label="Back" onClick={goBack}>
            <FaArrowLeft />
          </button>
        )}
        <button className={styles.leftBtn} aria-label="Menu">
          <FaBars />
        </button>
        <img
          src={hdBankLogo}
          alt="HDBank"
          className={styles.brandLogo}
          onClick={goBack}
          role="button"
          aria-label="Back"
        />
      </div>
      <div className={styles.rightGroup}>
        <button className={styles.iconBtn} aria-label="Search"><FaSearch /></button>
        <button className={styles.iconBtn} aria-label="Notifications"><FaBell /></button>
        <button className={styles.iconBtn} aria-label="Cards"><FaCreditCard /></button>
        <button className={styles.iconBtn} aria-label="Profile"><FaUser /></button>
      </div>
    </div>
  );
}

export default TopControls;


