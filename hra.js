"use strict";

var elementDeska;
var elementyBunek;
var pocetRadku;
var pocetSloupcu;

function priNacteniStranky() {
    // Vyhledame si v HTML element <table id="deska"> a ulozime si ho
    elementDeska = document.querySelector("#deska");
    // Vyhledame si v HTML elementy <td>
    elementyBunek = document.querySelectorAll("#deska tr > td");

    // Nase tabulka ma Y radku a X sloupcu
    pocetRadku = document.querySelectorAll("#deska tr").length;
    pocetSloupcu = document.querySelectorAll("#deska tr:first-child > td").length;

    // Vycistime tabulku
    vymazDesku();

    // Bunkam tabulky pridame udalost reagujici na kliknuti mysi
    pridejObsluhuKliknutiNaBunku();
}

// Projde celou tabulku a vymaze text ve vsech bunkach
function vymazDesku() {
    // projdeme postupne vsechny bunky tabulky
    for (var i = 0; i < elementyBunek.length; i++) {
        // Kazdou bunku vymazeme
        var elementJedneBunky = elementyBunek.item(i);
        elementJedneBunky.textContent = "";
    }
}

// Vsem bunkam tabulky pridame obsluhu udalosti reagujici na kliknuti mysi
function pridejObsluhuKliknutiNaBunku() {
    elementDeska.addEventListener("click", zkontrolujVyhru);
}

// Vsem bunkam tabulky odebereme obsluhu udalosti reagujici na kliknuti mysi
function odeberObsluhuKliknutiNaBunku() {
    elementDeska.removeEventListener("click", zkontrolujVyhru);
}

// Projdeme vsechny bunky tabulky a hledame v nich radu 5 stejnych neprazdnych policek
function zkontrolujVyhru() {
    var vyherce;
    var kamen1;
    var kamen2;
    var kamen3;
    var kamen4;
    var kamen5;

    var x;
    var y;
    for (y = 0; y < pocetRadku; y = y + 1) {
        for (x = 0; x < pocetSloupcu - 4; x = x + 1) {
            kamen1 = elementDeska.rows[y].cells[x].innerHTML.trim();
            kamen2 = elementDeska.rows[y].cells[x + 1].innerHTML.trim();
            kamen3 = elementDeska.rows[y].cells[x + 2].innerHTML.trim();
            kamen4 = elementDeska.rows[y].cells[x + 3].innerHTML.trim();
            kamen5 = elementDeska.rows[y].cells[x + 4].innerHTML.trim();
            if (kamen1 !== "" && kamen1 === kamen2 && kamen1 === kamen3 && kamen1 === kamen4 && kamen1 === kamen5) {
                vyherce = kamen1;
            }
        }
    }
    for (y = 0; y < pocetRadku - 4; y = y + 1) {
        for (x = 0; x < pocetSloupcu; x = x + 1) {
            kamen1 = elementDeska.rows[y].cells[x].innerHTML.trim();
            kamen2 = elementDeska.rows[y + 1].cells[x].innerHTML.trim();
            kamen3 = elementDeska.rows[y + 2].cells[x].innerHTML.trim();
            kamen4 = elementDeska.rows[y + 3].cells[x].innerHTML.trim();
            kamen5 = elementDeska.rows[y + 4].cells[x].innerHTML.trim();
            if (kamen1 !== "" && kamen1 === kamen2 && kamen1 === kamen3 && kamen1 === kamen4 && kamen1 === kamen5) {
                vyherce = kamen1;
            }
        }
    }
    for (y = 0; y < pocetRadku - 4; y = y + 1) {
        for (x = 0; x < pocetSloupcu - 4; x = x + 1) {
            kamen1 = elementDeska.rows[y].cells[x].innerHTML.trim();
            kamen2 = elementDeska.rows[y + 1].cells[x + 1].innerHTML.trim();
            kamen3 = elementDeska.rows[y + 2].cells[x + 2].innerHTML.trim();
            kamen4 = elementDeska.rows[y + 3].cells[x + 3].innerHTML.trim();
            kamen5 = elementDeska.rows[y + 4].cells[x + 4].innerHTML.trim();
            if (kamen1 !== "" && kamen1 === kamen2 && kamen1 === kamen3 && kamen1 === kamen4 && kamen1 === kamen5) {
                vyherce = kamen1;
            }
        }
    }
    for (y = 0; y < pocetRadku - 4; y = y + 1) {
        for (x = 4; x < pocetSloupcu; x = x + 1) {
            kamen1 = elementDeska.rows[y].cells[x].innerHTML.trim();
            kamen2 = elementDeska.rows[y + 1].cells[x - 1].innerHTML.trim();
            kamen3 = elementDeska.rows[y + 2].cells[x - 2].innerHTML.trim();
            kamen4 = elementDeska.rows[y + 3].cells[x - 3].innerHTML.trim();
            kamen5 = elementDeska.rows[y + 4].cells[x - 4].innerHTML.trim();
            if (kamen1 !== "" && kamen1 === kamen2 && kamen1 === kamen3 && kamen1 === kamen4 && kamen1 === kamen5) {
                vyherce = kamen1;
            }
        }
    }

    if (typeof(vyherce) !== "undefined" && vyherce !== null) {
        alert("Vyhr\u00E1l hr\u00E1\u010D " + vyherce);
        odeberObsluhuKliknutiNaBunku();
    }
}

// Nastavi obsluhu udalosti "load" (pri nacteni stranky) na funkci priNacteniStranky
window.addEventListener("load", priNacteniStranky);
