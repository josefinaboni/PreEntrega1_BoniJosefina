
function carrito () {
    let suma = 0;
    let producto = prompt ("Ingrese el nombre del producto");
    while (producto !== "esc") {
    let precio = prompt ("Ingrese el precio del producto");
    console.log (producto + ": " + "$ " +precio);
    suma =suma + parseInt(precio);
    producto = prompt ("Ingrese el nombre del producto");
    }
    console.log("El total de su compra es: $" + suma)
    }
    carrito ()
  