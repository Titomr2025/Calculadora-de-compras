const precioBase = 1500;
let cantidad = 1;   
let total = precioBase * cantidad;

const precioInicialSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const btnIncrementar = document.getElementById("incrementar");
const btnDisminuir = document.getElementById("disminuir");
const totalSpan = document.querySelector(".valor-total");


precioInicialSpan.innerHTML = precioBase;
cantidadSpan.innerHTML = cantidad;
totalSpan.innerHTML = total;

btnIncrementar.onclick = function() {
    cantidad = cantidad + 1;
    total = precioBase * cantidad;
    totalSpan.innerHTML = total;
    cantidadSpan.innerHTML = cantidad;
}


btnDisminuir.onclick = function() {
    cantidad = cantidad - 1;
    if (cantidad < 0) {
        cantidad = 0;
    }
    total = precioBase * cantidad;
    totalSpan.innerHTML = total;
    cantidadSpan.innerHTML = cantidad;
}
