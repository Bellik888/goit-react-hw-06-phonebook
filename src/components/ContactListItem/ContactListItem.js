import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/actions';
import { getContacts, getFilter } from '../../redux/contacts/selectors';

const ContactListItem = () => {
  //======redux==========
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      {filter === ''
        ? contacts.map(({ name, number, id }) => (
            <li key={id} className={s.item}>
              <p>
                {name} : {number}
              </p>
              <button
                type="button"
                className={s.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))
        : contacts.map(
            ({ name, number, id }) =>
              name.toLowerCase().includes(filter.toLowerCase()) && (
                <li key={id} className={s.item}>
                  <p>
                    {name} : {number}
                  </p>
                  <button
                    type="button"
                    className={s.button}
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </button>
                </li>
              ),
          )}
    </>
  );
};

ContactListItem.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  deleteItem: PropTypes.func,
};

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onDelete: del => dispatch(deleteContact(del)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem)
export default ContactListItem;
