import React from 'react'
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Sidebar from './Sidebar';
import Login from './Login'
import Register from "./Register"
import ContactDetails from "./contactDetails"
import OrderSummary from './orderSummary';
import Header from './Header';
import Home from './home';
export default function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Layout>
        <Header />
        <Home />
      </Layout>} />
      <Route path='/contactDetails'
        element={<Layout>
          <Header />
          <ContactDetails />
        </Layout>}
      />
      <Route path='/orderSummary'
        element={<Layout>
          <Header />
          <OrderSummary />
        </Layout>}
      />
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}
