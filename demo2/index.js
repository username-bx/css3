

/**
 *
 * Math.atan2(); 返回两点连成的直线与x轴的角度
 *
 * Math.atan2(y, x); 参数y: 两点y轴的差 参数x: 两点x轴的差
 * 
 * 
 * Math.atan2();返回值是一个弧度值。
 *
 * Math.atan2() / (Math.PI / 180);  转化为角度 (eg:45deg 90deg)
 * 
 *                       -90deg
 *                       |
 *                       |
 *                       |
 * -180deg(180deg)---------------------0deg   
 *                       |
 *                       |
 *                       |
 *                       90deg
 * 
 * 
 * 
 * 
 * 一个算法：
 * (Math.round((de + 180) / 90) + 3) % 4; 将上面的角度转化为0，1，2，3
 * 
 * 
 * 
 * 
 * */

// var boxs = document.getElementsByClassName('box');
var boxs = document.querySelectorAll('.box');

var ro = ['rotateX(90deg)', 'rotateY(90deg)', 'rotateX(-90deg)', 'rotateY(-90deg)'];
boxs.forEach(function (box, index) {
    box.onmouseenter = function (e) {
        var pointX = e.clientX;
        var pointY = e.clientY;

        // 距离最近的有定位的父级
        // var dicX = pointX - box.offsetLeft - 75;
        // var dicY = pointY - box.offsetTop - 75;

        // var dicX = box.offsetLeft;
        // var dicY = box.offsetTop;

        var dicX = pointX - (box.getBoundingClientRect().left + box.getBoundingClientRect().width / 2);
        var dicY = pointY - (box.getBoundingClientRect().top + box.getBoundingClientRect().height / 2);
        var de = Math.round((Math.atan2(dicY, dicX)) / (Math.PI / 180));

        var ind = (Math.round((de + 180) / 90) + 3) % 4;

        this.style.transform = 'translateZ(100px) ' + ro[ind] + '';

        console.log(de, ind,);
    }


    box.onmouseleave = function () {
        this.style.transform = '';
    }
});


var content = document.getElementsByClassName('content')[0];
document.body.onmousemove = function (e) {
    var x = (e.clientX / window.innerWidth - 0.5) * 25;
    var y = (0.5 - e.clientY / window.innerHeight) * 25;

    content.style.transform = 'rotateY(' + x + 'deg) rotateX(' + y + 'deg)';
}