primera_lectura = document.querySelector(".primera_lectura");

if (primera_lectura.innerHTML.length > 45){
    primera_lectura.classList.add ("secundario_largo");
    primera_lectura.classList.remove("secundario");
}