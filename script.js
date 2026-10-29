const carrusel = document.getElementById("carrusel");
const figuras = carrusel.querySelectorAll("figure");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");
const contador = document.getElementById("contador");

// 2. Cuánto hay que desplazar para pasar de una foto a la siguiente
function anchoPaso() {
  return figuras[1].offsetLeft - figuras[0].offsetLeft;
}

// 3. Mover el carrusel: direccion = 1 (siguiente) o -1 (anterior)
function mover(direccion) {
  carrusel.scrollBy({ left: direccion * anchoPaso() });
}

// 4. Actualizar el texto "2 / 5"
function actualizarContador() {
  const posicion = Math.round(carrusel.scrollLeft / anchoPaso()) + 1;
  const actual = Math.min(posicion, figuras.length);
  contador.textContent = actual + " / " + figuras.length;
}

// 5. Conectar todo con los eventos
botonAnterior.addEventListener("click", () => mover(-1));
botonSiguiente.addEventListener("click", () => mover(1));
carrusel.addEventListener("scroll", actualizarContador);

// Flechas del teclado cuando el carrusel tiene el foco
carrusel.addEventListener("keydown", (evento) => {
  if (evento.key === "ArrowRight") {
    mover(1);
    evento.preventDefault();
  }
  if (evento.key === "ArrowLeft") {
    mover(-1);
    evento.preventDefault();
  }
});

// Mostrar el contador desde el inicio
actualizarContador();
