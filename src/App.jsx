
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import RequestServicePage from '@/pages/RequestServicePage';
import DriversPage from '@/pages/DriversPage';
import DriverProfilePage from '@/pages/DriverProfilePage';
import Layout from '@/components/Layout';
import FeaturesPage from '@/pages/FeaturesPage';
import ProjectInfoPage from '@/pages/ProjectInfoPage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  const location = useLocation();
  let CurrentPage;

  if (location.pathname.endsWith('/project-info.html') || location.pathname === '/project-info') {
    CurrentPage = ProjectInfoPage;
  } else if (location.pathname.endsWith('/features.html') || location.pathname === '/features') {
    CurrentPage = FeaturesPage;
  } else if (location.pathname.endsWith('/request-service.html') || location.pathname === '/request-service') {
    CurrentPage = RequestServicePage;
  } else if (location.pathname.endsWith('/drivers.html') || location.pathname === '/drivers') {
    CurrentPage = DriversPage;
  } else if (location.pathname.startsWith('/driver/')) {
    CurrentPage = () => <DriverProfilePage driverId={location.pathname.split('/').pop()} />;
  } else {
    CurrentPage = HomePage;
  }

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="*" element={<CurrentPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </>
  );
}

export default App;
