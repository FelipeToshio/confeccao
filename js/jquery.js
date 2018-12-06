var flag;
function abreJanela(URL) {
    location.href = URL; // se for popup utiliza o window.open
    }
function mostraImagem(flag){
    flag =!flag;
    document.getElementById("cod").style.display = "initial";    
}
