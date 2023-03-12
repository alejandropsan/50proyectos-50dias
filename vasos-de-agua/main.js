const smallVasos = document.querySelectorAll('.vaso-xs');
const litros = document.getElementById('litros');
const porcentaje = document.getElementById('porcentaje');
const remanente = document.getElementById('remanente');

actualizarVasoGrande();

smallVasos.forEach((vaso, idx) => {
    vaso.addEventListener('click', () => destacarVasos(idx))
});

function destacarVasos(idx){
    if(idx === 7 && smallVasos[idx].classList.contains('lleno')) idx--;
    else if(smallVasos[idx].classList.contains('lleno') && !smallVasos[idx].nextElementSibling.classList.contains('lleno')){
        idx--
    }

    smallVasos.forEach((vaso, idx2) => {
        if(idx2 <= idx) {
            vaso.classList.add('lleno');
        }else {
            vaso.classList.remove('lleno');
        }
    });

    actualizarVasoGrande();
}


function actualizarVasoGrande(){
    const vasosLlenos = document.querySelectorAll('.vaso.vaso-xs.lleno').length;
    const totalVasos = smallVasos.length;

    if(vasosLlenos === 0){
        porcentaje.style.visibility = 'hidden';
        porcentaje.style.height = 0;
    }else{
        porcentaje.style.visibility = 'visible';
        porcentaje.style.height = `${vasosLlenos / totalVasos * 330}px`;
        porcentaje.innerText = `${vasosLlenos / totalVasos * 100}%`;
    }

    if(vasosLlenos === totalVasos){
        remanente.style.visibility = 'hidden';
        remanente.style.height = 0;
    }else {
        remanente.style.visibility = 'visible';
        litros.innerText = `${2 - (250 * vasosLlenos / 1000)}L`;
    }
}