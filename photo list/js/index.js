var ul = document.querySelector('.wrap ul');
var lis = document.querySelectorAll('.wrap ul li');
var closeBtn = document.querySelectorAll('.wrap ul .close');

var timer = null;
timer = setTimeout(function () {
    ul.removeAttribute('class', 'init');
}, 200)

var last = null;
lis.forEach(function (li, index) {
    li.onclick = function () {

        ul.setAttribute('class', 'menu')

        last && (last.className = '');

        this.className = 'active';

        last = this;
    }

    closeBtn[index].onclick = function (e) {
        e.cancelBubble = true;

        ul.removeAttribute('class', 'menu');

        li[index].removeAttribute('class', 'active');

        last = null;
    }
});

console.log(ul, lis, closeBtn);

























// function aaa() {
//     return {
//         test: 1
//     }
// }

// console.log('第二题' + typeof aaa())


// var c = document.getElementById('#only');
// console.log(c);

// var a = [1, 2, 3]
// console.log('第四题' + typeof a);
