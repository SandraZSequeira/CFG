//Navbar pop-up box

let menu =document.querySelector(`#menu-icon`);
let navbar =document.querySelector(`.navbar`);

menu.onclick =()  => {
    menu.classList.toggle(`bx-x`);
    navbar.classList.toggle(`open`);
}

// About exercise boxes 

window.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.technique-box');
    Array.prototype.forEach.call(images, function (image) {
      var img = new Image();
      img.src = image.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    });
  });
  