let mailBox = document.getElementById("mailBox");

function sendEmail(){
	let mail = mailBox.value;
	if(!mail || !mail.includes("@") || !mail.includes(".")){
		alert("Introduzca un mail valido: nombre@dominio");
	}
	else{
		alert(`El correo ${mail} ha sido almacenado satisfactoriamente  WIP`);
	}
	
	document.activeElement.blur();
}