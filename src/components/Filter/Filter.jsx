import { useDispatch, useSelector } from 'react-redux';

import css from './filter.module.css';

import { setFilter } from 'redux/filter/filterSlice';
import { selectStatusFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.forma}>
      <label className={css.nameNumber}>
        Find contacts by name
        <input
          type="text"
          name={filter}
          value={filter}
          onChange={onChange}
          placeholder="Please write name"
          className={css.pole}
        />
      </label>
    </div>
  );
}
