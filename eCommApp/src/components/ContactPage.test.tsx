import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import ContactPage from './ContactPage';

vi.mock('./Header', () => ({
    default: () => <div data-testid="header">Header</div>
}));

vi.mock('./Footer', () => ({
    default: () => <div data-testid="footer">Footer</div>
}));

describe('ContactPage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the contact form', () => {
        render(<ContactPage />);
        expect(screen.getByText('Fale Conosco')).toBeInTheDocument();
        expect(screen.getByLabelText('Nome')).toBeInTheDocument();
        expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
        expect(screen.getByLabelText('Solicitação')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
    });

    it('shows thank-you modal on submit and clears form on continue', () => {
        render(<ContactPage />);

        fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'João' } });
        fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'joao@example.com' } });
        fireEvent.change(screen.getByLabelText('Solicitação'), { target: { value: 'Preciso de ajuda' } });

        fireEvent.submit(screen.getByRole('button', { name: 'Enviar' }).closest('form')!);

        expect(screen.getByText('Obrigado por sua mensagem.')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Continuar' })).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Continuar' }));

        expect(screen.queryByText('Obrigado por sua mensagem.')).not.toBeInTheDocument();
        expect((screen.getByLabelText('Nome') as HTMLInputElement).value).toBe('');
        expect((screen.getByLabelText('E-mail') as HTMLInputElement).value).toBe('');
        expect((screen.getByLabelText('Solicitação') as HTMLTextAreaElement).value).toBe('');
    });
});
