import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5574999705698?text=Olá! Gostaria de conhecer melhor o IAJuris.', '_blank');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h1>IAJuris</h1>
            <span className="logo-tagline">Legal Tech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
              Funcionalidades
            </a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
              Depoimentos
            </a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>
              Planos
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="header-actions">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={openWhatsApp}
              className="whatsapp-btn"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button 
              size="sm" 
              onClick={() => scrollToSection('contact')}
              className="demo-btn"
            >
              Demonstração
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
              Funcionalidades
            </a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
              Depoimentos
            </a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>
              Planos
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              Contato
            </a>
            <div className="mobile-actions">
              <Button 
                variant="outline" 
                onClick={openWhatsApp}
                className="w-full mb-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full"
              >
                Demonstração
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;