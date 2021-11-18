$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
  
      const hash = this.hash;
  
      $('html, body')
        .animate({
          scrollTop: $(hash).offset().top
        },800);
    }
  });
/* ====== typing animation ========*/ 
var typed = new Typed(".typing", {
    strings: ["Data Science Student","Front-End Developer "],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    
});
