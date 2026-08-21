// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}

var $ = jQuery.noConflict();
jQuery(document).ready(function($) {
		//Accessibility features
		setTimeout(function() {
			$('img[alt="preload image"]').remove();
			$('.ls-thumbnail-hover-img img').attr('alt', "''");
			$(".ls-layer-link").append("<span class='visually-hidden'>Layer Slider</span>");
			$("#super_lawyers_badge a").append("<span class='visually-hidden'>Super Lawyers link</span>");
			$('#g-recaptcha-response').prepend("<label for='g-recaptcha-response' class='visually-hidden'>Google reCAPTCHA</label>");

		}, 2000);

		$(".dropdown-toggle").on("focusin mouseover", function() {
			$(this).addClass("active");
		}).on("mouseleave", function() {
			$(this).removeClass("active");
		});

    //Consulting page form

    $("#disclaimer-check").on("click", function() {

        var attr = $("#paypal-link").attr('disabled');

        // For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
        if (typeof attr !== typeof undefined && attr !== false) {
          // Element has this attribute
          $("#paypal-link").removeAttr("disabled");
        }
        else
        {
            $("#paypal-link").attr("disabled", "");
        }
    });

    /*-----------------------------------------------------------------------------------*/
    /* WOW Animation
    /*-----------------------------------------------------------------------------------*/
    // wow = new WOW({
    //     boxClass: 'wow', // default
    //     animateClass: 'animated', // default
    //     offset: 100, // default
    //     mobile: false, // default
    //     live: true // default
    // })
    // wow.init();

    $("#videos").click(function() {
        $.fancybox({
            'padding': 0,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'title': this.title,
            'width': 680,
            'height': 495,
            'href': this.href = this.href.replace(new RegExp("watch\\?v=", "i"), 'v/') + '&autoplay=1',
            'type': 'swf',
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });

        return false;
    });

    // function bs3_alert_mesage (argument) {
    //     $('#ctp_alert_selct_subject').html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>'+argument+'</span></div>');

    //     setTimeout(function() {
    //       $("#ctp_alert_selct_subject>.alert").fadeOut('fast');
    //     }, 10000); // <-- time in milliseconds
    // }


    jQuery(function() {
        // remove the below comment in case you need chnage on document ready
        // location.href=jQuery("#selectbox").val();
        jQuery("#ctc_selct_subject").change(function() {
            var url = $(this).val(); // get selected value
            // if (url == 'Consultas' || url == 'Consultas'  ) { // require a URL
            //     location.href = url;
            // }

            // if($(this).children('option:selected').index() == 0) {
            //     bs3_alert_mesage('Por favor seleccione una opcion valida');
            // }
            if ($(this).children('option:selected').index() == 1) {
                location.href = '/' + url;
            }
            return false;
        })
    })

    /*-----------------------------------------------------------------------------------*/
    /* Simple mode, it styles document scrollbar:
    /*-----------------------------------------------------------------------------------*/
    // var nice = $("html").niceScroll({
    //        cursorcolor        : "rgb(51, 122, 183)",
    //        cursoropacitymin   : 0.3,
    //        cursorwidth        : "10px",
    //        autohidemode       : false,
    //        background         : "rgba(255,255,255,0.5)",
    //        enablemousewheel   : true,
    //        zindex             : "999999999",
    //        cursorborder       : "0",
    //        cursorborderradius : "0",
    //        autohidemode       : false,
    //        cursorminheight    : 30,
    //        horizrailenabled   :false
    // });

    /*-----------------------------------------------------------------------------------*/
    /* Collapse navbar on click
    /*-----------------------------------------------------------------------------------*/
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    $(document).on('click', '.navbar-toggle.collapsed', function(e) {
        console.log('click test');
        $('#bs-example-navbar-collapse-1').toggleClass('collapse');
    });



    // $('input#phone').mask('(000) 000-0000');
    /*-----------------------------------------------------------------------------------*/
    /* Parallax effect
    /*-----------------------------------------------------------------------------------*/

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });


    /*-----------------------------------------------------------------------------------*/
    /* fullpage
    /*-----------------------------------------------------------------------------------*/
    /*$('#main-pages').fullpage({
      // anchors           : ['home','introduction','questions','contact us'],
      menu                 : '.navbar-nav',
      // sectionSelector   : '.section',
      // css3              : true,
      navigation           : true,
      navigationPosition   : 'right',
      // verticalCentered  : true,
      fitToSection         : false,
      // fitToSectionDelay : 1000,

      // fixedElements     : '#navigation',
      // resize            : false,
      scrollbar            : true,
      loopTop              : true,
      loopHorizontal       : true,
      // scrollOverflow       : true,
      setAllowScrolling    : true,
      normalScrollElements: '.scrolling',

      onLeave: function(index, nextIndex, direction) {
        var color = (nextIndex!==1) ? "#000" : "#fff";
        $('#fp-nav ul li a span').css('background', color);
        console.log('onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction);

        var navigation = $('#navigation');

        //leaving 1st section
        if(index == 1 || index == 2){
          navigation.addClass('navbar-static-top').removeClass('navbar-fixed-top');
          console.log('add');
        }else{
          navigation.removeClass('navbar-static-top').addClass('navbar-fixed-top');
        }
        //back to the 1st section
        if(nextIndex == 1 || nextIndex == 3){
          navigation.removeClass('navbar-static-top').addClass('navbar-fixed-top');
          console.log('remove');
        }else{
          navigation.addClass('navbar-static-top').removeClass('navbar-fixed-top');
        }




      },
      afterResize: function() {
        console.log('afterResize');
      }

   });

   //navigation action
   $(document).on('click','.navbar-nav>li>a', function(e){
      e.preventDefault();
      var section_id = $(this).prop('hash');
      var index = $(this).parent().index();
      $.fn.fullpage.moveTo(index+1);
   });

  /*-----------------------------------------------------------------------------------*/
    /* spy scroll
    /*-----------------------------------------------------------------------------------*/
    // $('[data-spy="scroll"]').each(function () {
    //    var $spy = $(this).scrollspy('refresh')
    // });*/
});




jQuery(document).ready(function($) {

    var standalone = window.navigator.standalone,
        userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {
        $('.parallax').css('background-attachment', 'scroll');
        $('.header-pages-parallax').css('background-attachment', 'scroll');

    } else {
        $('.parallax').css('background-attachment', 'fixed');
        $('.header-pages-parallax').css('background-attachment', 'fixed');
    };
    // $('.items_post').owlCarousel({
    //     // loop:true,
    //     // margin:10,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: false
    //         },
    //         1200: {
    //             items: 3,
    //             nav: false
    //         }
    //     },
    //     // autoHeight: true,
    //     // onInitialized: setOwlStageHeight,
    //     // onResized: setOwlStageHeight,
    //     // onTranslated: setOwlStageHeight
    // });

    // function setOwlStageHeight(event) {
        // var maxHeight = 0;
        // $('.owl-item.active').each(function() { // LOOP THROUGH ACTIVE ITEMS
        //     var thisHeight = parseInt($(this).height());
        //     maxHeight = (maxHeight >= thisHeight ? maxHeight : thisHeight);
        // });
        // $('.owl-carousel').css('height', maxHeight);
        // $('.owl-stage-outer').css('height', maxHeight); // CORRECT DRAG-AREA SO BUTTONS ARE CLICKABLE
    // };

    // var slider= $("#owl_hpslider");
    // var amountHeaderImages = slider.find('.item').length;
    //     // (amountHeaderImages > 1), // if only 1 item no loop
    // slider.owlCarousel({
    //     items: 1,
    //     loop: true,
    //     autoplay           :true, // if only 1 item no loop
    //     autoplayTimeout    :5500,
    //     autoplayHoverPause :false,
    //     transitionStyle:"fade",
    // });
    // slider.trigger('play.owl.autoplay', [1000]);
});





jQuery(document).ready(function($) {

    var standalone = window.navigator.standalone,
        userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {
        $('.parallax').css('background-attachment', 'scroll');
        $('.header-pages-parallax').css('background-attachment', 'scroll');

    } else {
        $('.parallax').css('background-attachment', 'fixed');
        $('.header-pages-parallax').css('background-attachment', 'fixed');
    };

    var owl = $('.items_post');
    owl.owlCarousel({
        // itemClass: 'carousel-item',
        // itemClass: '',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            320: {
                items: 1,
                nav: false
            },
            767: {
                items: 2,
                nav: false
            },
            962: {
                items: 3,
                nav: false
            },
            1199: {
                items: 3,
                nav: false
            },
            1200: {
                items: 4,
                nav: false
            }
        },
        afterUpdate: function () {
            setMinHeight();
        },
        afterInit:function(){
            setMinHeight();
        }
    });



// var setMinHeight = function(minheight = 0) {
//   jQuery('.owl-carousel').each(function(i,e){
//     var oldminheight = minheight;
//     jQuery(e).find('.owl-item').each(function(i,e){
//       minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight;
//     });
//     jQuery(e).find('.owl-item').css("height",minheight + "px");
//     minheight = oldminheight;
//   });
// };

// setMinHeight();





});