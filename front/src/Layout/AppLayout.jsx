import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import "./style/App.css";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const toggleDrawer = () => setShow(!show);

  return (
    <div>
      {/* 상단 Navbar */}
      <nav>
        <div>
          <button type="button" onClick={toggleDrawer}>
            ☰ Menu
          </button>
        </div>
      </nav>

      {/* Offcanvas 사이드 메뉴 */}
      <div
        className={`offcanvas offcanvas-start ${show ? "show" : ""}`}
        tabIndex="-1"
        style={{ visibility: show ? "visible" : "hidden" }}
      >
        <div>
          <h5>Menu</h5>
          <button type="button" onClick={toggleDrawer}></button>
        </div>
        <div>
          <ul>
            <li>
              <button onClick={() => console.log("Go Home")}>Home</button>
            </li>
            <li>
              <button onClick={() => console.log("Settings")}>Settings</button>
            </li>
          </ul>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <main>
        {children}
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
