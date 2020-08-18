$(document)
    .ready(function ($) {

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
            $(this).siblings(".schedule-options").toggleClass('d-flex')
        })
    })