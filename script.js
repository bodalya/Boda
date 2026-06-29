function confirmarAsistencia(){

    const civil=document.getElementById("civil").checked;
    const religiosa=document.getElementById("religiosa").checked;
    const recepcion=document.getElementById("recepcion").checked;

    const error=document.getElementById("mensaje-error");

    error.style.opacity="0";

    if(!civil && !religiosa && !recepcion){
        error.innerHTML="✦ Selecciona al menos una opción.";
        error.style.opacity="1";
        return;
    }

    let mensaje="Hola Lady y Alejandro 💛%0A%0A";
    mensaje+="Quiero confirmar mi asistencia:%0A%0A";

    if(civil){
        mensaje+="✅ Ceremonia Civil%0A";
    }

    if(religiosa){
        mensaje+="✅ Ceremonia Religiosa%0A";
    }

    if(recepcion){
        mensaje+="✅ Recepción%0A";
    }

    mensaje+="%0A¡Nos vemos pronto! ✨";

    window.open(
        "https://wa.me/56985170383?text="+mensaje,
        "_blank"
    );

}

document.querySelectorAll(".opcion input").forEach(opcion=>{
    opcion.addEventListener("change",()=>{
        document.getElementById("mensaje-error").style.opacity="0";
    });
});

function mostrarDatos(){

    const datos=document.getElementById("datosBanco");
    const boton=document.getElementById("botonDatos");

    datos.classList.toggle("abierto");

    if(datos.classList.contains("abierto")){
        boton.textContent="Ocultar datos";
    }else{
        boton.textContent="Mostrar datos";
    }

}

function copiarDato(texto,boton){

    navigator.clipboard.writeText(texto);

    const original=boton.textContent;

    boton.textContent="✔";

    setTimeout(()=>{
        boton.textContent=original;
    },1200);

}

const fechaBoda = new Date("August 1, 2026 17:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

},1000);

/* Animaciones al hacer scroll */

const elementosAnimados = document.querySelectorAll(
    "main section, footer"
);

elementosAnimados.forEach(elemento=>{
    elemento.classList.add("aparecer");
});

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){
            entrada.target.classList.add("visible");
        }

    });

},{
    threshold:0.18
});

elementosAnimados.forEach(elemento=>{
    observador.observe(elemento);
});

lucide.createIcons();

function mostrarContacto(){

    const datos=document.getElementById("datosContacto");
    const boton=document.querySelector(".boton-ver-contacto");

    datos.classList.toggle("abierto");

    if(datos.classList.contains("abierto")){
        boton.textContent="Ocultar datos de contacto";
    }else{
        boton.textContent="Ver datos de contacto";
    }

}