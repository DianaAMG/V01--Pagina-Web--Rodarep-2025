
document.getElementById('measure__block--bearings').addEventListener('click', function () {
    window.location.href = 'medidor.html#meter__calculator-bearing';
});

const inputName= document.getElementById('name')
const email= document.getElementById('email')
const message= document.getElementById('message')
const button = document.getElementById('contact-us__button')

button.addEventListener('click', (evento) => {
    evento.preventDefault();
    const data = {
        inputName:inputName.value,
        email:email.value,
        message: message.value  
    } 
    location.reload();
    

    console.log(data);
});
