import React, { useState } from "react";
import { Header, Sidebar } from "./components/Header";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // 사이드바 상태

  return (
    <div className={`app-container ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="content">
        <Header />
        <Hero isSidebarOpen={isSidebarOpen} />
        <LandingPage isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
}

export default App;