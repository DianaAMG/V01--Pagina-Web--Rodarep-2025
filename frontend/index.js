/*Para crear envio de correo por mailito, se puede usar el siguiente código:
  document
  .getElementById("contact-us__button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const form = document.getElementById("form");
    const formData = new FormData(form);

    const nameValue = formData.get("name");
    const phonevalue = formData.get("phone");
    const emailValue = formData.get("email");
    const messageValue = formData.get("message");

    const subject = encodeURIComponent("Nuevo mensaje de contacto");
    const body = encodeURIComponent(
      `Nombre: ${nameValue}\nTeléfono: ${phonevalue}\nCorreo: ${emailValue}\n\nMensaje:\n${messageValue}`
    );

    const mailtoLink = `mailto:dianaamonroy@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);

    
    form.reset();
  });*/

  document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".header__nav-menu-toggle");
  const navList = document.querySelector(".header__nav-list");

  toggleButton.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
   // Cierra el menú al hacer clic en un enlace y guarda la sección
  const navLinks = document.querySelectorAll(".header__nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Cerrar el menú hamburguesa
      navList.classList.remove("open");

      // Guardar la sección en localStorage
      const href = link.getAttribute("href");
      localStorage.setItem("ultimaSeccion", href);
    });
  });
});


function function__bearings() {
  window.location.href = "medidor.html#meter__container";
}

function function__movement(){
  window.open("https://api.whatsapp.com/send?phone=573167094447&text=Hola,estoy%20buscando%20más%20información%20de%20sus%20rodamientos", "_blank");
  /*window.open("http://rodarep.com/categoria-producto/transmision/?v=ab6c04006660", "_blank");*/
}

function function__retentores() {
  window.open("https://api.whatsapp.com/send?phone=573167094447&text=Hola,estoy%20buscando%20más%20información%20de%20sus%20retenedores", "_blank");
  /*window.open("http://rodarep.com/categoria-producto/sellado-proteccion/?v=ab6c04006660", "_blank");*/
}

function function__soport(){
  window.open("https://api.whatsapp.com/send?phone=573167094447&text=Hola,estoy%20buscando%20más%20información%20de%20sus%20chumaceras", "_blank");
  /*window.open("http://rodarep.com/categoria-producto/soportes-y-montaje/?v=ab6c04006660", "_blank");*/
}



const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("http://localhost:3000/creacion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log("Response:", response); // Log the response object
    const result = await response.json();

    if (response.ok) {
      // 2. Abrir cliente de correo después de guardar
      const subject = encodeURIComponent("Nuevo mensaje de contacto");
      const body = encodeURIComponent(
        `Nombre: ${data.name}\nTeléfono: ${data.phone}\nCorreo: ${data.email}\n\nMensaje:\n${data.message}`
      );
      const mailtoLink = `mailto:dianaamonroy@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink);

      alert("✅ Tu mensaje fue enviado con éxito.");
      form.reset();
    } else {
      alert("❌ Error al enviar el mensaje: " + result.error);
    }
  } catch (error) {
    alert("❌ No se pudo enviar el formulario.");
    console.error(error);
  }
});
