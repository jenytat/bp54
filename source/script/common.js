$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        dots: true
    });

    $('.images__big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.small'
    });

    $('.small').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.images__big'
    });

    $('.filter__title').click(function(){
        $(this).find('img').toggleClass('active-block');
        $(this).siblings('.filter__chose').slideToggle(600);
    });

    function chooseQuan() {
        $('.card__minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.card__plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    }

    function filter(){
        var $navRange = $('.js-range');
        
        $navRange.each(function () {
            var min = parseInt($(this).data('minValue') || 0),
            max = parseInt($(this).data('maxValue') || 1000),
            currentMin = parseInt($(this).data('currentMinValue') || 0),
            currentMax = parseInt($(this).data('currentMaxValue') || 0),
            $inputMin = $(this).find('.range-widget-min'),
            $inputMax = $(this).find('.range-widget-max'),
            $slider = $(this).find('.range-widget__slider');
            
            if($inputMin.length && $inputMax.length && $slider.length) {
                var inputs = [$inputMin[0], $inputMax[0]],
                keypressSlider = $slider[0];
                
                noUiSlider.create(keypressSlider, {
                    start: [currentMin, currentMax],
                    connect: true,
                    direction: 'ltr',
                    range: {
                        'min': min,
                        'max': max
                    }
                });
                
                keypressSlider.noUiSlider.on('update', function( values, handle ) {
                    inputs[handle].value = parseInt(values[handle]);
                });
            }
        });
    }

   chooseQuan();
   filter();
});