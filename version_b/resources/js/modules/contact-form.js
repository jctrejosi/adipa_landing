export function initContactForms() {
    const containers = document.querySelectorAll('[data-contact-form]');

    containers.forEach(container => {
        const formElement = container.querySelector('[data-contact-form-element]');
        if (!formElement) return;

        // Obtener textos de éxito desde data attributes
        const successTitle = container.dataset.successTitle || '¡Mensaje enviado!';
        const successDescription = container.dataset.successDescription || 'Gracias por contactarnos. Te responderemos en menos de 24 horas.';
        const successButtonLabel = container.dataset.successButtonLabel || 'Enviar otro mensaje';

        // Referencias a campos
        const nameInput = container.querySelector('[data-contact-name]');
        const emailInput = container.querySelector('[data-contact-email]');
        const messageInput = container.querySelector('[data-contact-message]');
        const counterSpan = container.querySelector('[data-contact-counter]');
        const submitBtn = container.querySelector('[data-contact-submit]');

        // Contenedores de errores
        const nameError = container.querySelector('[data-contact-error-name]');
        const emailError = container.querySelector('[data-contact-error-email]');
        const messageError = container.querySelector('[data-contact-error-message]');

        // Estado interno
        let formData = {
            name: '',
            email: '',
            message: ''
        };
        let errors = {};

        // Actualizar contador de caracteres
        function updateCounter() {
            if (counterSpan && messageInput) {
                const len = messageInput.value.length;
                counterSpan.textContent = `${len}/300`;
            }
        }

        // Validación
        function validate() {
            const newErrors = {};
            const name = formData.name.trim();
            const email = formData.email.trim();
            const message = formData.message.trim();

            if (!name) newErrors.name = 'El nombre es obligatorio';
            if (!email) {
                newErrors.email = 'El email es obligatorio';
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                newErrors.email = 'Email inválido';
            }
            if (!message) {
                newErrors.message = 'El mensaje es obligatorio';
            } else if (message.length < 10) {
                newErrors.message = 'Mínimo 10 caracteres';
            }
            return newErrors;
        }

        // Mostrar errores en UI
        function renderErrors() {
            if (nameError) nameError.textContent = errors.name || '';
            if (emailError) emailError.textContent = errors.email || '';
            if (messageError) messageError.textContent = errors.message || '';
        }

        // Actualizar estado desde inputs
        function syncFromInputs() {
            formData.name = nameInput?.value || '';
            formData.email = emailInput?.value || '';
            formData.message = messageInput?.value || '';
            updateCounter();
        }

        // Manejar envío
        function handleSubmit(e) {
            e.preventDefault();
            syncFromInputs();
            errors = validate();
            renderErrors();

            if (Object.keys(errors).length === 0) {
                // Simular envío exitoso
                showSuccessScreen();
            }
        }

        // Mostrar pantalla de éxito
        function showSuccessScreen() {
            const successHtml = `
                <div class="contact-form-success">
                    <div class="contact-form-success__icon">
                        <div class="icon-circle">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600 dark:text-green-400">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                    </div>
                    <h2 class="contact-form-success__title">${escapeHtml(successTitle)}</h2>
                    <p class="contact-form-success__description">${escapeHtml(successDescription)}</p>
                    <button class="contact-form-success__button" data-contact-reset>${escapeHtml(successButtonLabel)}</button>
                </div>
            `;
            container.innerHTML = successHtml;
            const resetBtn = container.querySelector('[data-contact-reset]');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    // Reiniciar formulario (recargar componente original)
                    location.reload();
                });
            }
        }

        // Eventos de input
        if (nameInput) {
            nameInput.addEventListener('input', () => {
                formData.name = nameInput.value;
                if (errors.name) {
                    errors = validate();
                    renderErrors();
                }
            });
        }
        if (emailInput) {
            emailInput.addEventListener('input', () => {
                formData.email = emailInput.value;
                if (errors.email) {
                    errors = validate();
                    renderErrors();
                }
            });
        }
        if (messageInput) {
            messageInput.addEventListener('input', () => {
                formData.message = messageInput.value;
                updateCounter();
                if (errors.message) {
                    errors = validate();
                    renderErrors();
                }
            });
        }

        // Envío del formulario
        if (formElement) {
            formElement.addEventListener('submit', handleSubmit);
        }

        // Inicializar contador
        updateCounter();
    });
}

// Helper para escapar HTML y evitar XSS
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
        return c;
    });
}