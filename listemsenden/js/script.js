const TitleMaxLength = 75;

$(document).ready(function() {

    // ANIMATE BUTTONS

    [].map.call(document.querySelectorAll('[anim="ripple"]'), function(el) {
        el.addEventListener('click', function(e) {
            e = e.touches ? e.touches[0] : e;
            var r = el.getBoundingClientRect(),
                d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
            el.style.cssText = "--s: 0; --o: 1;";
            el.offsetTop;
            el.style.cssText = "--t: 1; --o: 0; --d: " + d + "; --x:" + (e.clientX - r.left) + "; --y:" + (e.clientY - r.top) + ";";
        });
    });

    // EMPTY URL WHEN ADDING NEW GIFT
    $('body').on('click', 'a.add-gift', function(event) {
        event.preventDefault();
        $("#add-gift-modal .url input").val('');
        $(".gift-image img").attr('src', '');
        $('#add-modal').removeClass('confirm-loading');
        $("input[name=product_image]").attr('value', '');
        $("#add-modal .product-image-wrapper").css({
            "background": "url('/img/default-gift-circle.webp')",
            "background-position": "center center",
            "background-repeat": "no-repeat",
            "background-size": "contain"
        });
        $("#add-gift-modal").modal({
            clickClose: false
        })
    });


    $('.demo-gift .flex-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        responsive: [{
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                    fade: false,
                    speed: 7000,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    draggable: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    swipe: false,
                    accessibility: false,
                    touchMove: false
                }
            },
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '40px',
                    fade: false,
                    speed: 7000,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    draggable: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    swipe: false,
                    accessibility: false,
                    touchMove: false
                }
            }
        ]
    });


    $('.testimonials').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        speed: 400,
        fade: false,
        cssEase: 'linear',
        autoplay: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipe: false,
        touchMove: true,
        responsive: [{
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    });


    $('.mobile-menu').click(function() {
        $('header').toggleClass('nav-active');
        $('body').toggleClass('no-scroll-nav-open');
        $('.fixed-add').toggle();
        return false;
    });

    // CLICK ON SHARE LINK TO COPY TO CLIPBOARD
    new Clipboard('.clipboard-it');
    $('.clipboard-it').on('click', function() {
        var copyText = $(this).parent().find('.copy-text');
        var copied = $(this).parent().find('.copied');

        copyText.hide();
        copied.show();

        setTimeout(function() {
            copied.hide();
            copyText.show();
        }, 1000);
    });



    // MESSAGE FADE OUT

    $(".message.success").delay(3000).fadeOut();


    // TEXT SLIDERS
    $('.toggle-drop .drop .click').each(function() {
        var tis = $(this),
            state = false,
            answer = tis.next('div').slideUp();
        tis.click(function() {
            state = !state;
            answer.slideToggle(state);
            tis.toggleClass('active', state);
            tis.parent().toggleClass('open-slide', state);
        });
    });

    // TEXT SLIDER CLOSE OTHERS

    var open = $('.toggle-drop-one .drop .click'),
        a = open;

    open.click(function(e) {
        e.preventDefault();
        var $this = $(this);
        if ($this.hasClass('active') === true) {
            $this.removeClass('active').next('div').slideUp();
            $this.parent().removeClass('open-slide');
        } else if (a.hasClass('active') === false) {
            $this.addClass('active').next('div').slideDown();
            $this.parent().addClass('open-slide');
        } else {
            a.removeClass('active').next('div').slideUp();
            a.parent().removeClass('open-slide');
            $this.addClass('active').next('div').slideDown();
            $this.parent().addClass('open-slide');
        }
    });

    $(function() {
        if (location.hash === "#nav-step-2") {
            var id = window.location.hash; // = '#tab-2', in your first link.
            $(id).addClass('open-slide');
            $('div', id).slideDown();
            $('h3', id).addClass('active');
        }
        if (location.hash === "#nav-step-1") {
            var id = window.location.hash; // = '#tab-2', in your first link.
            $(id).addClass('open-slide');
            $('div', id).slideDown();
            $('h3', id).addClass('active');
        }
    });


    // STORE ALPHABET SCROLL
    $(document).ready(function() {
        $('.store-filter a').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            if ($(this).parent().hasClass('active')) {
                $(this).parent.removeClass('active');
            } else {
                $('li.active').removeClass('active');
                $(this).parent().addClass('active');
            }

            $('html, body').stop().animate({
                scrollTop: $(target).offset().top - 40
            }, 600, function() {
                // location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });
            return false;
        });
    });


    $('.theme-choice input:checked').parent().addClass('checked');

    $(".theme-choice input[type=radio][name='list-theme']").change(function() {
        $(".theme-choice input[name='list-theme']").parent().removeClass("checked");
        $(".theme-choice input[name='list-theme']:checked").parent().addClass("checked");
        // console.log($("input[name='ad_caroserie']:checked").val());
    });



    // SHOW HIDE PASSWORD

    $('#show-password').on('change', function() {
        var isChecked = $(this).prop('checked');
        if (isChecked) {
            $('.show-pass').addClass('show');
            $('.password-input').attr('type', 'text');
        } else {
            $('.show-pass').removeClass('show');
            $('.password-input').attr('type', 'password');
        }
    });

    //Gift add modal.
    $('body').on('submit', 'form#find-product-from-url', function(event) {
        event.preventDefault();

        const form = $(this);
        const formUrl = form.attr('action');

        if (formUrl == null) {
            return false;
        }

        const $addGiftModal = $('#add-gift-modal');
        $('#find-product-from-url button').addClass('btn-loading');
        $('.gifturl', $addGiftModal).addClass('loading');
        $('.inspiration', $addGiftModal).addClass('loading');

        $.ajax({
            type: "POST",
            url: formUrl,
            data: form.serialize(),
            success: function(data) {
                $('#find-product-from-url button').removeClass('btn-loading');
                $('.gifturl', $addGiftModal).removeClass('loading');
                $('.inspiration', $addGiftModal).removeClass('loading');

                data = JSON.parse(data);
                const {
                    product,
                    success,
                    url
                } = data;
                if (data && success === 'success') {
                    //We all good. Put product info into model 2 and show it.
                    const $addModal = $('#add-modal');
                    if (product === null) {
                        $('.product-url', $addModal).val(url);
                        $('.product-url-display', $addModal).val(url);
                    } else {
                        $('.product-url', $addModal).val(product.product_url);
                        $('.product-url-display', $addModal).val(product.product_url);

                        $('.title', $addModal).val(product.title.substring(0, 75));
                        emptyInputCheck('.title');
                        titleCharacterCount('.title');
                        $('.title', $addModal).on('keypress', function() {
                            $(this).removeClass('warning')
                        });
                        $('.price', $addModal).val(product.price);
                        emptyInputCheck('.price');
                        $('.price', $addModal).on('keypress', function() {
                            $(this).removeClass('warning')
                        });
                        if (product.image !== '') {
                            $('.product-image-wrapper', $addModal).css({
                                'background-image': 'url(' + product.image + ')'
                            });
                            $('.gift-image-box', $addModal).css({
                                'background-image': 'url(' + product.image + ')',
                                'opacity': '1'
                            });
                            $('.product-image-url', $addModal).val(product.image);
                        } else {
                            $('.product-image-wrapper', $addModal).css({
                                'background-image': 'url(/img/default-gift-circle.webp)'
                            });
                            $('.gift-image-box', $addModal).css({
                                'background-image': 'url(/img/default-gift-circle.webp)',
                                'opacity': '1'
                            });
                            $('.product-image-url', $addModal).val('');
                        }
                    }

                    imageSizer();

                    $addModal.modal({
                        clickClose: false,
                        fadeDuration: null
                    });
                }
            }
        });
    });

    // FILE UPLOAD

    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus');
        });
    });

    // UN-CLOSABLE MODAL

    $.modal.defaults = {
        closeExisting: true, // Close existing modals. Set this to false if you need to stack multiple modal instances.
        escapeClose: true, // Allows the user to close the modal by pressing `ESC`
        clickClose: true, // Allows the user to close the modal by clicking the overlay
        closeText: '', // Text content for the close <a> tag.
        closeClass: '', // Add additional class(es) to the close <a> tag.
        showClose: true, // Shows a (X) icon/link in the top-right corner
        modalClass: "modal", // CSS class added to the element being displayed in the modal.
        blockerClass: "overlay", // CSS class added to the overlay (blocker).

        // HTML appended to the default spinner during AJAX requests.
        spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',

        showSpinner: true, // Enable/disable the default spinner during AJAX requests.
        fadeDuration: null, // Number of milliseconds the fade transition takes (null means no transition)
        fadeDelay: 0.5 // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
    };

    $('body').on('click', 'a.fixed-support, .nav-link-account .support', function(event) {
        event.preventDefault();
        $("#main-support").modal({
            clickClose: true,
            blockerClass: "white-mob"
        })
    });

    $('body').on('click', '.view-step1 .modal-footer a.need-help-link', function(event) {
        event.preventDefault();
        $("#guest-faq1").modal({
            clickClose: true,
            blockerClass: "white-mob"
        })
    });


    $('body').on('click', 'a.save-build-giftlist', function(event) {
        event.preventDefault();
        $("#save-build-modal").modal({
            clickClose: false
        })
    });

    $('body').on('click', '.demo-visit', function(event) {
        event.preventDefault();
        $("#demo-mod").modal({
            clickClose: true,
        })
    });


    // FILE UPLOAD SHOW PREVIEW BEFORE
    var reader = new FileReader();
    var imagePreviewSelector = null;
    reader.onload = function(e) {
        // console.log(imagePreviewSelector);
        if (imagePreviewSelector !== null) {
            $(imagePreviewSelector).attr('src', e.target.result);
            imagePreviewSelector = null;
        } else {
            $('.image-preview').attr('src', e.target.result);
        }
    };

    function readURL(input) {
        if (input.files && input.files[0]) {
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".imgInp").change(function() {
        readURL(this);
        imagePreviewSelector = $(this).data('image-preview-selector');
    });
    $("#imgInp").change(function() {
        readURL(this);
    });


    // CHARACTER COUNTER

    $('textarea#notes').on("input", function() {
        var maxlength = $(this).attr("maxlength");
        var currentLength = $(this).val().length;
    });

    // CHARACTER COUNTERS

    var TextAreaIntroMaxLength = 350;
    $('body').on('keyup', 'textarea#introduction, textarea[name="introduction"]', function() {
        var length = $(this).val().length;
        length = TextAreaIntroMaxLength - length;
        $(this).parent().parent().find('span[class^="charstextarea"]').text(length);
    })

    //Check if the text area exists
    if ($('textarea#introduction').length > 0) {
        //Just do the same thing, but initially
        $('textarea#introduction').each(function(index) {
            var length = $(this).val().length;
            length = TextAreaIntroMaxLength - length;
            $(this).parent().parent().find('span[class^="charstextarea"]').text(length);
        });

    }

    var TextAreaMaxLength = 200;
    $('body').on('keyup', 'textarea#notes, textarea[name="notes"]', function() {
        var length = $(this).val().length;
        length = TextAreaMaxLength - length;
        $(this).parent().parent().find('span[class^="charstextarea"]').text(length);
    });

    //Check if the text area exists
    if ($('textarea#notes').length > 0) {
        $('textarea#notes').each(function(index) {
            var length = $(this).val().length;
            length = TextAreaMaxLength - length;
            $(this).parent().parent().find('span[class^="charstextarea"]').text(length);
        });
    }

    $('body').on('keyup', 'input.title, input[name="title"]', function() {
        titleCharacterCount(this)
    });

    //Check if the text area exists
    if ($('input.title').length > 0) {
        $('input.title').each(function(index) {
            var length = $(this).val().length;
            length = TitleMaxLength - length;
            $(this).parent().parent().find('span[class^="charstitle"]').text(length);
        });
    }

    //IMAGE SIZES
    setTimeout(imageSizer, 2000);

});

function emptyInputCheck(field) {
    let elm = $('#add-modal ' + field);
    if (elm.val()) {
        elm.removeClass('warning');
        $("#add-modal").removeClass('has-warning');
    } else {
        elm.addClass('warning');
        $("#add-modal").addClass('has-warning');
    }
}

function titleCharacterCount(element) {
    if (!$(element).val()) {
        return;
    }
    var length = $(element).val().length;
    length = TitleMaxLength - length;
    $(element).parent().parent().find('span[class^="charstitle"]').text(length);
}

function formatMoney(amount, currency) {
    const money = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: currency
    });
    return money.format(amount);
}

function formatNumber(amount) {
    const money = new Intl.NumberFormat('en-US', {
        useGrouping: false,
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
    console.log(amount, money.format(amount))
    return money.format(amount);
}

function imageSizer(selector = '.product-image-wrapper img') {
    // console.log('image sizer', selector)
    $(selector)
        .removeClass('square')
        .removeClass('tall')
        .removeClass('wide')
        .addClass(function() {
            if (this.width === undefined || this.height === undefined) {
                return '';
            }
            // console.log(this.width, this.height, this);
            if (this.height === this.width) {
                return 'square';
            } else if (this.height > this.width) {
                return 'tall';
            } else {
                return 'wide';
            }
        });
    $('.product-image-wrapper').removeClass('skeleton');
}


document.addEventListener('lazyloaded', function(e) {
    imageSizer();
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 790) {
        $('header#fixed-scroller').addClass('fixed');
        $('header#fixed-scroller').css('transition', 'top 0.5s ease-in-out');
    }
    if ($(window).scrollTop() < 1) {
        $('header#fixed-scroller').removeClass('fixed');
        $('header#fixed-scroller').css('transition', 'none');
    }
});
// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header#fixed-scroller').outerHeight();
$(window).scroll(function(event) {
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header#fixed-scroller').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header#fixed-scroller').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}


// CHARACTER COUNT FOR LIST VIEW TITLE

// The number of characters
var XX = 25;

$('.list-summary h1').filter(function() {
    return $(this).text().length > XX;
}).addClass('break');


$(document).ready(function() {
    $(".form-section .icon-help-circle").click(function() {
        $('.poptip.formtip').toggle();
        return false;
    });
});

$(document).click(function() {
    $('.poptip').hide();
});


// CURRENCY SELECT BOX FOR BUILDING START PAGE

var langArray = [];
$('.vodiapicker option').each(function() {
    var img = $(this).attr("data-thumbnail");
    var text = this.innerText;
    var value = $(this).val();
    var item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text + '</span></li>';
    langArray.push(item);
})

$('.currency-select #a').html(langArray);

//Set the button value to the first el of the array
$('.currency-select .btn-select').html(langArray[0]);
$('.currency-select .btn-select').attr('value', 'en');

// Hide selected option on page load
var selectedValue = $('.vodiapicker.currency').val();
$('#a li').each(function() {
    var value = $(this).find('img').attr('value');
    if (value === selectedValue) {
        $(this).hide();
        return false; // exit loop early since selected option is found
    }
});

//change button stuff on click
$('.currency-select #a li').click(function() {
    var img = $(this).find('img').attr("src");
    var value = $(this).find('img').attr('value');
    var text = this.innerText;
    var item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
    $('.btn-select').html(item);
    $('.btn-select').attr('value', value);
    $('select.vodiapicker.currency').val(value); //Set the select to the right value

    // Hide selected option in the list
    $('#a li').not(this).show(); // Show all options except the selected one
    $(this).hide(); // Hide the selected option

    $(".b").toggle();
});

$(".currency-select .btn-select").click(function() {
    $(".b").toggle();
});


// CURRENCY SELECT BOX FOR BUILDING START PAGE END

function castParallax() {

    var opThresh = 350;
    var opFactor = 750;

    window.addEventListener("scroll", function(event) {

        var top = this.pageYOffset;

        var layers = document.getElementsByClassName("parallax");
        var layer, speed, yPos;
        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            var yPos = -(top * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

        }
    });
}

if ($(window).width() > 980) {
    document.body.onload = castParallax();
}

$("#owners-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#for-owners").offset().top - 40
    }, 500);
});

$("#guests-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#for-guests").offset().top - 40
    }, 500);
});



/* RESPONSIVE TABLE */

$(document).ready(function() {
    setupFlexTable()
    window.onresize = function(event) {
        flexTable();
    };

    // document ready
});

function setupFlexTable() {
    // inspired by http://jsfiddle.net/arunpjohny/564Lxosz/1/
    $('.content-table').find("th").each(function(i) {
        if ($(window).width() < 900) {
            $('.content-table td:nth-child(' + (i + 1) + ')').prepend('<span class="content-table-thead">' + $(this).text() + ':</span> ');
            $('.table-striped-thead').hide();
        }
    });

    $('.content-table').each(function() {
        var thCount = $(this).find("th").length;
        var rowGrow = 100 / thCount + '%';
        //console.log(rowGrow);
        $(this).find("th, td").css('flex-basis', rowGrow);
    });

    flexTable();
}

function flexTable() {
    if ($(window).width() < 901) {
        $(".content-table").each(function(i) {
            $(this).find(".content-table-thead").show();
            $(this).find('thead').hide();
        });
        // window is less than 900px
    } else {
        $(".content-table").each(function(i) {
            $(this).find(".content-table-thead").hide();
            $(this).find('thead').show();
        });
    }
    // flextable
}


// ADD GIFT

$('#submit-gift').on('click', function() {
    const $addModal = $('#add-modal');
    if (!$("input.title", $addModal).val() || !$("input.price", $addModal).val() || !$("input.quantity", $addModal).val()) {
        return;
    }
    $addModal.addClass('confirm-loading');
});

$(document).ready(function() {
    $('#pasteButton').click(function() {
        navigator.clipboard.readText()
            .then(function(text) {
                $('#find-product-from-url input').val(text);
            })
            .catch(function(err) {
                console.error('Failed to read clipboard contents: ', err);
            });
    });
});

// EDIT GIFT

$('#edit-gift').on('click', function() {
    const $editModal = $('#edit-modal');
    if (!$("input.title", $editModal).val() || !$("input.price", $editModal).val() || !$("input.quantity", $editModal).val()) {
        return;
    }
    $editModal.addClass('confirm-loading');
});


// SLIM IF IMAGE EXISTS

function slimLoadedImage(file, image, meta) {
    $(".gift-image .product-image-wrapper").css("background", "#fff");
    $(".gift-image .product-image-wrapper img").remove();
    $('#edit-modal .gift-image-box, #add-modal .gift-image-box').css('background-image', '');
    $('#edit-modal .gift-image-box .slim, #add-modal .gift-image-box .slim').css('opacity', '1');
    let width = file.input.width
    let height = file.input.height
    $('.slim-result .in')
        .removeClass('square')
        .removeClass('tall')
        .removeClass('wide')
        .addClass(function() {
            if (height === width) {
                return 'square';
            } else if (height > width) {
                return 'tall';
            } else {
                return 'wide';
            }
        });
    return true
}


// SIGN UP GA EVENT

$('#build-signup').submit(function(e) {
    e.preventDefault();
    if (!$('#build-signup').valid()) {
        return;
    }

    var form = this;
    setTimeout(function() {
        form.submit()
    }, 150);
});


// REVEAL GUEST ATTEND ON LOGIN PAGE
if ($(window).width() < 980) {
    $(".guest-attent").delay(2000).animate({
        top: "+=60px"
    }, 500, function() {
        $(this).addClass("reveal");
    });
} else {
    $(".guest-attent").delay(2000).animate({
        top: "+32px"
    }, 500, function() {
        $(this).addClass("reveal");
    });
}


$(document).keydown(function(e) {
    // Check if an input or textarea element is not currently focused
    if (!$('input, textarea').is(':focus')) {
        // Check if Cmd/Ctrl key and A key are pressed simultaneously
        if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
            // Check if #add-gift-modal is not open
            if (!$(".blocker").is(":visible")) {
                e.preventDefault();
                $("#add-gift-modal .url input").val('');
                $(".gift-image img").attr('src', '');
                $('#add-modal').removeClass('confirm-loading');
                $("input[name=product_image]").attr('value', '');
                $("#add-modal .product-image-wrapper").css({
                    "background": "url('/img/default-gift-circle.webp')",
                    "background-position": "center center",
                    "background-repeat": "no-repeat",
                    "background-size": "contain"
                });
                $("#add-gift-modal").modal({
                    clickClose: false
                });
            }
        }
    }
});

$(document).ready(function() {
    // Detect the user's operating system
    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    // Show the corresponding div based on the operating system
    if (isMac) {
        $('#mac').css({
            'display': 'flex'
        });
    } else {
        $('#windows').css({
            'display': 'flex'
        });
    }
});