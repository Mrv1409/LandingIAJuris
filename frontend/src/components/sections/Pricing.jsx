import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { pricingData } from '../../data/mock';

const Pricing = () => {
  const openWhatsApp = (planName) => {
    const message = `Olá! Gostaria de conhecer mais sobre o plano ${planName} do IAJuris e solicitar um orçamento personalizado.`;
    window.open(`https://wa.me/5574999705698?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {pricingData.title}
            <span className="title-accent"> para seu Escritório</span>
          </h2>
          <p className="section-description">
            {pricingData.subtitle}
          </p>
        </div>

        <div className="pricing-grid">
          {pricingData.plans.map((plan) => (
            <div key={plan.id} className={`pricing-item ${plan.highlighted ? 'pricing-featured' : ''}`}>
              <Card className="pricing-card">
                {plan.highlighted && (
                  <div className="pricing-badge">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                )}
                
                <CardHeader className="pricing-header">
                  <CardTitle className="plan-name">{plan.name}</CardTitle>
                  <CardDescription className="plan-description">
                    {plan.description}
                  </CardDescription>
                  <div className="plan-price">
                    <span className="price-text">Orçamento</span>
                    <span className="price-subtitle">Personalizado</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pricing-content">
                  <ul className="features-list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <Check className="check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`pricing-cta ${plan.highlighted ? 'cta-featured' : 'cta-standard'}`}
                    size="lg"
                    onClick={() => openWhatsApp(plan.name)}
                  >
                    {pricingData.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="pricing-guarantee">
          <div className="guarantee-content">
            <h3 className="guarantee-title">Garantia Total de Satisfação</h3>
            <p className="guarantee-text">
              30 dias para testar todas as funcionalidades. Se não ficar satisfeito, devolvemos 100% do investimento.
            </p>
            <div className="guarantee-features">
              <span>✓ Implementação gratuita</span>
              <span>✓ Treinamento incluso</span>
              <span>✓ Suporte dedicado</span>
              <span>✓ Migração de dados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;