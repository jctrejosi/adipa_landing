@php
    $navData = include(resource_path('views/data/navbar.php'));
    $discoverSections = $navData['discoverSections'];
    $resourcesSections = $navData['resourcesSections'];
    // Si la variable $iconWhatsapp no viene del controlador, usa un default
    $iconWhatsapp = $iconWhatsapp ?? asset('assets/icons-whatsapp.svg');
@endphp

<!-- Desktop navbar -->
<div class="navbar-desktop">
    <div class="navbar-desktop__left">
        <button class="whatsapp-btn" type="button">
            <img src="{{ $iconWhatsapp }}" alt="WhatsApp" width="20" height="20">
        </button>

        <span class="divider-vertical"></span>

        <!-- mega dropdown "Descubre ADIPA" -->
        <div class="mega-dropdown" data-mega>
            <button class="mega-dropdown__trigger" data-mega-trigger type="button">
                Descubre ADIPA
                <i class="icon-chevron-down"></i>
            </button>

            <div class="mega-dropdown__panel">
                <div class="mega-dropdown__grid">
                    @foreach($discoverSections as $section)
                        <div class="mega-dropdown__column">
                            <h4>{{ $section['title'] }}</h4>
                            <ul>
                                @foreach($section['items'] as $item)
                                    <li>
                                        <a href="{{ $item['href'] }}">{{ $item['label'] }}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar-desktop__nav">
        <!-- simple dropdown "Recursos" -->
        <div class="simple-dropdown" data-dropdown>
            <span class="simple-dropdown__trigger" data-dropdown-trigger>
                Recursos <i class="icon-chevron-down"></i>
            </span>

            <div class="simple-dropdown__panel">
                @foreach($resourcesSections as $section)
                    <div class="simple-dropdown__group">
                        <strong>{{ $section['title'] }}</strong>
                        <ul>
                            @foreach($section['items'] as $item)
                                <li><a href="{{ $item['href'] }}">{{ $item['label'] }}</a></li>
                            @endforeach
                        </ul>
                    </div>
                @endforeach
            </div>
        </div>

        <!-- Items con badge -->
        <div class="nav-item-badge">
            <span class="badge badge--gratis">Gratis</span>
            <a href="/seminarios">Seminarios</a>
        </div>

        <div class="nav-item-badge">
            <span class="badge badge--nuevo">Nuevo</span>
            <a href="/congreso">Congreso</a>
        </div>

        <!-- Enlaces directos -->
        <a href="/especializaciones">Especializaciones</a>
        <a href="/acreditaciones">Acreditaciones</a>
        <a href="/sesiones-magistrales">Sesiones Magistrales</a>
        <a href="/diplomados">Diplomados</a>
        <a href="/cursos" class="font-semibold">Cursos</a>
    </nav>
</div>

<!-- Botón móvil -->
<button class="mobile-menu-btn" data-mobile-open aria-label="Abrir menú">
    ☰
</button>

<!-- Drawer móvil -->
<div class="mobile-drawer" data-mobile-drawer>
    <div class="mobile-drawer__overlay" data-mobile-close></div>

    <div class="mobile-drawer__content">
        <div class="mobile-drawer__header">
            <span>Menú</span>
            <button data-mobile-close aria-label="Cerrar">✕</button>
        </div>

        <div class="mobile-drawer__whatsapp">
            <img src="{{ $iconWhatsapp }}" width="20" height="20" alt="WhatsApp">
            <span>WhatsApp</span>
        </div>

        <hr>

        <div class="mobile-drawer__section">
            <p class="mobile-drawer__section-title">Descubre ADIPA</p>
            <div class="mobile-drawer__links">
                @foreach($discoverSections as $section)
                    @foreach($section['items'] as $item)
                        <a href="{{ $item['href'] }}">{{ $item['label'] }}</a>
                    @endforeach
                @endforeach
            </div>
        </div>

        <div class="mobile-drawer__section">
            <p class="mobile-drawer__section-title">Recursos</p>
            <div class="mobile-drawer__links">
                @foreach($resourcesSections as $section)
                    @foreach($section['items'] as $item)
                        <a href="{{ $item['href'] }}">{{ $item['label'] }}</a>
                    @endforeach
                @endforeach
            </div>
        </div>

        <div class="mobile-drawer__grid">
            <a href="/seminarios">Seminarios</a>
            <a href="/congreso">Congreso</a>
            <a href="/especializaciones">Especializaciones</a>
            <a href="/acreditaciones">Acreditaciones</a>
            <a href="/sesiones-magistrales">Sesiones Magistrales</a>
            <a href="/diplomados">Diplomados</a>
            <a href="/cursos" class="font-semibold">Cursos</a>
        </div>
    </div>
</div>