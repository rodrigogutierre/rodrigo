$(document).ready(function () {
    $("#inicio").on("click", function () {
        $('#imagen').show(); //muestro mediante id
        $('#algodecss').hide();
        $('#eventos').hide();
        $('#html').hide();
        $('#ajax').hide();
        $('#form').hide();
    });
    $("#css").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').show();
        $('#algodeeventos').hide();
        $('#algodehtml').hide();
        $('#algodeajax').hide();
        $('#algodeform').hide();
    });
    $("#eventos").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').show();
        $('#algodehtml').hide();
        $('#algodeajax').hide();
        $('#algodeform').hide();
    });
    $("#html").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').hide();
        $('#algodehtml').show();
        $('#algodeajax').hide();
        $('#algodeform').hide();
    });
    $("#ajax").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').hide();
        $('#algodehtml').hide();
        $('#algodeajax').show();
        $('#algodeform').hide();
    });
    $("#form").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').hide();
        $('#algodehtml').hide();
        $('#algodeajax').hide();
        $('#algodeform').show();
    });
});
	