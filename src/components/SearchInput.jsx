import React from 'react';

function SearchInput({ searchNote }) {
  const onSearchEventChange = (event) => {
    searchNote(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className='note-search'>
      <input
        type='text'
        placeholder='Cari catatan...'
        onChange={onSearchEventChange}
      />
    </div>
  );
}

export default SearchInput;
