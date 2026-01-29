import React, { useState, useEffect } from 'react'
import Header from '../../../shared/header/header';
import Sidebar from '../../../shared/sidebar/sidebar';
import Footer from '../../../shared/footer/footer';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(250); // Default sidebar width

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
        setSidebarWidth(0);  // On mobile, the sidebar is fully closed
      } else {
        setIsSidebarOpen(true);
        setSidebarWidth(250);  // On desktop, sidebar is fully open by default
      }
    };

    // Initial check
    handleResize();

    // Listen for screen resize
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to toggle sidebar and adjust width
  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setSidebarWidth(80); // Shrink sidebar
    } else {
      setSidebarWidth(250); // Expand sidebar
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [color, setColor] = useState("olive");

  return (
    <div className='wh-100 vh-100 position-relative' style={{backgroundColor: color}}>
      <Header toggleSidebar={toggleSidebar} sidebarWidth={sidebarWidth} />
      <Sidebar isSidebarOpen={isSidebarOpen} sidebarWidth={sidebarWidth} />
      <div className={`layoutMiddle content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Outlet />
      </div>
        <div className="background_changer" >
            <button className=" p-2 my-2 text-white" style={{backgroundColor: 'red'}} 
            onClick={() =>setColor ("red")}>Danger</button>
            <button className=" p-2 my-2 text-white" style={{backgroundColor: 'green'}}
            onClick={() =>setColor ("green")}>Success</button>
            <button className=" p-2 my-2  text-red" style={{backgroundColor: 'yellow'}}
            onClick={() =>setColor ("yellow")}>Warning</button>
            <button className=" p-2 my-2" style={{backgroundColor: '#0dcaf0'}}
            onClick={() =>setColor ("#0dcaf0")}>Info</button>
            <button className=" p-2 my-2" style={{backgroundColor: '#f8f9fa'}}
            onClick={() =>setColor ("#f8f9fa")}>Light</button>
            <button className=" p-2 my-2 text-white" style={{backgroundColor: '#212529'}}
            onClick={() =>setColor ("#212529")}>Dark</button>
          </div>
      <Footer />
    </div>
  )
}

export default Dashboard;
