const productos = [
    { marca: "Apple", nombre: "iPhone 15 Pro Max", precio: 1199.99, img: "https://i.imgur.com/u7p2QuM.jpeg"},
    { marca: "Samsung", nombre: "Samsung Galaxy S24 Ultra", precio: 1099.99, img: "https://i.imgur.com/2yQjUQJ.jpeg"},
    { marca: "Apple", nombre: "iPhone 15", precio: 799.99, img: "https://i.imgur.com/79zQk9J.jpeg"},
    { marca: "Samsung", nombre: "Galaxy Z Fold 5", precio: 1699.99, img: "https://i.imgur.com/hKzClDL.jpeg"},
    { marca: "Google", nombre: "Google Pixel 8 Pro", precio: 899.99, img: "https://i.imgur.com/Qr3r09o.jpeg"},
    { marca: "OnePlus", nombre: "OnePlus 12", precio: 699.99, img: "https://i.imgur.com/ZlRy5P9.jpeg"}
];

const lista = document.getElementById("listaProductos");
const cantidad = document.getElementById("cantidad");

function cargarProductos(arr) {
    lista.innerHTML = "";
    arr.forEach(p => {
        lista.innerHTML += `
            <div class="card">
                <img src="${p.img}">
                <div class="info">
                    <p class="marca">${p.marca}</p>
                    <p class="nombre">${p.nombre}</p>
                    <p class="precio">$${p.precio}</p>
                </div>
            </div>
        `;
    });

    cantidad.innerText = `${arr.length} productos disponibles`;
}

cargarProductos(productos);
