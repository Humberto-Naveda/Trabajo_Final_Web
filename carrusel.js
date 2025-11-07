// Array con las imágenes del carrusel
const imagenes = [
  "imagenes/ferreteria1.jpg",
  "imagenes/ferreteria2.jpg",
  "imagenes/ferreteria3.jpg"
];

let indice = 0;
const img = document.getElementById("imagen");
const anterior = document.getElementById("prev");
const siguiente = document.getElementById("next");

// Mostrar imagen inicial
img.src = imagenes[indice];

// Función para cambiar imagen
function mostrarImagen(nuevoIndice) {
  indice = nuevoIndice;

  // Si llegamos al final, volvemos al principio
  if (indice >= imagenes.length) indice = 0;
  if (indice < 0) indice = imagenes.length - 1;

  img.src = imagenes[indice];
}

// Botones de navegación
siguiente.addEventListener("click", () => mostrarImagen(indice + 1));
anterior.addEventListener("click", () => mostrarImagen(indice - 1));

// Rotación automática 
//setInterval(() => {
  //mostrarImagen(indice + 1);
//}, 400);
