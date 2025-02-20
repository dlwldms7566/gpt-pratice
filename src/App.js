import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header, Sidebar } from "./components/Header";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login"

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation(); // useLocation()는 Router 안에서만 사용 가능

  const hideSidebar = location.pathname === "/signup" || location.pathname === "/login";

  React.useEffect(() => {
    if (hideSidebar) {
      setIsSidebarOpen(false);
    }
  }, [hideSidebar]);

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {!hideSidebar && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero isSidebarOpen={isSidebarOpen} />
              <LandingPage isSidebarOpen={isSidebarOpen} />
            </>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
