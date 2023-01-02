import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './Contacts.module.css';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={css.contactsList__wrap}>
        <p className={css.contactsList__name}>{contact.name}: </p>
        <span>{contact.number}</span>
      </div>
      <button
        className={css.contactsList__button}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </>
  );
};