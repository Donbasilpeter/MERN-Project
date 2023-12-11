import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import AddUserForm from "./components/AddUser/adduser";
import AddUserSucess from "./components/addUserSucess/addUserSucess";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="add" element={<AddUserForm />} />
          <Route path="success" element={<AddUserSucess />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
