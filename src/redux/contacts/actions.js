import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add');
export const deleteContact = createAction('contact/delete');
export const filterContact = createAction('filter/value');

// export const addContact = (contact) => ({
//     type: 'contact/add',
//     payload: contact,
// })
// export const deleteContact = (id) => ({
//     type: 'contact/delete',
//     payload: {id},
// })
// export const filterContact = value => ({
//     type: 'filter/value',
//     payload:value,
// })
