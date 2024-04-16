import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home";
import Process from "./Components/Process";
import Services from "./Components/Services";
import TeamInfo from "./Components/TeamInfo";

// App initialization
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proceso" element={<Process />} />
          <Route path="servicios" element={<Services />} />
          <Route path="nosotros" element={<TeamInfo />} />
          {/* ...other routes */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
