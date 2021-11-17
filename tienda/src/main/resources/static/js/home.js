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

function testBD(){
$.get({  
 url: 'http://localhost:8080/getAll'
// data: {status:"mostrar"}
 }).then(function(result) {
  $('#pepe').text(result);
});
}

//    $.ajax({
//        url: "http://rest-service.guides.spring.io/greeting"
//    }).then(function(data) {
//       $('.greeting-id').append(data.id);
//       $('.greeting-content').append(data.content);
//    });

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

