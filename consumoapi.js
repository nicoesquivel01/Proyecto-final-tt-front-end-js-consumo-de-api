const personas = document.getElementById("pjs")
console.log(personas)


fetch("https://dragonball-api.com/api/characters")
.then((respuesta) => respuesta.json())
.then((data) =>{
    console.log(data)
    console.log(data.items[0].name)
    data.items.forEach((element) => {
        console.log(element.name)
        const dbzcard = document.createElement("div")
        dbzcard.classList.add("divstylecard");
        dbzcard.innerHTML = `
        <div class="image-container"> 
        <img class="imgPersonaje" src="${element.image}">
        </div>
        <div class="text-container">
        <h3 class="nombre personaje">${element.name}</h3>
        <h4 class="razaguerrera">${element.race}</h4>
        <h4 class="Bki">${"Base KI"}</h4>
        <h4 class="ki">${element.ki}</h4>
        <h4 class="Tki">${"Total KI"}</h4>
        <h4 class="kimaximo">${element.maxKi}</h4>
        
        </div>
        
        `
        personas.appendChild(dbzcard)
    });
})