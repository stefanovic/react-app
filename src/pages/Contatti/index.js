import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Header from '../../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const termSets = [
    [
      { term: 'Api-first', color: '#FF5733', link: 'https://webstack.livedata.it/api/' },
      { term: 'RESTful APIs', color: 'green', link: 'https://en.wikipedia.org/wiki/REST' },
      { term: 'GraphQL', color: 'crimson', link: 'https://webstack.livedata.it/api/graphql/' },
    ],
    [
      { term: 'Jamstack', color: 'blueviolet', link: 'https://jamstack.org/' },
      { term: 'Serverless', color: 'aquamarine', link: 'https://www.netlify.com/blog/intro-to-serverless-functions/' },
      { term: 'Static Site Generation', color: '#FFC300', link: 'https://webstack.livedata.it/blog/astro-build/' },
    ],
    [
      { term: 'JavaScript', color: 'magenta', link: 'https://developer.mozilla.org/en-US/docs/Web/javascript' },
      { term: 'TypeScript', color: 'goldenrod', link: 'https://www.typescriptlang.org' },
      { term: 'React', color: 'lavender', link: 'https://it.legacy.reactjs.org' },
    ],
    [
      { term: 'PHP', color: '#FF5733', link: 'https://it.wikipedia.org/wiki/PHP' },
      { term: 'Codeigniter', color: '#FFC300', link: 'https://codeigniter.com/' },
      { term: 'ProcessWire', color: '#DAF7A6', link: 'https://webstack.livedata.it/blog/processwire-flessibilita-creativita-velocita/' },
    ],
    [
      { term: 'SEO', color: 'cyan', link: 'https://it.wikipedia.org/wiki/Ottimizzazione_per_i_motori_di_ricerca' },
      { term: 'Core Web Vitals', color: 'orange', link: 'https://webstack.livedata.it/blog/core-web-vitals-approcci-allo-sviluppo-web/' },
      { term: 'Ricerca Vocale', color: 'teal', link: 'https://webstack.livedata.it/blog/ottimizzazione-della-ricerca-vocale-il-futuro-del-seo/' },
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
        <p className="lead">We are here to answer your questions.</p>
      </div>

      <h2 className="display-0">Introducing InteractiveTermDisplay React component</h2>
        <p className="lead">Are you looking for an engaging and interactive way to showcase a collection of terms or concepts links on your website? Look no further! 
        With the new "InteractiveTermDisplay" component, you can effortlessly add a dynamic and visually appealing term display to your React application.       
        </p>

        <h2>Key Features:</h2>

<ul>
    <li><span>🚀</span> Smooth Transitions: Enjoy fluid transitions between terms, enhancing the user experience without compromising performance.</li>
    <li><span>🎨</span> Customizable Design: Tailor the appearance of the display to match your website's style with customizable transition speeds and a range of vibrant color options.</li>
    <li><span>💡</span> Interactive Experience: Engage your audience with interactive features that allow users to pause and resume animations with ease, adding depth to your content presentation.</li>
    <li><span>🔍</span> Accessibility: Ensure inclusivity with keyboard navigation and screen reader compatibility, making your content accessible to all users.</li>
</ul>

<br>
</br>
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
        <p> &copy; 2024 Livedata React App on <a href="https://github.com/stefanovic/react-app">GitHub</a></p>
      </footer>
    </div>
  );
};

export default Contact;
