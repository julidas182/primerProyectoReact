document.write("<h1>Probando js</h1>")

// let puntaje = "69"


// if (puntaje >= 70) {
//     console.log("buen puntaje, sigue mejorando");
// } else if (puntaje >= 40) {
//     console.log("te falta practicar mas");
// }
// else {
//     console.log("sos horrible!!")
// }




// generador de nombres de usuario
/*
for (let i = 1; i <= 200; i++) {

    let ingresoNombre = prompt("Ingrese su Nombre")
    alert("su nombre de usuario es " + ingresoNombre + i);

}


let nombreUsuario = prompt("ingrese nombre de usuario")

while(nombreUsuario != "juliandasc"){
    alert("el usuario " + nombreUsuario + " es incorrecto" )
    nombreUsuario = prompt("ingrese nombre de usuario correcto")
}
*/


//ENTREGABLE OBLIGATORIO 1

class Producto {
    constructor(nombre, codigo, descripcion, precio) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

const productomat = new Producto ("Mat de Yoga", 122345, "mat de yoga de 1.8m de goma espuma", 3200)
const productocalza = new Producto ("Calza para Yoga", 122332, "calza talle M", 4300)
const productoladrillo = new Producto ("Ladrillo de goma", 122558, "elemento ladrillo de goma", 1600)

    const carrito = []


    const totalCarrito = () => {
        let sumaTotal = 0
        carrito.forEach((Producto) => {
            sumaTotal += Producto.precio
        })
        return sumaTotal
    }

    const agregarProducto = () => {
        const productoElegido = prompt('Por favor ingrese un producto').toLowerCase()


        switch (productoElegido) {
            case "productomat":
                console.log('compraste el mat de yoga, el total es '+ (productomat.precio))
                carrito.push(productomat)
            break
            case "productocalza":
                console.log('compraste el calza de yoga, el total es '+ (productocalza.precio))
                carrito.push(productocalza)   
            break
            case "productoladrillo":
                console.log('compraste ladrillo de goma, el total es '+ (productoladrillo.precio))  
                carrito.push(productoladrillo) 
            break
            default:
                    console.log('Por favor, ingrese un producto valido')
                    break
            
        }
    
        const confirmarCompra = confirm ("¿queres agregar mas productos al carrito?")

        if (confirmarCompra) {
            agregarProducto()
        }else{console.log("Finalizo la compra, el total es de $ " + totalCarrito())
        console.log(carrito)

        }
    }
    agregarProducto()
   

