$(function() {
    //Giftlist view
    $('body').on('click', '.visitretail', function(e) {
        var giftId = $(this).data('gift-id');

        var form = $('form#click-form-' + giftId);
        var formUrl = form.attr('action');

        var affiliateUrl = $('form#click-form-' + giftId + ' .affiliate_url').val();

        $.ajax({
            type: 'POST',
            url: formUrl,
            data: form.serialize(),
            success: function(data) {
                //return data should be hashed click id
                $('#add-purchased-gift-' + giftId + ' .click_id').val(data);

                //$('#mod-'+giftId+'-1').modal('close');
                $('#mod-' + giftId + '-2').modal({
                    clickClose: false
                });
            }
        });
    });

    $('body').on('click', '.view-step2 .purchased-gift', function(e) {
        e.preventDefault();

        var giftId = $(this).data('gift-id');

        $('#mod-' + giftId + '-3 .modal-info').removeClass('confirm-loading');

        $('#mod-' + giftId + '-3').modal({
            clickClose: false,
            fadeDuration: null
        });
    });

    $('body').on('submit', 'form.add-purchased-gift', function(e) {
        e.preventDefault();

        var form = $(this);
        var formUrl = form.attr('action');

        var giftId = $(this).data('gift-id');
        $('#mod-' + giftId + '-3 .modal-info').addClass('confirm-loading');
        $.ajax({
            type: 'POST',
            url: formUrl,
            data: form.serialize(),
            success: function(data) {
                $('#mod-' + giftId + '-3 button').removeClass('btn-loading');
                if (data === 'success') {
                    $('#mod-' + giftId + '-3').modal('close');
                    $('#mod-' + giftId + '-4').modal({
                        clickClose: false,
                        escapeClose: false,
                    });
                } else {
                    $('#mod-' + giftId + '-3 .modal-info').removeClass('confirm-loading');
                    $('#mod-' + giftId + '-3 .error-message').html(data);
                    $('#mod-' + giftId + '-3 .error-message').show(200);
                }
            }
        });
    });

    if (typeof scrollToList !== 'undefined' && scrollToList === 1) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#giftlist").offset().top
        }, 200);
    }

    if (typeof purchaseClickedOff !== 'undefined' && purchaseClickedOff) {
        var purchaseClickedOffSelector = $("#mod-" + purchaseClickedOff + "-2");
        $(function() {
            if (purchaseClickedOffSelector.length) {
                $('#' + purchaseClickedOff + '-click-id').val(pruchaseClickedOffClickId);
                purchaseClickedOffSelector.modal({
                    clickClose: false,
                    fadeDuration: null
                });
            }
        });

        $('body').on('click', "#mod-" + purchaseClickedOff + "-2 a", function(e) {
            //document.cookie = "purchase_clicked_off=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            var form = $("#" + purchaseClickedOff + "-purchase-confirmation form#" + purchaseClickedOff + "-purchase-confirmation-form");
            var formUrl = form.attr('action');
            $.ajax({
                type: 'POST',
                url: formUrl,
                data: form.serialize(),
            })
        });
    }

    if ($(window).width() < 1140) {
        $('#gift-list-update-status-navbar').attr("id", "gift-list-update-status");
    }
    if ($(window).width() > 1139) {
        $('#gift-list-update-status-navbar #toggle-1').attr("id", "");
    }

    //Toggle giftlist status.
    if ($('#toggle-1').length) {
        $('body').on('change', '#gift-list-update-status #toggle-1, #gift-list-update-status-navbar #toggle-1', function() {
            var form = $("#gift-list-update-status");
            var url = form.attr('action');

            if (this.checked) {
                $('#giftlist-open').show();
                $('#giftlist-closed').hide();
                $('#nav-list-open').show();
                $('#nav-list-closed').hide();
            } else {
                $('#giftlist-open').hide();
                $('#giftlist-closed').show();
                $('#nav-list-open').hide();
                $('#nav-list-closed').show();
            }

            $.ajax({
                type: 'POST',
                url: url,
                data: form.serialize(),
                success: function(data) {}
            });
        });
    }
});

// Javascript Flash Messages
function flashError(message) {
    $('body').append('<div class="message error" onClick="this.classList.add(\'hidden\');">' + message + '</div>');
}

function flashSuccess(message) {
    let flash = $('<div class="message success">' + message + '</div>')
        .delay(3000).fadeOut(function() {
            $(this).remove();
        })
        .on('click', function() {
            $(this).fadeOut(function() {
                $(this).remove();
            });
        });
    $('body').append(flash);
}


$('#custom-input-date').datepickerInFullscreen({
    format: 'DD MMMM YYYY',
    fakeInputFormat: 'DD MMMM YYYY',
    datepicker: {
        startView: 2,
        weekStart: 1,
        startDate: '-0d',
        /* start in years (2) */
    },
});