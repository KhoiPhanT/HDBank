import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ServiceGrid.module.css';
import { FaUniversity, FaGolfBall, FaApple, FaHotel, FaPlane, FaGamepad, FaWifi, FaCoins } from 'react-icons/fa'; // Ví dụ icon

// Ánh xạ label với icon tương ứng (có thể mở rộng)
const iconMap = {
  'Đóng học phí': <FaUniversity />,
  'Đặt sân Golf': <FaGolfBall />,
  'Apple Pay': <FaApple />,
  'Khách sạn': <FaHotel />,
  'Mua vé máy bay': <FaPlane />,
  'Mua thẻ game': <FaGamepad />,
  'Nạp Data': <FaWifi />,
  'đổi Token': <FaCoins/>,
  // Thêm các icon khác ở đây
};


const ServiceGrid = ({ items }) => {
  const navigate = useNavigate();
  const handleClick = (label) => {
    if (label.toLowerCase().includes('token')) {
      navigate('/convert-token');
    }
  };
  return (
    <div className={styles.grid}>
      {items.map(({ label }) => (
        <div key={label} className={styles.service} onClick={() => handleClick(label)}>
          <div className={styles.iconWrapper}>
            {iconMap[label] || <FaUniversity />}
          </div>
          <div className={styles.label}>{label}</div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;