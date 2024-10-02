import React from 'react';
import NoteItem from './NoteItem';
import EmptyMessage from './EmptyMessage';

function NoteArchiveList({ notes, onDelete, onArchive }) {
  const archivedNotes = notes.filter((note) => note.archived === true);
  return (
    <>
      {archivedNotes.length > 0 ? (
        <div className='notes-list'>
          {archivedNotes.map((note) => (
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

export default NoteArchiveList;
