let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let vardasInput = document.querySelector('#vardas');
let amziusInput = document.querySelector('#amzius');
let pavardeInput = document.querySelector('#pavarde');
btnAdd.addEventListener('click', () => {
    let vardas = vardasInput.value;
    let pavarde = pavardeInput.value;
    let amzius = amziusInput.value;
    let template = `
                <tr>
                    <td>${vardas}</td>
                    <td>${pavarde}</td>
                    <td>${amzius}</td>
                </tr>`;
    table.innerHTML += template;
})
function myFunction() {
    document.getElementById('row1').remove();
  }
  function myFunction2() {
    document.getElementById('row3').remove();
  }