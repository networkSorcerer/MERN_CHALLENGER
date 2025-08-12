import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const toggleDrawer = () => setShow(!show);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 상단 Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={toggleDrawer}
          >
            ☰ Menu
          </button>
          <span className="navbar-brand mb-0 h1">My App</span>
        </div>
      </nav>

      {/* Offcanvas 사이드 메뉴 */}
      <div
        className={`offcanvas offcanvas-start ${show ? "show" : ""}`}
        tabIndex="-1"
        style={{ visibility: show ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={toggleDrawer}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <button
                className="btn btn-link"
                onClick={() => console.log("Go Home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="btn btn-link"
                onClick={() => console.log("Settings")}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <main className="flex-grow-1 p-3">
        {children}
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
