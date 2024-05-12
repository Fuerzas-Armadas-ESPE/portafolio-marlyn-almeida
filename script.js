let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("C");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("adobe");
        habilidades[6].classList.add("ia");
        habilidades[7].classList.add("Python");
        habilidades[8].classList.add("CC");
        habilidades[9].classList.add("Java");
        habilidades[10].classList.add("Ado");
        habilidades[11].classList.add("Procreate");
        habilidades[12].classList.add("comunicacion");
        habilidades[13].classList.add("trabajo");
        habilidades[14].classList.add("creatividad");
        habilidades[15].classList.add("dedicacion");
        habilidades[16].classList.add("proyect");
        habilidades[17].classList.add("machine");
        habilidades[18].classList.add("seguridad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 