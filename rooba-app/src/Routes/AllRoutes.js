import React from "react";
import { Route, Routes } from "react-router-dom";

import Overview from "../Pages/Overview/Overview";
import Error from "../Pages/Error/Error";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
