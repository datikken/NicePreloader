
TweenMax.staggerTo($('svg.preloader circle'),1.5,{strokeDashoffset:392.68,repeat:-1,ease: Back.easeOut.config(2)},0.1)


setInterval(function(){ 

  $('#preloader-container').remove();

}, 3000);
