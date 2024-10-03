import React from 'react';
import SearchInput from './SearchInput';

function Navbar({ searchNote }) {
  console.log(searchNote);
  return (
    <div className='note-app__header'>
      <h1>Notesly</h1>
      <SearchInput searchNote={searchNote} />
    </div>
  );
}

export default Navbar;
