let flag = 1;

function changeImage() {
    let pokeballImg = document.getElementById("icon01");
    if (flag) {
        pokeballImg.src = "images/yter.jpg";
        flag = 0;
    } else {
        pokeballImg.src = "images/pokeball.png";
        flag = 1;
    }

}