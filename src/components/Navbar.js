import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/resume"> Resume</Link>
      </div>
    </div>
  );
}

export default Navbar;

// export default Navbar;

// import React from 'react';
// import {  Link } from "react-router-dom";
// const navbar= () =>{
//   return (
//   <div>
//     <li>
//       <Link to="/">Dogs</Link>
//     </li>
//     <li>
//       <Link to="/cats">Cats</Link>
//     </li>
//     <li>
//       <Link to="/sheeps">Sheeps</Link>
//     </li>
//     <li>
//       <Link to="/goats">Goats</Link>
//     </li>
//   </div>
//   );
// }
// export default navbar;