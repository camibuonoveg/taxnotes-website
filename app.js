const menu = document.querySelector('#menu-mobile')
const menuLinks = document.querySelector('.navbar_menu')

const navLogo = document.querySelector('#navbar_logo')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// close mobile when clicking on menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)


const navEl = document.querySelector('.navbar');
const navLi = document.querySelectorAll('.navbar_links')
const Btn = document.getElementById('contact')
const navMen = document.querySelector('.navbar_menu')
const navBtn = document.querySelector('.navbar_btn')
const logo = document.getElementById('logo')

window.addEventListener('scroll', () =>{
    if (window.scrollY > 500) {
        navEl.classList.add('navbar-scrolled')
        navLi.forEach(element => {
            element.classList.add('link-scrolled');
        });
        Btn.classList.add('button-scrolled')
        logo.src = "img/logo_navbar-blanco.png";
        navMen.classList.add('navbar_menu-scrolled')
        navBtn.classList.add('navbar_btn-scrolled')
    } else {
        navEl.classList.remove('navbar-scrolled')
        navLi.forEach(element => {
            element.classList.remove('link-scrolled');
        });
        Btn.classList.remove('button-scrolled')
        navMen.classList.remove('navbar_menu-scrolled')
        navBtn.classList.remove('navbar_btn-scrolled')
        logo.src = "img/logo_navbar-verde.png";
    }
});








// CONTACT FORM
// function sendMail(){
//     console.log("enviado")
//     var params = {
//         from_name : document.querySelector('#fullName').value,
//         email_id : document.querySelector('#email').value,
//         message : document.querySelector('#message').value
//     }
//     emailjs.send("service_xcuujqm", "template_1xi5fug", params).then(function (res){
//         alert("Gracias! Su mensaje ha sido enviado.");
//     })
// }

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('message-error');
var subError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('fullName').value;
    console.log(name)

    if(name.length == 0){
        nameError.innerHTML = 'El nombre es requerido.';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/) && name.length < 7){
        nameError.innerHTML = 'Escriba nombre completo.';
        return false;
    } else {
        nameError.innerHTML = '';
        return true;
    }
}

function validateEmail(){
    var email = document.getElementById('email').value;
    console.log(email)

    if(email.length == 0){
        emailError.innerHTML = 'El email es requerido.';
        return false;
    }


    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = 'Email inválido.';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.trim().length

    if(left > 0) {
        msgError.innerHTML = left + ' caracteres requeridos.';
        return false;
    } else {
        msgError.innerHTML = '';
        return true;
    }
}

// function validateForm(){
//     if(!validateName() || !validateEmail() || !validateMessage()){
//         var subBtn = document.getElementById('formBtn');

//         subBtn.style.display = 'block';
//         subError.innerHTML = "Porfavor arregle error para enviar."
//         // setTimeout(function(){ subBtn.style.display = 'none';}, 3000)
//         return false;
//     }

//     return true
// }

function sendMail() {
    // Lógica de validación
    var nameValid = validateName();
    var emailValid = validateEmail();
    var messageValid = validateMessage();

    if (!nameValid || !emailValid || !messageValid) {
        var subBtn = document.getElementById('formBtn');
        subBtn.style.display = 'block';
        subError.innerHTML = 'Por favor, corrija los errores para enviar.';
        return false;
    }

    // Desactiva el botón de envío para evitar múltiples clics
    var formBtn = document.getElementById('formBtn');
    formBtn.disabled = true;

    // Obtiene los valores de los campos del formulario
    var params = {
        from_name: document.querySelector('#fullName').value,
        email_id: document.querySelector('#email').value,
        message: document.querySelector('#message').value
    };

    // Envía el correo electrónico usando emailjs
    emailjs.send("service_xcuujqm", "template_1xi5fug", params)
        .then(function (res) {
            // Éxito: Restaura el botón y proporciona feedback visual
            formBtn.disabled = false;
            alert('¡Gracias! Su mensaje ha sido enviado.');

            // Resetea el formulario
            var formulario = document.getElementById('form');
            formulario.reset();
        })
        .catch(function (error) {
            // Error: Restaura el botón y muestra un mensaje de error
            formBtn.disabled = false;
            console.error('Error al enviar el correo electrónico:', error);
            alert('Hubo un problema al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.');
        });

    // Evita que el formulario se envíe automáticamente
    return false;
}