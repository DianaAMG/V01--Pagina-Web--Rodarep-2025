document
  .getElementById("button__meter-measure")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const d = parseInt(document.getElementById("d__internal").value);
    const D = parseInt(document.getElementById("D__external").value);
    const B = parseInt(document.getElementById("B__width").value);

    const bearings = [
      { ref: 6203, d: 17, D: 40, B: 12, info: "Información de tu rodamiento" },
      { ref: 6300, d: 10, D: 35, B: 11 },
    ];

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
  });
