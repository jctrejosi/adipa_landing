@props([
    'title' => 'Contáctanos',
    'description' => 'Déjanos tu mensaje y te responderemos a la brevedad.',
    'nameLabel' => 'Nombre completo',
    'namePlaceholder' => 'Ej: Juan Pérez',
    'emailLabel' => 'Correo electrónico',
    'emailPlaceholder' => 'juan@ejemplo.com',
    'messageLabel' => 'Mensaje',
    'messagePlaceholder' => 'Escribe tu consulta aquí...',
    'minMessageLengthLabel' => 'Mínimo 10 caracteres',
    'submitButtonLabel' => 'Enviar mensaje',
    'successTitle' => '¡Mensaje enviado!',
    'successDescription' => 'Gracias por contactarnos. Te responderemos en menos de 24 horas.',
    'successButtonLabel' => 'Enviar otro mensaje',
])

<div
    class="contact-form-wrapper"
    data-contact-form
    data-success-title="{{ $successTitle }}"
    data-success-description="{{ $successDescription }}"
    data-success-button-label="{{ $successButtonLabel }}"
>
    {{-- Estado del formulario (se llena con JS) --}}
    <form class="contact-form" data-contact-form-element>
        <div class="contact-form__header">
            <h4 class="contact-form__title">{{ $title }}</h4>
            <p class="contact-form__description">{{ $description }}</p>
        </div>

        {{-- Campo nombre --}}
        <div class="contact-form__field">
            <label class="contact-form__label">
                {{ $nameLabel }} <span class="contact-form__required">*</span>
            </label>
            <input
                type="text"
                class="contact-form__input"
                placeholder="{{ $namePlaceholder }}"
                data-contact-name
            >
            <span class="contact-form__error" data-contact-error-name></span>
        </div>

        {{-- Campo email --}}
        <div class="contact-form__field">
            <label class="contact-form__label">
                {{ $emailLabel }} <span class="contact-form__required">*</span>
            </label>
            <input
                type="email"
                class="contact-form__input"
                placeholder="{{ $emailPlaceholder }}"
                data-contact-email
            >
            <span class="contact-form__error" data-contact-error-email></span>
        </div>

        {{-- Campo mensaje --}}
        <div class="contact-form__field">
            <label class="contact-form__label">
                {{ $messageLabel }} <span class="contact-form__required">*</span>
            </label>
            <textarea
                class="contact-form__textarea"
                placeholder="{{ $messagePlaceholder }}"
                maxlength="300"
                data-contact-message
            ></textarea>
            <div class="contact-form__message-footer">
                <span class="contact-form__min-length">{{ $minMessageLengthLabel }}</span>
                <span class="contact-form__counter" data-contact-counter>0/300</span>
            </div>
            <span class="contact-form__error" data-contact-error-message></span>
        </div>

        {{-- Botón enviar --}}
        <button
            type="submit"
            class="contact-form__submit"
            data-contact-submit
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            {{ $submitButtonLabel }}
        </button>
    </form>
</div>