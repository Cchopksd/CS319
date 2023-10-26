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

const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/missing-profile' element={<MissingProfile/>}/>
        <Route path='/report-missing' element={<ReportMissing/>}/>
      </Routes>
    </>
  )
}

export default App
