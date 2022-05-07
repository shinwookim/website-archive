    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

/**
     * Hero type effect
     */
 const typed = select('.typed')
 if (typed) {
     let typed_strings = typed.getAttribute('data-typed-items')
     typed_strings = typed_strings.split(',')
     new Typed('.typed', {
         strings: typed_strings,
         loop: true,
         typeSpeed: 100,
         backSpeed: 50,
         backDelay: 2000
     });
 }
 var divId;

 $('.nav-link').click(function(){    
   divId = $(this).attr('href');
    $('html, body').animate({
     scrollTop: $(divId).offset().top - 64
   }, 100);
 });

