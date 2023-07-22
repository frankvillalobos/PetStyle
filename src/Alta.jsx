import React from 'react';
import AltaForm from './components/Formularios/AltaForm';
import '../src/assets/styles/alta.scss';

const Alta = () => {
    return (
        <main>
            <div className='form__container'>
                <AltaForm />
            </div>
        </main>
    );
}

export default Alta;