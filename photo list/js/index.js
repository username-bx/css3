var ul = document.querySelector('.wrap ul');
var lis = document.querySelectorAll('.wrap ul li');
var closeBtn = document.querySelectorAll('.wrap ul .close');

var timer = null;
timer = setTimeout(function () {
    ul.removeAttribute('class', 'init');
}, 200)


console.log(ul, lis, closeBtn);