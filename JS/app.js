//OBTENER LOS PASOS (STEPS)
const steps = document.querySelectorAll(".step");

//OBTENER LA BARRA DE PROGRESO
const bar = document.getElementById("bar");

//OBTENER LA REFERENCIA A LOS BOTONES
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

//GUARDAR EL PASO EN QUE ESTAMOS
let currentStep = 1

//OBTENER INPUT
const text = document.getElementById("texto");

//OBTENER PARRAFO
const paragraph = document.getElementById("parrafo");

//ESCUCHAR EL BOTÓN SIGUIENTE
nextButton.addEventListener("click", (step, index)=>{
	if(currentStep < steps.length){
	//SUMAR 1 A LOS PASOS
	currentStep++;	
	updateProgress();
	}
});

//ESCUCHAR EL BOTÓN ANTERIOR
prevButton.addEventListener("click", (step, index)=>{
	if(currentStep > 1){
	//RESTAR 1 A LOS PASOS
	currentStep--;

	updateProgress();
	}
});

//FUNCIÓN PARA ACTUALIZAR EL PROGRESO
function updateProgress() 
{	
	steps.forEach((step,index)=>{

		if(index < currentStep){
			step.classList.add("active");
		}else{
			step.classList.remove("active");
		}
	});

	//ACTUALIZAR BARRA
	let progress = (currentStep - 1) / (steps.length - 1) * 100;
	progress = parseInt(progress);
	bar.style.width = progress + "%";

	//MOSTRAR TEXTO O PORCENTAJE
	if(progress == 0){
		text.value = "0%";
		paragraph.innerHTML = "Aún eres novato, ¡Trabaja constantemente!";
	}
	if(progress == 33){
		text.value = "25%";
		paragraph.innerHTML = "Nada mal, ¡Sigue así!";	
	}
	if(progress == 66){
		text.value = "50%"
		paragraph.innerHTML = "Podrías encontrar trabajo, ¡Ponte retos más grandes!";
	}
	if(progress == 100){
		text.value = "100%"
		paragraph.innerHTML = "Eres todo un experto, ¡no bajes ese rendimiento!";		
	}

	//CONTROL DE LOS BOTONES
	if(currentStep === steps.length){
		nextButton.disabled = true;
		prevButton.disabled = false;
	}else if(currentStep === 1){
		prevButton.disabled = true;
		nextButton.disabled = false;
	}
}




