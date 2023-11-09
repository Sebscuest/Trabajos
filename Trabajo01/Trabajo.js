'use strict'

let edad= Number(prompt("Introduir edad "));
let licenciaProfesional = confirm("Tiene licencia profesional");

if (edad>=25 && licenciaProfesional === true){
    alert("Apto")
}

else{
    alert("No apto")
}

