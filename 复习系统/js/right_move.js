window.onload = function () {

    var customContextMenu = document.querySelector("#customContextMenu");
    //自定鼠标右键
    document.oncontextmenu =function (ev) {
        ev.preventDefault();
        customContextMenu.style.left = ev.clientX+"px";
        customContextMenu.style.top = ev.clientY+"px";
        customContextMenu.style.display = "block";
    };
    //鼠标单击
    document.onclick = function () {
        customContextMenu.style.display = "none";
    };

};