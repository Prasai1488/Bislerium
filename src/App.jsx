import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/home/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import  UserManagement  from "./components/Admin/UserManagement";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  const currentUser = true;

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/admin" element={<UserManagement />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        

        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
