

//cards en ancla Productos
const productos = [
  {
      id: 1,
      precio: "$500000",
      img: "imagenes productos/placas de video/2060.png",
      nombre: " NVIDIA RTX 2060",
      boton: "Comprar"
  },
  {
      id: 2,
      precio: "$450000",
      img: "imagenes productos/placas de video/30600.png",
      nombre: "NVIDIA RTX 3060",
      boton: "Comprar"
  },
  {
      id: 3,
      precio: "$550000",
      img: "imagenes productos/placas de video/2060super.png",
      nombre: "NVIDIA RTX 2060 ",
      boton: "Comprar"
  },
  {
      id: 4,
      precio: "$600000",
      img: "imagenes productos/placas de video/1650 png.png",
      nombre: "NVIDIA GTX 1650",
      boton: "Comprar"
  },
  {
      id: 5,
      precio: "$700000",
      img: "imagenes productos/placas de video/2060super.png",
      nombre: "NVIDIA RTX 4060",
      boton: "Comprar"

  },
  {
    id: 6,
    precio: "$500000",
    img: "imagenes productos/placas de video/geforce-gt-730-front.png",
    nombre: "NVIDIA GT 730",
    boton: "Comprar"
},
{
    id: 7,
    precio: "$450000",
    img: "imagenes productos/placas de video/000000000041545231188415452--1-.png",
    nombre: "NVIDIA RTX 4070",
    boton: "Comprar"
},
{
    id: 8,
    precio: "$550000",
    img: "imagenes productos/placas de video/1024.png",
    nombre: "AMD RX 580",
    boton: "Comprar"
},
{
    id: 9,
    precio: "$600000",
    img: "imagenes productos/placas de video/1024 (1).png",
    nombre: "AMD RX 6800",
    boton: "Comprar"
},
{
    id: 10,
    precio: "$700000",
    img: "imagenes productos/placas de video/Radeon RX 7700 XT Phantom Gaming 12GB OC(L1).png",
    nombre: "AMD RX 7700",
    boton: "Comprar"

},
{
  id: 11,
  precio: "$500000",
  img: "imagenes productos/placas de video/Microprocesador-AMD-RYZEN-5-5600-300x300-copia.png",
  nombre: "AMD RYZEN 3 3200G",
  boton: "Comprar"
},
{
  id: 12,
  precio: "$450000",
  img: "imagenes productos/placas de video/Microprocesador-AMD-RYZEN-5-5600-300x300-copia.png",
  nombre: "AMD RYZEN 5 5600",
  boton: "Comprar"
},
{
  id: 13,
  precio: "$550000",
  img: "imagenes productos/placas de video/Mesa_de_trabajo_13.png",
  nombre: "AMD ATHLON 3000G",
  boton: "Comprar"
},
{
  id: 14,
  precio: "$600000",
  img: "imagenes productos/placas de video/Microprocesador-AMD-RYZEN-5-5600-300x300-copia.png",
  nombre: "AMD RYZEN 7 5600",
  boton: "Comprar"
},
{
  id: 15,
  precio: "$700000",
  img: "imagenes productos/placas de video/1831756_picture_1707949314.png",
  nombre: "INTEL I9 14900",
  boton: "Comprar"

},
{
  id: 16,
  precio: "$500000",
  img: "imagenes productos/placas de video/haswell-core-i7-box-and-cpu.png",
  nombre: "INTEL I7 4700K",
  boton: "Comprar"
},
{
  id: 17,
  precio: "$450000",
  img: "imagenes productos/placas de video/14600kf_a.png",
  nombre: "INTEL I5 14600K",
  boton: "Comprar"
},
{
  id: 18,
  precio: "$550000",
  img: "imagenes productos/placas de video/Captura-de-pantalla-2024-09-17-160721.png",
  nombre: "INTEL I7 12700F",
  boton: "Comprar"
},

];


//capturo containter de productos







//hago funcion con foreach para mostrar array de objetos en seccion productos

  const productosContainer = document.getElementById("product-container");

console.log(productosContainer)



  function mostrarProductos(productos) {
    productos.forEach(elemento => {
      const card = document.createElement('div');
      card.classList.add('producto-card');
      card.innerHTML = `
        <h3 class="producto-nombre">${elemento.nombre}</h3>
        <img src="${elemento.img}" alt="${elemento.nombre}" class="producto-img">
        <p class="producto-precio">${elemento.precio}</p>
        <button class="producto-precio">${elemento.boton}</button>
      `;
      productosContainer.appendChild(card);
    })
  }

  mostrarProductos(productos)








