import React from "react";
import css from "./ContactList.module.css";

const ContactList = ({contacts, filter, onDeleteContact}) => {

	const normalizedFilter = filter.toLowerCase();
	const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

	return (
		<ul className={css.contactsList}>
			{filteredContacts.map(contact => (
				<li className={css.contactsItem} key={contact.id}>
					<span>{contact.name}:</span> <span>{contact.number}</span>
					<button className={css.contactsBtn} type="button" onClick={()=>onDeleteContact(contact.id)}>Delete</button>
					</li>
			))}
		</ul>
	)
};

export default ContactList;