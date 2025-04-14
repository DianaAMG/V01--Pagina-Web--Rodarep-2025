document.getElementById('button__meter-measure').addEventListener('click', function(event){
    event.preventDefault();

    const d = parseInt(document.getElementById('d__internal').value);
    const D = parseInt(document.getElementById('D__external').value); 
    const B = parseInt(document.getElementById('B__width').value);

    console.log('el diametro interno del rodamiento es ', d);
    console.log('el diametro externo del rodamiento es ', D);
    console.log('el ancho del rodamiento es ', B);



})