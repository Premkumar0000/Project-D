import React, { useState } from 'react';
import Script from './Sript';
import Bar2 from './Bar2';
const DashBord = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  }

  return (
    <div>
      <nav className={`navbar navbar-expand d-flex flex-column align-item-start ${sidebarActive ? 'active-nav' : ''}`} id="sidebar">
       <h4 className='D'><i class="fa-solid fa-gear"></i>DashBoard</h4>
       <div className='pp'>
       <h6 className='p'><i class="fa-solid fa-gauge-simple-high" id='icon'></i> DashBoard</h6>
       <h6 className='p'><i class="fa-solid fa-cube"></i>  Product</h6>
       <h6 className='p'><i class="fa-regular fa-user"></i>  Customers</h6>
       <h6 className='p'><i class="fa-solid fa-wallet"></i>  Income</h6>
       <h6 className='p'><i class="fa-solid fa-percent"></i>  Promote</h6>
       <h6 className='p'><i class="fa-solid fa-handshake-angle"></i>  Help</h6>
       </div>
       <h6 className='pic'><img src="https://lens-storage.storage.googleapis.com/png/0092da4865f84fbbaf4d050798d83088" alt="" srcset=""  width={'20%'}/> Tony</h6>

      </nav>
      <section className={`p-4 my-container ${sidebarActive ? 'active-cont' : ''}`}>
      
        <button className="btn my-5" id="menu-btn" onClick={toggleSidebar}>
          <i className="fa-solid fa-gear"></i>
        </button>
        <h5>Hello Prem👋,</h5>
        <Script></Script><br />
        <Bar2></Bar2>
      </section>
    </div>
  );
}

export default DashBord;
