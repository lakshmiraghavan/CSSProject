/**
 * Created by lakshmi on 7/7/15.
 */

function Data() {
    this.data = [];
}

document.addEventListener("DOMContentLoaded",function(){

    document.addEventListener("contextmenu",function(e){
        e.preventDefault();
        var menu = document.querySelector(".menu");
        menu.style.left = e.clientX + 'px';
        menu.style.top = e.clientY + 'px';
        menu.style.display = "block";

        var li = document.querySelectorAll('li');
        li[0].addEventListener('click',function(e) {
            var parent = document.getElementById('parent');
            var folder = createElement("div", parent, "folder")
            var name = createElement("div", parent, "folderName", 'new')
            name.contentEditable = 'true';
            alert(name.innerHTML);
            menu.style.display = "none";
        })

        })


})

function createElement(elementType, parent, className, innerHTML, custom) {
    var element = document.createElement(elementType);
    if (parent) parent.appendChild(element);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    if (typeof custom !== 'undefined') {
        for (var prop in custom) {
            element.setAttribute(prop, custom[prop]);
        }
    }
    return element;
}
