import bearings from "./constantes.js";

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

    document.getElementById("d__internal").value = "";
    document.getElementById("D__external").value = "";
    document.getElementById("B__width").value = "";

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
