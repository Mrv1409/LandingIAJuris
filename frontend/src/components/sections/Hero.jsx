import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Play, Shield, Award, Users } from 'lucide-react';
import { heroData } from '../../data/mock';

const Hero = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${heroData.whatsappNumber}?text=Olá! Gostaria de solicitar uma demonstração do IAJuris.`, '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src={heroData.backgroundImage} 
          alt="Professional legal technology"
          className="hero-bg-image"
        />
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Shield className="w-4 h-4" />
              <span>5+ Anos de Experiência em Direito e Tecnologia</span>
            </div>
            
            <h1 className="hero-title">
              {heroData.title}
              <span className="hero-subtitle">{heroData.subtitle}</span>
            </h1>
            
            <p className="hero-description">
              {heroData.description}
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">
                <Award className="w-5 h-5" />
                <span>Conformidade LGPD</span>
              </div>
              <div className="hero-feature">
                <Users className="w-5 h-5" />
                <span>+1000 Advogados Confiam</span>
              </div>
              <div className="hero-feature">
                <Shield className="w-5 h-5" />
                <span>Segurança Bancária</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <Button 
                size="lg" 
                onClick={openWhatsApp}
                className="hero-cta-primary"
              >
                {heroData.ctaText}
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact}
                className="hero-cta-secondary"
              >
                <Play className="w-5 h-5" />
                Assistir Demo
              </Button>
            </div>
            
            <div className="hero-social-proof">
              <p className="social-proof-text">
                <strong>Garantia de 30 dias</strong> • <strong>Implementação em 24h</strong> • <strong>Suporte prioritário</strong>
              </p>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="card-title">IAJuris Dashboard</span>
              </div>
              <div className="card-content">
                <div className="dashboard-preview">
                  <div className="dashboard-stat">
                    <span className="stat-number">156</span>
                    <span className="stat-label">Petições Geradas Hoje</span>
                  </div>
                  <div className="dashboard-stat">
                    <span className="stat-number">98%</span>
                    <span className="stat-label">Precisão IA</span>
                  </div>
                  <div className="dashboard-stat">
                    <span className="stat-number">2.3s</span>
                    <span className="stat-label">Tempo Médio de Resposta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;