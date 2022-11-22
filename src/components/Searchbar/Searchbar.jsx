import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Searchbar = ({  onSubmit }) => {

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          // value={value}
          placeholder="Search movies"
          // onChange ={(e) => onChange(e.target.value)}
				/>
				<button type="submit">Search</button>
      </form>
      <ToastContainer />
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
