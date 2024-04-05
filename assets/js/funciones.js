/*var slideRight = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-right',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
});

jQuery(document).on('click', '#c-button--slide-right', function(e) {
    e.preventDefault;
    slideRight.open();
});*/
var altura;
var banner; 
jQuery(window).on("load",function() {
    jQuery(".overlay").addClass("in");
    jQuery("body").removeClass("preloader");

    calcularcabecera();
});

function calcularcabecera()
{
    banner = jQuery("#inicio").innerHeight();
    altura = jQuery("header").innerHeight();
    jQuery("#inicio").css("padding-top",altura);
}


    jQuery(window).resize(function() {
        setTimeout(function(){ 
            calcularcabecera();
        }, 1000);

        // jQuery(".borde-conetendor-imagen").attr("style","");
        jQuery(".burguer").removeClass("open");
        jQuery(".lista-menu").removeClass("open");
        jQuery(".contenedor-redes,.contenedor-iconos").fadeOut();
    });


var owl1;
jQuery(document).ready(function(){

    var wow = new WOW();
    wow.init();

    jQuery('.contenedor-iconos .item-red,.cuerpo-redes-compartir .contenedor-redes a').click(function(e) {
        e.preventDefault();
        var url = jQuery(this).attr("href");
        var left = Number((screen.width / 2) - (700 / 2));
        var top = Number((screen.height / 2) - (500 / 2));
        window.open(url, "", 'height=500,width=500,top=' + top + ',left=' + left);
    });

    jQuery(".btn-youtube").click(function(e){
        e.preventDefault();
        var data = jQuery(this).data("video");
        var video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+data+'?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        jQuery(".cuerpo-video").html("");
        jQuery(".cuerpo-video").html(video);
        jQuery(".trama-video").fadeIn("fast",function(){
            jQuery(".contenedor-video").fadeIn("slow")
        })
    });

    jQuery(".lista-iconos-compartir .icono-compattir").click(function(e){
        e.preventDefault();
        jQuery(".contenedor-iconos").stop().fadeToggle("slow");
    })

    jQuery(".boton-abrir").click(function(e){
        e.preventDefault();
        
        jQuery(".contenedor-redes").stop().fadeToggle("slow");
    });

    jQuery(".cerrar-video").click(function(e){
        e.preventDefault();
        jQuery(".contenedor-video").fadeOut("slow",function(){
            jQuery(".trama-video").fadeOut("fast");
            jQuery(".cuerpo-video").html("");
        })
    });

    jQuery(".burguer").click(function(e){
        e.preventDefault();
        altura = jQuery("header").innerHeight();
        jQuery(".lista-menu").css("padding-top",altura);
        jQuery(".burguer").toggleClass("open");
        jQuery(".lista-menu").toggleClass("open");
    });

    jQuery('.lista-menu a[href^="#"],.menu-desktop .contenedor-franja a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(".burguer").removeClass("open");
        jQuery(".lista-menu").removeClass("open");
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 
            jQuery(".lista-menu a,.menu-desktop .contenedor-franja a .circulo").removeClass("active");
            jQuery(this).addClass("active");

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura +1}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });


    jQuery('.menu-desktop .flecha-inicio a[href^="#"],.flecha-abajo').on('click', function (e) {
        e.preventDefault();
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura +1}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });

    jQuery(".icono-descarga").click(function(e){
         e.preventDefault();  
         jQuery(".fila-botones").fadeToggle();
    })

    owl1 = jQuery('.contenedor-slider');
    owl1.owlCarousel({
    animateOut: 'fadeOutRight',
    animateIn: 'fadeInRight',
    items : 1, 
    margin:0,
    loop:false,
    dots:true,   
    responsive:{
            0:{
                dots:true,
            },
            768:{
                dots:false,
                touchDrag: false,
                mouseDrag:false,
            }
        }          
    });

    jQuery(".item-anterior").click(function (e) {
        e.preventDefault();        
        owl1.trigger('prev.owl.carousel');
    });

    jQuery(".item-siguiente").click(function (e) {
        e.preventDefault();
        owl1.trigger('next.owl.carousel');
    });


    var s1 = jQuery('.slider-1');
    s1.owlCarousel({
    items : 1, 
    margin:2,
    loop:true,
    dots:true,    
    });

    jQuery(".celeste .item-anterior").click(function (e) {
        e.preventDefault();        
        s1.trigger('prev.owl.carousel');
    });

    jQuery(".celeste .item-siguiente").click(function (e) {
        e.preventDefault();
        s1.trigger('next.owl.carousel');
    });

    var s2 = jQuery('.slider-2');
    s2.owlCarousel({
    items : 1, 
    margin:2,    
    loop:true,
    dots:true,    
    });

    jQuery(".amarillo .item-anterior").click(function (e) {
        e.preventDefault();        
        s2.trigger('prev.owl.carousel');
    });

    jQuery(".amarillo .item-siguiente").click(function (e) {
        e.preventDefault();
        s2.trigger('next.owl.carousel');
    });

    var s3 = jQuery('.slider-3');
    s3.owlCarousel({
    items : 1, 
    margin:2,    
    loop:true,
    dots:true,    
    });

    jQuery(".verde .item-anterior").click(function (e) {
        e.preventDefault();        
        s3.trigger('prev.owl.carousel');
    });

    jQuery(".verde .item-siguiente").click(function (e) {
        e.preventDefault();
        s3.trigger('next.owl.carousel');
    });

    var s4 = jQuery('.slider-4');
    s4.owlCarousel({
        items : 1, 
        margin:2,    
        loop:false,
        dots:true,  
        onTranslate:function(event)
        {


            var items     = event.item.count;     // Number of items
            var item      = event.item.index; 
            var itemperpage =  event.page.size;
            var paginas = event.page.count;

            if(item == 0)
            {
                jQuery("#gobierno .item-anterior").addClass("disable");  
            }else{
                jQuery("#gobierno .item-anterior").removeClass("disable");
            }

            if(item == (items - itemperpage)){
                jQuery("#gobierno .item-siguiente").addClass("disable");  
            }else{
                jQuery("#gobierno .item-siguiente").removeClass("disable");  
            }
        }  
    });

    jQuery("#gobierno .item-anterior").click(function (e) {
        e.preventDefault();        
        s4.trigger('prev.owl.carousel');
    });

    jQuery("#gobierno .item-siguiente").click(function (e) {
        e.preventDefault();
        s4.trigger('next.owl.carousel');
    });

    var s5 = jQuery('.slider-5');
    s5.owlCarousel({
        items : 2, 
        margin:40,
        loop:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                autoHeight:true,
            },
            768:{
                items:2,
                autoHeight:true,
            },
            1200:{
                items:2,
                autoHeight:true,
            }
        },
        onTranslate:function(event)
        {
           

            var items     = event.item.count;     // Number of items
            var item      = event.item.index; 
            var itemperpage =  event.page.size;
            var paginas = event.page.count;

            if(item == 0)
            {
                jQuery("#noticias .item-anterior").addClass("disable");  
            }else{
                jQuery("#noticias .item-anterior").removeClass("disable");
            }

            if(item == (items - itemperpage)){
                jQuery("#noticias .item-siguiente").addClass("disable");  
            }else{
                jQuery("#noticias .item-siguiente").removeClass("disable");  
            }
            if(item == 0)
            {
                jQuery("#arte .item-anterior").addClass("disable");  
            }else{
                jQuery("#arte .item-anterior").removeClass("disable");
            }

            if(item == (items - itemperpage)){
                jQuery("#arte .item-siguiente").addClass("disable");  
            }else{
                jQuery("#arte .item-siguiente").removeClass("disable");  
            }
        }         
    });

    jQuery("#noticias .item-anterior").click(function (e) {
        e.preventDefault();        
        s5.trigger('prev.owl.carousel');
    });

    jQuery("#noticias .item-siguiente").click(function (e) {
        e.preventDefault();        
        s5.trigger('next.owl.carousel');
    });
    jQuery("#arte .item-anterior").click(function (e) {
        e.preventDefault();        
        s5.trigger('prev.owl.carousel');
    });

    jQuery("#arte .item-siguiente").click(function (e) {
        e.preventDefault();        
        s5.trigger('next.owl.carousel');
    });

    var sf1 = jQuery('.slider-frente-1');
    sf1.owlCarousel({
        items : 1, 
        margin:40,
        loop:false,
        dots:true,      
    });

    jQuery(".sf1.item-anterior").click(function (e) {
        e.preventDefault();        
        sf1.trigger('prev.owl.carousel');
    });

    jQuery(".sf1.item-siguiente").click(function (e) {
        e.preventDefault();
        sf1.trigger('next.owl.carousel');
    });


    var sf2 = jQuery('.slider-frente-2');
    sf2.owlCarousel({
        items : 1, 
        margin:40,
        loop:false,
        dots:true,         
    });

    jQuery(".sf2.item-anterior").click(function (e) {
        e.preventDefault();        
        sf2.trigger('prev.owl.carousel');
    });

    jQuery(".sf2.item-siguiente").click(function (e) {
        e.preventDefault();
        sf2.trigger('next.owl.carousel');
    });

    jQuery("#frente-pandemia .tab").click(function(){
        var indice = jQuery("#frente-pandemia .tab").index(this);
        jQuery("#frente-pandemia .tab").removeClass("active");
        jQuery("#frente-pandemia .cuerpo-tab").removeClass("active");
        jQuery(this).addClass("active");
        jQuery("#frente-pandemia .cuerpo-tab").eq(indice).addClass("active");
    });

    jQuery("#sostenibilidad .tab").click(function(){
        var indice = jQuery("#sostenibilidad .tab").index(this);
        jQuery("#sostenibilidad .tab").removeClass("active");
        jQuery("#sostenibilidad .cuerpo-tab").removeClass("active");
        jQuery(this).addClass("active");
        jQuery("#sostenibilidad .cuerpo-tab").eq(indice).addClass("active");
    });

    jQuery('.lista-menu a[href^="#"],.menu-desktop .contenedor-franja a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(".burguer").removeClass("open");
        jQuery(".lista-menu").removeClass("open");
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 
            jQuery(".lista-menu a,.menu-desktop .contenedor-franja a .circulo").removeClass("active");
            jQuery(this).addClass("active");

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura +1}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });


    jQuery('.menu-desktop .flecha-inicio a[href^="#"],.flecha-abajo').on('click', function (e) {
        e.preventDefault();
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura +1}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });

    jQuery(".acordion").click(function(){
        jQuery(".cuerpo-acordion").slideUp();
        if(jQuery(this).find("i").hasClass("fa-chevron-up"))
        {
            jQuery(this).find("i").removeClass("fa-chevron-up");
        }else{
            jQuery(".acordion").find("i").removeClass("fa-chevron-up"); 
            jQuery(this).find("i").addClass("fa-chevron-up");
        }
        jQuery(this).next(".cuerpo-acordion").stop().slideToggle();
    })

    // jQuery('.grupo-slides-mobile').slick({
    //     dots: true,
    //     arrows: false,
    //     slidesToShow: true,
    //     slidesToScroll: true,
    //     infinite: false
    // })


});


jQuery(document).on("scroll", onScroll);

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();

    if(scrollPos > (banner - altura))
    {
        jQuery(".menu-desktop").addClass("open");
    }else{
        jQuery(".menu-desktop").removeClass("open");
        if(owl1)
        {
           owl1.trigger('to.owl.carousel',0); 
        }
        
    }

    jQuery('section.seccion').each(function () {
        var currLink = jQuery(this);
        var tag = currLink.attr("id");

        if (Math.round(Math.round(currLink.offset().top) - altura) <= Math.round(scrollPos) && Math.round(Math.round(currLink.offset().top)  - altura) + Math.round(currLink.outerHeight()) > Math.round(scrollPos)) {
            jQuery(".menu-desktop a[href='#"+tag+"']").addClass("active");
            jQuery(".menu-desktop a[href='#"+tag+"'] .circulo").addClass("active");
        }else{
            jQuery(".menu-desktop a[href='#"+tag+"']").removeClass("active");            
            jQuery(".menu-desktop a[href='#"+tag+"'] .circulo").removeClass("active");
        }
    })
}