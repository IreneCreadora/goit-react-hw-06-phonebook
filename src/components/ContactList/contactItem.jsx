import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import propTypes from 'prop-types';
import {
  ContactItemStyled,
  Wrapper,
  DeleteBtn,
  Info,
  Notes,
} from '../Component.styled';

const ContactItem = ({ contact }) => {
  const { id, name, number, notes, birthDate, importantContact, relation } =
    contact;
  const dispatch = useDispatch();

  return (
    <ContactItemStyled>
      <Wrapper>
        <p>
          {importantContact ? <span> * </span> : ''}
          {name}
        </p>
        <p>{number}</p>
        <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </DeleteBtn>
      </Wrapper>
      <Info>
        <p>{relation}</p>
        <p>birthday: {birthDate}</p>
      </Info>
      <Notes>{notes}</Notes>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    notes: propTypes.string.isRequired,
    birthDate: propTypes.string.isRequired,
    relation: propTypes.string.isRequired,
    importantContact: propTypes.bool.isRequired,
  }),
  // onDelete: propTypes.func.isRequired,
};

export default ContactItem;
