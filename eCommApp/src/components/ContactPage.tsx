import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [request, setRequest] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleContinue = () => {
        setName('');
        setEmail('');
        setRequest('');
        setShowModal(false);
    };

    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <div className="contact-container">
                    <h2>Fale Conosco</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <label htmlFor="contact-name">Nome</label>
                        <input
                            id="contact-name"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="contact-email">E-mail</label>
                        <input
                            id="contact-email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="contact-request">Solicitação</label>
                        <textarea
                            id="contact-request"
                            value={request}
                            onChange={e => setRequest(e.target.value)}
                            rows={5}
                            required
                        />
                        <button type="submit" className="contact-submit-btn">Enviar</button>
                    </form>
                </div>
            </main>
            <Footer />
            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <p>Obrigado por sua mensagem.</p>
                        <div className="checkout-modal-actions">
                            <button onClick={handleContinue} className="contact-continue-btn">Continuar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactPage;
