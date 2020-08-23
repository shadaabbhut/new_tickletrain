$(document)
    .ready(function ($) {
        if ($.fn.datepicker)
            $('#datetimepicker1').datetimepicker({
                format: 'DD/MM/YYYY HH:mm'
            });

        $(".expand-collapse-table-rows")
            .on("click", function () {
                $(this)
                    .find('i')
                    .toggleClass("fa-angle-double-up");

                $(".table-child-" + $(this).data('item')).toggleClass('d-none')
            })

        $(".schedule-icon").on('click', function () {
            //$(".schedule-options").addClass('d-none');
            $(this)
                .siblings(".schedule-options")
                .toggleClass('d-flex')
        })

        $('.is-floating-label input, .is-floating-label textarea').on('focus blur', function (e) {
            $(this).parents('.is-floating-label').toggleClass('is-focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');

        setTimeout(function () {

        }, 4000)
    })