//cards en Inicio
const arrayindex = [
    {
        id: 1,
        precio: "$500000",
        img: "imagenes productos/placas de video/2060.png",
        nombre: "GTX 2060",
        span: "especificaciones, caracteristicas, mas cosas etc",
        boton: "Ver mas"
    },
    {
        id: 2,
        precio: "$550000",
        img: "imagenes productos/placas de video/2060super.png",
        nombre: "NVIDIA RTX 2060S",
        span: "especificaciones, caracteristicas, mas cosas etc",
        boton: "Ver mas"
    },
    {
        id: 3,
        precio: "$600000",
        img: "imagenes productos/placas de video/1024 (1).png",
        nombre: "AMD RX 6800",
        span: "especificaciones, caracteristicas, mas cosas etc",
        boton: "Ver mas"
    },
    {
        id: 4,
        precio: "$450000",
        img: "imagenes productos/placas de video/000000000041545231188415452--1-.png",
        nombre: "NVIDIA RTX 4070",
        span: "especificaciones, caracteristicas, mas cosas etc",
        boton: "Ver mas"
    },


]
const productosindex = document.getElementById("destacados")///("productContainerindex")

function mostrarProductosindex(productos) {

    productos.forEach(elemento => {
    
    const cardindex = document.createElement('div');
    
    cardindex.classList.add('producto-card');
    
    cardindex.innerHTML = `
        <h3 class="producto-nombre">${elemento.nombre}</h3>
        <img src="${elemento.img}" alt="${elemento.nombre}" class="producto-img">
        <span class="hide" id= "hidetext">${elemento.span}</span>
        <p class="producto-precio">${elemento.precio}</p>
        <button class="hidebtn">${elemento.boton}</button>
    `;
    
    productosindex.appendChild(cardindex);
    })
    }

mostrarProductosindex(arrayindex)







