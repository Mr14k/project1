(function($) {
    
    "use strict";
    
    
    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if($('.preloader').length){
            $('.preloader').delay(200).fadeOut(500);
        }
    }
    
    //Update Header Style and Scroll to Top
    function headerStyle() {
        if($('.main-header').length){
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            
            var HeaderHight = $('.main-header').height();
            if (windowpos >= HeaderHight) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
            
        }
    }
    
    headerStyle();
    
    
    

    
    
    // Add Current Class Auto
    function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split("/").reverse()[0];

        selector.find("li").each(function () {
            let anchor = $(this).find("a");
            if ($(anchor).attr("href") == FileName) {
                $(this).addClass("current");
            }
        });
        // if any li has .current elmnt add class
        selector.children("li").each(function () {
            if ($(this).find(".current").length) {
                $(this).addClass("current");
            }
        });
        // if no file name return
        if ("" == FileName) {
            selector.find("li").eq(0).addClass("current");
        }
    }
    
    if ($('.main-header .header-lower .main-menu .navigation').length) {
        dynamicCurrentMenuClass($('.main-header .header-lower .main-menu .navigation'));
    }
    

    
    //Custom Seclect Box
    if($('.custom-select-box').length){
        $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
    }
    
    
    
    //Gallery Filters
    if($('.filter-list').length){
        $('.filter-list').mixItUp({});
    }
    
    
    
    //Masonary
    function enableMasonry() {
        if($('.masonry-items-container').length){
    
            var winDow = $(window);
            // Needed variables
            var $container=$('.masonry-items-container');
    
            $container.isotope({
                itemSelector: '.masonry-item',
                 masonry: {
                    columnWidth : '.masonry-item.col-lg-6'
                 },
                animationOptions:{
                    duration:500,
                    easing:'linear'
                }
            });
    
            winDow.bind('resize', function(){

                $container.isotope({ 
                    itemSelector: '.masonry-item',
                    animationOptions: {
                        duration: 500,
                        easing	: 'linear',
                        queue	: false
                    }
                });
            });
        }
    }
    
    enableMasonry();
    
    
    //Parallax Scene for Icons
    if($('.parallax-scene-1').length){
        var scene = $('.parallax-scene-1').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    if($('.parallax-scene-2').length){
        var scene = $('.parallax-scene-2').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    if($('.parallax-scene-3').length){
        var scene = $('.parallax-scene-3').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    if($('.parallax-scene-4').length){
        var scene = $('.parallax-scene-4').get(0);
        var parallaxInstance = new Parallax(scene);
    }
    
    
    
    if($('.paroller').length){
        $('.paroller').paroller({
              factor: 0.2,            // multiplier for scrolling speed and offset, +- values for direction control  
              factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control  
              type: 'foreground',     // background, foreground  
              direction: 'horizontal' // vertical, horizontal  
        });
    }

    
    
    // Product Carousel Slider
    if ($('.shop-detail-section .image-carousel').length && $('.shop-detail-section .thumbs-carousel').length) {

        var $sync1 = $(".shop-detail-section .image-carousel"),
            $sync2 = $(".shop-detail-section .thumbs-carousel"),
            flag = false,
            duration = 500;

            $sync1
                .owlCarousel({
                    loop:true,
                    items: 1,
                    margin: 0,
                    nav: false,
                    navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 5000
                })
                .on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        flag = false;
                        $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

            $sync2
                .owlCarousel({
                    loop:true,
                    margin: 20,
                    items: 1,
                    nav: false,
                    navText: [ '<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>' ],
                    dots: false,
                    center: false,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:2,
                            autoWidth: false
                        },
                        400:{
                            items:3,
                            autoWidth: false
                        },
                        600:{
                            items:4,
                            autoWidth: false
                        },
                        900:{
                            items:4,
                            autoWidth: false
                        },
                        1000:{
                            items:4,
                            autoWidth: false
                        }
                    },
                })
                
        .on('click', '.owl-item', function () {
            $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
        })
        .on('changed.owl.carousel', function (e) {
            if (!flag) {
                flag = true;		
                $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });
    }
    
    
    //Jquery Spinner / Quantity Spinner
    if($('.qty-spinner').length){
        $("input.qty-spinner").TouchSpin({
          verticalbuttons: true
        });
    }

      
    
    // Gallery Carousel
    if ($('.gallery-carousel-two').length) {
        
        var GalleryCarousel = $('.gallery-carousel-two')
        GalleryCarousel.owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            center:true,
            smartSpeed: 700,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                768:{
                    items:3
                },
                1024:{
                    items:4
                },
                1200:{
                    items:4
                },
                1400:{
                    items:4
                }
            }
            
        });
        GalleryCarousel.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                GalleryCarousel.trigger('next.owl');
            } else {
                GalleryCarousel.trigger('prev.owl');
            }
            e.preventDefault();
        });
    }
    
    
    
    //Price Range Slider
    if($('.price-range-slider').length){
        $( ".price-range-slider" ).slider({
            range: true,
            min: 0,
            max: 10000,
            values: [ 1000, 8000 ],
            slide: function( event, ui ) {
            $( "input.price-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
            }
        });
        
        $( "input.price-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
    }
    
    
    //LightBox Image
    if($('.lightbox-image').length) {
        $('.lightbox-image').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
    }
    

    //LightBox Video
    if($('.lightbox-video').length) {
        $('.lightbox-video').magnificPopup({
          // disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          iframe:{
            patterns:{
              youtube:{
              index: 'youtube.com',
              id: 'v=',
              src: 'https://www.youtube.com/embed/%id%'
            },
          },
          srcAction:'iframe_src',
        },
          fixedContentPos: false
        });
    }
    
    //Contact Form Validation
    if($('#contact-form').length){
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                phone: {
                    required: true
                },
                services: {
                    required: true
                },
                email: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }
    
 
    // Elements Animation
    if($('.wow').length){
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true       // act on asynchronously loaded content (default is true)
          }
        );
        wow.init();
    }
    

    jQuery(document).ready(function (){

    // Scroll to a Specific Div
    if($('.scroll-to-target').length){ 
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
           // animate
           $('html, body').animate({
               scrollTop: $(target).offset().top
             }, 1500);
    
        });
    }
            
    //Project with Scroller
    if ($('#services_scroll_2').length) {
        //Add Custom Scrollbar
        $('#services_scroll_2').mCustomScrollbar({
            axis:"x",
            advanced:{autoExpandHorizontalScroll:true}
        });
    }
    
    
    //Project with Scroller
    if ($('#services_scroll').length) {
        //Add Custom Scrollbar
        $('#services_scroll').mCustomScrollbar({
            axis:"x",
            advanced:{autoExpandHorizontalScroll:true}
        });
    }
            
    //Submenu Dropdown Toggle
    if($('.main-header li.dropdown ul').length){
        
        //TODO mobile drop down
       // $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        
        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
        
        
        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });
         
    }

            //Mobile Nav Hide Show
            if($('.mobile-menu').length){
        
                $('.mobile-menu .menu-box').mCustomScrollbar();
                
                var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
                $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
                $('.sticky-header .main-menu').append(mobileMenuContent);
                
                //Hide / Show Submenu
                $('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function(e) {
                    e.preventDefault();
                    var target = $(this).parent('li').children('ul');
                    
                    if ($(target).is(':visible')){
                        $(this).parent('li').removeClass('open');
                        $(target).slideUp(500);
                        $(this).parents('.navigation').children('li.dropdown').removeClass('open');
                        $(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
                        return false;
                    }else{
                        $(this).parents('.navigation').children('li.dropdown').removeClass('open');
                        $(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
                        $(this).parent('li').toggleClass('open');
                        $(this).parent('li').children('ul').slideToggle(500);
                    }
                });
        
                //3rd Level Nav
                $('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function(e) {
                    e.preventDefault();
                    var targetInner = $(this).parent('li').children('ul');
                    
                    if ($(targetInner).is(':visible')){
                        $(this).parent('li').removeClass('open');
                        $(targetInner).slideUp(500);
                        $(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
                        $(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
                        return false;
                    }else{
                        $(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
                        $(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
                        $(this).parent('li').toggleClass('open');
                        $(this).parent('li').children('ul').slideToggle(500);
                    }
                });
        
                //Menu Toggle Btn
                $('.mobile-nav-toggler').on('click', function() {
                    $('body').addClass('mobile-menu-visible');
        
                });
        
                //Menu Toggle Btn
                $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
                    $('body').removeClass('mobile-menu-visible');
                    $('.mobile-menu .navigation > li').removeClass('open');
                    $('.mobile-menu .navigation li ul').slideUp(0);
                });
        
                $(document).keydown(function(e){
                    if(e.keyCode == 27) {
                        $('body').removeClass('mobile-menu-visible');
                    $('.mobile-menu .navigation > li').removeClass('open');
                    $('.mobile-menu .navigation li ul').slideUp(0);
                    }
                });
                
            }

    //Client Testimonial Carousel
    
    if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

        var $sync3 = $(".client-testimonial-carousel"),
            $sync4 = $(".client-thumbs-carousel"),
            flag = false,
            duration = 500;

            $sync3
                .owlCarousel({
                    loop:true,
                    items: 1,
                    margin: 0,
                    nav: true,
                    navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                    dots: true,
                    autoplay: true,
                    autoplayTimeout: 5000
                })
                .on('changed.owl.carousel', function (e) {
                    if (!flag) {
                        flag = false;
                        $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

            $sync4
                .owlCarousel({
                    loop:true,
                    margin:25,
                    items: 1,
                    nav: true,
                    navText: [ '<span class="icon flaticon-left-arrow-2"></span>', '<span class="icon flaticon-next-3"></span>' ],
                    dots: false,
                    center: false,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:1,
                            autoWidth: false
                        },
                        400:{
                            items:1,
                            autoWidth: false
                        },
                        600:{
                            items:2,
                            autoWidth: false
                        },
                        1000:{
                            items:3,
                            autoWidth: false
                        },
                        1200:{
                            items:4,
                            autoWidth: false
                        }
                    },
                })
                
        .on('click', '.owl-item', function () {
            $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
        })
        .on('changed.owl.carousel', function (e) {
            if (!flag) {
                flag = true;		
                $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });
    }
                
    // Testimonial Carousel
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            //animateOut: 'fadeOut',
            //animateIn: 'fadeIn',
            loop:true,
            margin:30,
            nav:true,
            //center: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    }
               
    

        //Hidden Sidebar
        if ($('.hidden-bar,.fullscreen-menu').length) {
            var hiddenBar = $('.hidden-bar');
            var hiddenBarOpener = $('.nav-toggler');
            var hiddenBarCloser = $('.hidden-bar-closer,.close-menu');
            $('.hidden-bar-wrapper').mCustomScrollbar();
            
            //Show Sidebar
            hiddenBarOpener.on('click', function () {
                $('body').addClass('visible-menu-bar');
                hiddenBar.addClass('visible-sidebar');
            });
            
            //Hide Sidebar
            hiddenBarCloser.on('click', function () {
                $('body').removeClass('visible-menu-bar');
                hiddenBar.removeClass('visible-sidebar');
            });
        }
        
            //Tabs Box
    if($('.tabs-box').length){
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));
            
            if ($(target).is(':visible')){
                return false;
            }else{
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
                $(target).fadeIn(300);
                $(target).addClass('active-tab');
            }
        });
    }

        //Header Search
        if($('.search-box-outer').length) {
            $('.search-box-outer').on('click', function() {
                $('body').addClass('search-active');
            });
            $('.close-search').on('click', function() {
                $('body').removeClass('search-active');
            });
            
            $('.search-popup .color-layer').on('click', function() {
                $('body').removeClass('search-active');
            });
        }

    $(".filters li").click ( function() {
				
        $(".filters li").removeClass('active');
        $(this).addClass('active');
    
        var selectedFilter = $(this).data("filter");
        $("#portfolio-wrapper").fadeTo(100, 0);
    
        $(".portfolio-item").fadeOut().css('transform', 'scale(0)');
    
        setTimeout(function() {
          $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
          $("#portfolio-wrapper").fadeTo(300, 1);
        }, 300);
    });


    // Sponsors Carousel
    if ($('.sponsors-carousel').length) {
        $('.sponsors-carousel').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            smartSpeed: 500,
            autoplay: 4000,
            navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
            responsive:{
                0:{
                    items:2
                },
                480:{
                    items:3
                },
                600:{
                    items:4
                },
                800:{
                    items:5
                },
                1024:{
                    items:5
                }
            }
        });    		
    }

        // Two Item Carousel
        if ($('.two-item-carousel').length) {
            $('.two-item-carousel').owlCarousel({
                //animateOut: 'fadeOut',
                //animateIn: 'fadeIn',
                loop:true,
                margin:30,
                nav:true,
                //autoHeight: true,
                smartSpeed: 500,
                autoplay: 6000,
                navText: [ '<span class="flaticon-left-arrow-2"></span>', '<span class="flaticon-right-arrow"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:2
                    },
                    1024:{
                        items:2
                    },
                    1200:{
                        items:2
                    }
                }
            });
        }

            
        // Odometer
        if ($(".odometer").length) {
            $('.odometer').appear();
            $('.odometer').appear(function(){
                var odo = $(".odometer");
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
                window.odometerOptions = {
                    format: 'd',
                };
            });
        }



    // Single Item Carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            //animateOut: 'fadeOut',
            //animateIn: 'fadeIn',
            loop:true,
            margin:0,
            nav:true,
            //autoHeight: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="flaticon-left-arrow-2"></span>', '<span class="flaticon-right-arrow"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    }

    // Three Item Carousel
    if ($('.three-item-carousel').length) {
        $('.three-item-carousel').owlCarousel({
            //animateOut: 'fadeOut',
            //animateIn: 'fadeIn',
            loop:true,
            margin:30,
            nav:true,
            //center: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });
    }

        //Jquery Knob animation 
        if($('.dial').length){
            $('.dial').appear(function(){
               var elm = $(this);
               var color = elm.attr('data-fgColor');  
               var perc = elm.attr('value'); 
               var thickness = elm.attr('thickness');  
      
               elm.knob({ 
                    'value': 0, 
                     'min':0,
                     'max':100,
                     'skin':'tron',
                     'readOnly':true,
                     'thickness':thickness,
                     'dynamicDraw': true,
                     'displayInput':false
               });
     
               $({value: 0}).animate({ value: perc }, {
                   duration: 3500,
                   easing: 'swing',
                   progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
                   }
               });
     
               },{accY: 0});
         }

             //Fact Counter + Text Count
    if($('.count-box').length){
        $('.count-box').appear(function(){
    
            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                
            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }
            
        },{accY: 0});
    }

    //Accordion Box
    if($('.accordion-box').length){
        $(".accordion-box").on('click', '.acc-btn', function() {
            
            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');
            
            if($(this).hasClass('active')!==true){
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }
            
            if ($(this).next('.acc-content').is(':visible')){
                return false;
            }else{
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);	
            }
        });	
    }
    
    
    
    
    // Accordion Box Two
    if($('.accordion-box-two').length){
        $(".accordion-box-two").on('click', '.acc-btn', function() {
            
            var outerBox = $(this).parents('.accordion-box-two');
            var target = $(this).parents('.accordion');
            
            if($(this).hasClass('active')!==true){
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
            }
            
            if ($(this).next('.acc-content').is(':visible')){
                return false;
            }else{
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);	
            }
        });	
    }

    // Gallery Carousel
   
    
    
    });

    
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
    
    $(window).on('scroll', function() {
        headerStyle();
    });
    
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
    
    $(window).on('load', function() {
        handlePreloader();
        enableMasonry();
    });	
    function itemFourCarouselActive($scope, $) {
    $('.four-item-carousel').owlCarousel({
        //animateOut: 'fadeOut',
        //animateIn: 'fadeIn',
        loop:true,
        margin:30,
        nav:true,
        //center: true,
        smartSpeed: 500,
        autoplay: 6000,
        navText: [ '<span class="flaticon-left-arrow-2"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1024:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });}

    function galleryActive($scope, $) {
        
        var GalleryCarousel = $('.gallery-carousel')
        GalleryCarousel.owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            center:true,
            smartSpeed: 700,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                768:{
                    items:3
                },
                1024:{
                    items:5
                },
                1200:{
                    items:6
                },
                1400:{
                    items:6
                }
            }
            
        });
        

        GalleryCarousel.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY>0) {
                GalleryCarousel.trigger('next.owl');
            } else {
                GalleryCarousel.trigger('prev.owl');
            }
            e.preventDefault();
        });
    }

    function testimonialActive($scope, $) {
        $('.three-item-carousel').owlCarousel({
            //animateOut: 'fadeOut',
            //animateIn: 'fadeIn',
            loop:true,
            margin:30,
            nav:true,
            //center: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });
    }
    function mainSponsorsActive($scope, $) {
        $('.sponsors-carousel-two').owlCarousel({
            loop:true,
            margin:30,
            nav:true,
            smartSpeed: 500,
            autoplay: 4000,
            navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
            responsive:{
                0:{
                    items:2
                },
                480:{
                    items:3
                },
                600:{
                    items:4
                },
                800:{
                    items:5
                },
                1024:{
                    items:6
                }
            }
        });
    }
    function mainSlidderActive($scope, $) {
        $('.main-slider-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop:true, 
            margin:0,
            nav:true,
            //autoHeight: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    }
    function singleSliderActive($scope, $) {
        $('.single-item-carousel').owlCarousel({
            //animateOut: 'fadeOut',
            //animateIn: 'fadeIn',
            loop:true,
            margin:0,
            nav:true,
            //autoHeight: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="flaticon-left-arrow-2"></span>', '<span class="flaticon-right-arrow"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    }
    function mainServiceActive($scope, $) {
        $('.three-item-carousel').owlCarousel({
            //animateOut: 'fadeOut',
            //animateIn: 'fadeIn',
            loop:true,
            margin:30,
            nav:true,
            //center: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });
    }
    function newsCarouselActive($scope, $) {
        $('.news-carousel').owlCarousel({
            //animateOut: 'fadeOut',
            //animateIn: 'fadeIn',
            loop:true,
            margin:0,
            nav:true,
            //autoHeight: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="flaticon-left-arrow-2"></span>', '<span class="flaticon-right-arrow"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:2
                },
                1024:{
                    items:2
                },
                1200:{
                    items:2
                }
            }
        });
    }
    function mainSliderActive($scope, $) {
        $('.main-slider-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop:true, 
            margin:0,
            nav:true,
            //autoHeight: true,
            smartSpeed: 500,
            autoplay: 6000,
            navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                800:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    }
    function sponsorMainActive($scope, $) {
    $('.sponsors-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        smartSpeed: 500,
        autoplay: 4000,
        navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            600:{
                items:4
            },
            800:{
                items:5
            },
            1024:{
                items:5
            }
        }
    });  }

    function testimonialSixActive($scope, $) {
    $('.testimonial-carousel').owlCarousel({
        //animateOut: 'fadeOut',
        //animateIn: 'fadeIn',
        loop:true,
        margin:30,
        nav:true,
        //center: true,
        smartSpeed: 500,
        autoplay: 6000,
        navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });}

    function threeItemSlideActie($scope, $) {
    $('.three-item-carousel').owlCarousel({
        //animateOut: 'fadeOut',
        //animateIn: 'fadeIn',
        loop:true,
        margin:30,
        nav:true,
        //center: true,
        smartSpeed: 500,
        autoplay: 6000,
        navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:2
            },
            1024:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });}
    function animatedModeActive($scope, $) {
    $('.animation_mode').marquee({
        speed: 50,
        gap: 20,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible:true,
    });}
    function singleItemActive($scope, $) {
    $('.single-item-carousel').owlCarousel({
        //animateOut: 'fadeOut',
        //animateIn: 'fadeIn',
        loop:true,
        margin:0,
        nav:true,
        //autoHeight: true,
        smartSpeed: 500,
        autoplay: 6000,
        navText: [ '<span class="flaticon-left-arrow-2"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });
    }
    function projectActive($scope, $) {
    $('.project-carousel').owlCarousel({
        //animateOut: 'fadeOut',
        //animateIn: 'fadeIn',
        loop:true,
        margin:30,
        nav:true,
        //center: true,
        smartSpeed: 500,
        autoplay: 6000,
        autoWidth:true,
        navText: [ '<span class="flaticon-left-arrow-2"></span>', '<span class="flaticon-right-arrow"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1024:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });}

    function progressActive($scope, $) {
		if($('.progress-line').length){
            $('.progress-line').appear(function(){
                var el = $(this);
                var percent = el.data('width');
                $(el).css('width',percent+'%');
            },{accY: 0});
        }
	}

    $(".progress-box .bar-fill").each(function() {
        var progressWidth = $(this).attr('data-percent');
        $(this).css('height',progressWidth+'%');
        $(this).children('.percent').html(progressWidth+'%');
    });

    function bxSliderActive($scope, $) {
        $('.bxslider').bxSlider({
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>',
            mode: 'fade',
            auto: 'true',
            speed: '700',
            pagerCustom: '.team-seven .slider-pager .thumb-box'
        });
    }

    $(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbsld6.default', mainSlidderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbsld1.default', mainSlidderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbsld2.default', mainSlidderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbclynt6.default', mainSponsorsActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbclynt5.default', sponsorMainActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbclynt3.default', sponsorMainActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbclynt.default', sponsorMainActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbcl4.default', sponsorMainActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbskill.default', progressActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbsrv8.default', mainServiceActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/oriblg5.default', newsCarouselActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtim9.default', bxSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtstim9.default', testimonialActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtstm5.default', testimonialActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtstim9.default', testimonialActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbsld5.default', mainSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbmsldr.default', mainSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtstim2.default', singleSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbsld4.default', singleSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtstm4.default', singleSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtstim8.default', singleSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtstim.default', singleSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtim7.default', threeItemSlideActie);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtsti7.default', singleItemActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbprj3.default', projectActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbrnde.default', animatedModeActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtstim6.default', testimonialSixActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbgal3.default', galleryActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/gxbtyu.default', itemFourCarouselActive);
	});

})(window.jQuery);