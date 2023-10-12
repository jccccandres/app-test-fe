import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ViewRoles from "../pages/Roles/ViewRoles";
import AddUser from "../pages/Users/AddUsers";
import ViewUsers from "../pages/Users/ViewUsers";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/view-users" element={<ViewUsers />} />
      <Route path="/view-roles" element={<ViewRoles />} />
    </Routes>
  );
};

export default LandingRoutes;
