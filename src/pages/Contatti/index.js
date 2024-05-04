// src/pages/Contact/index.js

import React from 'react';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    try {
      const response = await fetch('https://webapps.livedata.it/sendEmail.php', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert('Messaggio inviato con successo!');
      } else {
        alert('Errore durante l\'invio del messaggio. Riprova più tardi.');
      }
    } catch (error) {
      console.error('Errore durante l\'invio del messaggio:', error);
      alert('Errore durante l\'invio del messaggio. Riprova più tardi.');
    }
  };

  return (
    <div className="container mt-5">
      <Header />
      <div id="topBanner" className="jumbotron bg-secondary text-light rounded mb-4">
        <h1 className="display-4">Contattaci - Demo</h1>
        <p className="lead">Siamo qui per rispondere alle tue domande. Compila il modulo sottostante per metterti in contatto con noi.</p>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              {/* Formulario Web */}
              <h2 className="card-title mb-3">Invia un Messaggio</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Messaggio</label>
                  <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Invia Messaggio</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              {/* Blocco di Testo Invitante */}
              <h2 className="card-title mb-3">Hai Domande?</h2>
              <p>
                Siamo qui per aiutarti. Compila il modulo a sinistra o inviaci un'email direttamente all'indirizzo:
                <br />
                <strong>info@example.com</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 py-3 text-center bg-dark text-light rounded">
        <p>&copy; 2023 La Tua Azienda. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default Contact;

