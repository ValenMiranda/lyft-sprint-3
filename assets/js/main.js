function validar{
	if (phone.value != '') {
		if (parseInt(phone.value.trim()).toString().length == 9 && phone.value.trim().length == 9) {			
			alert('Gracias por registrarte!');
			phone.value = '';
		} else {
			alert('El número debe contener 9 dígitos');
		}
	} else {
		alert('Teléfono requerido');
	}
}