jQuery('document').ready(function($){    
    var toggle = $('.toggle'),    
    menubar = $('.nav');    
    toggle.click(function() {
       if (menubar.hasClass('nav__open') ) {
           menubar.removeClass('nav__open');
       } else {
           menubar.addClass('nav__open');
       }
           
        
    });
        
});
jQuery('document').ready(function ($) {
    let toggle2 = document.getElementById('toggle');
    let nav = document.getElementById('nav');

    toggle2.addEventListener('click', function () {
        nav.classList.toggle('nav__open');
    });
});

jQuery('document').ready(function ($) {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("form").addEventListener('submit', validateForm);
    });

    function validateForm(evento) {
        evento.preventDefault();
        var name = document.getElementById('name').value;
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (name.length == 0) {
            alert('El nombre no puede ser nulo.');
            return;
        }
        var email = document.getElementById('email').value;
        if (expReg.test(email) == false) {
            alert("La dirección de email es inválida.");
        }
        var msj = document.getElementById('msj').value;
        if (msj.length == 0) {
            alert('La consulta no puede ser nula.');
            return;
        }
        alert('Su consulta fue recibida. Nos pondremos en contacto lo antes posible.')
        this.submit();
    }
});
// if (menu.hasclass('nav__open')) {

        //     menu.addclass('nav')
        // } else {
        //     menu.addclass('nav__open')
        // }

        
// // Get the canvas node and the drawing context
// const canvas = document.getElementById('canvasMatrix');
// const ctx = canvas.getContext('2d');

// // set the width and height of the canvas
// const w = canvas.width = document.body.offsetWidth;
// const h = canvas.height = document.body.offsetHeight;

// // draw a black rectangle of width and height same as that of the canvas
// ctx.fillStyle = '#000';
// ctx.fillRect(0, 0, w, h);

// const cols = Math.floor(w / 20) + 1;
// const ypos = Array(cols).fill(0);

// function matrix() {
//     // Draw a semitransparent black rectangle on top of previous drawing
//     ctx.fillStyle = '#0001';
//     ctx.fillRect(0, 0, w, h);

//     // Set color to green and font to 15pt monospace in the drawing context
//     ctx.fillStyle = '#0f0';
//     ctx.font = '20pt monospace';

//     // for each column put a random character at the end
//     ypos.forEach((y, ind) => {
//         // generate a random character
//         const text = String.fromCharCode(Math.random() * 122);

//         // x coordinate of the column, y coordinate is already given
//         const x = ind * 20;
//         // render the character at (x, y)
//         ctx.fillText(text, x, y);

//         // randomly reset the end of the column if it's at least 100px high
//         if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
//         // otherwise just move the y coordinate for the column 20px down,
//         else ypos[ind] = y + 20;
//     });
// }

// // render the animation at 20 FPS.
// setInterval(matrix, 50);