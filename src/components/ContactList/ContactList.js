import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { ContactItem } from './ContactItem';
import { useGetContactsQuery } from 'redux/itemSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/itemSelectors';

const ContactList = () => {
  const { data = [] } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

  const filteredList = () => {
    const normalizedList = filter.toLowerCase().trim();
    return data.filter(contacts => contacts.name.toLowerCase().includes(normalizedList))
  }
const contactsList = filteredList();

    return (
      <ul className={s.contactsList}>
        {contactsList.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
            />
          );
        })}
      </ul>
    );
  };
  
  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };
  
  export default ContactList;