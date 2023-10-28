import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import ProjectDetails from "views/admin/profile/ProjectDetails";
import CompanyDetails from "views/admin/tables/CompanyDetails";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="/ProjectDetails" element={<ProjectDetails />} />
      <Route path="/CompanyDetails" element={<CompanyDetails />} />
    </Routes>
  );
};

export default App;
