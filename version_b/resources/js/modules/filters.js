$('.filter').on('change', function () {
    const value = $(this).val();

    $('.item').hide();
    $(`.item[data-type="${value}"]`).show();
});