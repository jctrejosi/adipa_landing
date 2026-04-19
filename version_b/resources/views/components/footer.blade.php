@props([
    'logoSrc' => 'https://storage.googleapis.com/statics-files-adipa-cl/dist_compress/dist/img/icons/logo-adipa.svg',
])

@php
    $footerData = include(resource_path('views/data/footer.php'));
    $socialLinks = include(resource_path('views/data/socialLinks.php'));
    $countries = $footerData['countries'];
    $contact = $footerData['contact'];
    $bottomLinks = $footerData['bottomLinks'];
    $sections = $footerData['sections'];
    $copyrightText = $footerData['copyrightText'];
@endphp

<footer class="footer">
    <div class="footer__container">
        {{-- Logo y países --}}
        <div class="footer__column">
            <img src="{{ $logoSrc }}" alt="ADIPA" class="footer__logo">
            <div class="footer__countries">
                <span class="footer__countries-label">Estamos presentes en:</span>
                <ul class="footer__countries-list">
                    @foreach($countries as $country)
                        <li class="footer__country-item" data-country="{{ $country['code'] }}">
                            <span class="footer__country-icon">
                                @if($country['globeIcon'])
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                @else
                                    {{ $country['flag'] }}
                                @endif
                            </span>
                            <span class="footer__country-name">{{ $country['name'] }}</span>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>

        {{-- Secciones dinámicas: primeras 2 en columna 2, siguientes 3 en columna 3 --}}
        <div class="footer__column">
            @foreach(array_slice($sections, 0, 2) as $section)
                <div class="footer__section">
                    <h4 class="footer__section-title">{{ $section['title'] }}</h4>
                    <ul class="footer__section-links">
                        @foreach($section['links'] as $link)
                            <li><a href="{{ $link['href'] }}">{{ $link['label'] }}</a></li>
                        @endforeach
                    </ul>
                </div>
            @endforeach
        </div>

        <div class="footer__column">
            @foreach(array_slice($sections, 2) as $section)
                <div class="footer__section">
                    <h4 class="footer__section-title">{{ $section['title'] }}</h4>
                    <ul class="footer__section-links">
                        @foreach($section['links'] as $link)
                            <li><a href="{{ $link['href'] }}">{{ $link['label'] }}</a></li>
                        @endforeach
                    </ul>
                </div>
            @endforeach
        </div>

        {{-- Contacto y enlaces adicionales --}}
        <div class="footer__column">
            <h4 class="footer__section-title">Contacto</h4>
            <div class="footer__contact">
                <div class="footer__contact-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>{{ $contact['phone'] }}</span>
                </div>
                <div class="footer__contact-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>{{ $contact['email'] }}</span>
                </div>
                <div class="footer__contact-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <a href="{{ $contact['addressLink'] }}" target="_blank" rel="noopener noreferrer">
                        {{ $contact['address'] }}
                    </a>
                </div>
            </div>
            <div class="footer__bottom-links">
                @foreach($bottomLinks as $link)
                    <a href="{{ $link['href'] }}" class="{{ $link['italic'] ?? false ? 'footer__bottom-link--italic' : 'footer__bottom-link' }}">
                        {{ $link['label'] }}
                    </a>
                @endforeach
            </div>
        </div>

        {{-- Newsletter --}}
        <div class="footer__column">
            <div class="footer__newsletter">
                <form class="footer__newsletter-form" data-newsletter-form>
                    <h4 class="footer__newsletter-title">Suscríbete a nuestro Newsletter</h4>
                    <div class="footer__form-field">
                        <label class="footer__form-label">Nombre*</label>
                        <input type="text" name="name" class="footer__form-input" required data-newsletter-name>
                    </div>
                    <div class="footer__form-field">
                        <label class="footer__form-label">Email*</label>
                        <input type="email" name="email" class="footer__form-input" required data-newsletter-email>
                    </div>
                    <div class="footer__form-field">
                        <label class="footer__form-label">Frecuencia*</label>
                        <select name="frequency" class="footer__form-select" required data-newsletter-frequency>
                            <option value="">Selecciona</option>
                            <option value="2">2 al mes</option>
                            <option value="1">1 al mes</option>
                        </select>
                    </div>
                    <button type="submit" class="footer__newsletter-button">
                        ENVIAR
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>

    {{-- Barra inferior con redes sociales y copyright --}}
    <div class="footer__bottom-bar">
        <div class="footer__bottom-container">
            <p class="footer__copyright">{{ $copyrightText }}</p>
            <div class="footer__social">
                @foreach($socialLinks as $social)
                    <a href="{{ $social['href'] }}" target="_blank" rel="noopener noreferrer" class="footer__social-icon" aria-label="{{ $social['ariaLabel'] }}">
                        {!! $social['icon'] !!}
                    </a>
                @endforeach
            </div>
        </div>
    </div>
</footer>