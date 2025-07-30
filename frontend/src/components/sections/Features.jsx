import React from 'react';
import { MessageSquare, FileText, Calculator, Calendar, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { featuresData } from '../../data/mock';

const iconMap = {
  MessageSquare,
  FileText,
  Calculator,
  Calendar,
  Users,
  TrendingUp
};

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Funcionalidades que Revolucionam
            <span className="title-accent"> sua Prática Jurídica</span>
          </h2>
          <p className="section-description">
            Uma plataforma completa que integra inteligência artificial, automação e gestão 
            para transformar a rotina do seu escritório em uma máquina de alta performance.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature, index) => {
            const Icon = iconMap[feature.icon] || MessageSquare;
            const isMainFeature = index < 3;
            
            return (
              <div key={feature.id} className={`feature-item ${isMainFeature ? 'feature-main' : 'feature-secondary'}`}>
                <Card className="feature-card">
                  {feature.image && isMainFeature && (
                    <div className="feature-image">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        loading="lazy"
                      />
                      <div className="feature-overlay">
                        <Icon className="feature-icon-overlay" />
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="feature-header">
                    <div className="feature-icon-container">
                      <Icon className="feature-icon" />
                    </div>
                    <CardTitle className="feature-title">{feature.title}</CardTitle>
                    <CardDescription className="feature-description">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="feature-content">
                    <ul className="feature-benefits">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="feature-benefit">
                          <span className="benefit-check">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    {isMainFeature && (
                      <Button 
                        variant="outline" 
                        className="feature-cta"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Saiba Mais
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="features-cta">
          <div className="features-cta-content">
            <h3 className="features-cta-title">
              Pronto para Aumentar sua Produtividade em 300%?
            </h3>
            <p className="features-cta-description">
              Junte-se a mais de 1000 advogados que já transformaram seus escritórios com o IAJuris.
            </p>
            <Button 
              size="lg" 
              className="features-cta-btn"
              onClick={() => window.open('https://wa.me/5574999705698?text=Quero conhecer todas as funcionalidades do IAJuris!', '_blank')}
            >
              Solicitar Demonstração Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;