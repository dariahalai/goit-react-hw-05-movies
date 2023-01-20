import { useState } from 'react';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      console.log('Please, enter correct search word!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <form   className={css.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={css.formInput}
        type="text"
        name="query"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button   className={css.btn} type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
