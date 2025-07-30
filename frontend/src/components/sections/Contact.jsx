import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useToast } from '../../hooks/use-toast';
import { contactData } from '../../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });
      setFormData({});
      setIsSubmitting(false);
    }, 1000);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {contactData.title.split('Revolucionar')[0]}
            <span className="title-accent">Revolucionar {contactData.title.split('Revolucionar')[1]}</span>
          </h2>
          <p className="section-description">
            {contactData.subtitle}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <Card className="contact-card">
              <CardHeader>
                <CardTitle className="contact-card-title">
                  Fale Conosco Agora
                </CardTitle>
                <CardDescription>
                  Escolha a forma mais conveniente para iniciar sua transformação digital.
                </CardDescription>
              </CardHeader>
              <CardContent className="contact-methods">
                <div className="contact-method" onClick={openWhatsApp}>
                  <div className="method-icon whatsapp">
                    <MessageSquare />
                  </div>
                  <div className="method-info">
                    <h4>WhatsApp</h4>
                    <p>Resposta imediata</p>
                    <span>+55 74 99970-5698</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon email">
                    <Mail />
                  </div>
                  <div className="method-info">
                    <h4>E-mail</h4>
                    <p>Resposta em até 2h</p>
                    <span>contato@iajuris.com</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon phone">
                    <Phone />
                  </div>
                  <div className="method-info">
                    <h4>Telefone</h4>
                    <p>Seg à Sex, 8h às 18h</p>
                    <span>(74) 99970-5698</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon location">
                    <MapPin />
                  </div>
                  <div className="method-info">
                    <h4>Bahia, Brasil</h4>
                    <p>Atendimento nacional</p>
                    <span>Implementação remota</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="urgency-banner">
              <h3>🚀 Oferta Especial</h3>
              <p><strong>50% de desconto</strong> na implementação para os próximos 10 escritórios que solicitar em demonstração neste mês!</p>
            </div>
          </div>

          <div className="contact-form-container">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle>Solicite sua Demonstração</CardTitle>
                <CardDescription>
                  Preencha o formulário e receba uma demonstração personalizada em até 24h.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="nome">Nome Completo *</label>
                      <Input
                        id="nome"
                        type="text"
                        required
                        value={formData.nome || ''}
                        onChange={(e) => handleInputChange('nome', e.target.value)}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">E-mail Profissional *</label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email || ''}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="telefone">Telefone/WhatsApp *</label>
                      <Input
                        id="telefone"
                        type="tel"
                        required
                        value={formData.telefone || ''}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="escritorio">Nome do Escritório</label>
                      <Input
                        id="escritorio"
                        type="text"
                        value={formData.escritorio || ''}
                        onChange={(e) => handleInputChange('escritorio', e.target.value)}
                        placeholder="Nome do seu escritório"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="advogados">Número de Advogados *</label>
                    <Select onValueChange={(value) => handleInputChange('advogados', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Advogado Solo</SelectItem>
                        <SelectItem value="2-5">2 a 5 advogados</SelectItem>
                        <SelectItem value="6-15">6 a 15 advogados</SelectItem>
                        <SelectItem value="16+">Mais de 15 advogados</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="mensagem">Como podemos ajudar?</label>
                    <Textarea
                      id="mensagem"
                      rows={4}
                      value={formData.mensagem || ''}
                      onChange={(e) => handleInputChange('mensagem', e.target.value)}
                      placeholder="Descreva suas necessidades e expectativas..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="form-submit"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        Solicitar Demonstração Gratuita
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="form-privacy">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Seus dados estão protegidos pela LGPD. Não compartilhamos informações com terceiros.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;