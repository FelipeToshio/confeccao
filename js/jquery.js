    var flag;
    function abreJanela(URL) {
        location.href = URL; // se for popup utiliza o window.open
    }
    function mostraImagem(flag) {
        flag = !flag;
        document.getElementById("cod").style.display = "initial";
    }
    var v = document.querySelectorAll(".blank");
    function handleClick (event) {
        if (this.style.backgroundColor === "red") {
                this.style.backgroundColor = "yellow";
            } else if (this.style.backgroundColor === "yellow") {
                this.style.backgroundColor = "green";
            } else if (this.style.backgroundColor === "green") {
                this.style.backgroundColor = "rgb(255, 204, 102)";
            } else if (this.style.backgroundColor === "rgb(255, 204, 102)") {
                this.style.backgroundColor = "red";
            }
    }
    
    v.forEach(function(item){
        item.addEventListener('click', handleClick);
        item.style.backgroundColor = "red";
    });
    
    function dados(flag){
        flag = !flag;
        document.getElementById("flag").style.display = "initial";
    }

    var sit = document.querySelectorAll("td");
    sit.forEach(function(status){
        if(status.innerHTML === "Pronto"){
            status.style.backgroundColor = "rgb(239,215,238)"
        }
        if(status.innerHTML === "Aberto"){
            status.style.backgroundColor = "rgb(255,230,153)"
        }
    });
   