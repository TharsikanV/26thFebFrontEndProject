import React, { useState } from "react";
import {isAuthenticated} from "../services/Auth"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const ProfileDetails = ({ user }) => (
    <div className="dropdown-menu dropdown-menu-left show">
      <div className="dropdown-item">User Id: {user.localId}</div>
      <div className="dropdown-item">Name: {user.name}</div>
      <div className="dropdown-item">Email: {user.email}</div>
      {/* Add more profile details as needed */}
    </div>
  );
const NavBar=(props)=>{
    const [showProfile, setShowProfile] = useState(false); // State to manage visibility of profile details

  const toggleProfile = () => {
    setShowProfile(!showProfile); // Toggle the visibility of profile details
  };
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
             {isAuthenticated() ? (
        <div>
          <button
            className="nav-link btn btn-link mr-3"
            onClick={toggleProfile}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
          {showProfile && <ProfileDetails user={props.user} />}
        </div>
      ) : null}
            <a className="navbar-brand" href="#">LUCKY MOBILES</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto"  >
                    <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                    {!isAuthenticated()?<li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>:null}
                    {!isAuthenticated()?<li><Link className="nav-link" to="/login">Login</Link></li>:null}
                    {/* {?<li className="nav-item"><Link className="nav-link" to="/dashboard" >Dashboard</Link></li>:null} */}
                    {isAuthenticated()?<li><a className="nav-link" onClick={props.logoutUser} style={{cursor:"pointer"}}>Logout</a></li>:null}
                    {isAuthenticated()?<li className="nav-item"><Link className="nav-link" to="/signout">SignOut</Link></li>:null}    
                </ul>
            </div>

           
        </nav>
    )
}
export default NavBar;