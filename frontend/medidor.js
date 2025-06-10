import bearings from "./constantes.js";

  document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".header__nav-menu-toggle");
  const navList = document.querySelector(".header__nav-list");

  toggleButton.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
});


document
  .getElementById("button__meter-measure")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const d = parseInt(document.getElementById("d__internal").value);
    const D = parseInt(document.getElementById("D__external").value);
    const B = parseInt(document.getElementById("B__width").value);

    const informationsBearings = bearings.find(
      (rodamiento) =>
        rodamiento.d === d && rodamiento.D === D && rodamiento.B === B
    );

    if (informationsBearings) {
      document.getElementById("meter__container-result-text").innerHTML =
        informationsBearings.ref;
      document.getElementById("meter__calculator-information-text").innerHTML =
        informationsBearings.info;
    } else {
      document.getElementById("meter__container-result-text").innerHTML =
        "Sin Resultado";
      document.getElementById("meter__calculator-information-text").innerHTML =
        "No se encontró información";
    }

    // Guardar en la base de datos
    fetch("http://localhost:3000/new_bearing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        d__internal: d,
        d__external: D,
        b__width: B,
        code: informationsBearings.ref,
        type: informationsBearings.info,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Rodamiento guardado:", data);
      })
      .catch((error) => {
        console.error("Error al guardar el rodamiento:", error);
      });

    // Limpiar campos

    document.getElementById("d__internal").value = "";
    document.getElementById("D__external").value = "";
    document.getElementById("B__width").value = "";

    //Solicitar cotizacion por whatsapp del rodamiento ingresado y encontrado
    document
      .getElementById("button__quote")
      .addEventListener("click", function () {
        window.open(
          `https://api.whatsapp.com/send?phone=573167437807&text=Hola,%20quiero%20conocer%20el%20valor%20del%20rodamiento%20REF:%20${encodeURIComponent(
            informationsBearings.ref
          )}`,
          "_blank"
        );
      });
  });
