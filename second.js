$(function() {

 $('header li').hover(function(){
  $(this).find('.a').addClass('aa');
  $(this).find('.header-text').addClass('header-text-anime');
  $(this).find('.header-text2').addClass('header-text2-anime');
 },function(){
  $(this).find('.a').removeClass('aa');
  $(this).find('.header-text').removeClass('header-text-anime');
  $(this).find('.header-text2').removeClass('header-text2-anime');
 });

 $(window).on('scroll' , function(){
  if ($('#intro').is(":hidden")) {
  } else {
     $('.intro-square').slideDown();
  };
 });

 $(window).scroll(function(){
   var $height = $(window).scrollTop();
   $('.redline').css('width',function($width) {
      var $width = $height / $('body').height() * 10000 / 84;
      return $width + '%';});
 });

 $(window).scroll(function(){
   var thisOffset = $('#member').offset().top;
 	if($(window).scrollTop() + $(window).height() > thisOffset){
   $('#member').find('.back').addClass('backanime');
   $('#member').find('.headinganime').addClass('headinganimex');
   if($('#member').find('.headinganime').hasClass('headinganimex')) {
    setTimeout(function() {
     $('.humans').css('display','block');
     $('#member').find('.heading').addClass('hred');
     $('#member').find('.headinganime').addClass('topbottom');
     $('#member').find('.headinganime').addClass('headinganimexx');
    }, 1000);
   };	} else {
 	};
 });

 $(window).scroll(function(){
   var thisOffset = $('#crosstalk').offset().top;
 	if($(window).scrollTop() + $(window).height() > thisOffset){
   $('#crosstalk').find('.headinganime').addClass('headinganimex');
   if($('#crosstalk').find('.headinganime').hasClass('headinganimex')) {
    setTimeout(function() {
     $('.talk-one').slideDown();
    }, 300);
    setTimeout(function() {
     $('.talk-two').slideDown();
    }, 600);
    setTimeout(function() {
     $('#crosstalk').find('.heading').addClass('hred');
     $('#crosstalk').find('.headinganime').addClass('topbottom');
     $('#crosstalk').find('.headinganime').addClass('headinganimexx');
    }, 1000);
   };	} else {
 	}
 });

 $(window).scroll(function(){
   var thisOffset = $('#artwork').offset().top;
  if($(window).scrollTop() + $(window).height() > thisOffset){
   $('#artwork').find('.artworkback').addClass('backanime');
   $('#artwork').find('.headinganime').addClass('headinganimex');
   if($('#artwork').find('.headinganime').hasClass('headinganimex')) {
    setTimeout(function() {
     $('#artwork').find('.heading').addClass('hred');
     $('#artwork').find('.headinganime').addClass('topbottom');
     $('#artwork').find('.headinganime').addClass('headinganimexx');
    }, 1000);
   };	} else {
  }
 });


 $(window).scroll(function() {
   if ($(window).scrollTop() > 0) {
     $('#header').addClass('scrolled');
   } else {
     $('#header').removeClass('scrolled');
   }
 });


$('.talksanime').hover(function(){
 $(this).find('h1').css('color','red');
 $(this).find('h1').css('text-decoration','underline');
 $(this).find('.tk-img1').addClass('imganime');
 $(this).find('.tk-img2').addClass('imganime2');
},function(){
 $(this).find('h1').css('color','black');
 $(this).find('h1').css('text-decoration','none');
 $(this).find('.tk-img1').removeClass('imganime');
 $(this).find('.tk-img2').removeClass('imganime2');
});

$('.circle1').hover(function(){
 $(this).parent('div').css('opacity','0.5');
},function(){
 $(this).parent('div').css('opacity','1');
});

$('.human').hover(function(){
 $(this).find('.human-active1').find('.human-prof').find('h1').css('color','red');
 $(this).find('.human-active2').find('.human-prof-center').find('h1').css('color','red');
 $(this).find('.human-active3').find('.human-prof').find('h1').css('color','red');
},function(){
 $(this).find('.human-active1').find('.human-prof').find('h1').css('color','black');
 $(this).find('.human-active2').find('.human-prof-center').find('h1').css('color','black');
 $(this).find('.human-active3').find('.human-prof').find('h1').css('color','black');
});


 $('.next').click(function(){
  var $human1 = $('.human-big1');

  if($('.human1').hasClass('human-active1')) {
   $human1.find('.human1').removeClass('human-active1');
   $human1.find('.human1').addClass('none');
   $('.redpage').text('02');
   setTimeout(function(){
   $human1.find('.human2').addClass('human-active1');
   $human1.find('.human2').removeClass('none');
  },150);
  };
  if($('.human2').hasClass('human-active1')) {
   $human1.find('.human2').removeClass('human-active1');
   $human1.find('.human2').addClass('none');
   $('.redpage').text('03');
   setTimeout(function(){
   $human1.find('.human3').addClass('human-active1');
   $human1.find('.human3').removeClass('none');
  },150);
  };
  if($('.human3').hasClass('human-active1')) {
   $human1.find('.human3').removeClass('human-active1');
   $human1.find('.human3').addClass('none');
   $('.redpage').text('04');
   setTimeout(function(){
   $human1.find('.human4').addClass('human-active1');
   $human1.find('.human4').removeClass('none');
  },150);
  };
  if($('.human4').hasClass('human-active1')) {
   $human1.find('.human4').removeClass('human-active1');
   $human1.find('.human4').addClass('none');
   $('.redpage').text('05');
   setTimeout(function(){
   $human1.find('.human5').addClass('human-active1');
   $human1.find('.human5').removeClass('none');
  },150);
  };
  if($('.human5').hasClass('human-active1')) {
   $human1.find('.human5').removeClass('human-active1');
   $human1.find('.human5').addClass('none');
   $('.redpage').text('06');
   setTimeout(function(){
   $human1.find('.human6').addClass('human-active1');
   $human1.find('.human6').removeClass('none');
  },150);
  };
  if($('.human6').hasClass('human-active1')) {
   $human1.find('.human6').removeClass('human-active1');
   $human1.find('.human6').addClass('none');
   $('.redpage').text('07');
   setTimeout(function(){
   $human1.find('.human7').addClass('human-active1');
   $human1.find('.human7').removeClass('none');
  },150);
  };
  if($('.human7').hasClass('human-active1')) {
   $human1.find('.human7').removeClass('human-active1');
   $human1.find('.human7').addClass('none');
   $('.redpage').text('08');
   setTimeout(function(){
   $human1.find('.human8').addClass('human-active1');
   $human1.find('.human8').removeClass('none');
  },150);
  };
  if($('.human8').hasClass('human-active1')) {
   $human1.find('.human8').removeClass('human-active1');
   $human1.find('.human8').addClass('none');
   $('.redpage').text('09');
   setTimeout(function(){
   $human1.find('.human9').addClass('human-active1');
   $human1.find('.human9').removeClass('none');
  },150);
  };
  if($('.human9').hasClass('human-active1')) {
   $human1.find('.human9').removeClass('human-active1');
   $human1.find('.human9').addClass('none');
   $('.redpage').text('01');
   setTimeout(function(){
   $human1.find('.human1').addClass('human-active1');
   $human1.find('.human1').removeClass('none');
  },150);
  };

  var $human2 = $('.human-big2');

  if($('.human1').hasClass('human-active2')) {
   $human2.find('.human1').removeClass('human-active2');
   $human2.find('.human1').addClass('none');
   setTimeout(function(){
   $human2.find('.human2').addClass('human-active2');
   $human2.find('.human2').removeClass('none');
  },150);
  };
  if($('.human2').hasClass('human-active2')) {
   $human2.find('.human2').removeClass('human-active2');
   $human2.find('.human2').addClass('none');
   setTimeout(function(){
   $human2.find('.human3').addClass('human-active2');
   $human2.find('.human3').removeClass('none');
  },150);
  };
  if($('.human3').hasClass('human-active2')) {
   $human2.find('.human3').removeClass('human-active2');
   $human2.find('.human3').addClass('none');
   setTimeout(function(){
   $human2.find('.human4').addClass('human-active2');
   $human2.find('.human4').removeClass('none');
  },150);
  };
  if($('.human4').hasClass('human-active2')) {
   $human2.find('.human4').removeClass('human-active2');
   $human2.find('.human4').addClass('none');
   setTimeout(function(){
   $human2.find('.human5').addClass('human-active2');
   $human2.find('.human5').removeClass('none');
  },150);
  };
  if($('.human5').hasClass('human-active2')) {
   $human2.find('.human5').removeClass('human-active2');
   $human2.find('.human5').addClass('none');
   setTimeout(function(){
   $human2.find('.human6').addClass('human-active2');
   $human2.find('.human6').removeClass('none');
  },150);
  };
  if($('.human6').hasClass('human-active2')) {
   $human2.find('.human6').removeClass('human-active2');
   $human2.find('.human6').addClass('none');
   setTimeout(function(){
   $human2.find('.human7').addClass('human-active2');
   $human2.find('.human7').removeClass('none');
  },150);
  };
  if($('.human7').hasClass('human-active2')) {
   $human2.find('.human7').removeClass('human-active2');
   $human2.find('.human7').addClass('none');
   setTimeout(function(){
   $human2.find('.human8').addClass('human-active2');
   $human2.find('.human8').removeClass('none');
  },150);
  };
  if($('.human8').hasClass('human-active2')) {
   $human2.find('.human8').removeClass('human-active2');
   $human2.find('.human8').addClass('none');
   setTimeout(function(){
   $human2.find('.human9').addClass('human-active2');
   $human2.find('.human9').removeClass('none');
  },150);
  };
  if($('.human9').hasClass('human-active2')) {
   $human2.find('.human9').removeClass('human-active2');
   $human2.find('.human9').addClass('none');
   setTimeout(function(){
   $human2.find('.human1').addClass('human-active2');
   $human2.find('.human1').removeClass('none');
  },150);
  };



    var $human3= $('.human-big3');

    if($('.human1').hasClass('human-active3')) {
     $human3.find('.human1').removeClass('human-active3');
     $human3.find('.human1').addClass('none');
     setTimeout(function(){
     $human3.find('.human2').addClass('human-active3');
     $human3.find('.human2').removeClass('none');
    },150);
    };
    if($('.human2').hasClass('human-active3')) {
     $human3.find('.human2').removeClass('human-active3');
     $human3.find('.human2').addClass('none');
     setTimeout(function(){
     $human3.find('.human3').addClass('human-active3');
     $human3.find('.human3').removeClass('none');
    },150);
    };
    if($('.human3').hasClass('human-active3')) {
     $human3.find('.human3').removeClass('human-active3');
     $human3.find('.human3').addClass('none');
     setTimeout(function(){
     $human3.find('.human4').addClass('human-active3');
     $human3.find('.human4').removeClass('none');
    },150);
    };
    if($('.human4').hasClass('human-active3')) {
     $human3.find('.human4').removeClass('human-active3');
     $human3.find('.human4').addClass('none');
     setTimeout(function(){
     $human3.find('.human5').addClass('human-active3');
     $human3.find('.human5').removeClass('none');
    },150);
    };
    if($('.human5').hasClass('human-active3')) {
     $human3.find('.human5').removeClass('human-active3');
     $human3.find('.human5').addClass('none');
     setTimeout(function(){
     $human3.find('.human6').addClass('human-active3');
     $human3.find('.human6').removeClass('none');
    },150);
    };
    if($('.human6').hasClass('human-active3')) {
     $human3.find('.human6').removeClass('human-active3');
     $human3.find('.human6').addClass('none');
     setTimeout(function(){
     $human3.find('.human7').addClass('human-active3');
     $human3.find('.human7').removeClass('none');
    },150);
    };
    if($('.human7').hasClass('human-active3')) {
     $human3.find('.human7').removeClass('human-active3');
     $human3.find('.human7').addClass('none');
     setTimeout(function(){
     $human3.find('.human8').addClass('human-active3');
     $human3.find('.human8').removeClass('none');
    },150);
    };
    if($('.human8').hasClass('human-active3')) {
     $human3.find('.human8').removeClass('human-active3');
     $human3.find('.human8').addClass('none');
     setTimeout(function(){
     $human3.find('.human9').addClass('human-active3');
     $human3.find('.human9').removeClass('none');
    },150);
    };
    if($('.human9').hasClass('human-active3')) {
     $human3.find('.human9').removeClass('human-active3');
     $human3.find('.human9').addClass('none');
     setTimeout(function(){
     $human3.find('.human1').addClass('human-active3');
     $human3.find('.human1').removeClass('none');
    },150);
    };


 });

 $('.prev').click(function(){
  var $human1 = $('.human-big1');

  if($('.human1').hasClass('human-active1')) {
   $human1.find('.human1').removeClass('human-active1');
   $human1.find('.human1').addClass('none');
   $('.redpage').text('09');
   setTimeout(function(){
   $human1.find('.human9').addClass('human-active1');
   $human1.find('.human9').removeClass('none');
  },150);
  };
  if($('.human2').hasClass('human-active1')) {
   $human1.find('.human2').removeClass('human-active1');
   $human1.find('.human2').addClass('none');
   $('.redpage').text('01');
   setTimeout(function(){
   $human1.find('.human1').addClass('human-active1');
   $human1.find('.human1').removeClass('none');
  },150);
  };
  if($('.human3').hasClass('human-active1')) {
   $human1.find('.human3').removeClass('human-active1');
   $human1.find('.human3').addClass('none');
   $('.redpage').text('02');
   setTimeout(function(){
   $human1.find('.human2').addClass('human-active1');
   $human1.find('.human2').removeClass('none');
  },150);
  };
  if($('.human4').hasClass('human-active1')) {
   $human1.find('.human4').removeClass('human-active1');
   $human1.find('.human4').addClass('none');
   $('.redpage').text('03');
   setTimeout(function(){
   $human1.find('.human3').addClass('human-active1');
   $human1.find('.human3').removeClass('none');
  },150);
  };
  if($('.human5').hasClass('human-active1')) {
   $human1.find('.human5').removeClass('human-active1');
   $human1.find('.human5').addClass('none');
   $('.redpage').text('04');
   setTimeout(function(){
   $human1.find('.human4').addClass('human-active1');
   $human1.find('.human4').removeClass('none');
  },150);
  };
  if($('.human6').hasClass('human-active1')) {
   $human1.find('.human6').removeClass('human-active1');
   $human1.find('.human6').addClass('none');
   $('.redpage').text('05');
   setTimeout(function(){
   $human1.find('.human5').addClass('human-active1');
   $human1.find('.human5').removeClass('none');
  },150);
  };
  if($('.human7').hasClass('human-active1')) {
   $human1.find('.human7').removeClass('human-active1');
   $human1.find('.human7').addClass('none');
   $('.redpage').text('06');
   setTimeout(function(){
   $human1.find('.human6').addClass('human-active1');
   $human1.find('.human6').removeClass('none');
  },150);
  };
  if($('.human8').hasClass('human-active1')) {
   $human1.find('.human8').removeClass('human-active1');
   $human1.find('.human8').addClass('none');
   $('.redpage').text('07');
   setTimeout(function(){
   $human1.find('.human7').addClass('human-active1');
   $human1.find('.human7').removeClass('none');
  },150);
  };
  if($('.human9').hasClass('human-active1')) {
   $human1.find('.human9').removeClass('human-active1');
   $human1.find('.human9').addClass('none');
   $('.redpage').text('02');
   setTimeout(function(){
   $human1.find('.human8').addClass('human-active1');
   $human1.find('.human8').removeClass('none');
  },150);
  };

  var $human2 = $('.human-big2');

  if($('.human1').hasClass('human-active2')) {
   $human2.find('.human1').removeClass('human-active2');
   $human2.find('.human1').addClass('none');
   setTimeout(function(){
   $human2.find('.human9').addClass('human-active2');
   $human2.find('.human9').removeClass('none');
  },150);
  };
  if($('.human2').hasClass('human-active2')) {
   $human2.find('.human2').removeClass('human-active2');
   $human2.find('.human2').addClass('none');
   setTimeout(function(){
   $human2.find('.human1').addClass('human-active2');
   $human2.find('.human1').removeClass('none');
  },150);
  };
  if($('.human3').hasClass('human-active2')) {
   $human2.find('.human3').removeClass('human-active2');
   $human2.find('.human3').addClass('none');
   setTimeout(function(){
   $human2.find('.human2').addClass('human-active2');
   $human2.find('.human2').removeClass('none');
  },150);
  };
  if($('.human4').hasClass('human-active2')) {
   $human2.find('.human4').removeClass('human-active2');
   $human2.find('.human4').addClass('none');
   setTimeout(function(){
   $human2.find('.human3').addClass('human-active2');
   $human2.find('.human3').removeClass('none');
  },150);
  };
  if($('.human5').hasClass('human-active2')) {
   $human2.find('.human5').removeClass('human-active2');
   $human2.find('.human5').addClass('none');
   setTimeout(function(){
   $human2.find('.human4').addClass('human-active2');
   $human2.find('.human4').removeClass('none');
  },150);
  };
  if($('.human6').hasClass('human-active2')) {
   $human2.find('.human6').removeClass('human-active2');
   $human2.find('.human6').addClass('none');
   setTimeout(function(){
   $human2.find('.human5').addClass('human-active2');
   $human2.find('.human5').removeClass('none');
  },150);
  };
  if($('.human7').hasClass('human-active2')) {
   $human2.find('.human7').removeClass('human-active2');
   $human2.find('.human7').addClass('none');
   setTimeout(function(){
   $human2.find('.human6').addClass('human-active2');
   $human2.find('.human6').removeClass('none');
  },150);
  };
  if($('.human8').hasClass('human-active2')) {
   $human2.find('.human8').removeClass('human-active2');
   $human2.find('.human8').addClass('none');
   setTimeout(function(){
   $human2.find('.human7').addClass('human-active2');
   $human2.find('.human7').removeClass('none');
  },150);
  };
  if($('.human9').hasClass('human-active2')) {
   $human2.find('.human9').removeClass('human-active2');
   $human2.find('.human9').addClass('none');
   setTimeout(function(){
   $human2.find('.human8').addClass('human-active2');
   $human2.find('.human8').removeClass('none');
  },150);
  };



    var $human3= $('.human-big3');

    if($('.human1').hasClass('human-active3')) {
     $human3.find('.human1').removeClass('human-active3');
     $human3.find('.human1').addClass('none');
     setTimeout(function(){
     $human3.find('.human9').addClass('human-active3');
     $human3.find('.human9').removeClass('none');
    },150);
    };
    if($('.human2').hasClass('human-active3')) {
     $human3.find('.human2').removeClass('human-active3');
     $human3.find('.human2').addClass('none');
     setTimeout(function(){
     $human3.find('.human1').addClass('human-active3');
     $human3.find('.human1').removeClass('none');
    },150);
    };
    if($('.human3').hasClass('human-active3')) {
     $human3.find('.human3').removeClass('human-active3');
     $human3.find('.human3').addClass('none');
     setTimeout(function(){
     $human3.find('.human2').addClass('human-active3');
     $human3.find('.human2').removeClass('none');
    },150);
    };
    if($('.human4').hasClass('human-active3')) {
     $human3.find('.human4').removeClass('human-active3');
     $human3.find('.human4').addClass('none');
     setTimeout(function(){
     $human3.find('.human3').addClass('human-active3');
     $human3.find('.human3').removeClass('none');
    },150);
    };
    if($('.human5').hasClass('human-active3')) {
     $human3.find('.human5').removeClass('human-active3');
     $human3.find('.human5').addClass('none');
     setTimeout(function(){
     $human3.find('.human4').addClass('human-active3');
     $human3.find('.human4').removeClass('none');
    },150);
    };
    if($('.human6').hasClass('human-active3')) {
     $human3.find('.human6').removeClass('human-active3');
     $human3.find('.human6').addClass('none');
     setTimeout(function(){
     $human3.find('.human5').addClass('human-active3');
     $human3.find('.human5').removeClass('none');
    },150);
    };
    if($('.human7').hasClass('human-active3')) {
     $human3.find('.human7').removeClass('human-active3');
     $human3.find('.human7').addClass('none');
     setTimeout(function(){
     $human3.find('.human6').addClass('human-active3');
     $human3.find('.human6').removeClass('none');
    },150);
    };
    if($('.human8').hasClass('human-active3')) {
     $human3.find('.human8').removeClass('human-active3');
     $human3.find('.human8').addClass('none');
     setTimeout(function(){
     $human3.find('.human7').addClass('human-active3');
     $human3.find('.human7').removeClass('none');
    },150);
    };
    if($('.human9').hasClass('human-active3')) {
     $human3.find('.human9').removeClass('human-active3');
     $human3.find('.human9').addClass('none');
     setTimeout(function(){
     $human3.find('.human8').addClass('human-active3');
     $human3.find('.human8').removeClass('none');
    },150);
    };

 });

//btn//

$('.entry-btn').hover(function(){
 $('.entry-btn-anime').addClass('btn-anime');
 $('.entry-text').css('color','red');
},function(){
 $('.entry-btn-anime').removeClass('btn-anime');
 $('.entry-btn-anime').addClass('btn-anime2');
 $('.entry-text').css('color','white');
});

$('.intro-btn').hover(function(){
 $('.intro-btn-anime').addClass('btn-anime');
 $('.intro-btn-text').css('color','#B59658');
},function(){
 $('.intro-btn-anime').removeClass('btn-anime');
 $('.intro-btn-anime').addClass('btn-anime2');
 $('.intro-btn-text').css('color','white');
});

$('.member-btn').hover(function(){
 $('.member-btn-anime').addClass('btn-anime');
},function(){
 $('.member-btn-anime').removeClass('btn-anime');
 $('.member-btn-anime').addClass('btn-anime2');
});

$('.artwork-btn').hover(function(){
 $('.artwork-btn-anime').addClass('btn-anime');
},function(){
 $('.artwork-btn-anime').removeClass('btn-anime');
 $('.artwork-btn-anime').addClass('btn-anime2');
});

$('.recruit-btn').hover(function(){
 $('.recruit-btn-anime').addClass('btn-anime');
 $('.recruit-btn-text').css('color','#B59658');
},function(){
 $('.recruit-btn-anime').removeClass('btn-anime');
 $('.recruit-btn-anime').addClass('btn-anime2');
 $('.recruit-btn-text').css('color','white');

});

$('.circle-page-top').hover(function(){
 $('.oval').addClass('oval-active');
 $('.oval-active').addClass('oval-anime');
 roop = setInterval(function(){
  $('.oval-active').removeClass('oval-anime');
  setTimeout(function(){
   $('.oval-active').addClass('oval-anime');
  },30);
 },1530);
}, function(){
 $('.oval').removeClass('oval-active');
 $('.oval').removeClass('oval-anime');
 clearTimeout(roop);
});



});
