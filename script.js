// h1 {color: red}
// .parafito {...}
// #parafito {...}


const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function sumarInputValue(event){
  console.log(event);
  event.preventDefault();
  const sumInput = parseFloat(input1.value) + parseFloat(input2.value);
  pResult.innerText = "Resultado: " + sumInput;
  console.log(sumInput);
}


form.addEventListener('submit', sumarInputValue);
//--------------------------------------
