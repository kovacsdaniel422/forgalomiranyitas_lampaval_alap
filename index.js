window.addEventListener("load", init);
var allapot = false;
var leptet = 0;

function init() {
    console.log("auto");
    var auto = ' <div class="auto"><img src="kepek/auto2.png" /></div>';
    var auto2 = ' <div class="auto2"><img src="kepek/auto1.png" /></div>';


    document.querySelector(".forgalom").innerHTML += auto;
    document.querySelector(".forgalom").innerHTML += auto2;
    var autoElem = document.querySelectorAll(".auto")[0];
    var autoElem2 = document.querySelectorAll(".auto2")[0];
    var lampa = document.querySelector(".lampa");
    var lampaSzin = document.querySelectorAll(".lampa div");
    var piros = document.querySelector(".piros");
    var sarga = document.querySelector(".sarga");
    var zold = document.querySelector(".zold");
    sarga.style.opacity = "20%";
    zold.style.opacity = "20%";

    setInterval(() => {
        if (!allapot) {
            sarga.style.opacity = "100%";
        }
    }, 1000);

    setInterval(() => {
        var szel = parseInt(
            window.getComputedStyle(document.querySelector(".forgalom")).width
        );
        if (allapot) {
            piros.style.opacity = "100%";
            zold.style.opacity = "20%";
            console.log(piros.style.opacity);
        } else {
            piros.style.opacity = "20%";
            sarga.style.opacity = "20%";
            zold.style.opacity = "100%";
            autoElem.classList.add("balroljobbra");
            autoElem2.classList.add("lentrolfel");
            var poz = parseInt(window.getComputedStyle(autoElem).left);
            var poz = parseInt(window.getComputedStyle(autoElem2).bottom);
            console.log(piros);
            if (poz > szel - 10) {
                document.location.reload();
            }
        }
        allapot = !allapot;
    }, 2000);
}