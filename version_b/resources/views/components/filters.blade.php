@php
    $groups = include(resource_path('views/data/groupsFilter.php'));
    $rankings = include(resource_path('views/data/rankingFilter.php'));
@endphp

<div class="filters" data-filters-component>
    {{-- Estado inicial (se inyecta vía JS) --}}
    <input type="hidden" data-filters-ranking value="*">
    <input type="hidden" data-filters-active value="{}">

    <div class="filters__mobile">
        {{-- Rankings dropdown --}}
        <div class="filters__dropdown" data-filters-rankings-dropdown>
            <button type="button" class="filters__dropdown-trigger" data-filters-rankings-toggle>
                <span data-filters-rankings-label>Rankings</span>
                <span class="filters__dropdown-arrow">▼</span>
            </button>
            <div class="filters__dropdown-panel" data-filters-rankings-panel style="display: none;">
                <div class="filters__rankings-list">
                    @foreach($rankings as $item)
                        <label class="filters__ranking-item" data-ranking-value="{{ $item['value'] }}">
                            <input type="radio" name="filters-ranking" value="{{ $item['value'] }}" class="hidden">
                            <span class="filters__ranking-label">{{ $item['label'] }}</span>
                            @if($item['icon'] ?? false)
                                <img src="{{ $item['icon'] }}" class="filters__ranking-icon" alt="">
                            @endif
                        </label>
                    @endforeach
                </div>
            </div>
        </div>

        {{-- Filtros dropdown --}}
        <div class="filters__dropdown" data-filters-filters-dropdown>
            <button type="button" class="filters__dropdown-trigger" data-filters-filters-toggle>
                <span>Filtros</span>
                <span class="filters__dropdown-arrow">▼</span>
            </button>
            <div class="filters__dropdown-panel" data-filters-filters-panel style="display: none;">
                <div class="filters__panel-content">
                    <div class="filters__header">
                        <h4>Filtros</h4>
                        <button type="button" class="filters__clear-all" data-filters-clear-all>Borrar filtros</button>
                    </div>
                    <div class="filters__active-chips" data-filters-active-chips></div>
                    <div class="filters__groups" data-filters-groups>
                        @foreach($groups as $group)
                            <div class="filters__group" data-group-title="{{ $group['title'] }}">
                                <div class="filters__group-title" data-group-toggle>
                                    <span>{{ $group['title'] }}</span>
                                    <span class="filters__group-arrow">▼</span>
                                </div>
                                <div class="filters__group-options" style="display: none;">
                                    @foreach($group['options'] as $opt)
                                        <label class="filters__checkbox">
                                            <input type="checkbox" data-group="{{ $group['title'] }}" value="{{ $opt['value'] }}">
                                            <span>{{ $opt['label'] }}</span>
                                        </label>
                                    @endforeach
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Versión desktop --}}
    <div class="filters__desktop">
        <div class="filters__rankings">
            @foreach($rankings as $item)
                <label class="filters__ranking-item" data-ranking-value="{{ $item['value'] }}">
                    <input type="radio" name="filters-ranking" value="{{ $item['value'] }}" class="hidden">
                    <span class="filters__ranking-label">{{ $item['label'] }}</span>
                    @if($item['icon'] ?? false)
                        <img src="{{ $item['icon'] }}" class="filters__ranking-icon" alt="">
                    @endif
                </label>
            @endforeach
        </div>

        <div class="filters__header">
            <h4>Filtros</h4>
            <button type="button" class="filters__clear-all" data-filters-clear-all>Borrar filtros</button>
        </div>

        <div class="filters__active-chips" data-filters-active-chips></div>

        <div class="filters__groups">
            @foreach($groups as $group)
                <div class="filters__group" data-group-title="{{ $group['title'] }}">
                    <div class="filters__group-title" data-group-toggle>
                        <span>{{ $group['title'] }}</span>
                        <span class="filters__group-arrow">▼</span>
                    </div>
                    <div class="filters__group-options" style="display: none;">
                        @foreach($group['options'] as $opt)
                            <label class="filters__checkbox">
                                <input type="checkbox" data-group="{{ $group['title'] }}" value="{{ $opt['value'] }}">
                                <span>{{ $opt['label'] }}</span>
                            </label>
                        @endforeach
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>