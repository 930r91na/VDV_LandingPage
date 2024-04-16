import { useState, useRef } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import RefsContext from "./RefsContext";

const Layout = () => {
  const ourTeamRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <RefsContext.Provider value={{ ourTeamRef }}>
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        OurTeamRef={ourTeamRef}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </RefsContext.Provider>
  );
};

export default Layout;
