"use strict";!function(){var s=document.querySelector(".category-slider");s&&i(s,{infinite:!0,slidesToShow:6,slidesToScroll:1,autoplay:!0,dots:!1,arrows:!0,prevArrow:'<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',nextArrow:'<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',responsive:[{breakpoint:1400,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:820,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]});var e=document.querySelector(".team-slider");e&&i(e,{infinite:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,dots:!1,arrows:!0,prevArrow:'<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',nextArrow:'<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:820,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});var o=document.querySelectorAll(".hero-slider");function i(s,e){if(window.jQuery&&jQuery.fn.slick)$(s).slick(e);else new Slick(s,e)}o&&i(o,{infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,dots:!0,arrows:!1});var r=document.querySelectorAll(".slider-8-columns");r.length&&r.forEach((function(s){var e=s.id;i("#"+e,{infinite:!0,slidesToShow:8,slidesToScroll:1,autoplay:!0,dots:!1,arrows:!0,speed:1e3,loop:!0,adaptiveHeight:!0,responsive:[{breakpoint:1025,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}],prevArrow:'<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',nextArrow:'<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',appendArrows:"#"+e+"-arrows"})}));var l=document.querySelectorAll(".product-slider-second");l.length&&l.forEach((function(s){var e=s.id;i("#"+e,{infinite:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,dots:!1,arrows:!0,speed:1e3,loop:!0,adaptiveHeight:!0,responsive:[{breakpoint:1400,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:990,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],prevArrow:'<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',nextArrow:'<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>',appendArrows:"#"+e+"-arrows"})}));var n=document.querySelector(".slider-for");n&&$(n).slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"});var t=document.querySelector(".slider-nav");t&&$(t).slick({slidesToShow:4,slidesToScroll:1,asNavFor:".slider-for",dots:!1,centerMode:!1,focusOnSelect:!0,prevArrow:'<span class="slick-prev"><i class="feather-icon icon-chevron-left"></i></span>',nextArrow:'<span class="slick-next"><i class="feather-icon icon-chevron-right"></i></span>'});var c=document.querySelector(".product-slider-four-column");c&&i(c,{infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,dots:!1,arrows:!0,prevArrow:'<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',nextArrow:'<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',responsive:[{breakpoint:1400,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});var a=document.querySelectorAll(".product-slider");a&&i(a,{infinite:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,dots:!1,arrows:!0,prevArrow:'<span class="slick-prev "><i class="feather-icon icon-chevron-left"></i></span>',nextArrow:'<span class="slick-next "><i class="feather-icon icon-chevron-right "></i></span>',responsive:[{breakpoint:1400,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:820,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}();