import React from 'react';

const Form = ({ onSubmit }) => {

    const getValue = (e) => {
        e.preventDefault();
        const value = document.getElementById('username-input').value;
        onSubmit(value);
    }

    return (
        <form className="container form">
            <input id="username-input" type="text" placeholder="Github username" />
            <button onClick={getValue}></button>
        </form>
    );
}

export default Form;