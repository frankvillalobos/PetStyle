import { useState } from "react";

const useForm = (initialData, onValidate) => {

    const [form, setForm] = useState(initialData);
    
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]:value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const error = onValidate(form)
        setErrors(error)

        if (Object.keys(error).length === 0) {
            setForm(initialData)
        }
    }

    return { form, errors, handleChange, handleSubmit }
}

export default useForm;