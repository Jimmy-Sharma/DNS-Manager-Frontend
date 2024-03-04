import React from "react";
import { Route, Routes } from "react-router-dom";
import EditDomain from "./EditDomain";
import List from "./List";
import AddNewDomain from "./AddNewDomain";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<List />} />
        <Route path={"/adddomains"} element={<AddNewDomain />} />
        <Route path={"/editdomain/:id"} element={<EditDomain />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;