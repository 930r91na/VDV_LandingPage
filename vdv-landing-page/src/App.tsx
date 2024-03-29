import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Process from './Components/Process';
import Services from './Components/Services';


// App initialization
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proceso" element={<Process />} />
        <Route path="/servicios" element={<Services />} />
        {/* ...other routes */}
      </Routes>
    </Router>
  );
};

export default App;
