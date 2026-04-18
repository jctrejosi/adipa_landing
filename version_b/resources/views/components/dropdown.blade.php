@props([
    'trigger',
    'sections',
    'variant' => 'simple'
])

<div class="relative group">

    {{-- trigger --}}
    <div class="cursor-pointer">
        {!! $trigger !!}
    </div>

    {{-- dropdown --}}
    <div
        class="hidden group-hover:flex absolute top-full left-0 z-50
        {{ $variant === 'mega'
            ? 'gap-10 bg-white px-[30px] py-5 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)]'
            : 'min-w-[220px] py-5 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]'
        }}"
    >
        @foreach($sections as $section)
            <div class="flex flex-col min-w-[160px]">

                @if(!empty($section['title']))
                    <span class="text-[13px] font-semibold text-[#6c6c6c]">
                        {{ $section['title'] }}
                    </span>
                @endif

                @foreach($section['items'] as $item)
                    <a
                        href="{{ $item['href'] }}"
                        class="block px-5 py-[10px] text-[14px] leading-[22px]
                               text-[#828282] hover:text-black
                               {{ isset($item['bold']) && $item['bold'] ? 'font-semibold' : 'font-normal' }}"
                    >
                        {{ $item['label'] }}
                    </a>
                @endforeach

            </div>
        @endforeach
    </div>

</div>