$(document).ready(function(){

//efecto Menu
	$(".menu a").each(function(index, elemento){
		$(this).css({'top':'-200px'});
		$(this).animate({
			'top':'0'
		},2000+(index*500));
	});

// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});
		
//efecto Header

	if( $(window).width()>800){
		$('Header .informacion').css({
			opacity: 0,
			marginTop: 0
		});
		$('Header .informacion').animate({
			opacity: 1,
			marginTop: '-52px'
		},1500);

	}

//scroll 

	var acercaDe = $('#acercaDe').offset().top,
		precios = $('#precios').offset().top,
		promociones = $('#promociones').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btnAcercaDe').on('click', function(){
		$('html, body').animate({
			scrollTop: acercaDe -150
		}, 500);
	});
	$('#btnPromociones').on('click', function(){
		$('html, body').animate({
			scrollTop: promociones
		}, 500);
	});
	$('#btnPrecios').on('click', function(){
		$('html, body').animate({
			scrollTop: precios
		}, 500);
	});
	$('#btnGaleria').on('click', function(){
		$('html, body').animate({
			scrollTop: galeria
		}, 500);
	});
	$('#btnUbicacion').on('click', function(){
		$('html, body').animate({
			scrollTop: ubicacion
		}, 500);
	});
	

});