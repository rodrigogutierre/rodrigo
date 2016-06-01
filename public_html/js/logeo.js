$(document).ready(function()
{ 
    $("#boton").click(function(){
        if(user!=='rodrigo' & contra!=='123456'){
    var user =$("#usuario").val();
    var contra=$("#contraseña").val();
    var mostrar = 'usaurio incorrecto';
    
            $.ajax({
                type: 'POST',
                url: "login.html",
                data: mostrar,
                cache: false,
                sucess: function(data,textStatus,jqXHR){
                }
            });
            alert(mostrar);
            window.location("login.html");
        }else{
            window.location("index.html");
            alert("WELCOME");
        }
    });
});

