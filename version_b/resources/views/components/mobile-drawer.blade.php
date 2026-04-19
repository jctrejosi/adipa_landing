@php
    $navData = include(resource_path('views/data/navbar.php'));
    $discoverSections = $navData['discoverSections'];
    $resourcesSections = $navData['resourcesSections'];
    $iconWhatsapp = $iconWhatsapp ?? asset('assets/icons-whatsapp.svg');
@endphp

<div class="mobile-drawer" data-site-menu-drawer>
    <div class="mobile-drawer__overlay" data-site-menu-close></div>

    <div class="mobile-drawer__content">
        <div class="mobile-drawer__header">
            <span>Menú</span>
            <button type="button" data-site-menu-close aria-label="Cerrar">✕</button>
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