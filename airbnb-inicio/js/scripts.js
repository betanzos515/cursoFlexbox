document.addEventListener('DOMContentLoaded',()=>{

    /* Obener la imagen */

    const imagenHero = document.querySelector('.hero');
    
    /* Creamor las variables para manejar el tiempo */
    let i = 0;
    let tiempo = 0;
    let imagenes = ['arriba.jpg','arriba.jpg'];
    setInterval(()=>{
        tiempo += 1;
        console.log(tiempo);
        imagenHero.style.backgroundPositionY = `-${tiempo}px`;
        if(tiempo > 45){
            tiempo = 0;
            imagenHero.style.backgroundImage = `url(img/${imagenes[i]})`;
            console.log(i);


            if(i === imagenes.length - 1){
                i = 0;
            }
            else{
                i++;
            }
        }
            tiempo++;
    },100);


    /* Boton flotante */
    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener('click',(e)=>{
        e.preventDefault();

        /* Prevenimos default pero ejecutamos el siguiente código */
        const footer = document.querySelector(".footer");

        if(footer.classList.contains('activo')){
            /* si lo contiene ejecuta este codigo */
            footer.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
            btnFlotante.classList.remove('activo');
            footer.classList.remove('activo');
        }
        else{
            footer.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
            btnFlotante.classList.add('activo');
            footer.classList.add('activo');
        }
    });


});