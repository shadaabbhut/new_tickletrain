$(document)
    .ready(function ($) {
        $(".expand-collapse-table-rows")
            .on("click", function () {
                $(this)
                    .find('i')
                    .toggleClass("fa-angle-double-up");

                $(".table-child-" + $(this).data('item')).toggleClass('d-none')
            })
    })