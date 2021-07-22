
let numeros = document.querySelectorAll(".btn-number");
let visorCalc = document.querySelector(".visor-calc");
let opes = document.querySelectorAll(".btn-ope");
let calc = document.querySelector(".btn-result");
let btnDelete = document.querySelector(".btn-delete");
let btnDeleteAll = document.querySelector(".btn-delete-all");
let n1 = '';
let n2 = '';
let op = '';

function calcular(){
    let res = 0;
    switch(op){
        case "+":
            res = n1 + n2;
            break;
        case "-":
            res = n1 - n2;
            break;
        case "/":
            res = n1 / n2;
            break;
        case "*":
            res = n1 * n2;
            break;
    }
    visorCalc.value = res;
    reset();
};

function reset(){
    n1 = '';
    n2 = '';
    op = '';
}

const limpiar = () =>{
    n1 = '';
    n2 = '';
    op = '';
    visorCalc.value = '';
}

numeros.forEach(numero => numero.addEventListener('click',()=>{
    if (n1 == ''){
        n1 = parseInt(numero.id);
        visorCalc.value = numero.id;
    }else{
        n2 = parseInt(numero.id);
        visorCalc.value += numero.id;
    }
}));

opes.forEach(ope => ope.addEventListener('click',()=>{ 
    if (op == ''){
        op = ope.id;
        visorCalc.value += ope.id;
    }
}));

btnDelete.addEventListener('click',()=>{
    visorCalc.value = visorCalc.value.substring(0, visorCalc.value.length - 1);
    op = '';
});

calc.addEventListener('click', calcular);

btnDeleteAll.onclick = limpiar;


