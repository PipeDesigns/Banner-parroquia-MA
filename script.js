// const puppeteer = require('puppeteer');
// (async()=>{
//     const browser = await puppeteer.launch();

//     const page = await browser.newPage();

//     await page.goto('https://www.ciudadredonda.org/calendario-lecturas/evangelio-del-dia/hoy');
//     await page.screenshot({path: 'evangelio.jpg'});

//     const lectura = await page.evaluate(() =>{
//         const primera_lectura = document.querySelector('.texto_palabra b');
//         return primera_lectura;
//     });

//     var texto = document.querySelector('.principal');
//     texto.innerHTML = "hola";

//     await browser.close();
// })();


salmo = document.querySelector(".salmo");
input_primero = document.querySelector(".input_primero");
input_segundo = document.querySelector(".input_segundo");
principal = document.querySelector(".principal");

obtener_localstotare();

function obtener_localstotare(){
    let texto_superior = localStorage.getItem("texto superior");
    let texto_inferior = localStorage.getItem("texto inferior");
    principal.innerHTML = texto_superior;
    salmo.innerHTML = texto_inferior;
}

function input(){
    principal.innerHTML = input_primero.value;
    localStorage.setItem("texto superior", input_primero.value )

}

function input2(){
    salmo.innerHTML = input_segundo.value;
    localStorage.setItem("texto inferior", input_segundo.value )
    if (salmo.innerHTML.length > 45){
        salmo.classList.add ("secundario_largo");
        salmo.classList.remove("secundario");
    }
}

if (salmo.innerHTML.length > 45){
    salmo.classList.add ("secundario_largo");
    salmo.classList.remove("secundario");
}

function pulsar(event) {
        var key = event.keyCode;
        if(key == 13){
            event.preventDefault();
            input();
        }
     }

     function pulsar2(event) {
        var key = event.keyCode;
        if(key == 13){
            event.preventDefault();
            input2();
        }
     }



const hola= "Lectura de la segunda carta del apóstol sannnn";

console.log(hola.length);