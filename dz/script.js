"use strict"
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function sssetRandomColor() {
    let qwer = document.querySelectorAll('.row-block');
    let i = 0, length = qwer.length;
    for ( ; i < length; i++) {
        qwer[i].style.backgroundColor = getRandomColor();
    }
}