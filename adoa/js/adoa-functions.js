jQuery(document).ready(function($){
/* Pretty Photo. 
   Used: - For Grouping:  <a data-rel="prettyPhoto[portfolio-group]"> 
		 - For Single Image: <a data-rel="prettyPhoto"> 
	*/
	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
		});
		$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square'});	
/* Sidebar Portfolio Carousel Widget.  
	Used: Every page with sidebar */		
	$(".ad_portfolio-widget .ad_carousel").carouFredSel({
		responsive: true,
		prev:{
			button : function()
			{
				return $(this).parent().parent().parent().children('.ad_carousel-control').children('a:first-child')
			}
		},
		next:{
			button : function()
			{
				return $(this).parent().parent().parent().children('.ad_carousel-control').children('a:last-child')
			}
		},
		width: '100%',
		circular: false,
		infinite: true,
		auto:{
			play : true,
			pauseDuration: 0,
			duration: 2000
		},
		items:{
			visible:{
				min: 1,
				max: 2
			},
			width:480,
			height: 'auto'
		}
	});
	

/* Related Project Carousel Widget.  
	Used: portfolio-single-project-full-width.html, portfolio-single-project.html, blog-single.html */
	$(".ad_related-project .ad_carousel").carouFredSel({
		responsive: true,
		prev:{
			button : function()
			{
				return $(this).parent().parent().parent().children('.ad_carousel-control').children('a:first-child')
			}
		},
		next:{
			button : function(){
				return $(this).parent().parent().parent().children('.ad_carousel-control').children('a:last-child')
			}
		},
		width: '100%',
		circular: false,
		infinite: true,
		auto:{
			play : true,
			pauseDuration: 0,
			duration: 2000
		},
		scroll:{
			items: 4,
			duration: 400,
			wipe: true
		},
		items:{
			visible:{
				min: 1,
				max: 4
			},
			width: 277,
			height: 'auto'
		}
	});		
});
$(window).on("scroll", function(){
	var y = $(window).scrollTop();
	if(y>=10){
		addFitMenu();
	}else{
		removeFitMenu();
	}
});

function addFitMenu(){
	$("#home").addClass('menu-active');
}

function removeFitMenu(){
	$("#home").removeClass('menu-active');
}