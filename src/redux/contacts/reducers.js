import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';

const initState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsList = createReducer(initState, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
export const contactFilter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

// export const contactsList = (state = initState, action) => {
// switch (action.type) {
//     case 'contact/add':
//         return [...state, action.payload];
//        case 'contact/delete':
//         return state.filter(contact => contact.id !== action.payload.id)
//     default:
//         return state;
// }

// }
// export const contactFilter = (state = '', action) => {
//     return state;
// }
