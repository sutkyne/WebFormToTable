let formaReg = document.querySelector("form");
let print = document.querySelector('#btn-list');
let listas = [];
formaReg.addEventListener("submit", function (e) {
    e.preventDefault();
    let vardas = formaReg["vardas"].value;
    let pavarde = formaReg["pavarde"].value;
    let mokykla = formaReg["mokykla"].value;
    let miestas = formaReg["miestas"].value;
    let sritis = formaReg["sritis"].value;

    console.log(vardas, pavarde, mokykla, miestas, sritis);

    let user = { vardas, pavarde, mokykla, miestas, sritis }

    listas.push(user);
    console.log(listas);
})

print.addEventListener("click", function () {

    let tableString = "<tr>"
    for (let column in listas[0]) {
        tableString += `<th>${column}</th>`
    }
    tableString += "</tr>"
    listas.forEach(element => {
        tableString += "<tr>"
        for (let prop in element) {
            tableString += `<td>${element[prop]}</td>`
        }
        tableString += "</tr>"

    });
    document.querySelector('#list').innerHTML = tableString;
})
