var flag;
function abreJanela(URL) {
    location.href = URL; // se for popup utiliza o window.open
}
function mostraImagem(flag) {
    flag = !flag;
    document.getElementById("cod").style.display = "initial";
}


function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function changeTable() {
    // var div_bot = document.getElementById('bot');
    // var node = document.createTextNode("Os dados foram salvos com sucesso !");
    // div_bot.appendChild(node);
    document.getElementById("flag").style.display = "initial";
    console.log('aqui');
    document.cookie = "change=true";
}

function handleClick(event) {
    if (this.style.backgroundColor === "red") {
        this.style.backgroundColor = "yellow";
    } else if (this.style.backgroundColor === "yellow") {
        this.style.backgroundColor = "green";
    } else if (this.style.backgroundColor === "green") {
        this.style.backgroundColor = "rgb(255, 204, 102)";
    } else if (this.style.backgroundColor === "rgb(255, 204, 102)") {
        this.style.backgroundColor = "red";
    }

    var table = document.querySelectorAll('.blank');
    var table_array = []
    for (var i = 0; i < table.length; i++) {
        table_array[i] = table[i].style.backgroundColor;
    }
    var cookie = JSON.stringify(table_array);
    document.cookie = "table=" + cookie;
    var sit = document.querySelectorAll("td");
    var delta = 3;
    for (var j = 0; j < table.length; j += 7) {
        var gre = 0;
        for (var k = 0; k < 7; k++) {
            var h = k + j;
            console.log(table[h].style.backgroundColor);
            if (table[h].style.backgroundColor === "green") {
                gre++;
            }
            console.log(gre);
            delta = j * 2 + 3;
            if (gre === 7) {
                sit[delta].innerHTML = "Pronto";
            } else {
                sit[delta].innerHTML = "Aberto";
            }
        }
    }
    var sit = document.querySelectorAll("td");
    sit.forEach(function (status) {
        if (status.innerHTML === "Pronto") {
            status.style.backgroundColor = "rgb(239,215,238)"
        }
        if (status.innerHTML === "Aberto") {
            status.style.backgroundColor = "rgb(255,230,153)"
        }
    });
}

function dados(flag) {
    flag = !flag;
    document.getElementById("flag").style.display = "initial";
}


window.onload = function () {
    var save_button = document.getElementById('save_button');
    if (save_button) {
        save_button.addEventListener("click", changeTable)
    }
    var table_cookie = getCookie('table');
    var change_table = getCookie('change');
    if (change_table.length) {
        change_table = JSON.parse(change_table);
    }
    if (change_table) {
        var tr = document.createElement("tr");
        var td = [];
        var node = [];
        node.push(document.createTextNode("408"));
        node.push(document.createTextNode("01/11/2018"));
        node.push(document.createTextNode("19/12/2018"));
        node.push(document.createTextNode("Aberto"));
        node.push(document.createTextNode("Maxion Componentes"));
        node.push(document.createTextNode("310"));
        node.push(document.createTextNode(""));
        node.push(document.createTextNode(""));
        node.push(document.createTextNode(""));
        node.push(document.createTextNode(""));
        node.push(document.createTextNode(""));
        node.push(document.createTextNode(""));
        node.push(document.createTextNode(""));
        node.push(document.createTextNode("Tecido 90% Algodão"));


        for (var i = 0; i < 14; i++) {
            td[i] = document.createElement("td");
        }
        for (var i = 0; i < td.length; i++) {

            if ([6, 7, 8, 9, 10, 11, 12].includes(i)) {
                td[i].classList.add('blank');
            }

            td[i].appendChild(node[i]);
            tr.appendChild(td[i]);
            console.log(td[i]);
        }
        document.querySelector('.table').appendChild(tr);
    }

    var v = document.querySelectorAll(".blank");

    v.forEach(function (item) {
        item.addEventListener('click', handleClick);
        item.style.backgroundColor = "red";
    });
    if (table_cookie.length) {
        table_cookie = JSON.parse(table_cookie);
    }

    if (table_cookie) {
        var j = 0;
        var table = document.querySelectorAll('.blank');
        for (var i = 0; i < table_cookie.length; i++) {
            table[i].style.backgroundColor = table_cookie[j];
            j++;
        }

    }

    var sit = document.querySelectorAll("td");
    var delta = 3;
    for (var j = 0; j < table.length; j += 7) {
        var gre = 0;
        for (var k = 0; k < 7; k++) {
            var h = k + j;
            console.log(table[h].style.backgroundColor);
            if (table[h].style.backgroundColor === "green") {
                gre++;
            }
            console.log(gre);
            delta = j * 2 + 3;
            if (gre === 7) {
                sit[delta].innerHTML = "Pronto";
            } else {
                sit[delta].innerHTML = "Aberto";
            }
        }
    }
    var sit = document.querySelectorAll("td");
    sit.forEach(function (status) {
        if (status.innerHTML === "Pronto") {
            status.style.backgroundColor = "rgb(239,215,238)"
        }
        if (status.innerHTML === "Aberto") {
            status.style.backgroundColor = "rgb(255,230,153)"
        }
    });
}


