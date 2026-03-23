import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';

const portraitImages = [
  { src: 'images/sayali.jpg', alt: 'Portrait 1' },
  { src: 'images/kid1.jpeg', alt: 'Portrait 2' },
  { src: 'images/kid2.jpeg', alt: 'Portrait 3' },
  { src: 'images/kid3.jpeg', alt: 'Portrait 4' },
];
const productImages = [
  { src: 'images/Fogg.jpg', alt: 'Product 1' },
  { src: 'images/Product2.jpg', alt: 'Product 2' },
  { src: 'images/Product3.jpg', alt: 'Product 3' },
];

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, i) => (
          <div className={`carousel-item ${i === activeIndex ? 'active' : ''}`} key={i}>
            <img
              src={image.src}
              alt={image.alt}
              onError={(evt) => { evt.currentTarget.src = 'https://via.placeholder.com/900x600?text=Image+Unavailable'; }}
            />
          </div>
        ))}
      </div>
      <button className="prev arrow" onClick={handlePrev} aria-label="Previous">‹</button>
      <button className="next arrow" onClick={handleNext} aria-label="Next">›</button>
    </div>
  );
};

const Home = () => (
  <section id="home">
    <h1>Welcome to My Photography Portfolio</h1>
    <p>Capturing moments, one frame at a time.</p>
  </section>
);

const Portrait = () => (
  <section id="portrait">
    <h2>Portrait Photography</h2>
    <Carousel images={portraitImages} />
  </section>
);

const Product = () => (
  <section id="product">
    <h2>Product Photography</h2>
    <Carousel images={productImages} />
  </section>
);

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>I am a passionate photographer specializing in landscapes, portraits, and product photography.</p>
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <p>Email: photographer@example.com</p>
    <p>Phone: (123) 456-7890</p>
  </section>
);

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <h1>ClickIt.Frames</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <span>Gallery</span>
              <ul className="dropdown-menu">
                <li><Link to="/portrait">Portrait</Link></li>
                <li><Link to="/product">Product</Link></li>
              </ul>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
