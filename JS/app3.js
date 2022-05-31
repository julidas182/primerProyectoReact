const productoElegido = () => {

    let producto = Number.parseInt(prompt("¿Que producto desea comprar?"));
  
    mensaje(producto);
  
  };
  
  const mensaje = (producto) => {
  
    switch (producto) {
  
      case "productomat":
  
        console.log("usted escogio el mat de yoga");
  
        break;
  
      case "productocalza":
  
        console.log("usted escogio la calza de yoga");
  
        break;
  
      case "productoladrillo":
  
        console.log("usted escogio elemento de yoga ladrillo");
  
        break;
  
      default:
  
        console.log("Ingrese un producto valido");
  
        productoElegido();
  
        break;
  
    }
  
  };
  
  productoElegido();