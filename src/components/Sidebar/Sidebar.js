import React, { useState } from "react";
import './Sidebar.css';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';

function Sidebar({ handleRadioChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={`sidebar bg-dark text-white ${isOpen ? 'sidebar-open' : ''}`} id="sidebar-showcase" role="cdb-sidebar">
        <div className="sidenav mt-6">
          <Category handleRadioChange={handleRadioChange} />
          <Price handleRadioChange={handleRadioChange} />
          <Colors handleRadioChange={handleRadioChange} />
        </div>
      </div>
      <button onClick={toggleSidebar} className="btn btn-secondary" style={{ position: "fixed", top: "50%", left: isOpen ? "0px" : "0px", zIndex: 2001 }}>
        {isOpen ? <BsFillArrowLeftSquareFill /> : <BsFillArrowRightSquareFill />}
      </button>

    </>
  );
}

export default Sidebar;
