var input = document.getElementById("entrada");//obtenemos el textarea de entrada
var output = document.getElementById("salida");
var botonEncriptar = document.getElementById("encriptar");
var botonDesencriptar = document.getElementById("desencriptar");
var botonCopiar = document.getElementById("copiar");


const codigo = [["a","$kt"], ["e","&ty"], ["i","#rw"], ["o","=pl"], ["u","!qw"]];

botonEncriptar.onclick = Fun_Encriptar;
botonDesencriptar.onclick = Fun_Desencriptar;
botonCopiar.onclick = Fun_Copiar;

function Fun_Desencriptar(){
    const texto_encriptado = desencriptar(input.value);    
    output.value = texto_encriptado;    
    input.value = "";
}


function Fun_Encriptar() {    
    const texto_desencriptado = encriptar(input.value);    
    output.value = texto_desencriptado;    
    input.value = "";
}

function Fun_Copiar(){
    output.select();
    document.execCommand('Copy');
    alert("Texto Copiado")
}

function encriptar(cadena){
    
    cadena = cadena.toLowerCase();

    for(let i=0; i < codigo.length; i++){
        cadena = cadena.replaceAll(codigo[i][0], codigo[i][1]);
    }

    return cadena;  
}

function desencriptar(cadena){

    for(let i=0; i < codigo.length; i++){
        cadena = cadena.replaceAll(codigo[i][1], codigo[i][0]);
    }

    return cadena;
}


