import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import AddUserForm from "./components/AddUser/adduser";
import AddUserSucess from "./components/addUserSucess/addUserSucess";
import UserList from './components/ListUsers/listUsers';
import UpdateUserForm from './components/updateUser/updateUser';
import UserDeletedSuccessfully from './components/deleteUser/deleteUser';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="add" element={<AddUserForm />} />
          <Route path="success" element={<AddUserSucess />} />
          <Route path="list" element={<UserList />} />
          <Route path="update/*" element={<UpdateUserForm />} />
          <Route path="delete" element={<UserDeletedSuccessfully />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
