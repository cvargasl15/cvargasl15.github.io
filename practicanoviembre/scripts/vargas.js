flag1 = 1;
flag2 = 1;
flag3 = 1;
flag4 = 1;
flagh = 1;

const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
];

var i = 0;

function turismo() {
    var img = document.slider.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("turismo()", 1000);
}



function talento() {
    var fa = new Date();
    let añoa = fa.getFullYear();
    let mesa = fa.getMonth() + 1;
    let diaa = fa.getUTCDate();
    let horaa = fa.getHours();
    let mina = fa.getMinutes();
    fh = document.getElementById('fh');

    if (flagh == 1) {
        fh.innerText = diaa + " de " + mesa + " del " + añoa + " a las: " + horaa + ":" + mina;
        flagh = 0;
    } else if (flagh == 0) {
        fh.innerText = "";
        flagh = 1;
    }

}

function marcar1() {
    let hora = document.getElementById('hora1');

    if (flag1 == 1) {
        hora.innerText = "Lectura completada";
        flag1 = 0;
    } else if (flag1 == 0) {
        hora.innerText = "🕣 Lectura de 3 min";
        flag1 = 1;
    }
}

function marcar2() {
    let hora = document.getElementById('hora2');

    if (flag2 == 1) {
        hora.innerText = "Lectura completada";
        flag2 = 0;
    } else if (flag2 == 0) {
        hora.innerText = "🕣 Lectura de 2 min";
        flag2 = 1;
    }
}

function marcar3() {
    let hora = document.getElementById('hora3');

    if (flag3 == 1) {
        hora.innerText = "Lectura completada";
        flag3 = 0;
    } else if (flag3 == 0) {
        hora.innerText = "🕣 Lectura de 3 min";
        flag3 = 1;
    }
}

function marcar4() {
    let hora = document.getElementById('hora4');

    if (flag4 == 1) {
        hora.innerText = "Lectura completada";
        flag4 = 0;
    } else if (flag4 == 0) {
        hora.innerText = "🕣 Lectura de 5 min";
        flag4 = 1;
    }
}