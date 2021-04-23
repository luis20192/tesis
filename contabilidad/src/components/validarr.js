
export default function validar(values){
    let errors = {};
    //Cuentas
    if (!values.Cuenta){
        errors.Cuenta = "Cuenta es requerido";
    } else if (values.Cuenta.length < 3){
        errors.Cuenta = "Cuenta debe tener más de 2 carácteres";
    } else if ( values.Cuenta < 0 ) {
        errors.Cuenta = "Cuenta no debe tener un valor menor a 0";
    }
    if (!values.cuenta) {
        errors.cuenta = "cuenta es requerido";
    } else if (values.cuenta.length < 3) {
        errors.cuenta = "cuenta debe tener más de 2 carácteres";
    } else if (values.cuenta === values.Cuenta) {
        errors.cuenta = "Las cuentas no pueden ser las mismas!";
    } else if ( values.cuenta < 0) {
        errors.cuenta = "Cuenta no debe tener un valor menor a 0";
    }
    // Descripcion
    if (!values.Descripcion) {
        errors.Descripcion = "Descripción es requerido"
    }
    //Debe
    if (!values.Debe) {
        errors.Debe = "Debe es requerido";
    } else if (values.Debe < 0) {
        errors.Debe = "El valor no puede ser menor a 0";
    } else if(values.Debe !== values.haber){
        errors.Debe = "El Debe debe ser igual al haber del segundo asiento";
    } else if ( (values.Debe > 0) && (values.Haber != 0) ) {
        errors.Debe = "Si un campo es diferente de 0 el otro debe ser 0";
    }
    if (!values.debe) {
        errors.debe = "debe es requerido";
    } else if (values.debe < 0) {
        errors.debe = "El valor no puede ser menor a 0";
    }else if (values.debe !== values.Haber) {
        errors.debe = "El debe debe ser igual al Haber del primer asiento"
    }else if ( (values.debe > 0) && (values.haber != 0)) {
        errors.debe = "Si un campo es diferente de 0 el otro debe ser 0"
    }
    //Haber
    if (!values.Haber) {
        errors.Haber = "Haber es requerido"
    } else if (values.Haber < 0) {
        errors.Haber = "El valor no puede ser menor a 0"
    } else if (values.Haber !== values.debe) {
        errors.Haber = "El Haber debe ser igual al debe del segundo asiento"
    } 

    return errors;
}