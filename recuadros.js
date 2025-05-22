function abrirrecuadro(id) {
    const recuadroSeleccionada = document.getElementById(id);
    if (recuadroSeleccionada) {
        recuadroSeleccionada.style.display = 'block';
    }
}
function cerrarrecuadro(id) {
    const recuadroSeleccionada = document.getElementById(id);
    if (recuadroSeleccionada) {
        recuadroSeleccionada.style.display = 'none';
    }
}