@props([
    'title' => 'Cursos de Psicología con Certificado en 2026',
    'subtitle' => 'Vive la mejor experiencia de aprendizaje y potencia tus conocimientos a través de nuestros cursos y diplomados.',
    'placeholder' => '',
    'initialValue' => '',
    'suggestions' => ['Autismo', 'Wisc', 'Ados', 'Trauma', 'ADI-R', 'WAIS', 'Peers'],
    'className' => '',
])

<section
    class="hero-search {{ $className }}"
    data-hero-search
>
    <div class="hero-search__container">
        <h1 class="hero-search__title">{{ $title }}</h1>

        <p class="hero-search__subtitle">{{ $subtitle }}</p>

        <div class="hero-search__box">
            <span class="hero-search__caret" data-hero-caret></span>
            <input
                type="text"
                class="hero-search__input"
                placeholder="{{ $placeholder }}"
                value="{{ $initialValue }}"
                data-hero-input
                aria-label="Buscar cursos"
            >
            <button
                type="button"
                class="hero-search__button"
                data-hero-button
                aria-label="Buscar"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </div>

        <div class="hero-search__chips" data-hero-chips>
            @foreach($suggestions as $suggestion)
                <button
                    type="button"
                    class="hero-search__chip"
                    data-hero-chip="{{ $suggestion }}"
                >
                    {{ $suggestion }}
                </button>
            @endforeach
        </div>
    </div>
</section>