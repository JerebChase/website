import React from 'react';
import { ISidebarProps } from '../../types/common/sidebar';


const Sidebar = ({ menuItems, component, onClick } : ISidebarProps) => {
  return (
    <div className={`${component}-sidebar`}>
      <ul>
        {menuItems.map(item => {
          return <li onClick={() => onClick(item)}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
