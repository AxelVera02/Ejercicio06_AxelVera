// ==========================================
// SCRIPT.JS — Actualizado con mensajes en pantalla
// ==========================================

// Inicializar EmailJS
emailjs.init("_Sx5z1s2bCEI5TAfD");

console.log("script.js activo");


// -------------------------------------------------------------
// FUNCIÓN PARA MOSTRAR MENSAJES EN LA PÁGINA
// -------------------------------------------------------------
function mostrarEstado(texto, ok = true) {
    const estado = document.getElementById("estado");

    if (estado) {
        estado.textContent = texto;
        estado.style.padding = "10px";
        estado.style.marginTop = "15px";
        estado.style.borderRadius = "5px";
        estado.style.fontWeight = "bold";

        if (ok) {
            estado.style.background = "#d4ffd4";
            estado.style.color = "#0a6b0a";
            estado.style.border = "1px solid #0a6b0a";
        } else {
            estado.style.background = "#ffd4d4";
            estado.style.color = "#8b0000";
            estado.style.border = "1px solid #8b0000";
        }
    }
}



// ==========================================
// FORMULARIO — DATOS PERSONALES
// ==========================================

const formDatos = document.querySelector("#formDatos");

if (formDatos) {
    formDatos.addEventListener("submit", function (e) {
        e.preventDefault();

        const ci = document.querySelector("#ci").value.trim();
        const nombre = document.querySelector("#nombre").value.trim();
        const apellido = document.querySelector("#apellido").value.trim();
        const direccion = document.querySelector("#direccion").value.trim();
        const sexo = document.querySelector("#sexo").value;
        const ciudad = document.querySelector("#ciudad").value.trim();
        const telefono = document.querySelector("#telefono").value.trim();
        const nacimiento = document.querySelector("#nacimiento").value;
        const correo = document.querySelector("#correo").value.trim();

        if (!ci || !nombre || !apellido || !correo) {
            mostrarEstado("⚠ Debes completar los campos obligatorios.", false);
            return;
        }

        emailjs.send("service_gsokp2k","template_fq8qcfu", {
            ci,
            nombre,
            apellido,
            direccion,
            sexo,
            ciudad,
            telefono,
            nacimiento,
            correo
        })
        .then(() => {
            mostrarEstado("✅ Datos enviados correctamente.");
            formDatos.reset();
        })
        .catch((error) => {
            console.error(error);
            mostrarEstado("❌ Error al enviar los datos.", false);
        });
    });
}



// ==========================================
// FORMULARIO — ENCUESTA
// ==========================================

const formEncuesta = document.querySelector("#formEncuesta");

if (formEncuesta) {
    formEncuesta.addEventListener("submit", function (e) {
        e.preventDefault();

        const musica = document.querySelector("#musica").value;
        const deporte = document.querySelector("#deporte").value;
        const estudios = document.querySelector("#estudios").value;
        const laboral = document.querySelector("#laboral").value;
        const comentario = document.querySelector("#comentario").value.trim();

        emailjs.send("service_gsokp2k","template_0cukohm", {
            musica,
            deporte,
            estudios,
            laboral,
            comentario
        })
        .then(() => {
            mostrarEstado("✅ Encuesta enviada correctamente.");
            formEncuesta.reset();
        })
        .catch((error) => {
            console.error(error);
            mostrarEstado("❌ Error al enviar la encuesta.", false);
        });
    });
}



// ==========================================
// ANIMACIÓN — BOTONES
// ==========================================

const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        boton.style.transform = "scale(0.92)";
        boton.style.transition = "0.2s";

        setTimeout(() => {
            boton.style.transform = "scale(1)";
        }, 150);
    });
});
