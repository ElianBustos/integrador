function calcularPrecioTotal () {

  //en contEnt almaceno la cant de entradas que ingreso el usuario
  let cantEnt=document.getElementById("cantEntradas").value;

  //en porcDesc almaceno el descuento que selecciono el usuario
  let porcDesc=document.getElementById("porcDescuento").value
 

  //en descuento almacenamos el total de pesos para descontar
  let descuento =(cantEnt*1000) * porcDesc / 100
  

  //en descuento almacenamos el total de pesos para descontar
  let precioFin=(cantEnt*1000)- descuento
 


  //modifico el input precio final para poner el total con descuento
  document.getElementById("precioFinal").value=precioFin



  
}

