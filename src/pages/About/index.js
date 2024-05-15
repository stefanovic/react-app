// src/pages/About/index.js

import React from 'react';
import Header from '../../components/Header';
import { FaLightbulb, FaLink, FaInfoCircle, FaPushed, FaPlus, FaServer, FaCode, FaAtom, FaEllipsisH, FaLaptopCode, FaCentercode, FaRegArrowAltCircleRight } from 'react-icons/fa';
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
      <div id="topBanner" className="jumbotron bg-primary text-light rounded mb-4">
         <h1 className="display-4">Meet Our Web Development Team</h1>
         <p className="lead">
           We are a dynamic team of web developers who embrace a flexible approach to development.<br></br>
           Explore the technologies and platforms we love working with!
         </p>
       </div>
       <div className="row mb-4">
         <div className="col-md-6">
           <div className="card shadow-sm">
             <div className="card-body">
               <h2 className="card-title mb-3"><FaRegArrowAltCircleRight className="mr-2" /> Basic Web Technologies</h2>
               <p>
                 Our development stack revolves around core web technologies, ensuring compatibility
                 and adherence to web standards. HTML, CSS and JavaScript are the fundamental building blocks
                 of our projects, providing a solid foundation for web development.
               </p>
             </div>
           </div>
         </div>
         <div className="col-md-6">
           <div className="card shadow-sm">
             <div className="card-body">
               <h2 className="card-title mb-3"><FaLaptopCode className="mr-2" /> Frontend Framework</h2>
               <p>
                 We leverage modern frontend frameworks like React and Vue.js to create interactive interfaces
                 and user-friendly. These frameworks allow us to develop robust and scalable applications
                 easily.
               </p>
             </div>
           </div>
         </div>
       </div>
       <div className="row mb-4">
         <div className="col-md-6">
           <div className="card shadow-sm">
             <div className="card-body">
               <h2 className="card-title mb-3"><FaEllipsisH className="mr-2" /> Flexible Backend</h2>
               <p>
                 Our backend development is based on flexible technologies such as ProcessWire and CodeIgniter.
                 ProcessWire provides us with a powerful and adaptable content management system, while CodeIgniter
                 offers a robust PHP framework for building efficient backend solutions.
               </p>
             </div>
           </div>
         </div>
         <div className="col-md-6">
           <div className="card shadow-sm">
             <div className="card-body">
               <h2 className="card-title mb-3"><FaCode className="mr-2" /> JSON integration</h2>
               <p>
                 We effortlessly integrate JSON (JavaScript Object Notation) into our projects, facilitating an exchange
                 fluid data between the front end and the back end. This flexible data format enables communication
                 efficient and improves overall system performance.
               </p>
             </div>
           </div>
         </div>
       </div>
       <div className="mt-5 text-center">
         <h2 className="mb-4"><FaServer className="mr-2" /> Platforms and Distributions</h2>
         <p>
           Our commitment to staying ahead of the curve is reflected in our use of advanced platforms like Vercel, Netlify, DigitalOcean and Aruba Business for seamless deployment. We can manage our projects collaboratively
           on Github, ensuring version control and efficient team collaboration.
         </p>
       </div>
       <div className="mt-5 text-center">
         <h2 className="mb-4"><FaLightbulb className="mr-2" /> Visual Inspiration</h2>
         <img src={unsplashImageUrl} alt="Unsplash Random Image" className="img-fluid rounded" />
       </div>
       <footer className="mt-5 py-3 text-center bg-dark text-light rounded">
        <p> &copy; 2024 Livedata React App on <a href="https://github.com/stefanovic/react-app">GitHub</a></p>
      </footer>
    </div>
  );
};

export default About;
