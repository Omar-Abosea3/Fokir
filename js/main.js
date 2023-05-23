var myNav = document.getElementById('mynav');
var prevScrollpos = window.pageYOffset;
function myCounter(){
    $('.counter').each(function() {
        var $this = $(this),
            countTo = Math.floor(Math.random() * $this.attr('data-count'));
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 2000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });  
      });
}
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("navColorOnscroll");
        myNav.classList.remove("bg-transparent");
    } 
    else {
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("navColorOnscroll");
    }
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar1").style.top = "0";
    } else {
        document.querySelector(".navbar1").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;

    if($(window).scrollTop() >= $('#About').offset().top){
        $('.toTop').removeClass('d-none');
    }else{
        $('.toTop').addClass('d-none');
    }

    if($('html,body').scrollTop() >= $('#Home').offset().top){
        $('nav ul a').css('color','#FF305B');
        $('nav ul a').not($('nav ul a').eq(0)).css('color','white')
    }if($('html,body').scrollTop()>=$('#About').offset().top){
        $('nav ul a').css('color','#FF305B');
        $('nav ul a').not($('nav ul a').eq(1)).css('color','white')
    }if($('html,body').scrollTop()>=$('#Services').offset().top){
        $('nav ul a').css('color','#FF305B');
        $('nav ul a').not($('nav ul a').eq(2)).css('color','white')
    }if($('html,body').scrollTop()>=$('#Portfolio').offset().top){
        $('nav ul a').css('color','#FF305B');
        $('nav ul a').not($('nav ul a').eq(3)).css('color','white')
    }if($('html,body').scrollTop()>=$('.Testimonial').offset().top -500){
        myCounter()
    }if($('html,body').scrollTop()>=$('#Testimonial').offset().top){
        $('nav ul a').css('color','#FF305B');
        $('nav ul a').not($('nav ul a').eq(4)).css('color','white')
    }if($('html,body').scrollTop()>=$('#Blog').offset().top){
        $('nav ul a').css('color','#FF305B');
        $('nav ul a').not($('nav ul a').eq(5)).css('color','white')
    }if($('html,body').scrollTop()>=$('#Contact').offset().top){
        $('nav ul a').css('color','#FF305B');
        $('nav ul a').not($('nav ul a').eq(6)).css('color','white')
    }
    
};

$('#Portfolio ul button').click(function(){
    $(this).css('color','#FF305B');
    $('#Portfolio ul button').not($(this)).css('color','black').removeClass('myBtn1')
});

let spanWidth = $('#homeP').outerWidth(true);
console.log(spanWidth);

// how can i make typing different words animation?
var options = {
    selector: '#homeP', // target element selector
    words: ['Develeper','Designer'], // words/sentences that will be auto typed
    charSpeed: 50, // letter typing animation speed
    delay: 1500, // word/sentence typing animation delay
    loop: true, // if loop is activated, autoTyper will start over
    flipflop: true // if flipflop is activated, letters which are typed animated will be removed ony by one animated
  }

let typer = new autoTyper(options)
typer.start();

console.log(Math.random()*100);



 $('nav ul a').click(function(){
    let sectionOffsetTop=$($(this).attr('href')).offset().top;
    $('html,body').animate({scrollTop:sectionOffsetTop},2000);
 })

 $('.toTop').click(function(){
    $('html,body').animate({scrollTop:0},2000);
 })
