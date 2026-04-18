<div class="course-list">
    @foreach($courses as $course)
        <div class="course-list__item item" data-type="{{ $course['type'] }}">
            {{ $course['title'] }}
        </div>
    @endforeach
</div>