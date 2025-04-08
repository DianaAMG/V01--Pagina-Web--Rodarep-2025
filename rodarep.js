
document.getElementById('measure__block--bearings').addEventListener('click', function () {
    window.location.href = 'medidor.html#meter__calculator-bearing';
});


document.getElementById('contact-us__button').addEventListener('click', function (event) {
    event.preventDefault();
  
    const form = document.getElementById('form');
    const formData = new FormData(form);
  
    const nameValue = formData.get('name');
    const phonevalue = formData.get('phone');
    const emailValue = formData.get('email');
    const messageValue = formData.get('message');
  
    const subject = encodeURIComponent("Nuevo mensaje de contacto");
    const body = encodeURIComponent(
      `Nombre: ${nameValue}\nTeléfono: ${phonevalue}\nCorreo: ${emailValue}\n\nMensaje:\n${messageValue}`
    );
  
    const mailtoLink = `mailto:dianaamonroy@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);

     form.reset();

})
