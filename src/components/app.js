import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm.js';
import ContactList from './ContactList.js';
import Filter from './Filter.js';
import { nanoid } from 'nanoid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      name: '',
      number: '',
      filter: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ number: event.target.value });
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number, contacts } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and phone number.');
      return;
    }

    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in the contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
          handleSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} handleDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

// Prop types validation for the App component
App.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default App;
