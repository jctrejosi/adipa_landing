@extends('layouts.app')

@section('title', 'Home')

@section('content')
    <section class="catalog">
        <aside class="catalog__filters">
            @include('components.filters')
        </aside>

        <div class="catalog__content">
            @include('components.course-list')
        </div>
    </section>

    @include('components.contact-form')

    @include('components.footer')

@endsection