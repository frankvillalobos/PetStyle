import { useState } from "react";

const useForm = (initialData, onValidate) => {

    const [form, setForm] = useState(initialData);
    
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newValue = type === 'file' ? e.target.files[0] : value; 
        setForm({ ...form, [name]: newValue });
      };

    const handleBlur = (e) => {
        const { name } = e.target;
        const error = onValidate(form);
        setErrors({ ...errors, [name]: error[name] });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        const error = onValidate(form)
        setErrors(error)

        if (Object.keys(error).length === 0) {
            setForm(initialData)
        }
    }

    return { form, errors, handleChange, handleSubmit, handleBlur }
}

export default useForm;