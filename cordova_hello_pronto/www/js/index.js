document.addEventListener('deviceready', function() {

    console.log("O dispositivo está pronto!");

}, false);



function calcular()
{
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    document.getElementById("resultado").value = numero1 + numero2;
}
