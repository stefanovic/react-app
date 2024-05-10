// src/pages/Contact/index.js

import React from 'react';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
 


  return (
    <div className="container mt-5">
      <Header />
      <div id="topBanner" className="jumbotron bg-secondary text-light rounded mb-4">
        <h1 className="display-4">Contact us</h1>
        <p className="lead">We are here to answer your questions. Fill out the form below to get in touch with us. (Form not active)</p>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
            
            
              
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              {/* Blocco di Testo Invitante */}
              <h2 className="card-title mb-3">Do you have any questions?</h2>
               <p>
                 We are here to help you, write us.
                <br />
                <strong>info@livedata.it</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 py-3 text-center bg-dark text-light rounded">
        <p>&copy; 2024 livedata.it</p>
      </footer>
    </div>
  );
};

export default Contact;

