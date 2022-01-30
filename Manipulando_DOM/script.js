const body = document.getElementsByTagName("body")
const h1 = document.getElementsByTagName("h1");
const button = document.getElementsByTagName("button");
const footer = document.getElementsByTagName("footer");
const a = document.getElementsByTagName("a");

button[0].addEventListener("click", trocarModo);

function trocarModo(){
    body[0].classList.toggle("lightMode");
    body[0].classList.toggle("darkMode");

    h1[0].classList.toggle("lightMode");
    h1[0].classList.toggle("darkMode");
    h1[0].className.includes("lightMode") ? h1[0].innerHTML="Tema Claro!" : h1[0].innerHTML="Tema Escuro!";

    button[0].classList.toggle("lightMode");
    button[0].classList.toggle("darkMode");

    footer[0].classList.toggle("lightMode");
    footer[0].classList.toggle("darkMode");

    for(i=0;i<a.length;i++){
        a[i].classList.toggle("lightMode");
        a[i].classList.toggle("darkMode");
    }
    return
}