// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// Colocar bien el selector 
const li = document.querySelector("#lista-de-productos")
const $i = document.querySelector('input#filter');

function displayProductos(productos){

  for (let i = 0; i < productos.length; i++) {
    const d = document.createElement("div")
    d.classList.add("producto")
    
    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
    
    d.appendChild(ti)
    d.appendChild(imagen)
    
    li.appendChild(d)
  }

}

displayProductos(productos)

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {

  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  const productosFiltrados = filtrado(productos, texto);

  // Evitar duplicidad de codigo 
  displayProductos(productosFiltrados)

}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  