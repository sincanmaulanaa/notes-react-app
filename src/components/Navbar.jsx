import React from 'react';
import SearchInput from './SearchInput';

function Navbar() {
  return (
    <div className='note-app__header'>
      <h1>Notesly</h1>
      <SearchInput />
    </div>
  );
}

export default Navbar;
