// Validación básica del login
function validarLogin(event) {
  event.preventDefault(); // Evita que el form se envíe por defecto

  let usuario = document.getElementById("usuario").value.trim();
  let password = document.getElementById("password").value.trim();

  if (usuario === "" || password === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  // Aquí más adelante podrías validar con base de datos
  if (usuario === "admin" && password === "1234") {
    alert("¡Bienvenido al sistema!");
    window.location.href = "index.html"; // Redirige al Main
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}
 

function enviarContacto(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }

  alert("¡Gracias por contactarnos, " + nombre + "! Te responderemos pronto.");
  document.querySelector(".contacto-form").reset();
  return true;
}
