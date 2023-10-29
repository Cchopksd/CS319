import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'

// import หน้าต่างๆ หรือ Component ต่างๆ
import Navbar from './components/Navbar';
import Home from './pages/user/Home'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import ReportMissing from './pages/user/ReportMissing'
import MissingProfile from './pages/user/MissingProfile'
import FindMissing from './pages/user/FindMissing';
import Donation from './pages/user/Donation';
import AdministratorPage from './pages/admin/AdministratorPage';
import AdminSinglePage from './pages/admin/AdminSinglePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/missing-profile' element={<MissingProfile/>}/>
        <Route path='/report-missing' element={<ReportMissing/>}/>
        <Route path='/find-missing' element={<FindMissing/>}/>
        <Route path='/donation' element={<Donation/>}/>
        <Route path='/administrator' element={<AdministratorPage/>}/>
        <Route path='/administrator/person-info' element={<AdminSinglePage/>}/>
      </Routes>
    </>
  )
}

export default App
