import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch } from "react-icons/ai";

import { Section, Input, Btn } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.warn('Please, enter correct search word!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Btn type="submit"><AiOutlineSearch size='20'/></Btn>
      </form>
    </Section>
  );
};

export default Searchbar;
