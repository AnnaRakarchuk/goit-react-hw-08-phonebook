import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css'

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const normalizedName = name.toLowerCase();
    const number = form.elements.number.value;

    const checkByName = contactList.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (checkByName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      name,
      number,
    };

    dispatch(addContact(newContact));
    form.reset();
  }

  return (
    <div className={css.contacts}>
      <h2 className={css.contacts__title}>Add new contacts</h2>
      <form className={css.contacts__form} onSubmit={onFormSubmit}>
        <label className={css.contacts__label}>
          Name
          <input
            className={css.contacts__input}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.contacts__label}>
          Phone
          <input
            className={css.contacts__input}
            type="tel"
            name="number"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.contacts__button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};