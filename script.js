let btnAceptar = document.querySelector(".aceptar");
let pieFooter = document.querySelector("footer");
btnAceptar.addEventListener("click", function () { eliminaPie(); })

function eliminaPie() {
    pieFooter.remove();
}

let btngrado = document.querySelector("#grados");
let datgrados = document.querySelectorAll(".grad");
let datfaren = document.querySelectorAll(".faren");

btngrado.addEventListener("change", function () { cambiaGrados(); })

function cambiaGrados() {
    if (btngrado.value === 'C') {
        datgrados[0].innerText = '20º';
        datgrados[1].innerText = '31º';
        datgrados[2].innerText = '15º';
        datgrados[3].innerText = '40º';
        datfaren[0].innerText = '21º';
        datfaren[1].innerText = '33º';
        datfaren[2].innerText = '16º';
        datfaren[3].innerText = '39º';
    } else {
        datgrados[0].innerText = '25º';
        datgrados[1].innerText = '32º';
        datgrados[2].innerText = '16º';
        datgrados[3].innerText = '38º';
        datfaren[0].innerText = '15º';
        datfaren[1].innerText = '16º';
        datfaren[2].innerText = '17º';
        datfaren[3].innerText = '19º'; 
        }
    }

