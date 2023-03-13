import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

import { FaSearch } from 'react-icons/fa';
import { Formik, Form } from 'formik';

const initialValues = {
  name: '',
};

export const SearchBar = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
    console.log(action);
  };

  return (
    <Searchbar>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm autoComplete="off">
          <SearchFormButton type="submit">
            <FaSearch size={20} />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="name"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Searchbar>
  );
};
