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
 
	$("#miDesplegable").mouseleave(function(){
    		$("#menu").remove();
 	});
});

function despliegaMenu(name) {

	$('#miDesplegable').load('/menu?status='+name);

}

