  let imagen = document.querySelector('#imagen_perrito');

  imagen.onclick = ()  => {
        if(imagen.style.border === "2px solid red"){
            imagen.style.border = "none";
        } else {
            imagen.style.border = "2px solid red";
        }
    }
