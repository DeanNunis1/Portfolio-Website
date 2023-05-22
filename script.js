// Activate Menu Button //
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// lets remove menu-bar on scroll //

window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

// Scroll Reveal //

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-bio h1, .about-resume', {origin: 'left'});
ScrollReveal().reveal('.home-bio p', {origin: 'right'});
ScrollReveal().reveal('.home-bio, heading', {origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .projects-items, .form ', {origin: 'bottom'});

// <!-- Typing Animation -->//

const animText = new Typed ('.animated-text', {
    strings: ['Web Developer', 'Web Developer', 'Backend Engineer'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
});

document.getElementsByClassName('form')[0].addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ihnu776', 'template_pvqidpj', this)
    .then(function() {
        console.log('SUCCESS!');
        document.getElementById('contact-form').reset(); // Clear the form fields using the correct ID
    }, function(error) {
        console.log('FAILED...', error);
    });
});