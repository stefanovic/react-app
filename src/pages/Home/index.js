// src/pages/Home/index.js

//import React from 'react';
import Header from '../../components/Header';
import DynamicList from '../../components/DynamicList';
import RecursiveTree from '../../components/RecursiveTree';
import { FaCode, FaTree, FaLightbulb, FaInfoCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

/*const getRandomUnsplashUrl = (width, height, keywords) => {
  const accessKey = 'Zs8m0TJxuIRb3kEnEL9poggcCxabKkPboU9lpjyR4Qo';
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
  return `https://source.unsplash.com/${width}x${height}/?${randomKeyword}&client_id=${accessKey}`;
};*/

// Import the axios library
//const axios = require('axios');
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getUnsplashImageUrl = async () => {
  const accessKey = 'Zs8m0TJxuIRb3kEnEL9poggcCxabKkPboU9lpjyR4Qo';  // Replace with your actual Unsplash API access key
  const keywords = ['creative', 'technology', 'abstract'];
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
  const url = `https://api.unsplash.com/photos/random?query=${randomKeyword}&client_id=${accessKey}`;

  try {
    const response = await axios.get(url);
    return `${response.data.urls.raw}&w=1200&h=600&fit=crop`;
  } catch (error) {
    console.error('Error fetching image from Unsplash', error);
    return null;
  }
};



const Home = () => {

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const url = await getUnsplashImageUrl();
      setImageUrl(url);
    };

    fetchImage();
  }, []);

  const dynamicListItems = ['React', 'Components', 'Hooks', 'Router', 'State', 'Props'];
  const recursiveTreeData = [
    {
      name: 'Components',
      children: [
        {
          name: 'Functional',
        },
        {
          name: 'Class-based',
        },
      ],
    },
    {
      name: 'State Management',
      children: [
        {
          name: 'Context API',
        },
        {
          name: 'Redux',
        },
      ],
    },
    {
      name: 'Routing',
      children: [
        {
          name: 'React Router',
        },
      ],
    },
  ];

  //const unsplashImageUrl = getRandomUnsplashUrl(1200, 600, ['creative', 'technology', 'abstract']);

  return (
    <div className="container mt-5">
      <Header />
      <div id="topBanner" className="jumbotron bg-primary text-light rounded mb-4">

     
        <h1 className="display-4">Livedata and the creative world of React and Git Workflow!</h1>
        
        <p className="lead">Come and visit us on <a href="https://livedata.it">Livedata</a>, unleash your creativity and create extraordinary projects.</p>
      
        
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
            <h2 className="card-title mb-3"><FaCode className="mr-2" /> Key concepts</h2>
              <DynamicList items={dynamicListItems} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-3"><FaTree className="mr-2" /> Treemap</h2>
              <RecursiveTree data={recursiveTreeData} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h2 className="mb-4"><FaLightbulb className="mr-2" /> Visual inspiration</h2>
        <p><a aria-label="Unsplash Image API" href="https://unsplash.com/developers">Unsplash Image API</a></p>


        {imageUrl ? (
        <img src={imageUrl} alt="Random from Unsplash" className="img-fluid rounded" />
      ) : (
        <p>Loading image...</p>
      )}

      </div>
      <footer className="mt-5 py-3 text-center bg-dark text-light rounded">
        <p> &copy; 2024 Livedata React App on <a href="https://github.com/stefanovic/react-app">GitHub</a></p>
      </footer>
    </div>
  );
};

export default Home;
