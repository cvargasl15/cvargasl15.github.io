let swcolor = 0;

function Extraemos() {
    extraefecha();
    extraenombre();

    function extraenombre() {
        var nomape = document.getElementById("nomape").value;
        var fullname = nomape.split(' ');

        //apell+ido paterno
        let apepat = fullname[0];
        let apepati = document.getElementById('apepat');
        apepati.value = apepat;
        //apellido materno
        let apemat = fullname[1];
        let apemati = document.getElementById('apemat');
        apemati.value = apemat;
        //nombres
        if (fullname[3] == null) {
            fullname[3] = " ";
        }
        let nombre = fullname[2] + " " + fullname[3];
        let nombrei = document.getElementById('nombre');
        nombrei.value = nombre;
        //longuitud del apellido
        let apelength = apepat.length + apemat.length + " Caracteres";
        let apelengthi = document.getElementById('apelength');
        apelengthi.value = apelength;

    }

    function extraefecha() {
        //extraer fecha de input
        var fecnac = document.getElementById('fecnac').value;
        let fullfec = fecnac.split('/');
        let año = fullfec[2];
        let mes = parseInt(fullfec[1]);
        let dia = fullfec[0];

        //extraer fecha actual
        var fa = new Date();
        let añoa = fa.getFullYear();
        let mesa = fa.getMonth() + 1;
        let diaa = fa.getUTCDate();

        //calcular edad
        let edad;
        if (mes < mesa) {
            edad = añoa - año;
        } else if (mes == mesa) {
            if (dia <= diaa) {
                edad = añoa - año;
            } else if (dia > diaa) {
                edad = añoa - año - 1;
            }
        } else if (mes > mesa) {
            edad = añoa - año - 1;
        }
        edadi = document.getElementById('edad');
        edadi.value = edad + " años";


        //mes de nacimiento en letras
        var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        let mesenletras = meses[mes - 1];
        mesenletrasi = document.getElementById('mesenletras');
        mesenletrasi.value = mesenletras;
    }
}

function Coloreamos() {

    if (swcolor) {
        cambio2();
        swcolor = 0;
    } else {
        cambio1();
        swcolor = 1;
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

}

function colorear() {
    var coloreamos = Coloreamos();
}

function extraer() {
    var extraemos = Extraemos();
}