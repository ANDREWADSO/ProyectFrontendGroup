import React, { useState } from 'react';
import Logo from './Data/images/logo.png';
import './Sidebar.css';
import { SidebarData } from './Data/Data';
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {

    const [selected, setSelected] = useState (0);

  return (
    <div className="Sidebar">
      {/* {logo} */}
      <div className="logo">
        <img src= {Logo} alt="10rem"/>
        <span>
          {/* Ap<span>ren</span>dix */}

        </span>

      </div>
      <div className='menu'>
            {SidebarData.map((item, index)=>{
            return(
            <div className={selected=== index?'menuItem active':'menuItem'}
            key={index}
            onClick={()=>setSelected(index)}
            >
              <item.icon/>  
              <span>
                {item.heading}
              </span>
            </div>
            )
        })}

        <div className="menuItem">
            <UilSignOutAlt/>
        </div>     
        {/* <div className='menuItem'>
          <div>
            <UilEstate/>
          </div>
          <span>Dashboard</span>
        </div> */}
        </div>
    </div>
  );
};

export default Sidebar;

