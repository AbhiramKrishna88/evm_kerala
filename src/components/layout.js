import React from "react";
import ControlUnit from "./cu";
//import Toolbar from './toolbar';
import './animate_css/index.css'

const Layout = () => {
  return (
    <div>
      <div className="d-flex w-100 h-100 align-items-center justify-content-center flex-column">
        {/*
        <div className="row w-100">
            <div className="col-6"><img src="cu.png" alt="" id="cu"></div>
            <div className="col-2"><img src="bu.png" alt="" id="bu-2"></div>
            <div className="col-2"><img src="bu.png" alt="" id="bu-1"></div>
            <div className="col-2"><img src="bu.png" alt="" id="bu-3"></div>
        </div>
        
        <Toolbar/>*/}
        <ControlUnit/>
      </div>
    </div>
  );
};

export default Layout;
