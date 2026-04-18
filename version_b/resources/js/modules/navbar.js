export function initNavbar() {
    // ---------- Dropdowns desktop ----------
    const dropdowns = document.querySelectorAll('[data-mega], [data-dropdown]');
    const triggers = document.querySelectorAll('[data-mega-trigger], [data-dropdown-trigger]');

    function closeAllDropdowns(except = null) {
        dropdowns.forEach(dd => {
            if (dd !== except) dd.classList.remove('is-open');
        });
    }

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const parent = trigger.closest('[data-mega], [data-dropdown]');
            if (!parent) return;
            const isOpen = parent.classList.contains('is-open');
            closeAllDropdowns(parent);
            if (!isOpen) parent.classList.add('is-open');
        });
    });

    // Cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('[data-mega], [data-dropdown]')) {
            closeAllDropdowns();
        }
    });

    // ---------- Drawer móvil ----------
    const openBtn = document.querySelector('[data-mobile-open]');
    const drawer = document.querySelector('[data-mobile-drawer]');
    const closeBtns = document.querySelectorAll('[data-mobile-close]');

    if (openBtn && drawer) {
        openBtn.addEventListener('click', () => drawer.classList.add('is-open'));
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => drawer.classList.remove('is-open'));
        });
    }
}