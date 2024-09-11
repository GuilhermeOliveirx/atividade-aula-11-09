//feito por Luan Barbosa e Guilherme Ferreira
function obterNumeros() {
    let obj = { numeros: [1, 3, 7, -1, 0, 4, 9], qt: 7 };
    return obj;
}

function Somar() {
    let objSomar = obterNumeros();

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    div1.innerHTML = "1";
    div2.innerHTML = "2";
    div3.innerHTML = "3";
    div4.innerHTML = "4";

    let divQnt = document.createElement("div");
    let divSomatoria = document.createElement("div");

    let sum = 0;
    
    for (let i = 0; i < objSomar.qt; i++) {
        sum += objSomar.numeros[i];
    }

    divQnt.innerHTML = "Quantity: " + objSomar.qt;
    divSomatoria.innerHTML = "Sum: " + sum;

    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.body.appendChild(div3);
    document.body.appendChild(div4);
    document.body.appendChild(divQnt);
    document.body.appendChild(divSomatoria);
}
