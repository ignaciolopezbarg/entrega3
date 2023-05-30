let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//carrito vacio

const mostrarProductos = (productos) => {
  const contenedorProductos = document.querySelector(".product-list");
  contenedorProductos.innerHTML = "";
  //recorro el arreglo y creo las vistas en pantalla
  productos.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <p>Nombre: ${producto.nombre}</p>
        <span> origen: ${producto.origen}</span>
        <b> PRECIO: $${producto.precio}</b>
        <img src="${producto.img}" />
        <p > id: ${producto.id}</p>
        <button id="btnAgregar - ${producto.id}" class ="add-to-cart">COMPRAR</button>
    `;

    contenedorProductos.appendChild(li);

    const boton = document.getElementById(`agregar-${producto.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });
};

const agregarAlCarrito = (id) => {
  if (!carrito.some((producto) => producto.id === id)) {
    const producto = productos.find((producto) => producto.id === id);
    //la fruta va al carro

    carrito.push(fruta);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  const mostrarCarrito = () => {
    const contenedorCarrito = document.querySelector(".carrito");
    contenedorCarrito.innerHTML = "";

    if (carrito.lenght > 0) {
      const elementosCarrito = document.createElement("ul");
      elementosCarrito.classList.add("elementosCarrito");
      contenedorCarrito.appendChild(elementosCarrito);

      const contenedorTotal = document.createElement("p");
      modificarTotales(contenedorTotal);
      contenedorCarrito.appendChild(contenedorTotal);
      //recorro el array
      carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${producto.img}" />
          <div class="productContent">
              <h3> $ {producto.nombre}</h3>
              <p class="precio"> $${producto.precio}</p>
              </div>
              <button id="eliminar-${producto.id}"
                class="remove"> Eliminar </button>
          `;
        elementosCarrito.appendChild(li);
        const boton = document.getElementById(`borrar- $ {producto.id}`);
        boton.addEventListener("click", () => {
          eliminarProducto(producto.id);
        });
      });
    } else {
      contenedorCarrito.innerHTML = ` <p class="vacio">No hay frutas</p>`;
    }
    //nuevo carrito
    const eliminarProducto = (id) => {
      carrito = carrito.filter((producto) => producto.id !== id);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    };
    const actualizarTotal = (contenedor) => {
      const total = carrito.reduce(
        (acumulador, producto) => acumulador + producto.precio,
        0
      );
      contenedor.textContent = `Total: $${total}`;
    };
  };
};
// Zonas de entrega:

let texto1 = document.getElementById("miContenedor1");
const zonasEntrega = [
  { zona: 1, barrios: "Belgrano Nuñez Saavedra", costoEnvio: 600 },
  { zona: 2, barrios: "Coghlan Urquiza Agronomia", costoEnvio: 800 },
  { zona: 3, barrios: "Palermo Recoleta Retiro ", costoEnvio: 1000 },
  { zona: 4, barrios: "Barracas Boca Montserrat", costoEnvio: 1200 },
  { zona: 5, barrios: "Lanus Banfield Lomas", costoEnvio: 1600 },
  { zona: 6, barrios: "Temperley Turdera Paysandu", costoEnvio: 2000 },
];

zonasEntrega.forEach((sector) => {
  let div1 = document.createElement("div1");
  div1.className = "envios";
  div1.innerHTML = `
  
  <span> ZONA DE ENVIO <b> ${sector.zona}</b></span>
  <p> Barrios: ${sector.barrios}</p>
  <b> COSTO DE ENVIO : $${sector.costoEnvio}<b>
  <button id="boton">ELEGIR</button>
  `;
  texto1.appendChild(div1);
});

/*

while (zona === "") {
  alert("zona invalida");
  zona = parseInt(prompt("ingrese su zona de residencia"));
}
alert("ha ingresado un numero correcto");

switch (zona) {
  case 1:
    alert(`El costo de envio para el cliente ${cliente} es de $ ${zona1}`);
    break;
  case 2:
    alert(`El costo de envio para el cliente ${cliente} es de $ ${zona2}`);
    break;
  case 3:
    alert(`El costo de envio para el cliente ${cliente} es de $ ${zona3}`);
    break;
  case 4:
    alert(`El costo de envio para el cliente ${cliente} es de $ ${zona4}`);
    break;

  default:
    alert(`El Señor ${cliente} se encuentra fuera del radio de los envios`);
    break;
}*/

/*falta al div anterior darle estilo con css*/
//a partir de aqui no funciona el codigo//

//  const prodUsuario = parseInt( prompt(`Elija un producto, ingresando un numero :${fruta.id}`));
// alert(prodUsuario);

/*const buscarProductoElegido = frutas.find ((p) => p.id===prodUsuario);
     let carrito =0;
    const nuevoProducto = {
      id: buscarProductoElegido.id,
      nombre: buscarProductoElegido.nombre,
      procedencia : buscarProductoElegido.procedencia,
      precio : buscarProductoElegido.precio,
      stock : buscarProductoElegido.stock,
    };

let cantidadIngresada = parseInt(prompt('ingrese cantidad a comprar'));

while (isNaN(cantidadIngresada)) {
  alert("ingreso un numero incorrecto");
  cantidadIngresada = parseInt(prompt(" Ingrese la cantidad nuevamente"));
}
alert (`El peso comprado es ${cantidadIngresada}`);

if(cantidadIngresada <10){
  nuevoProducto.cantidad= cantidadIngresada;
  nuevoProducto.precio = cantidadIngresada * buscarProductoElegido.precio;
  carrito.push (nuevoProducto);
  alert`El costo de la mercaderia comprada sin flete es de ${nuevoProducto}`;

} 
else if (cantidadIngresada<20){
  nuevoProducto.cantidad= cantidadIngresada;
  nuevoProducto.precio = cantidadIngresada * buscarProductoElegido.precio*0.95;
  carrito.push (nuevoProducto);
  alert`El costo de la mercaderia comprada sin flete es de ${nuevoProducto}`;
}  
else{
  nuevoProducto.cantidad= cantidadIngresada;
  nuevoProducto.precio = cantidadIngresada * buscarProductoElegido.precio*0.90;
  carrito.push (nuevoProducto);
  alert`El costo de la mercaderia comprada sin flete es de ${nuevoProducto}`;
};

 const continuarComprando =
 prompt ("continua comprando,si o no")
 if(si){
  seleccionarProductos()
 }
 else{
  alert("gracias por su compra")
  return;
 }

*/

