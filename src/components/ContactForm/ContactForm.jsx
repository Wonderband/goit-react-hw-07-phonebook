import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
// import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value.trim(),
      phone: e.target.number.value,
      // id: nanoid(),
    };
    dispatch(addContact(newContact));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className={css.label}>
        Name:
        <input
          type="text"
          name="name"
          className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Phone:
        <input
          type="tel"
          name="number"
          className={css.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact!</button>
    </form>
  );
};
