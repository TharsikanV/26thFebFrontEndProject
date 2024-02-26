import React from "react";
import NavBar from "../components/NavBar";
import { isAuthenticated, logout } from "../services/Auth"
import { Navigate, useNavigate } from "react-router-dom"

function HomePage(){
    ////T/////////
    const navigate= useNavigate()
     ///////////Tharsi//////////////
     const logoutUser=()=>{
        logout();
        navigate('/login')
    }
    //////////////////////
    const backgroundImageStyle = {
        backgroundImage: `url('path/to/your/image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };
    
      return (
        y>
          </Accordion.Item>
        </Accordion>
      );
}

export default HomePage;