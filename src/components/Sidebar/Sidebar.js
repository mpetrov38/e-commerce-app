import React, { useState } from "react";
import './Sidebar.css';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';

function Sidebar({ handleRadioChange, selectedCategory, handleClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={`sidebar bg-dark text-white ${isOpen ? 'sidebar-open' : ''}`} id="sidebar-showcase" role="cdb-sidebar">
        <div className="sidenav mt-6">
          <h1>Filters</h1>
          <Category handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} />
          <Price handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} />
          <Colors handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} />
          <button className="btn btn-secondary" onClick={handleClick}>Reset Filters</button>
        </div>
      </div>
      <button onClick={toggleSidebar} className="btn btn-secondary" style={{ position: "fixed", top: "50%", left: isOpen ? "0px" : "0px", zIndex: 2001 }}>
        {isOpen ? <BsFillArrowLeftSquareFill /> : <BsFillArrowRightSquareFill />}
      </button>

    </>
  );
}

export default Sidebar;
