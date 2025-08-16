import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "../page/MainPage/MainPage.jsx";
import LandingPage from "../page/LandingPage/LandingPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ClassPage from "../page/ClassPage/ClassPage.jsx";
import SparringPage from "../page/SparringPage/SparringPage.jsx";
import FriendPage from "../page/FriendPage/FriendPage.jsx";
import CommitPage from "../page/CommitPage/CommitPage.jsx";
import CenterPage from "../page/CenterPage/CenterPage.jsx";
import Calendar from "../page/Calendar/Calendar.jsx";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route element={<PrivateRoute permissionLevel="member" />}>
        {" "}
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/main" element={<LandingPage />} />
        <Route path="/class" element={<ClassPage />} />
        <Route path="/sparring" element={<SparringPage />} />
        <Route path="/friend" element={<FriendPage />} />
        <Route path="/commit" element={<CommitPage />} />
      </Route>
      <Route element={<PrivateRoute permissionLevel="admin" />}>
        <Route path="/admin/center" element={<CenterPage />} />
        {/* <Route path="/center" element={<CenterPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
