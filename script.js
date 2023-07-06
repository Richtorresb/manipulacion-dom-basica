const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function sumarInputValues(event) {
  /* Cuando se recarga, se recibe un evento.
  Esta propiedad es para que no ejecute lo que se debería ejecutar. 
  Por esto no se ejecuta el evento */
  console.log({event});
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}

// btn.addEventListener('click', sumarInputValues);

/*Cuando escucha el evento submit se recarga 
por defecto la página si estpa dentro de un formulario*/
form.addEventListener('submit',sumarInputValues);