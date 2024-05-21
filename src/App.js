import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome";



const App = () => {


  return (
    <>


      <Routes>

        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
};

export default App;


















