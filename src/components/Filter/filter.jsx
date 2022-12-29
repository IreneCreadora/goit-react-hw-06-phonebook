// import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { FilterStyled, FilterInput } from '../Component.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterStyled>
      <span>Find contact by name </span>
      <FilterInput
        type="text"
        placeholder="enter name or phone number..."
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </FilterStyled>
  );
};

// Filter.propTypes = {
//   title: propTypes.string.isRequired,
//   // value: propTypes.string.isRequired,
//   // onChange: propTypes.func.isRequired,
// };

export default Filter;
