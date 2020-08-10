const elementosPrimeros = [document.getElementById("tech"),document.getElementById("studies"),document.getElementById("courses")]
const elementosSegundos = [document.getElementById("listado"),document.getElementById("II"),document.getElementById("II2")]
const secciones= [document.getElementById("techDiv"),document.getElementById("study"),document.getElementById("cursos")]
class Interseccion{
	constructor(){
		this.visto = {"tech": false, "studies" :  false, "courses" : false};
		this.callback = this.callback.bind(this);
		this.observer = new IntersectionObserver(this.callback, {threshold:0.2});
		this.observer.observe(secciones[0]);
		this.observer.observe(secciones[1]);
		this.observer.observe(secciones[2]);
	}
	callback(entries) {
		entries.forEach(entry =>{
			const isVisible = entry.intersectionRatio >=0.2;
			if(isVisible && !this.visto[entry.target.className]){
				this.visto[entry.target.className]=true;
				show(entry.target.className)
			}

		});
	}
}
const intersect = new Interseccion();
function show(name){
	var elementPrimero;
	var elementSegundo;
	if(name=="techDiv"){
		elementPrimero=elementosPrimeros[0]
		elementSegundo=elementosSegundos[0]
	} 
	else if(name=="study"){
		elementPrimero=elementosPrimeros[1]
		elementSegundo=elementosSegundos[1]
	} 
	else if(name=="cursos"){
		elementPrimero=elementosPrimeros[2]
		elementSegundo=elementosSegundos[2]
	} 
	elementPrimero.animate([
		{left: "0"}
	],{
		duration:2000,
		fill: "forwards"
	})
	elementSegundo.animate([
		{transform: "scale(1,1)"}
	],{
		duration:3000,
		fill: "forwards"
	})
}
function sendEmail(){
	let mail = document.getElementById("mailBox").value;
	if(!mail || !mail.includes("@") || !mail.includes(".")){
		alert("Introduzca un mail valido: nombre@dominio");
	}
	else{
		alert(`El correo ${mail} ha sido almacenado satisfactoriamente  WIP`);
	}
	
	document.activeElement.blur();
}