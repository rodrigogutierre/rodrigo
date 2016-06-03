$(document).ready(function ()
{
    $("#inicio").on("click", function () {
        $('#imagen').show(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').hide();
        $('#algodehtml').hide();
        $('#algodeajax').hide();
        $('#algodeform').hide();
        $('#algodetabla').hide();
    });
    $("#css").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').show();
        $('#algodeeventos').hide();
        $('#algodehtml').hide();
        $('#algodeajax').hide();
        $('#algodeform').hide();
        $('#algodetabla').hide();
    });
    $("#eventos").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').show();
        $('#algodehtml').hide();
        $('#algodeajax').hide();
        $('#algodeform').hide();
        $('#algodetabla').hide();
    });
    $("#html").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').hide();
        $('#algodehtml').show();
        $('#algodeajax').hide();
        $('#algodeform').hide();
        $('#algodetabla').hide();
    });
    $("#ajax").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').hide();
        $('#algodehtml').hide();
        $('#algodeajax').show();
        $('#algodeform').hide();
        $('#algodetabla').hide();
    });
    $("#form").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').hide();
        $('#algodehtml').hide();
        $('#algodeajax').hide();
        $('#algodeform').show();
        $('#algodetabla').hide();
    });
    $("#tabla").on("click", function () {
        $('#imagen').hide(); //muestro mediante id
        $('#algodecss').hide();
        $('#algodeeventos').hide();
        $('#algodehtml').hide();
        $('#algodeajax').hide();
        $('#algodeform').hide();
        $('#algodetabla').show();
    });
});
	