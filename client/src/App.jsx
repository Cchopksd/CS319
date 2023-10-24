import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/user/Login";
import Home from "./pages/user/Home";
import Register from "./pages/user/Register";
import FindMissing from "./pages/user/FindMissing";
import ReportMissing from "./pages/user/ReportMissing";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/find-missing" element={<FindMissing />}/>
        <Route path="/report-missing" element={<ReportMissing />}/>
      </Routes>
    </Router>
  );
};

export default App;
