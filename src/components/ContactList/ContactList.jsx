import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from './ListItem/ListItem';
import { fetchContacts } from '../../redux/operations';

export const ContactList = () => {
  const { contactsArray, isLoading, error } = useSelector(
    state => state.contacts
  );
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul>
      <p style={{ display: 'none' }}>
        {isLoading}
        {error}
      </p>
      {contactsArray
        .filter(item => item.name.toLowerCase().includes(filter))
        .map(item => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.phone}
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
