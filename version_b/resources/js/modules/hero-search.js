export function initHeroSearch() {
    const sections = document.querySelectorAll('[data-hero-search]');

    sections.forEach(section => {
        const input = section.querySelector('[data-hero-input]');
        const button = section.querySelector('[data-hero-button]');
        const caret = section.querySelector('[data-hero-caret]');
        const chips = section.querySelectorAll('[data-hero-chip]');

        if (!input) return;

        // Función para actualizar el estado del caret y botón
        function updateInputState() {
            const hasValue = input.value.trim().length > 0;

            if (caret) {
                if (hasValue) {
                    caret.classList.add('is-hidden');
                    caret.classList.remove('is-blink');
                } else {
                    caret.classList.remove('is-hidden');
                    caret.classList.add('is-blink');
                }
            }

            if (button) {
                if (hasValue) {
                    button.removeAttribute('disabled');
                } else {
                    button.setAttribute('disabled', 'disabled');
                }
            }
        }

        // Función para ejecutar búsqueda
        function performSearch(searchTerm) {
            const term = searchTerm.trim();
            if (!term) return;

            // Emitir evento personalizado para que el padre lo escuche
            const event = new CustomEvent('hero-search', {
                detail: { term },
                bubbles: true
            });
            section.dispatchEvent(event);

            // También puedes redirigir a una URL con query string (opcional)
            // window.location.href = `/buscar?q=${encodeURIComponent(term)}`;
        }

        // Eventos del input
        input.addEventListener('input', updateInputState);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(input.value);
            }
        });

        // Botón de búsqueda
        if (button) {
            button.addEventListener('click', () => {
                performSearch(input.value);
            });
        }

        // Sugerencias (chips)
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const suggestion = chip.getAttribute('data-hero-chip');
                if (suggestion) {
                    input.value = suggestion;
                    updateInputState();
                    performSearch(suggestion);
                }
            });
        });

        // Estado inicial
        updateInputState();

        // Si hay valor inicial, mover caret y habilitar botón
        if (input.value.trim()) {
            updateInputState();
        }
    });
}