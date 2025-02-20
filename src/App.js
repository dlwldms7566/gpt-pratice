import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header, Sidebar } from "./components/Header";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Chat from "./components/Chat";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation(); // useLocation()는 Router 안에서만 사용 가능

  const hideSidebar = location.pathname === "/signup" || location.pathname === "/login" || location.pathname === "/chat";
  const hideHeader = location.pathname === "/chat";

  React.useEffect(() => {
    if (hideSidebar) {
      setIsSidebarOpen(false);
    }
  }, [hideSidebar]);

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {!hideSidebar && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
      <div className="content">
       {!hideHeader && <Header />}
        <Routes>
          <Route path="/" element={
            <>
              <Hero isSidebarOpen={isSidebarOpen} />
              <LandingPage isSidebarOpen={isSidebarOpen} />
            </>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
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
