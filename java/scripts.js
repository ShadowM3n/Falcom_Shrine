function mOvr(src) { 
src.style.color ='#800000';
} 
function mOut(src) { 
src.style.color ='#666666';
} 
function MoveIn(src) { 
src.style.background ='#DBEAF5'; 
 encima. 
src.style.fontWeight='bold'; 
} 
function MoveOut(src) { 
src.style.background ='#ACCAE8'; 
 Mouse. 
src.style.fontWeight='normal'; 
} 
function colores(fondo, frente) { 
 document.bgColor = fondo; 
 document.fgColor = frente;
}
function conv_mayus() {
  let x = document.getElementById("nombre");
  x.value = x.value.toUpperCase();
}
function conv_mayus2() {
  let y = document.getElementById("opinion");
  y.value = y.value.toUpperCase();
}

function formimp() {
    var nombreimp = document.getElementById("nombre").value;
	var opinionimp = document.getElementById("opinion").value;
    alert('Tu nombre es ' + nombreimp + ' y tu opinion de la pagina es ' + opinionimp);
}

function paisimp() {
  var paisinput = document.getElementById("pais").value;
  document.getElementById("paisprint").innerHTML.write = "Ya veo, vienes de: " + paisinput;
  var printprint = document.getElementById("paisprint").innerHTML = "Ya veo, vienes de: " + paisinput;
}

function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
    setInterval(updateDateTime, 1000);
}

function ultimamod(){
	const datemod = new Date(document.lastModified);
	document.querySelector('#printmod').textContent = datemod;
}

function printnav(){
	var navegador = window.navigator.userAgent
	document.querySelector('#imprnav').textContent = "Navegador: " + navegador;
}

function paisfond(valor){
 const idk = document.getElementById("pais"); 
 idk.style.backgroundColor = valor;
}

function nomfond(valor){
 const idk = document.getElementById("nombre"); 
 idk.style.backgroundColor = valor;
}

function opinfond(valor){
 const idk = document.getElementById("opinion"); 
 idk.style.backgroundColor = valor;
}