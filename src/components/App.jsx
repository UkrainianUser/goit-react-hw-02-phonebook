import React from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList"
import { nanoid } from 'nanoid';

class App extends React.Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: ''
    }));
  };

  handleChangeFilter = evt => {
    this.setState({filter: evt.currentTarget.value});
  };

  isNameExist = (name) => {
    return this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  render () {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} isNameExist={this.isNameExist} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList contacts={this.state.contacts} filter={this.state.filter} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
};


export default App;