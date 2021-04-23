export default function validar(values){
    let errors = {};

    if (!values.codigo){
        errors.codigo = "Codigo es requerido";
    } else if (values.codigo.length > 2){
        errors.codigo = "Codigo no debe contener más de dos carácteres";
    } else if (values.codigo != values.debe){
        errors.codigo = "Codigo debe ser el mismo que debe"
    }
    if (!values.debe) {
        errors.debe = "Debe es requerido";
    } else if (values.debe.length < 1) {
        errors.debe = "Gasta más"
    } 

    return errors;
}