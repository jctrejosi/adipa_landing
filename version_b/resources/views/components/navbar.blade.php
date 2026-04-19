@php
    $navData = include(resource_path('views/data/navbar.php'));
    $discoverSections = $navData['discoverSections'];
    $resourcesSections = $navData['resourcesSections'];
    $iconWhatsapp = $iconWhatsapp ?? asset('assets/icons-whatsapp.svg');
@endphp

<div class="navbar-desktop">
    <div class="navbar-desktop__left">
        <button class="whatsapp-btn" type="button">
            <img src="{{ $iconWhatsapp }}" alt="WhatsApp" width="20" height="20">
        </button>

        <span class="divider-vertical"></span>

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
        <div class="simple-dropdown" data-dropdown>
            <span class="simple-dropdown__trigger" data-dropdown-trigger>
                Recursos <i class="icon-chevron-down"></i>
            </span>

            <div class="simple-dropdown__panel">
                @foreach($resourcesSections as $section)
                    <div class="simple-dropdown__group">
                        @if(!empty($section['title']))
                            <strong>{{ $section['title'] }}</strong>
                        @endif

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

        <div class="nav-item-badge">
            <span class="badge badge--gratis">Gratis</span>
            <a href="/seminarios">Seminarios</a>
        </div>

        <div class="nav-item-badge">
            <span class="badge badge--nuevo">Nuevo</span>
            <a href="/congreso">Congreso</a>
        </div>

        <a href="/especializaciones">Especializaciones</a>
        <a href="/acreditaciones">Acreditaciones</a>
        <a href="/sesiones-magistrales">Sesiones Magistrales</a>
        <a href="/diplomados">Diplomados</a>
        <a href="/cursos" class="font-semibold">Cursos</a>
    </nav>
</div>