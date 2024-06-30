
document.addEventListener('DOMContentLoaded', function() {
    /*Validacion de formulario */
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{8,45}$/, // Letras y espacios, pueden llevar acentos.
    nota: /^[a-zA-ZÀ-ÿ\s]{1,160}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const campos={
    nombre:false,
    nota:false,
    correo:false
}


const validarFormulario = (e) =>{
    switch (e.target.name){
        case "from_name":
            if(expresiones.nombre.test(e.target.value)){
                campos.nombre=true;
                document.getElementById('nombreERROR').innerHTML = '';
            }   else {
                document.getElementById('nombreERROR').innerHTML = '<p class="error">El nombre debe tener entre 8 y 45 caracteres.</p>';
            }
        break;
        case "message":
            if(expresiones.nota.test(e.target.value)){
                campos.nota=true;
                document.getElementById('notaERROR').innerHTML = '';
            }   else {
                document.getElementById('notaERROR').innerHTML = '<p class="error">Debe ingresar texto.</p>';
            }
        break;
        case "email_id":
            if(expresiones.correo.test(e.target.value)){
                campos.correo=true;
                document.getElementById('correoERROR').innerHTML = '';
            }   else {
                document.getElementById('correoERROR').innerHTML = '<p class="error">ingrese un correo valido.</p>';
            }
        break;
    }
}
const formulario = document.getElementById('myForm');
const inputs = document.querySelectorAll('#myForm');

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});
const btn = document.getElementById('button');
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombre && campos.nota && campos.correo){
        console.log(e.target.from_name.value)
        console.log(e.target.message.value)
        console.log(e.target.email_id.value)
        document.getElementById('info_valida').innerHTML = '<p class="error">Información enviada.</p>';
    } else {
        document.getElementById('info_invalida').innerHTML = '<p class="error">Campos inválidos.</p>';
        myForm.reset();
    }
});

/*Aqui esta toda la configuración para enviar formulario */

document.getElementById('myForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_gvj7809';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
myForm.reset();


});