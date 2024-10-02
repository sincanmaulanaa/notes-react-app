import React from 'react';
function NoteItemActionButton({ id, onDelete, onArchive, archived }) {
  return (
    <div className='note-item__action'>
      <button className='note-item__delete-button' onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button
        className='note-item__archive-button'
        onClick={() => onArchive(id)}
      >
        {archived ? 'Pindahkan' : 'Arsipkan'}
      </button>
    </div>
  );
}

export default NoteItemActionButton;
