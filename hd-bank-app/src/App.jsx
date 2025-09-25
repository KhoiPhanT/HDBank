import React from 'react';
import TopControls from './components/TopControls/TopControls.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import ServiceGrid from './components/ServiceGrid/ServiceGrid.jsx';
import Assistant from './components/Assistant/Assistant.jsx';
import Footer from './components/Footer/Footer.jsx';
import { mainServices, additionalServices, otherUtilities } from './data/mockData.js';
// removed inline logo per request
import styles from './App.module.css';
import BalanceSummary from './components/BalanceSummary/BalanceSummary.jsx';
import { Routes, Route } from 'react-router-dom';
import ConvertToken from './pages/ConvertToken.jsx';

const SectionTitle = ({ title }) => (
  <div className={styles.sectionTitle}>
    <span>{title}</span>
  </div>
);

function App() {
  return (
    <div className={styles.app}>
      <TopControls />
      <Routes>
        <Route
          path="/"
          element={
            <main className={styles.content}>
              <Carousel />
              <BalanceSummary />
              <SectionTitle title="Sản phẩm/Dịch vụ" />
              <ServiceGrid items={mainServices} />
              <SectionTitle title="Tiện ích bổ sung" />
              <ServiceGrid items={additionalServices} />
              <SectionTitle title="Tiện ích khác" />
              <ServiceGrid items={otherUtilities} />
            </main>
          }
        />
        <Route path="/convert-token" element={<ConvertToken />} />
      </Routes>
      <Footer />
      <Assistant />
    </div>
  );
}

export default App;