import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content grows and pushes footer down */}
      <div className="grow">
        <Navbar />
        <Outlet />
        <h1 className="bg-red-500 text-white p-4">Hello World</h1>
      </div>
      {/* Footer always stays at bottom */}
      <Footer />
    </div>
  );
};

export default Body;
