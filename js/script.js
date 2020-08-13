jQuery(document)
    .ready(function ($) {
        if (localStorage.getItem('r')) 
            setTimeout(function () {
                window
                    .location
                    .reload()
            }, 5000);
        function affixNavigation() {

            var scrollValue = $(window).scrollTop();

            if (scrollValue == $('.top-header').height() || scrollValue > 70) {

                $('.main-nav').addClass('fixed-top');

            } else {

                $('.main-nav').removeClass('fixed-top');

            }

        }

        $(window).on('scroll', affixNavigation);

        affixNavigation();

        /*******************************

     * ACCORDION WITH TOGGLE ICONS

     *******************************/

        function toggleIcon(e) {

            $(e.target)
                .prev('.panel-heading')
                .find(".more-less")
                .toggleClass('glyphicon-plus glyphicon-minus');

        }

        $('.panel-group').on('hidden.bs.collapse', toggleIcon);

        $('.panel-group').on('shown.bs.collapse', toggleIcon);

    });