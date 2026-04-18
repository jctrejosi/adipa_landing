<div class="course-list">
    @forelse($courses ?? [] as $course)
        <div class="course-list__item item" data-type="{{ $course['type'] }}">
            {{ $course['title'] }}
        </div>
    @empty
        <div class="course-list__empty">
            No hay cursos
        </div>
    @endforelse
</div>