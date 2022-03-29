import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="container-fluid justify-content-center">
        <div>WikiCountries</div>
      </div>
    </div>
  );
}

export default Navbar;