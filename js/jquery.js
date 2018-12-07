// document.onload = function () {
    
    

    // for (i = 0; i < v.length; i++) {
        
        // v[i].addEventListener("click",
            // function () {
                // if (v[i].style.backgroundColor === "red") {
                //     console.log("red");
                //     v[i].style.backgroundColor = "yellow";
                // } else if (v[i].style.backgroundColor === "yellow") {
                //     console.log("yellow");
                //     v[i].style.backgroundColor = "green";
                // } else if (v[i].style.backgroundColor === "green") {
                //     console.log("green");
                //     v[i].style.backgroundColor = "rgb(255, 204, 102)";
                // } else if (v[i].style.backgroundColor === "rgb(255, 204, 102)") {
                //     console.log("blank");
                //     v[i].style.backgroundColor = "red";
                // }
                // console.log("of");
                // console.log("of");
            // }
            
        // );
       
    // }
// }
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