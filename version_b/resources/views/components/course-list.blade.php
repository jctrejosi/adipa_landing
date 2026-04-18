{{-- resources/views/components/course-list.blade.php --}}
@props([
    'title' => 'Cursos que te permitirán potenciar tu carrera.',
    'searchPlaceholder' => 'Buscar curso, docente, categoría...',
    'allLabel' => 'Todos',
    'noResultsText' => 'No se encontraron cursos para la búsqueda actual.',
    'detailButtonLabel' => 'Ver detalle +',
    'liveLabel' => 'En vivo',
    'inProgressLabel' => '• En progreso',
    'startLabel' => 'Inicio :',
    'courses' => [],           // array de cursos (se pasará como JSON)
    'sortOptions' => [],       // [['value' => '*', 'label' => 'Todos'], ...]
])

@php
    $courses = include(resource_path('views/data/courses.php'));
@endphp



<div class="course-list" data-course-list-component>
    <input type="hidden" data-courses-json value='{{ json_encode($courses) }}'>
    <input type="hidden" data-sort-options value='{{ json_encode($sortOptions) }}'>
    <input type="hidden" data-sort-value value="*">
    <input type="hidden" data-search-value value="">

    <div class="course-list__header">
        <h2 class="course-list__title">{{ $title }}</h2>
        <div class="course-list__sort">
            <button type="button" class="course-list__sort-trigger" data-sort-toggle>
                <span data-sort-label>{{ $allLabel }}</span>
                <span class="course-list__sort-arrow">▼</span>
            </button>
            <div class="course-list__sort-dropdown" data-sort-dropdown style="display: none;">
                @foreach($sortOptions as $opt)
                    <button type="button" class="course-list__sort-option" data-sort-value="{{ $opt['value'] }}">
                        {{ $opt['label'] }}
                    </button>
                @endforeach
            </div>
        </div>
    </div>

    <div class="course-list__search">
        <div class="course-list__search-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="course-list__search-icon">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" class="course-list__search-input" data-search-input placeholder="{{ $searchPlaceholder }}">
            <button type="button" class="course-list__search-clear" data-search-clear style="display: none;">✕</button>
        </div>
    </div>

    <div class="course-list__grid" data-courses-container>
        {{-- Los cursos se renderizan dinámicamente con JS --}}
        <div class="course-list__loading">Cargando...</div>
    </div>
</div>

{{-- Template para tarjeta de curso (se usará en JS) --}}
<template id="course-card-template">
    <div class="course-card">
        <article class="course-card__inner">
            <div class="course-card__image-wrapper">
                <img class="course-card__image" alt="">
                <div class="course-card__live-badge" style="display: none;">
                    <span class="course-card__live-dot"></span>
                    <span class="course-card__live-text"></span>
                </div>
                <div class="course-card__rating" style="display: none;">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27"/></svg>
                    <span class="course-card__rating-value"></span>
                </div>
            </div>
            <div class="course-card__content">
                <h3 class="course-card__title"></h3>
                <div class="course-card__teacher">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span></span>
                </div>
                <div class="course-card__date">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span class="course-card__start-label"></span>
                    <span class="course-card__start-date"></span>
                    <span class="course-card__in-progress" style="display: none;"></span>
                </div>
                <div class="course-card__price-wrapper">
                    <div class="course-card__discount" style="display: none;"></div>
                    <div class="course-card__price"></div>
                </div>
                <div class="course-card__original-price" style="display: none;"></div>
                <div class="course-card__actions">
                    <button class="course-card__detail-btn"></button>
                    <button class="course-card__cart-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    </button>
                </div>
            </div>
        </article>
    </div>
</template>