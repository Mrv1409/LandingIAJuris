import React from 'react';
import { MessageSquare, Mail, MapPin, Shield, Award, Users, ArrowRight } from 'lucide-react';

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5574999705698?text=Olá! Gostaria de conhecer melhor o IAJuris.', '_blank');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-cta">
            <h3>Não Deixe Seus Concorrentes Saírem na Frente</h3>
            <p>Enquanto você hesita, outros escritórios já estão usando IA para aumentar seus resultados em 300%</p>
            <button className="footer-cta-btn" onClick={openWhatsApp}>
              Quero Começar Hoje
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Footer Main */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <h3>IAJuris</h3>
              <span>Legal Tech</span>
            </div>
            <p className="footer-description">
              Revolucionando a advocacia brasileira com inteligência artificial, 
              automação e tecnologia de ponta para escritórios modernos.
            </p>
            <div className="footer-credentials">
              <div className="credential">
                <Shield className="w-4 h-4" />
                <span>5+ Anos de Experiência</span>
              </div>
              <div className="credential">
                <Award className="w-4 h-4" />
                <span>Conformidade LGPD</span>
              </div>
              <div className="credential">
                <Users className="w-4 h-4" />
                <span>+1000 Advogados</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Plataforma</h4>
              <ul>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Funcionalidades</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Planos</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Demonstração</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Suporte</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Recursos</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Chat com IA</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Geração de Petições</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Gestão Financeira</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Calculadora Jurídica</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Sobre Nós</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Depoimentos</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Parceiros</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Carreira</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contato</h4>
              <ul>
                <li>
                  <div className="contact-item" onClick={openWhatsApp}>
                    <MessageSquare className="w-4 h-4" />
                    <span>+55 74 99970-5698</span>
                  </div>
                </li>
                <li>
                  <div className="contact-item">
                    <Mail className="w-4 h-4" />
                    <span>contato@iajuris.com</span>
                  </div>
                </li>
                <li>
                  <div className="contact-item">
                    <MapPin className="w-4 h-4" />
                    <span>Bahia, Brasil</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2025 IAJuris. Todos os direitos reservados.</p>
            <div className="legal-links">
              <a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Política de Privacidade</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>Termos de Uso</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openWhatsApp(); }}>LGPD</a>
            </div>
          </div>
          
          <div className="footer-final-cta">
            <p><strong>Últimos dias</strong> da oferta de implementação gratuita!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;