function change() {
    document.getElementById("js").style.display = 'none';
}

function change() {
    document.querySelector(".test").innerHTML = 10 + 10;
}
//if you want a particular
// var x = myFunction('thisid just the beginning','the best');
// document.querySelector(".test").innerHTML = x;

// function myFunction(a, b) {
//   return a + b;
// }


//PRELOADER
var loader = document.querySelector(".loader")

window.addEventListener('load', vanish);

function vanish(){
    loader.classList.add('disappear')
}

