import React from "react";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./views/HomePage";
import { About } from "./views/About";
import { NotFound } from "./views/NotFound";
import { Users } from "./views/Users";
import { UserDetail } from "./views/UserDetail";
import { Dashboard } from "./views/Dashboard";
// components
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route exact strict path="/" element={ <HomePage />} />
        <Route path="/users" element={ <Users /> } />
        <Route path="/usuarios" element={ <Navigate to="/users" /> } />
        <Route path="/user/:id" element={ <UserDetail /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/dashboard/*" element={ <Dashboard /> } >
          <Route path="welcome" element={ <div>Welcome!!</div> } />
          <Route path="goodbye" element={ <div>Good Bye!!</div> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
};
