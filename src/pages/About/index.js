// src/pages/About/index.js

import React from 'react';
import Header from '../../components/Header';
import { FaLightbulb, FaLink, FaInfoCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const getRandomUnsplashUrl = (width, height, keywords) => {
  const accessKey = 'Zs8m0TJxuIRb3kEnEL9poggcCxabKkPboU9lpjyR4Qo';
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
  return `https://source.unsplash.com/${width}x${height}/?${randomKeyword}&client_id=${accessKey}`;
};

const About = () => {
  const unsplashImageUrl = getRandomUnsplashUrl(1200, 600, ['creative', 'technology', 'abstract']);

  return (
    <div className="container mt-5">
      <Header />
      <div id="topBanner" className="jumbotron bg-secondary text-light rounded mb-4">
        <h1 className="display-4">Incontra il Nostro Team di Sviluppo Web</h1>
        <p className="lead">
          Siamo un team dinamico di sviluppatori web che abbraccia un approccio flessibile allo sviluppo.
          Esplora le tecnologie e le piattaforme con cui amiamo lavorare!
        </p>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-3"><FaLightbulb className="mr-2" /> Tecnologie Web di Base</h2>
              <p>
                La nostra pila di sviluppo ruota attorno alle tecnologie web di base, garantendo compatibilità
                e aderenza agli standard del web. HTML, CSS e JavaScript sono i mattoni fondamentali
                dei nostri progetti, fornendo una base solida per lo sviluppo web.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-3"><FaLink className="mr-2" /> Framework Frontend</h2>
              <p>
                Sfruttiamo moderni framework frontend come React e Vue.js per creare interfacce interattive
                e user-friendly. Questi framework ci permettono di sviluppare applicazioni robuste e scalabili
                con facilità.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-3"><FaInfoCircle className="mr-2" /> Backend Flessibile</h2>
              <p>
                Il nostro sviluppo back-end è basato su tecnologie flessibili come ProcessWire e CodeIgniter.
                ProcessWire ci fornisce un potente e adattabile sistema di gestione dei contenuti, mentre CodeIgniter
                offre un robusto framework PHP per la creazione di soluzioni back-end efficienti.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-3"><FaLink className="mr-2" /> Integrazione JSON</h2>
              <p>
                Integriamo senza sforzo JSON (JavaScript Object Notation) nei nostri progetti, facilitando uno scambio
                dati fluido tra il front-end e il back-end. Questo formato dati flessibile consente una comunicazione
                efficiente e migliora le prestazioni complessive del sistema.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h2 className="mb-4"><FaLightbulb className="mr-2" /> Piattaforme e Distribuzioni</h2>
        <p>
          Il nostro impegno a rimanere all'avanguardia si riflette nell'uso di piattaforme avanzate come Vercel
          e Netlify per una distribuzione senza soluzione di continuità. Gestiamo i nostri progetti in collaborazione
          su Github, garantendo il controllo delle versioni e una collaborazione efficiente del team.
        </p>
      </div>
      <div className="mt-5 text-center">
        <h2 className="mb-4"><FaLightbulb className="mr-2" /> Ispirazione Visiva</h2>
        <img src={unsplashImageUrl} alt="Random Unsplash" className="img-fluid rounded" />
      </div>
      <footer className="mt-5 py-3 text-center bg-dark text-light rounded">
        <p><FaInfoCircle className="mr-2" /> &copy; 2023 Il Nostro Team di Sviluppo Web. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default About;
