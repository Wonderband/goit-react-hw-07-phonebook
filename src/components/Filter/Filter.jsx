import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const filterHandle = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        className={css.input}
        title="Find the name!"
        value={filter}
        onChange={filterHandle}
      />
    </>
  );
};
