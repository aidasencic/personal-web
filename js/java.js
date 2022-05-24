document.getElementById("cuadro1").addEventListener("mouseover", function() {
    document.getElementById("cuadro1").style.backgroundColor = "lightgray";
});  
document.getElementById("cuadro1").addEventListener("mouseout", function() {
    document.getElementById("cuadro1").style.backgroundColor = "white";
});

document.getElementById("cuadro2").addEventListener("mouseover", function() {
    document.getElementById("cuadro2").style.backgroundColor = "lightgray";
}); 
document.getElementById("cuadro2").addEventListener("mouseout", function() {
    document.getElementById("cuadro2").style.backgroundColor = "white";
});

const texto = document.getElementById('texto');
texto.addEventListener('mouseover', function handleMouseOver() {
  texto.style.color = 'black';
});
texto.addEventListener('mouseout', function handleMouseOut() {
  texto.style.color = 'dimgray';
});

const texto2 = document.getElementById('texto2');
texto2.addEventListener('mouseover', function handleMouseOver() {
  texto2.style.color = 'black';
});
texto2.addEventListener('mouseout', function handleMouseOut() {
  texto2.style.color = 'dimgray';
});