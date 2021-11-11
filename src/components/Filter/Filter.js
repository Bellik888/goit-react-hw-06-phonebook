import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './Filter.module.css';

export const Filter = ({ handleChangeFilter, filter }) => {
  let inputFilterID = shortid();

  return (
    <div className={s.wrapper}>
      <label htmlFor={inputFilterID}>Find contacts by name</label>
      <input
        id={inputFilterID}
        name={filter}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
