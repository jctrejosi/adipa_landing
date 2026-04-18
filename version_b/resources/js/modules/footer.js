export function initFooter() {
    const forms = document.querySelectorAll('[data-newsletter-form]');

    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = form.querySelector('[data-newsletter-name]');
            const emailInput = form.querySelector('[data-newsletter-email]');
            const frequencySelect = form.querySelector('[data-newsletter-frequency]');

            const data = {
                name: nameInput?.value || '',
                email: emailInput?.value || '',
                frequency: frequencySelect?.value || ''
            };

            console.log('Newsletter submit:', data);

            alert('Funcionalidad de newsletter en desarrollo');
        });
    });
}