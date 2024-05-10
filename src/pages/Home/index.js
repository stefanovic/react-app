// src/pages/Home/index.js

import React from 'react';
import Header from '../../components/Header';
import DynamicList from '../../components/DynamicList';
import RecursiveTree from '../../components/RecursiveTree';
import { FaCode, FaTree, FaLightbulb, FaInfoCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const getRandomUnsplashUrl = (width, height, keywords) => {
  const accessKey = 'Zs8m0TJxuIRb3kEnEL9poggcCxabKkPboU9lpjyR4Qo';
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
  return `https://source.unsplash.com/${width}x${height}/?${randomKeyword}&client_id=${accessKey}`;
};

const Home = () => {
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

  const unsplashImageUrl = getRandomUnsplashUrl(1200, 600, ['creative', 'technology', 'abstract']);

  return (
    <div className="container mt-5">
      <Header />
      <div id="topBanner" className="jumbotron bg-primary text-light rounded mb-4">
        <h1 className="display-4">Livedata and the creative world of React!</h1>
        <p className="lead">Come and visit us on <a href="https://livedata.it">Livedata</a> and discover how to create amazing web applications using React! Unleash your creativity and create extraordinary projects.</p>
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
        <img src={unsplashImageUrl} alt="Random Unsplash" className="img-fluid rounded" />
      </div>
      <footer className="mt-5 py-3 text-center bg-dark text-light rounded">
        <p> &copy; 2023 My React App on <a href="https://github.com/stefanovic/react-app">GitHub</a>. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
