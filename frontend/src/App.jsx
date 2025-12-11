
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Waitlist from './pages/Waitlist';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import KycPersonal from './pages/KycPersonal'
import KycAddress from './pages/KycAddress';
import KycDocuments from './pages/KycDocuments';
import Marketplace from './pages/MarketPlace';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/kycpersonal' element={<KycPersonal />} />
        <Route path='/kycaddress' element={<KycAddress />} />
        <Route path='/kycdocuments' element={<KycDocuments />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/portfolio" element={<Portfolio />} />

      </Routes>
    </Router>
  );
}

export default App;