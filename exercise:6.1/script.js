window.onload = function () {

 // regular expressions constant to validate de email input
 const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 const emailInputValue = document.getElementById('email');
 const result = regexEmail.test(emailInputValue.value);

 // clean all constants to give then a click trigger 
 const button = document.getElementById("clear");

 // states of brazil array to make a loop and show then on the select input 
 const selecState = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', ' SP', 'SE', 'TO'];

 // input values constants to resum an validate all data 
 let nameValue = document.getElementById('name').value;
 let emailValue = document.getElementById('email').value;
 let cpfValue = document.getElementById('cpf').value;
 let adressValue = document.getElementById('adress').value;
 let cityValue = document.getElementById('city').value;
 let stateValue = document.getElementById('state').value;
 let aboutMeValue = document.getElementById('about').value;
 let lastPositionValue = document.getElementById('last-position').value;
 let dateValue = document.getElementById('date').value;

 // trigger email validation
 const inputVerification = () => {
  
  let input = document.getElementsByTagName('input')
  for (let i = 0; i <= 8; i += 1) {
   let index = input[i];
   index.addEventListener('change', () => {
    if (index.value == '') {
     alert('Campo inválido!')
    }
   })
  }
 }

 inputVerification()


 // clear inputs
 button.addEventListener('click', () => {
  let input = document.getElementsByTagName('input');
  let textarea = document.getElementsByTagName('textarea')[0];
  textarea.value = '';
  for (let i = 0; i <= 8; i += 1) {
   let index = input[i];
   index.value = '';
  }

 })

 // including states of Brazil
 for (let i = 0; i < selecState.length; i += 1) {
  let state = document.getElementById("state");
  let index = document.createElement('option');
  index.setAttribute('value', `'${selecState[i]}'`);
  index.innerHTML = selecState[i];
  state.appendChild(index);
 }

 // validation data function
 const validationData = () => {
  let newElement = document.createElement('p');
  let sectionValidation = document.getElementById('validation');
  newElement.innerHTML = `Name:${nameValue}; Email: ${emailValue};  CPF: ${cpfValue}; \n Adress: ${adressValue}; \n City: ${cityValue}; \n State ${stateValue}; \n About Me: ${aboutMeValue}; \n Last Position: ${lastPositionValue}; \n Date: ${dateValue}.`
  sectionValidation.appendChild(newElement);
 }

 //trigger submit to resum inputs
 const submit = document.getElementById('submit');
 submit.addEventListener('click', validationData);


}


