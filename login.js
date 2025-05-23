// Lista de usuarios válidos
const usuariosValidos = [
    { nombre: "pedro ojeda" },
    { nombre: "camilo cabrera" },
    { nombre: "lucio serrano" },
    { nombre: "dante fioravanti" },
    { nombre: "morena campeone" },
    { nombre: "amanda martinez" },
    { nombre: "benjamin gay" },
    { nombre: "camila rivas" },
    { nombre: "lucia gricia" },
    { nombre: "eunice pantaleon" },
    { nombre: "juana arecha" },
    { nombre: "lorenzo pascuas" },
    { nombre: "naomi pardo" },
    { nombre: "rihanna murillo" },
    { nombre: "santino usquisa" }
];

function quitarAcentosYMinusculas(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function login() {
    const nombreInput = document.getElementById("nombre").value.trim();
    const nombre = quitarAcentosYMinusculas(nombreInput);
    const mensaje = document.getElementById("mensajeLogin");
    const usuarioEncontrado = usuariosValidos.find(
        u => quitarAcentosYMinusculas(u.nombre) === nombre
    );
    if (usuarioEncontrado) {
        mensaje.textContent = "";
        mostrarPestaña("inicio");
    } else {
        mensaje.textContent = "Verifica tu nombre. Si lo escribiste correctamente significa que no estás invitado/a.";
    }
}