import React from "react";
import Header from "./Header";
import Home from "./home";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="col-md-12 ">
      <div className="row m-auto me-0 p-0 m-0">
        <div className="col-md-2 p-0">
          <Sidebar />
        </div>
        <div className="col-md-10 p-0">

          {children}
        </div>
      </div>
    </div>
  );
}
