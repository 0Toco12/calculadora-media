let gmodo = "start";
let calcula = document.getElementById("calcula");
let body = document.getElementById("corpo")
let textarea = document.getElementById("media");
let img = document.getElementById("img");
let limpa = document.getElementById("limpa");
let box1 = document.getElementById("num1");
let box2 = document.getElementById("num2");
let modo = document.getElementById("modo");

calcula.addEventListener("click", () => {
    let num1 = box1.value;
    let num2 = box2.value;
    let resultado = (parseInt(num1) + parseInt(num2)) / 2;
    textarea.innerHTML = "Média: " + resultado;
    checarcor(resultado);
})

limpa.addEventListener("click", () =>{
    corpo.setAttribute("class", gmodo)
    img.setAttribute("src", './img/img1.png')
    box1.value = "";
    box2.value = ""
    textarea.innerHTML = "";
})

modo.addEventListener("click", () =>{
    if(modo.getAttribute("src") == "./img/sol.png") {
        gmodo = "start"
        corpo.setAttribute("class", gmodo);
        modo.setAttribute("src", './img/lua.png')
    } else  {
        gmodo = "escuro"
        corpo.setAttribute("class", gmodo);
        modo.setAttribute("src", './img/sol.png')
    }
})

function checarcor(valor) {
    if(valor < 50) {
        corpo.setAttribute("class", "lw0");
        img.setAttribute("src", './img/img2.png');
    }else if(valor >= 50 && valor < 75) {
        corpo.setAttribute("class", "lw50");
        img.setAttribute("src", './img/img3.png');
    }else if(valor >= 75 && valor < 90) {
        corpo.setAttribute("class", "lw0");
        img.setAttribute("src", './img/img4.png');
    }else if(valor >= 90 && valor < 100) {
        corpo.setAttribute("class", "lw0");
        img.setAttribute("src", './img/img5.png');
    }
}
