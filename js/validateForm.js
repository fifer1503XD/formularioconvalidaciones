
function createPassword() {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let password=""
	let numbers=""
	for (let index = 1; index < 5; index++) {
		const num = Math.floor(Math.random() * (26 - 0))
		const number= Math.floor(Math.random() * (10 - 0))
		password+=characters[num]
		numbers+=number
	}
	password+=numbers
	return password
	}

function limpiarForm(){
	document.getElementById("usuario").value="";
	document.getElementById("nombre").value="";
	document.getElementById("cargo").value="";
	document.getElementById("correo").value="";
	document.getElementById("celular").value="";
	document.getElementById("telefono").value="";
	document.getElementById("tipoContacto").value="";
	document.getElementById("permisoWebstore").value="";
	document.getElementById("permisoCrearOrdenes").value="";
	document.getElementById("permisoEnvioInformacion").value="";
}
function validarForm() {
	
	const usuario = document.getElementById("usuario");
	const nombre = document.getElementById("nombre");
	const cargo = document.getElementById("cargo");
	const correo = document.getElementById("correo");
	const celular = document.getElementById("celular");
	const tel = document.getElementById("telefono");
	const tipoContacto = document.getElementById("tipoContacto");
	const permisoWebstore = document.getElementById("permisoWebstore");
	const permisoCrearOrdenes = document.getElementById("permisoCrearOrdenes");
	const permisoEnvioInformacion = document.getElementById("permisoEnvioInformacion");

	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if (usuario.value.length > 6) {
		alert("Debe ingresar maximo 6 caracteres ");
		usuario.focus();
		return false;
	}
	if (nombre.value.length < 5 || nombre.value.length > 15) {
		alert("El nombre debe contener entre 5 y 15 caracteres ");
		nombre.focus();
		return false;
	}
	if (cargo.value.length < 5 || cargo.value.length > 15) {
		alert("El cargo debe contener entre 5 y 15 caracteres ");
		cargo.focus();
		return false;
	}
	if (tel.value.length !== 7) {
		alert("El telefono debe contener 7 caracteres")
		return false
	}
	if (emailRegex.test(correo.value)) {

	} else {
		alert("Email Invalido, porfavor ingreselo de nuevo")
		return false
	}
	if (isNaN(celular.value)) {
		alert("Número de Celular invalido")
		return false
	} {
		if (celular.value.length < 7) {
			alert("numero de celular invalido")
			return false
		}
	}
	if (tel.value.length == !7) {
		alert("El telefono debe contener 7 caracteres")
		return false
	}

	if (isNaN(tel.value)) {
		alert("Número de telefono invalido")
		return false
	} if (permisoWebstore.checked) {
		permisoWebstore.value = true
	}
	else {
		permisoWebstore.value = false
	}

	if (permisoCrearOrdenes.checked) {
		permisoCrearOrdenes.value = true
	}
	else {
		permisoCrearOrdenes.value = false
	}
	if (permisoEnvioInformacion.checked) {
		permisoEnvioInformacion.value = true
	}
	else {
		permisoEnvioInformacion.value = false
	}
	const informacion = {
		usuario: "XMX" + usuario.value,
		nombre: nombre.value,
		cargo: cargo.value,
		telefono: "+57" + tel.value,
		correo: correo.value,
		celular:celular.value,
		tipoContacto: tipoContacto.value,
		permisoWebstore: permisoWebstore.value,
		permisoCrearOrdenes: permisoCrearOrdenes.value,
		permisoEnvioInformacion: permisoEnvioInformacion.value,
		claveAleatoria:createPassword()
	}
	users.push(informacion)
	limpiarForm()
	TableUsers()
	return false
}

