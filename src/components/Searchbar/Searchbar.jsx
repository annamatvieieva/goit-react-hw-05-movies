import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const notify = () => {
    toast.error('You did not enter anything to search for...');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (value.trim() === '') {
      notify();
    } else {
      onSubmit(value);
      e.target.reset();
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </SearchForm>
      <ToastContainer />
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
