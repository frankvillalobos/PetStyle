import React from 'react';
import useForm from './useForm';

const AltaForm = () => {

    const initialData = {
        nombreProducto: '',
        marca: '',
        categoria: '',
        stock: '',
        precio: '',
        cargo: '',
        imagen1: '',
        imagen2: '',
        descripcion: '',
    }

    const onValidate = (form) => {
        let errors = {}
        let regexNombreProducto = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,20}$/;
        let regexMarca = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,20}$/;
        let regexPrecio = /^[1-9][0-9]*$/;
        let regexDescripcion = /^.{1,255}$/;

        if (!form.nombreProducto.trim()) {
            errors.nombreProducto = '*Debe incluir un nombre del producto'
        } else if (!regexNombreProducto.test(form.nombreProducto)) {
            errors.nombreProducto = '*El nombre del producto solo acepta letras y espacios'
        }
        if (!form.marca.trim()) {
            errors.marca = '*Debe incluirse el nombre de la marca'
        } else if (!regexMarca.test(form.marca)) {
            errors.marca = '*La marca no es válida'
        }
        if (form.categoria === 'unvalue') {
            errors.categoria = '*Debe seleccionar una categoría';
          }
        if (!form.stock.trim()) {
            errors.stock = '*Debe incluirse una cantidad de stock'
        }
        if (!form.precio.trim()) {
            errors.precio = '*Debe incluir el precio'
        } else if (!regexPrecio.test(form.precio)) {
            errors.precio = '*El precio debe ser mayor a cero y en números enteros'
        }
        if (form.cargo === 'unvalue') {
            errors.cargo = '*Debe indicar si incluye cargo'; 
          }
        if (!form.imagen1 || (form.imagen1 instanceof File && !form.imagen1.name)) {
            errors.imagen1 = '*Debe incluir una imagen principal';
        }
        if (!form.descripcion.trim()) {
            errors.descripcion = '*Debe incluirse una descripción larga'
        } else if (!regexDescripcion.test(form.descripcion)) {
            errors.descripcion = '*La descripción corta no debe superar los 255 caracteres'
        }
        return errors
    }

    const { form, errors, handleChange, handleSubmit, handleBlur } = useForm(initialData, onValidate)

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Completá todos los datos</h2>
            <div className='form_field--container'>
                <div className='form__field'>
                    <label> Nombre del producto </ label>
                    <input 
                        type='text' 
                        value={form.nombreProducto} 
                        name='nombreProducto' 
                        onChange={handleChange}
                        onBlur={ handleBlur } 
                    />
                    {errors.nombreProducto && <div className='form__field--error'>{errors.nombreProducto}</div>}
                </div>
                <div className='form__field'>
                    <label> Marca </ label>
                    <input 
                        type='text' 
                        value={form.marca} 
                        name='marca' 
                        onChange={handleChange} 
                        onBlur={ handleBlur } 
                    />
                    {errors.marca && <div className='form__field--error'>{errors.marca}</div>}
                </div>
                <div className='form__field'>
                    <label> Categoría </ label>
                    <select className='form__field--categoria' name='categoria' id='categoria'>
                        <option value='unvalue' disabled selected> Elegí una opción </option>
                        <option value='gatos'>Gatos</option>
                        <option value='perros'>Perros</option>
                        <option value='otros'>Otros</option>
                    </select>
                    {errors.categoria && <div className='form__field--error'>{errors.categoria}</div>}
                </div>
                <div className='form__field'>
                    <label> Stock disponible </ label>
                    <input 
                        type='text' 
                        value={form.stock} 
                        name='stock' 
                        onChange={handleChange} 
                        onBlur={ handleBlur } 
                    />
                    {errors.stock && <div className='form__field--error'>{errors.stock}</div>}
                </div>
                <div className='form__field'>
                    <label> Precio </ label>
                    <input 
                        type='text' 
                        value={form.precio} 
                        name='precio' 
                        onChange={handleChange}
                        onBlur={ handleBlur }  
                    />
                    {errors.precio && <div className='form__field--error'>{errors.precio}</div>}
                </div>
                <div class="form__field">
                    <label> Cargo de envío </label>
                    <select className="form__field--envio" name="envio" id="envio">
                        <option value="unvalue" disabled selected> Elegí una opción </option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                    </select>
                    {errors.cargo && <div className='form__field--error'>{errors.cargo}</div>}
                </div>
                <div className='form__field'>
                    <label> Imagen principal </ label>
                    <input 
                        type='file' 
                        name='imagen1' 
                        onChange={ handleChange }
                        onBlur={ handleBlur } 
                    />
                    {errors.imagen1 && <div className='form__field--error'>{errors.imagen1}</div>}
                </div>
                <div className='form__field'>
                    <label> Imagen secundaria </ label>
                    <input 
                        type='file' 
                        name='imagen2' 
                        onChange={handleChange}
                        onBlur={ handleBlur }  
                    />
                    {errors.imagen2 && <div className='form__field--error'>{errors.imagen2}</div>}
                </div>
                <div className='form__field'>
                    <label> Descripción </label>
                    <textarea 
                        name='descripcion' 
                        value={form.descripcion} 
                        onChange={handleChange} 
                        onBlur={ handleBlur } 
                    />
                    {errors.descripcion && <div className='form__field--error'>{errors.descripcion}</div>}
                </div>
            </div>
            <div class="form__boton">
                <input className='boton' type="submit" value="Enviar" />
            </div>
        </form>
    );
};

export default AltaForm;