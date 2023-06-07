import React from "react";
import { Route, Routes } from "react-router-dom";

import Overview from "../Pages/Overview/Overview";
import Error from "../Pages/Error/Error";
import Opportunities from "../Pages/Opportunities/Opportunities";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="*" element={<Error />} />
        <Route path="/opportunities" element={<Opportunities />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
