$(document).ready(function(){
	$('a').click(function(){
		// alert("i am click");
		var selected = $(this);
		$('a').removeClass('active');
		$(selected).addClass('active');
	});

	var $a =  $('.a'),
	$b = $('.b'), 
	$c = $('.c'), 
	$d = $('.d'), 
	$home = $('.home'), 
	$aboutme = $('.aboutme'),
	$portfolio = $('.portfolio'), 
	$contactme = $('.contactme');

	$a.click(function(){
		$aboutme.fadeOut(function(){
			$portfolio.fadeOut(function(){
				$home.fadeIn();
			});
		});
	});

	$b.click(function(){
		$home.fadeOut(function(){
			$portfolio.fadeOut(function(){
				$aboutme.fadeIn();
			});	
		});
	});

	$c.click(function(){
		$home.fadeOut(function(){
			$aboutme.fadeOut(function(){
				$portfolio.fadeIn();
			});
		});
	});

	// $d.click(function(){
	// 	$home.fadeOut(function(){
	// 		$aboutme.fadeOut(function(){
	// 			$portfolio.fadeOut(function(){
	// 				$contactme.fadeIn();
	// 			});
	// 		});
	// 	});
	// });
});