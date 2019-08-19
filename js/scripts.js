//move product script and copy activateApp() to shop.js. shop.html needs hide classes

// -- variables --

var calculator = "<div id='calc'><iframe src='./html/calc.html'></iframe></div>";
var knifeProfile = "<div class='window'><iframe src='./html/knives.html'></iframe></div>";
var shop = "<div class='window'><iframe src='./html/shop.html'></iframe></div>";
//var buyProduct = "<div class='window'><iframe src='./html/product.html'></iframe></div>";
var monster = "<div class='window'><iframe src='./html/monster.html'></iframe></div>";

// -- getting elements --

//var header = document.getElementById('header');
var welcome = document.getElementById('welcome');
var siteContent = document.getElementById('siteContent');
var shield = document.getElementById('steelShield');
var backButton = document.getElementById('backButton');
var x = document.getElementById('x');
var y = document.getElementById('y');
var z = document.getElementById('z');
var o = document.getElementById('o');
var appTable = document.getElementById('appTable');
var appThink = document.getElementById('appThink');
//var product = document.getElementById('product');

// -- functions --

function displayHeader() {
	welcome.innerHTML = '<h1>Oak Arsenal</h1>';
}

function enterSite() {
    shield.setAttribute('class', 'noShow');
    siteContent.removeAttribute('class', 'noShow');
    window.setTimeout(displayHeader, 3000);
}

function activateApp() {
    appTable.setAttribute('style', 'display: none');
}

function displayCalc() {
    activateApp();
	appThink.innerHTML = calculator;
}

function displayKnives() {
    activateApp();
    appThink.innerHTML = knifeProfile;
}

function displayShop() {
    activateApp();
    appThink.innerHTML = shop;
}

/*function displayProduct() {
    activateApp();
    appThink.innerHTML = buyProduct;
}*/

function displayMonster() {
    activateApp();
    appThink.innerHTML = monster;
}

function handleBackButton() {
    appThink.innerHTML = "";
    appTable.removeAttribute('style', 'display: none');
}

// -- Event Listeners --

shield.addEventListener('click', enterSite);

x.addEventListener('click', displayCalc);

y.addEventListener('click', displayKnives);

z.addEventListener('click', displayShop);

o.addEventListener('click', displayMonster);

backButton.addEventListener('click', handleBackButton);

//product.addEventListener('click', displayProduct);