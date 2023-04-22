import React from "react";

const ContactList = ({contacts, filter, onDeleteContact}) => {

	const normalizedFilter = filter.toLowerCase();
	const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

	return (
		<ul>
			{filteredContacts.map(contact => (
				<li key={contact.id}>
					{contact.name}: {contact.number}
					<button type="button" onClick={()=>onDeleteContact(contact.id)}>Delete</button>
					</li>
			))}
		</ul>
	)
};

export default ContactList;