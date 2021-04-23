export default function validar(values){
    let errors = {};
    //nombre
    if (!values.nombre) {
        errors.nombre = "Nombre es requerido"
    }
    //codigo
    if (!values.codigo) {
        errors.codigo = "Codigo es requerido"
    } else if (values.codigo.length < 5) {
        errors.codigo = "Codigo debe tener 5 carácteres o más"
    } else if (values.codigo < 0) {
        errors.codigo = "Codigo no debe ser menor a 0"
    }
    //codigo2
    if (!values.codigo2) {
        errors.codigo2 = "codigo es requerido"
    } else if (values.codigo2.length != 4) {
        errors.codigo2 = "Codigo debe tener 4 carácteres"
    } else if (values.codigo2 < 0) {
        errors.codigo2 = "Codigo no debe ser menor a 0"
    }

    return errors;
}