import React from 'react';
import NoteItem from './NoteItem';
import EmptyMessage from './EmptyMessage';

function NoteActiveList({ notes, onDelete, onArchive }) {
  const ActiveNotes = notes.filter((note) => note.archived === false);
  return (
    <>
      {ActiveNotes.length > 0 ? (
        <div className='notes-list'>
          {ActiveNotes.map((note) => (
            <NoteItem
              key={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      ) : (
        <EmptyMessage />
      )}
    </>
  );
}

export default NoteActiveList;
