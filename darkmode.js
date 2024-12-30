const swith = document.querySelector(".switch")




document.addEventListener("DOMContentLoaded", e => {
    swith.addEventListener("click", switchdarkmode)

    })

    function switchdarkmode() {
        swith.classList.toggle("darkmode");
        document.body.classList.toggle("darkmode");
        darkmodelocalstorage((swith.classList.contains("darkmode")))
    }

    function darkmodelocalstorage(valor){
        localStorage.setItem("darkMode", valor)
    }
function Cargardarkmodedesdelocalstorage() {
const compruebo = localStorage.getItem("darkMode") === "true"
console.log(compruebo)
if(compruebo) {
    swith.classList.add("darkmode");
        document.body.classList.add("darkmode");

}
}

Cargardarkmodedesdelocalstorage()

