import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/operations';
import css from './ListItem.module.css';

export const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.liFlex}>
      {name} : {number}
      <button type="button" onClick={e => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
