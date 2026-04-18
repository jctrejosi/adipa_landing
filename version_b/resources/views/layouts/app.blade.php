<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>

    @vite([
        'resources/stylus/app.styl',
        'resources/js/app.js'
    ])
</head>
<body>
    @include('components.header')
    @include('components.navbar')

    <main>
        @yield('content')
    </main>

</body>
</html>