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

  const [currentTermIndex1, setCurrentTermIndex1] = useState(0);
  const [currentTermIndex2, setCurrentTermIndex2] = useState(0);
  const [currentTermIndex3, setCurrentTermIndex3] = useState(0);
  const [currentTermIndex4, setCurrentTermIndex4] = useState(0);
  const [paused, setPaused] = useState(false);

  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);

  const animatedStyle1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    reset: true,
  });

  const animatedStyle2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    reset: true,
  });

  const animatedStyle3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    reset: true,
  });

  const animatedStyle4 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    reset: true,
  });

  useEffect(() => {
    let interval1, interval2, interval3, interval4;

    if (!paused) {
      interval1 = setInterval(() => {
        setCurrentTermIndex1(prevIndex => (prevIndex + 1) % termSets[0].length);
      }, 2000);

      interval2 = setInterval(() => {
        setCurrentTermIndex2(prevIndex => (prevIndex + 1) % termSets[1].length);
      }, 2000);

      interval3 = setInterval(() => {
        setCurrentTermIndex3(prevIndex => (prevIndex + 1) % termSets[2].length);
      }, 2000);

      interval4 = setInterval(() => {
        setCurrentTermIndex4(prevIndex => (prevIndex + 1) % termSets[3].length);
      }, 2000);
    }

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [paused, termSets]);

  const handleBoxClick = () => {
    setPaused(prevPaused => !prevPaused);
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
          <div className="card shadow-sm" style={{ backgroundColor: termSets[0][currentTermIndex1].color }}>
            <div className="card-body">
              <h2 className="card-title mb-3">Term 1</h2>
              <animated.p ref={boxRef1} style={animatedStyle1} onClick={handleBoxClick}>
                <a href={termSets[0][currentTermIndex1].link} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {termSets[0][currentTermIndex1].term}
                </a>
              </animated.p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className="card shadow-sm" style={{ backgroundColor: termSets[1][currentTermIndex2].color }}>
            <div className="card-body">
              <h2 className="card-title mb-3">Term 2</h2>
              <animated.p ref={boxRef2} style={animatedStyle2} onClick={handleBoxClick}>
                <a href={termSets[1][currentTermIndex2].link} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {termSets[1][currentTermIndex2].term}
                </a>
              </animated.p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className="card shadow-sm" style={{ backgroundColor: termSets[2][currentTermIndex3].color }}>
            <div className="card-body">
              <h2 className="card-title mb-3">Term 3</h2>
              <animated.p ref={boxRef3} style={animatedStyle3} onClick={handleBoxClick}>
                <a href={termSets[2][currentTermIndex3].link} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {termSets[2][currentTermIndex3].term}
                </a>
              </animated.p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className="card shadow-sm" style={{ backgroundColor: termSets[3][currentTermIndex4].color }}>
            <div className="card-body">
              <h2 className="card-title mb-3">Term 4</h2>
              <animated.p ref={boxRef4} style={animatedStyle4} onClick={handleBoxClick}>
                <a href={termSets[3][currentTermIndex4].link} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {termSets[3][currentTermIndex4].term}
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
