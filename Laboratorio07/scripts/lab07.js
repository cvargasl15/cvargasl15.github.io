let flag = 1;
let swcolor = 1;

function ex() {
    alert("It's gone");
}

function colorear() {
    if (swcolor) {
        cambio2();
        swcolor = 0;
    } else {
        cambio1();
        swcolor = 1;
    }
}

function cambio1() {
    document.getElementById('btn_colorea').style.backgroundColor = '#30629c';
    var blues = document.getElementsByClassName("blue");
    for (var i = 0; i < blues.length; i++) {
        blues[i].style.backgroundColor = '#FF5E00';
    }

    var oranges = document.getElementsByClassName("orange");
    for (var i = 0; i < oranges.length; i++) {
        oranges[i].style.backgroundColor = '#30629c';
    }

}

function cambio2() {
    document.getElementById('btn_colorea').style.backgroundColor = '#FF5E00';
    var oranges = document.getElementsByClassName('blue');
    for (var i = 0; i < oranges.length; i++) {
        oranges[i].style.backgroundColor = '#30629c';
    }

    var blues = document.getElementsByClassName('orange');
    for (var i = 0; i < blues.length; i++) {
        blues[i].style.backgroundColor = '#FF5E00';
    }
}

window.onload = colorear;