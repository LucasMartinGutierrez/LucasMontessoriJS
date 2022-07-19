const productos = [];
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const botones = document.getElementById("botones");
const seccionProductos = document.getElementById("productos");
const menorAMayor = document.getElementById("menorAMayor");
const botonBorrar = document.getElementById("borrarFiltros");
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};
const verCarrito = document.getElementById("verCarrito");


class Producto{
    constructor (nombre, precio, tipo, descripcion, img, id){
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.img = img;
        this.id = id;
    }
}

productos.push(new Producto("Arco Iris Waldorf", 2300, "encastres", "madera", " ", 1));
productos.push(new Producto("Mini Cuna", 4200, "deco", "madera", " ", 2));
productos.push(new Producto("Herramientas", 2880, "varios", "madera", " ", 3));
productos.push(new Producto("Balancin Full Color", 6900, "deco", "madera", " ", 4));
productos.push(new Producto("Pata Pata", 6900, "plaza", "madera", " ", 5));

//creamos tarjetas con bootstrap
function crearTarjetas() {
    for (const producto of productos) {
        let card = document.createElement("div.col");
        card.innerHTML = `<div class="card h-100">
                            <img src="${producto.img}" class="card-img-top img-fluid" alt="${producto.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</>
                                <p class="card-text">$${producto.precio}</p>
                                <button id="${producto.id}">Agregar al carrito</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${producto.tipo}</small>
                            </div>
                        </div>`
                        seccionProductos.append(card);

                        let addCarrito = document.getElementById(producto.id);
                        addCarrito.addEventListener("click", () => {
                            carrito.push(producto);
                            localStorage.setItem("carrito", JSON.stringify(carrito));
                        });
                    };
};

crearTarjetas();


menorAMayor.addEventListener("click", () => {
    seccionProductos.innerHTML = "";
    let filtro = [...productos].sort((a,b) => a.precio - b.precio);
    for (const filtrado of filtro) {
        let cardFiltrada = document.createElement("div.col");
        cardFiltrada.innerHTML = `<div class="card h-100">
                            <img src="${filtrado.img}" class="card-img-top" alt="${filtrado.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${filtrado.nombre}</h5>
                                <p class="card-text">${filtrado.descripcion}</>
                                <p class="card-text">$${filtrado.precio}</p>
                                <button id="${filtrado.id}">Agregar al carrito</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${filtrado.tipo}</small>
                            </div>
                        </div>`
                        seccionProductos.append(cardFiltrada);

                        let addCarrito = document.getElementById(filtrado.id);
                        addCarrito.addEventListener("click", () => {
                            carrito.push(filtrado);
                        });
    }
});

botonBorrar.addEventListener("click", () => {
    seccionProductos.innerHTML = "";
    crearTarjetas()
});

verCarrito.addEventListener("click", () => {
    seccionProductos.innerHTML = "";
    for (const item of carrito) {
        let cardCarrito = document.createElement("div.col");
        cardCarrito.innerHTML = `<div class="card h-100">
                            <img src="${item.img}" class="card-img-top" alt="${item.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${item.nombre}</h5>
                                <p class="card-text">${item.descripcion}</>
                                <p class="card-text">$${item.precio}</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">${item.tipo}</small>
                            </div>
                        </div>`
                        seccionProductos.append(cardCarrito);
        }
   
})

//comentar o cambiar con ejemplo 
function cargarProductosDesdeLocalStorage(){
    let carritoLocalStorage = [];
    if (localStorage.length!=0){
       carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
    }
    return carritoLocalStorage;
}

