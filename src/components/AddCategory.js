import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>{ inputValue }</h2>
            <div className="form__group field">
                <input 
                    type="text" 
                    className="form__field" 
                    placeholder="" 
                    name="name" 
                    onChange={ handleInputChange }
                    id='name' />
                <label htmlFor="name" className="form__label">Nombre</label>
            </div>
            {/* <button className="button-63" onClick={ handleApp }> Agregar </button> */}

        </form>
    );
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
} 