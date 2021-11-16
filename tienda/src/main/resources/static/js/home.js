//function despliegaMenu(){
//$.ajax({
//  type: 'GET',
//  //url: 'http://localhost:8080/menuStatus',
// url: /*[[ @{/menuStatus} ]]*/ null,
//  data: {status:"mostrar"},
//    success: function(result){
//    $('#miDesplegable').text(result);
//  },
//  error: function(errormsg){
//    console.log(errormsg)
//  }
//});
//
//}

//function despliegaMenu(){
//$.get({  
// url: 'http://localhost:8080/menuStatus',
// data: {status:"mostrar"}
// }).then(function(result) {
//  $('#miDesplegable').text(result);
//});

$(document).ready(function(){
//	$("#miDesplegable").mouseenter(function(){
//    		alert("El ratón está sobre el div negro");
//  	});
 
 var altura = $('#menu-fix').offset().top;
 
 $(window).on('scroll',function(){
	if($(window).scrollTop() > altura){
		$('#menu-fix').addClass('menu-fixed');
	}else{
		$('#menu-fix').removeClass('menu-fixed');
	}
})
	$("#miDesplegable").mouseleave(function(){
    		$("#menu").remove();
 	});
});

function despliegaMenu(name) {

	$('#miDesplegable').load('/menu?status='+name);

}

