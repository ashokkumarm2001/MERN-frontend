// import React from 'react';
// import './NavBar.css';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//    <nav className="NavBar-Wrapper">
//      <div>
//        <h3 className="NavBar-Title">Minimalistic - Crud App - Mern Stack</h3>
//      </div>
//      <div className="NavBar-Links">
//       <Link to="/" className="NavBar-Link">Home</Link>
//       <Link to="/add" className="NavBar-Link">Add</Link>
//      </div>
//    </nav>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

const NavBar = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary NavBar-Wrapper ">
     <div className="container">
       <h3 className="navbar-brand NavBar-Title">Minimalistic - CRUD App - MERN Stack</h3>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
         <ul className="navbar-nav ml-auto me-5">
           <li className="nav-item ">
             <Link to="/" className="nav-link active ">Home</Link>
           </li>
           <li className="nav-item">
             <Link to="/add" className="nav-link active ">Add</Link>
           </li>
         </ul>
       </div>
     </div>
   </nav>
  );
};

export default NavBar;

