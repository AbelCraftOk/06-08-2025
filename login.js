// Lista de usuarios válidos
const usuariosValidos = [
    { nombre: "Pedro Ojeda" },
    { nombre: "Camilo Cabrera" },
    { nombre: "Lucio Serrano" },
    { nombre: "Dante Fiorabanti" },
    { nombre: "Morena Campeone" },
    { nombre: "Amanda Martinez" },
    { nombre: "Benjamin Gay" },
    { nombre: "Camila Rivas" },
    { nombre: "Lucia Gricia" },
    { nombre: "Eunice Pantaleon" },
    { nombre: "Juana Arecha" },
    { nombre: "Lorenzo Pascuas" },
    { nombre: "Naomi Pardo" },
    { nombre: "Rihanna Murillo" },
    { nombre: "Santino Usquisa" }
];
function login() {
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensajeLogin");
    const usuarioEncontrado = usuariosValidos.find(u => u.nombre === nombre);
    if (usuarioEncontrado) {
        mensaje.textContent = "";
        mostrarPestaña("inicio");
    } else {
        mensaje.textContent = "Verifica tu nombre. Si lo escribiste correctamente significa que no estás invitado/a.";
    }
}