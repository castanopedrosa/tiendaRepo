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

//function cierraMenu(){
//	$("#miDesplegable").remove()
//}

//function despliegaMenu(){
//$.get({  
// url: 'http://localhost:8080/menuStatus',
// data: {status:"mostrar"}
// }).then(function(result) {
//  $('#miDesplegable').text(result);
//});

function despliegaMenu(){

  $('#miDesplegable').load('/menuStatus?status=mostrar');


}
