import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectStatusFilter } from 'redux/selectors';

import css from './contacts.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectStatusFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={css.contactListItem}>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.cont}>
            {name}: {number}
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.btnList}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
