<?php

return [
    'countries' => [
        ['code' => 'CL', 'name' => 'CHILE', 'flag' => '🇨🇱', 'globeIcon' => false],
        ['code' => 'MX', 'name' => 'MÉXICO', 'flag' => '🇲🇽', 'globeIcon' => false],
        ['code' => 'CO', 'name' => 'COLOMBIA', 'flag' => '🇨🇴', 'globeIcon' => false],
        ['code' => 'GL', 'name' => 'GLOBAL', 'flag' => '', 'globeIcon' => true],
    ],
    'contact' => [
        'phone' => 'CL +56957253424',
        'email' => 'info@adipa.cl - sac@adipa.cl',
        'address' => 'Estoril 120, oficina 414, Las Condes. Santiago de Chile - Montecito Nº38. Edificio WTC, piso 33. Of. 04. Nápoles. Ciudad de México',
        'addressLink' => 'https://www.google.com/maps/search/?api=1&query=Estoril+120+oficina+414+Las+Condes+Santiago+Chile',
    ],
    'bottomLinks' => [
        ['label' => '¡REGALA UNA GIFTCARD!', 'href' => '#', 'italic' => true],
        ['label' => '¿Necesitas ayuda psicológica?', 'href' => '#'],
        ['label' => 'Términos y condiciones', 'href' => '#'],
        ['label' => 'Centro de ayuda', 'href' => '#'],
    ],
    'sections' => [
        [
            'title' => 'Programas',
            'links' => [
                ['label' => 'Cursos', 'href' => '/cursos'],
                ['label' => 'Seminarios', 'href' => '/seminarios'],
                ['label' => 'Diplomados', 'href' => '/diplomados'],
            ]
        ],
        [
            'title' => 'Escuelas',
            'links' => [
                ['label' => 'Escuela Salud Mental Adultos', 'href' => '/escuela-salud-mental-adultos'],
                ['label' => 'Escuela de Salud Mental Infanto-Juvenil', 'href' => '/escuela-salud-mental-infantil'],
                ['label' => 'Escuela de Psicología Organizacional', 'href' => '/escuela-psicologia-organizacional'],
                ['label' => 'Escuela Psicosocial Jurídica', 'href' => '/escuela-psicosocial-juridica'],
                ['label' => 'Escuela de Educación Neurodesarrollo', 'href' => '/escuela-educacion-neurodesarrollo'],
            ]
        ],
        [
            'title' => 'Recursos',
            'links' => [
                ['label' => 'Noticias', 'href' => '/noticias'],
                ['label' => 'Glosario', 'href' => '/glosario'],
                ['label' => 'Podcast Adipados', 'href' => '/podcast'],
                ['label' => 'Investigaciones', 'href' => '/investigaciones'],
            ]
        ],
        [
            'title' => 'Beneficios',
            'links' => [
                ['label' => 'Convenios', 'href' => '/convenios'],
                ['label' => 'Programa Adipartners', 'href' => '/adipartners'],
                ['label' => 'Giftcards', 'href' => '/giftcards'],
            ]
        ],
        [
            'title' => 'Conoce Adipa',
            'links' => [
                ['label' => 'Sobre Adipa', 'href' => '/sobre-adipa'],
                ['label' => 'Escuelas', 'href' => '/escuelas'],
                ['label' => 'Docentes', 'href' => '/docentes'],
                ['label' => 'Prensa', 'href' => '/prensa'],
            ]
        ],
    ],
    'socialLinks' => [
        ['icon' => 'facebook', 'href' => 'https://www.facebook.com/adipa.cl', 'ariaLabel' => 'Facebook'],
        ['icon' => 'instagram', 'href' => 'https://www.instagram.com/adipa.cl/', 'ariaLabel' => 'Instagram'],
        ['icon' => 'youtube', 'href' => 'https://www.youtube.com/channel/UCSx-fxlxiMHExaWwyHT8P8A', 'ariaLabel' => 'YouTube'],
        ['icon' => 'linkedin', 'href' => 'https://www.linkedin.com/company/academia-digital-de-psicologia-y-aprendizaje-adipa/', 'ariaLabel' => 'LinkedIn'],
        ['icon' => 'spotify', 'href' => 'https://open.spotify.com/show/4mwZlXLYaGdr9WIqiuSHup', 'ariaLabel' => 'Spotify'],
        ['icon' => 'tiktok', 'href' => 'https://www.tiktok.com/@somosadipa', 'ariaLabel' => 'TikTok'],
    ],
    'copyrightText' => '© 2026 ADIPA. Todos los derechos reservados.',
];