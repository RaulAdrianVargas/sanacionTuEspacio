document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    // Alternar el menú al hacer clic en el botón hamburguesa
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
});

document.getElementById('whatsappForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const whatsappNumber = '+5491131747811'; // Reemplaza con tu número, ej: +5491234567890
        const encodedMessage = encodeURIComponent(`Hola, soy ${name}. Estoy interesado en las clases de sanación espiritual. Mi número es ${phone}. ${message}`);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        if (!phone.match(/^\+\d{10,15}$/)) {
            alert('Por favor, ingresa un número de WhatsApp válido (ej: +5491234567890)');
            return;
        }

    });
