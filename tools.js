/**
 *获取滚动条偏移量
 *
 * 返回一个对象{ x: , y: }
 * 
 * 使用方法：
 * x轴偏移量 getScrollOffset().x
 * y轴偏移量 getScrollOffset().y
*/

function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset,
        }
    } else {
        // IE8 IE8以下
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop,
        }
    }
}


/**
 * 求可视区窗口的尺寸
 * 
 * 返回一个对象{ w: , h: }
 * 
 * 
 * 使用方法：
 * 视口宽度: getViewportSize().x
 * 视口高度: getViewportSize().y
 * */
function getViewportSize() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight,
        }
    } else {
        //IE8 IE8以下
        if (document.compatMode === 'BackCompat') { //向后兼容，兼容之前的版本
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight,
            }
        } else { //标准模式 DOCTYPE
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight,
            }
        }
    }
}

/**
 * 
 * getBoundingStyleClientRect()
 * 静态写照
 * width
 * height
 * left
 * top
 * right:右边框距可视区左边的距离
 * bottom:下边框距可视区顶边的距离
 * 
 * dom.offsetWidth
 * dom.offsetHeight
 * dom.offsetLeft 返回对于最近有定位的父级的坐标
 * dom.offsetTop 返回对于最近有定位的父级的坐标
 * dom.offsetParent 返回最近有定位的父级
 * 
 * 
 * */



/**
 * 
 * 
 * 
 * getComputedStyle(): 计算后的结果。(可以计算伪元素大小)
 * 
 * IE currentStyle()
 * 
 * */
function getStyle(dom, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[prop];
    } else {
        return dom.currentStyle[prop];
    }
}

function stopBubble() {

}

function cancleHandler() {

}

var obj1 = {
    name: 'su',
    age: 18,
    house: ['深圳', '上海', '北京'],
}

// var obj1 = [1, 2,]

function cloneDeep(origin, target) {

    if (typeof origin == "object") { //这个判断只能确定origin是引用值

        if (Object.prototype.toString.call(origin) == "[object Object]") {
            var target = target || {};
        } else if (Object.prototype.toString.call(origin) == "[object Array]") {
            var target = target || [];
        }

    }

    debugger
    for (var prop in origin) {
        if (origin.hasOwnProperty(prop)) {

            if (typeof origin[prop] == "object") {
                target[prop] = Object.prototype.toString.call(origin[prop]) == "[object Object]" ? {} : [];
                cloneDeep(origin[prop], target[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    console.log(target)
    return target;


}



// function cloneDeep(origin, target) {

// }



