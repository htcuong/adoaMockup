var target_features =  $("#features");
var run_portfolio = false;
$('#portfolio .isotope-item').hide();	
$(window).scroll(function(e) {
	var y = $(window).scrollTop();
	if(y >= 700 && y < 1000){
		console.log(run_portfolio);
		if(run_portfolio===false){
			startIsotope();
		}
	}
	
});

$(window).load(function(){	
	$("#list-team").isotope();	 
	$('#team-filter a').click(function(){	
		$('#team-filter li').removeClass('active');
		$(this).parent('li').addClass('active');
		var selector = $(this).attr('data-filter');							
		$("#list-team").isotope({ filter: selector });
		return false;			
	});	

});

function startIsotope(){
	$('#portfolio .isotope-item').show();	
	$('#portfolio').isotope({ filter: ".p-icons" });	
	run_portfolio = true;
}
