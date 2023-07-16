import React from 'react';
import useForm from './useForm';

const ContactForm = () => {

  const initialData = {
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  }

  const onValidate = (form) => {
    let errors = {}
    let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexCorreo = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexMensaje = /^.{1,255}$/;
    let regexTelefono = /^\d{10}$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo Nombre no debe estar vacío'
    } else if (!regexNombre.test(form.nombre)){
      errors.nombre = 'El campo Nombre solo acepta letras y espacios'
    }
    if (!form.correo.trim()) {
      errors.correo = 'El campo Correo no debe estar vacío'
    } else if (!regexCorreo.test(form.correo)){
      errors.correo = 'El correo no es válido'
    }
    if (!form.telefono.trim()) {
      errors.telefono = 'El campo Telefono no debe estar vacío'
    } else if (!regexTelefono.test(form.telefono)){
      errors.telefono = 'El número de teléfono debe contener 10 números'
    }
    if (!form.mensaje.trim()) {
      errors.mensaje = 'El campo Mensaje no debe estar vacío'
    } else if (!regexMensaje.test(form.mensaje)){
      errors.mensaje = 'El mensaje puede ocntener un máximo de 255 caracteres'
    }

    return errors
  }

  const { form, errors, handleChange, handleSubmit } = useForm(initialData, onValidate)

  return (
    <form onSubmit={ handleSubmit }>
      <div className='contactForm__input--box'>
        <input type='text' value={ form.nombre } name='nombre' className='contactForm__input' onChange={ handleChange } />
        <label>Nombre</label>
        {errors.nombre && <div className='contactForm__input--error'>{ errors.nombre }</div>}
      </div>
      <div className='contactForm__input--box'>
        <input type='email' value={ form.correo } name='correo' className='contactForm__input' onChange={ handleChange } />
        <label>Correo</label>
        {errors.correo && <div className='contactForm__input--error'>{ errors.correo }</div>}
      </div>
      <div className='contactForm__input--box'>
        <input type='text' value={ form.telefono } name='telefono' className='contactForm__input' onChange={ handleChange } />
        <label>Teléfono</label>
        {errors.telefono && <div className='contactForm__input--error'>{ errors.telefono }</div>}
      </div>
      <div className='contactForm__input--box'>
        <textarea name='mensaje' value={ form.mensaje } className='contactForm__input' onChange={ handleChange } />
        <label>Mensaje</label>
        {errors.mensaje && <div className='contactForm__input--error'>{ errors.mensaje }</div>}
      </div>
      {/* <button type="button" onClick={enviarFormulario}>
        Envia
      </button> */}
      <div class="contactForm__input--box">
        <input class="contactForm__button" type="submit" value="Enviar" />
      </div>
    </form>
  );
};

export default ContactForm;
