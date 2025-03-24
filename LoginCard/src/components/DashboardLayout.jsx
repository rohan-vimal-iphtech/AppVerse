import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu';

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ maxWidth: '300px', backgroundColor: '#f4f4f4' }}>
        <SideMenu />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1,width:'80%', padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
