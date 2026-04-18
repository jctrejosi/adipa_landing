@php
    $logoSrc = $logoSrc ?? asset('assets/logo-adipa.svg');
    $logoHref = $logoHref ?? url('/');
    $searchPlaceholder = $searchPlaceholder ?? '¿Qué quieres aprender?';
    $cartCount = $cartCount ?? 0;
@endphp

<header class="site-header js-site-header">
    <div class="site-header__brand">
        <button
            type="button"
            class="site-header__menu-button js-header-menu"
            aria-label="Menú"
            aria-expanded="false"
        >
            <svg class="site-header__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>

        <a class="site-header__logo-link" href="{{ $logoHref }}">
            <img class="site-header__logo" src="{{ $logoSrc }}" alt="logo">
        </a>
    </div>

    <form class="site-header__search js-header-search-form" action="#" method="get" role="search">
        <input
            type="text"
            class="site-header__search-input js-header-search-input"
            placeholder="{{ $searchPlaceholder }}"
            aria-label="Buscar"
        >

        <button
            type="button"
            class="site-header__search-button js-header-search-toggle"
            aria-label="Buscar"
        >
            <svg class="site-header__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
                <path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>

        <button
            type="button"
            class="site-header__search-close js-header-search-close"
            aria-label="Cerrar búsqueda"
        >
            <svg class="site-header__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
    </form>

    <div class="site-header__actions">
        <button
            type="button"
            class="site-header__theme-button js-theme-toggle"
            aria-label="Cambiar tema"
            aria-pressed="false"
        >
            <svg class="site-header__icon site-header__theme-icon site-header__theme-icon--sun" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>

            <svg class="site-header__icon site-header__theme-icon site-header__theme-icon--moon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 1 0 10.5 10.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
        </button>

        <button type="button" class="site-header__action-button js-header-login">
            <span class="site-header__action-label">Inicia sesión</span>
            <svg class="site-header__icon site-header__action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 21a8 8 0 1 0-16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
            </svg>
        </button>

        <button type="button" class="site-header__action-button js-header-register">
            <span class="site-header__action-label">Regístrate</span>
            <svg class="site-header__icon site-header__action-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 21a8 8 0 1 0-16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
                <path d="M19 8v6M16 11h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>

        <button type="button" class="site-header__cart-button js-header-cart">
            <svg class="site-header__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h7.9a2 2 0 0 0 2-1.6L20 8H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="10" cy="20" r="1.5" fill="currentColor"/>
                <circle cx="17" cy="20" r="1.5" fill="currentColor"/>
            </svg>

            @if ($cartCount > 0)
                <span class="site-header__cart-count">{{ $cartCount }}</span>
            @endif
        </button>
    </div>
</header>