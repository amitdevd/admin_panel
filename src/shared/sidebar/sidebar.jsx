import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css';
import { LuCircleArrowLeft } from "react-icons/lu";

function Sidebar( { isSidebarOpen, sidebarWidth } ) {
  return (
    <div className='sidebarPanel'>
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} 
    style={{ width: `${sidebarWidth}px` }}>
      <ul className='list-unstyled'>
        <li>
          <Link to='/admin/dashboard' className='sideMenu d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <img src="/image/Brands.png" />
              <span class="side-menu__label">Dashboard </span>
            </div>
            <span className='icons'><LuCircleArrowLeft /></span>
          </Link>
        </li>
        <li>
          <Link to='/admin/warehouse-mgmt' className='sideMenu d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <img src="/image/Brands.png" />
              <span class="side-menu__label">Warehouse Management</span>
            </div>
            <span className='icons'><LuCircleArrowLeft /></span>
          </Link>
        </li>
        <li>
          <Link to='/admin/user-buyer-mgmt' className='sideMenu d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <img src="/image/Brands.png" />
              <span class="side-menu__label">User/Buyer Management</span>
            </div>
            <span className='icons'><LuCircleArrowLeft /></span>
          </Link>
        </li>
      </ul>
    </aside>
    </div>
  )
}

export default Sidebar;