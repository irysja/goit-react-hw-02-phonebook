
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = ({ handleNameChange, handleNumberChange, handleSubmit }) => {
  const [name, setName] = useState(''); 
  const [number, setNumber] = useState('');

  const handleNameInputChange = (event) => {
    setName(event.target.value);
    handleNameChange(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNumber(event.target.value);
    handleNumberChange(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmitForm}>
      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameInputChange} 
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberInputChange} 
        />
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;



 




