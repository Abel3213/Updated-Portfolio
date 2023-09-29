import React, { useState, useRef } from 'react';

import { validateEmail } from '../../utils/helpers';

import emailjs from '@emailjs/browser';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILID,
        process.env.REACT_APP_EMAILTEMP,
        form.current,
        process.env.REACT_APP_EMAILKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contactform'>
      <form ref={form} id='form' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='formtext'>
            Name:
          </label>
          <input
            type='text'
            name='name'
            defaultValue={name}
            onBlur={handleChange}
            className='form-control'
            id='name'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='formtext'>
            Email address
          </label>
          <input
            type='email'
            name='email'
            defaultValue={email}
            onBlur={handleChange}
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='input-group'>
          <span className='input-group-text formtext'>Message</span>
          <textarea
            className='form-control'
            aria-label='With textarea'
            name='message'
            id='messages'
            rows='5'
            defaultValue={message}
            onBlur={handleChange}
          ></textarea>
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button type='submit' className='btn' id='formbtn'>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
