function createProduct() {
	$.post({

		url: 'http://localhost:8080/save',		
		data:{
			name: "test2",
			marca: "testMarca2",
			precio: 44.0,
			image: "image/pepe2"
		},
		success: function(result) {
			$('#pepe2').text(result.name);
		},
		error: function(errormsg) {
			console.log(errormsg)
		}		

	});

}

function testBD() {
	$.get({
		url: 'http://localhost:8080/getAll'

	}).then(function(result) {

		for (let product of result) {

			$('#pepe').text(product.name);
		}

	});
}

$(document).ready(function() {

	var altura = $('#menu-fix').offset().top;

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > altura) {
			$('#menu-fix').addClass('menu-fixed');
		} else {
			$('#menu-fix').removeClass('menu-fixed');
		}
	});
	
	$("#miDesplegable").mouseleave(function() {
		$("#menu").remove();
	});
});

function despliegaMenu(name) {

	$('#miDesplegable').load('/menu?status=' + name);

}

