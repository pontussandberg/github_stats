import React from 'react';

const Form = ({ onSubmit, isInvalid }) => {

    const getValue = (e) => {
        e.preventDefault();
        const value = document.getElementById('username-input').value;
        onSubmit(value);
    }

    return (
        <form autoComplete="off" className="container form">
            <div className={isInvalid ? 'form__invalid form__input-wrapper' : 'form__input-wrapper'}>
                <input autoComplete="off" className="form__input" id="username-input" type="text" placeholder="Github username" />
                <button className="form__btn" onClick={getValue}></button>
            </div>
        </form>
    );
}

export default Form;