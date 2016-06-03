var usuario = "rodrigo";
var contras = "12345";
$(document).ready(function ()
{
    $("#boton").click(function () {

        var user = $("#user").val();
        var contra = $("#clave").val();
        if (user == 0 || contra == 0) {
           
            $("#mostrar").html("<div class='alert alert-danger'>ERRORRRRR.>");
        }
        else {
            if (user === usuario & contra === contras) {

                window.open("index.html");
                window.close("login.html");
                /* var mostrar = 'welcome';
                
                 $.ajax({
                 type: 'POST',
                 url: "index.html",
                 data: datos,
                 cache: false,
                 sucess: function(data,textStatus,jqXHR){
                 }
                 });
                 
                 alert(mostrar);*/

            }
            if(user !==usuario & contra!==contras){
                $("#mostar").html("<div class='alert alert-danger'>usuario incorrecto!....< /div>");
            }
        }
        return false;

    });
});

