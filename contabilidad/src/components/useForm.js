import react, {useState, useEffect} from "react";

const useForm = (callback, validar) => {
    const [values, setValues] = useState( {codigo: "", debe: ""} );
    const [errors, setErrors] = useState( {} );
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event =>{
        const {name, value} = event.target;

        console.log(event.target.name);
        console.log(event.target.value);
        setValues(
            {
            ...values,
            [name]: value
        }
        )
    };

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validar(values)); 
        setIsSubmitting(true);
        //callback();
    };

    useEffect(()=>{
        if (Object.keys(errors).length === 0 && isSubmitting){
            callback();
        }
    }, [errors]);

    return{
        handleChange,
        handleSubmit,
        values,
        errors
    }
};

export default useForm;