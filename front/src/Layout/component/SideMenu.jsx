import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer, AdminLink } from "../style/GlobalStyle";
const SideMenu = ({ user }) => {
  return (
    <SidebarContainer>
      {user && user.auth === "admin" && (
        <AdminLink to="admin/center"> Admin page</AdminLink>
      )}
    </SidebarContainer>
  );
};

export default SideMenu;
