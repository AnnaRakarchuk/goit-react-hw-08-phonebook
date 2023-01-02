import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';

export const Filter =() =>{
  const dispatch = useDispatch();

  const onFilterHandler = e =>{
    const filterValue = e.target.value;
    dispatch(filterContacts(filterValue));
  };
  return (
    <>
      <label className={css.filter__label}>
        Find contacts by name
        <input
          className={css.filter__input}
          type="text"
          name="search"
          onChange={onFilterHandler}
        />
      </label>
    </>
  );
}
