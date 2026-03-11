import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout: React.FC = () => {
  return (
    <div className="bg-[#0a0a0c] min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white flex overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 ml-80 min-h-screen relative p-8 md:p-16 lg:p-24 py-16 md:py-24">
        {/* Background blobs for premium feel */}
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-primary/10 blur-[180px] -z-10 rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[180px] -z-10 rounded-full" />
        
        <div className="relative z-10 w-full max-w-screen-2xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
