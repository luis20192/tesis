export default function validar(values){
    let errors = {};
    //nombre
    if (!values.unombre) {
        errors.unombre = "Nombre es requerido"
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


    return errors;
}