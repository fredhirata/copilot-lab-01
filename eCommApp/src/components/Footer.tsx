import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>&copy; 2025 The Daily Harvest. All rights reserved.</p>
            <Link to="/contact" className="contact-link">Fale Conosco</Link>
        </footer>
    );
};

export default Footer;
