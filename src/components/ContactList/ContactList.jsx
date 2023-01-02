import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Contacts } from '../Contacts/Contacts';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function getFiltredContacts() {
    if (!filter) {
      return contactList;
    }

    const normalizedFilter = filter.toLowerCase();

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getFiltredContacts();

  return (
    <div className={css.contactsList}>
      <h2 className={css.contactsList__title}>Contacts list</h2>
      <ul className={css.contactsList__list}>
        {visibleContacts.map(contact => (
          <li className={css.contactsList__item} key={contact.id}>
            <Contacts contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};