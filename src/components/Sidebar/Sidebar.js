import React, { useState } from "react";
import './Sidebar.css';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';


function Sidebar({ handleRadioChange, selectedCategory, handleClick }) {
  const [open, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!open);
  }
  return (
    <div style={{ position: 'relative' }}>
      <div className={`sidebar bg-dark text-white ${open ? 'sidebar-open' : ''}`} id="sidebar-showcase" role="cdb-sidebar">
        <div className="sidenav">
          <h3 className="sidebar-title">Filters</h3>
          <Category handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} />
          <Price handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} />
          <Colors handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} />
          <button className="btn btn-secondary reset-filters" onClick={handleClick}>Reset Filters</button>
        </div>
      </div>
      <button className="btn-transition btn btn-secondary"
        onClick={() => toggleSidebar()}
        style={{
          left: open ? "148px" : 0, // Use the open state to control the left property
        }}>
        {open ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
      </button>
    </div>
  );
}

export default Sidebar;
