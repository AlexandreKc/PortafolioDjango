

// document.addEventListener('DOMContentLoaded', function() {
//     /* Validación de formulario */
//     const expresiones = {
//         nombre: /^[a-zA-ZÀ-ÿ\s]{8,45}$/, // Letras y espacios, pueden llevar acentos.
//         mensaje: /^[a-zA-ZÀ-ÿ\s]{1,160}$/, // Letras y espacios, pueden llevar acentos.
//         correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
//     }

//     const campos = {
//         nombre: false,
//         mensaje: false,
//         correo: false
//     }

//     const validarFormulario = (e) => {
//         switch (e.target.name) {
//             case "nombre":
//                 if (expresiones.nombre.test(e.target.value)) {
//                     campos.nombre = true;
//                     document.getElementById('nombreERROR').innerHTML = '';
//                 } else {
//                     document.getElementById('nombreERROR').innerHTML = '<p class="error">El nombre debe tener entre 8 y 45 caracteres.</p>';
//                 }
//                 break;
//             case "mensaje":
//                 if (expresiones.mensaje.test(e.target.value)) {
//                     campos.mensaje = true;
//                     document.getElementById('mensajeERROR').innerHTML = '';
//                 } else {
//                     document.getElementById('mensajeERROR').innerHTML = '<p class="error">Debe ingresar texto.</p>';
//                 }
//                 break;
//             case "email":
//                 if (expresiones.correo.test(e.target.value)) {
//                     campos.correo = true;
//                     document.getElementById('correoERROR').innerHTML = '';
//                 } else {
//                     document.getElementById('correoERROR').innerHTML = '<p class="error">Ingrese un correo válido.</p>';
//                 }
//                 break;
//         }
//     }

//     const formulario = document.getElementById('myForm');
//     const inputs = document.querySelectorAll('#myForm input, #myForm textarea');

//     inputs.forEach((input) => {
//         input.addEventListener('keyup', validarFormulario);
//         input.addEventListener('blur', validarFormulario);
//     });

//     const btn = document.getElementById('button');
//     formulario.addEventListener('submit', (e) => {
//         e.preventDefault();
//         if (campos.nombre && campos.mensaje && campos.correo) {
//             console.log(e.target.nombre.value);
//             console.log(e.target.mensaje.value);
//             console.log(e.target.email.value);
//             document.getElementById('info_valida').innerHTML = '<p class="error">Información enviada.</p>';
//         } else {
//             document.getElementById('info_invalida').innerHTML = '<p class="error">Campos inválidos.</p>';
//             formulario.reset();
//         }
//     });

//     /* Configuración para enviar el formulario utilizando EmailJS */
//     formulario.addEventListener('submit', function(event) {
//         event.preventDefault();

//         btn.value = 'Enviando...';

//         const serviceID = 'default_service';
//         const templateID = 'template_gvj7809';

//         emailjs.sendForm(serviceID, templateID, this)
//             .then(() => {
//                 btn.value = 'Enviar';
//                 alert('¡Enviado!');
//             }, (err) => {
//                 btn.value = 'Enviar';
//                 alert(JSON.stringify(err));
//             });

//         formulario.reset();
//     });

// });
