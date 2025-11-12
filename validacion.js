document.getElementById("contactoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const telefonoInput = document.getElementById("telefono");
  const mensajeInput = document.getElementById("mensaje");
  const erroresDiv = document.getElementById("errores");
  const resultadoDiv = document.getElementById("resultado");

  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const telefono = telefonoInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  erroresDiv.innerHTML = "";
  resultadoDiv.innerHTML = "";


  const errores = [];

  // Expresiones regulares
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoRegex = /^[0-9]{6,15}$/;
  const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; 

  // Validaciones
  if (nombre === "") {
  errores.push("El nombre es obligatorio.");
  } else if (!nombreRegex.test(nombre)) {
  errores.push("El nombre solo puede contener letras.");
  }
  if (email === ""){
    errores.push("El email es obligatorio.");
  } else if (!emailRegex.test(email)){
    errores.push("El email no es valido.")
  }

  if (telefono === ""){
    errores.push("El teléfono es obligatorio.");
  } else if(!telefonoRegex.test(telefono)){
    errores.push("El teléfono debe contener solo números (6 a 15 digitos).")
  }

  // Mostrar errores o datos enviados
  if (errores.length > 0) {
    erroresDiv.style.display = "block";

    errores.forEach(err => {
      const p = document.createElement("p");
      p.textContent = err;
      erroresDiv.appendChild(p);
    });
  } else {

    erroresDiv.style.display = "none";

    const datos = document.createElement("div");
    datos.innerHTML = `
      <h3>Datos enviados correctamente:</h3>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Mensaje:</b> ${mensaje}</p>
    `;
    resultadoDiv.appendChild(datos);

    document.getElementById("contactoForm").reset();
  }
});