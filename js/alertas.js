function preguntarRecaudar() {
	if(confirm("Desea recaudar la mensualidad ?")){
		return true;
	}
	else{
		return false;
		}
}

function preguntarNC() {
	if(confirm("Los datos son correctos?")){
		return true;
	}
	else{
		return false;
		}
}


function validarContrasenas(form)
{
    if(form.password.value == form.confirmarpassword.value)
    { form.submit();
	alert("Registro exitoso");
	}
    else
    {
		
    alert("La contraseña no coincide.");
    return false;
    }
}
   