$(function() {
    const $body = $('body');

    $body.on('submit', 'form#giftlist-filters', function(e) {
        return false;
    });

    $body.on('change', 'form#giftlist-filters select, form#giftlist-filters input', function(e) {
        let form = $('form#giftlist-filters');
        let formData = form.find('select, input').filter(function() {
            // Filter out empty selects and inputs
            return !!$(this).val();
        }).serialize();
        // add spinner
        $('.loading').show();
        $('.products').hide();
        // scroll up
        var targetElement = $('.wrap.large');
        $('html, body').animate({
            scrollTop: targetElement.offset().top - 60
        }, 300);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: formData,
            success: function(response) {
                $('.coupleproducts .products').replaceWith(response);
            },
            error: function(response) {
                flashError('')
            },
            complete: function(response) {
                //remove spinner
                $('.loading').hide();
                $('.products').show();
            }
        });
    });


    $('.filter-btn').click(function() {
        $('.filter-btn, .sidebar-filters, .coupleproducts').toggleClass('filters-on');
        return false;
    });

    if ($(window).width() < 980) {
        $('.filter-btn').click(function() {
            $('body').css("overflow", "hidden");
        });
    }

    $('.close-filters').click(function() {
        $('.filter-btn, .sidebar-filters, .coupleproducts').removeClass("filters-on");
        $('body').css("overflow", "visible");
        return false;
    });
})