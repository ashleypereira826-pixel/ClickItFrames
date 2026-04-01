import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';

const portraitImages = [
  { src: 'images/sayali.jpg', alt: 'Portrait 1' },
  { src: 'images/isha1.jpg', alt: 'Portrait 2' },
  { src: 'images/aaron1.jpg', alt: 'Portrait 3' },
  { src: 'images/sayali2.jpg', alt: 'Portrait 4' },
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
    <Carousel
      images={[
        { src: 'images/sayali.jpg', alt: 'Home 1' },
        { src: 'images/kid1.jpeg', alt: 'Home 2' },
        { src: 'images/kid2.jpeg', alt: 'Home 3' },
        { src: 'images/kid3.jpeg', alt: 'Home 4' },
        { src: 'images/Fogg.jpg', alt: 'Home 5' },
      ]}
    />
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
    <p>Email: ashleypereira826@gmail.com</p>
    <p>Phone: +91-9730390065</p>
    <p>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
      </svg>
      @clickit.frames
    </p>
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
