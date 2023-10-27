import React ,{useEffect,useState} from 'react'
import './css/Donation.css'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Donation() {
    useEffect(() => {
        document.body.classList.add('donation-page');
        return () => {
            document.body.classList.remove('donation-page');
        };
    }, []);
  return (
    <div>
        <Navbar></Navbar>
        
        
    </div>


    
  )
}

export default Donation