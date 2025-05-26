import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Academic from './components/Academic';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import { BlogProvider } from './contexts/BlogContext';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Home route - shows only Hero and Gallery */}
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <Gallery />
                  </>
                }
              />
              
              {/* Individual section routes */}
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/academic" element={<Academic />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;