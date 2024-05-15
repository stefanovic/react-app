import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const termSets = [
    [
      { term: 'Api-first', color: '#FF5733', link: 'https://example.com/api-first' },
      { term: 'RESTful APIs', color: 'green', link: 'https://example.com/restful-apis' },
      { term: 'GraphQL', color: 'crimson', link: 'https://example.com/graphql' },
    ],
    [
      { term: 'Jamstack', color: 'blueviolet', link: 'https://example.com/jamstack' },
      { term: 'Serverless', color: 'aquamarine', link: 'https://example.com/serverless' },
      { term: 'Static Site Generation', color: '#FFC300', link: 'https://example.com/static-site-generation' },
    ],
    [
      { term: 'JavaScript', color: 'magenta', link: 'https://example.com/javascript' },
      { term: 'TypeScript', color: 'goldenrod', link: 'https://example.com/typescript' },
      { term: 'React', color: 'lavender', link: 'https://example.com/react' },
    ],
    [
      { term: 'PHP', color: '#FF5733', link: 'https://example.com/php' },
      { term: 'Laravel', color: '#FFC300', link: 'https://example.com/laravel' },
      { term: 'Symfony', color: '#DAF7A6', link: 'https://example.com/symfony' },
    ],
    [
      { term: 'Python', color: 'cyan', link: 'https://example.com/python' },
      { term: 'Django', color: 'orange', link: 'https://example.com/django' },
      { term: 'Flask', color: 'teal', link: 'https://example.com/flask' },
    ],
  ];

  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [selectedSet, setSelectedSet] = useState(0);
  const [paused, setPaused] = useState(false);

  const boxRef = useRef(null);

  const animatedStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    reset: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTermIndex(prevIndex => (prevIndex + 1) % termSets[selectedSet].length);
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedSet, termSets]);

  const handleBoxClick = () => {
    setPaused(prevPaused => !prevPaused);
  };

  const handleSetChange = (index) => {
    setSelectedSet(index);
    setCurrentTermIndex(0);
  };

  return (
    <div className="container mt-5">
      <Header />
      <div id="topBanner" className="jumbotron bg-primary text-light rounded mb-4">
        <h1 className="display-4">Contact us</h1>
        <p className="lead">We are here to answer your questions. Fill out the form below to get in touch with us. (Form not active)</p>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <div className="d-flex mb-3">
            {termSets.map((set, index) => (
              <button
                key={index}
                className={`btn btn-${index === selectedSet ? 'primary' : 'secondary'} me-2`}
                onClick={() => handleSetChange(index)}
              >
                Set {index + 1}
              </button>
            ))}
          </div>
          <div className="card shadow-sm" style={{ backgroundColor: termSets[selectedSet][currentTermIndex].color }}>
            <div className="card-body">
              <h2 className="card-title mb-3">Term</h2>
              <animated.p ref={boxRef} style={animatedStyle} onClick={handleBoxClick}>
                <a href={termSets[selectedSet][currentTermIndex].link} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {termSets[selectedSet][currentTermIndex].term}
                </a>
              </animated.p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title mb-3">Do you have any questions?</h2>
            <p>
              We are here to help you, write us.
              <br />
              <strong>info@livedata.it</strong>
            </p>
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
