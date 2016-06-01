$(document).ready(function()
{ 
    $("#boton").click(function(){
        var user =$("#user").val();
        var contra=$("#clave").val();
                
        if(user==='d' & contra==='d'){
    
//    var mostrar = 'usaurio incorrecto';
//    
//            $.ajax({
//                type: 'POST',
//                url: "login.html",
//                data: mostrar,
//                cache: false,
//                sucess: function(data,textStatus,jqXHR){
//                }
//            });
//            alert(mostrar);
            window.location("/index.html");
        }else{
            window.location("index.html");
            alert("WELCOME");
        }
    });
});

