import React from 'react';
import NoteActiveList from './NoteActiveList';
import NoteArchiveList from './NoteArchiveList';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div>
      <h2>Catatan Aktif</h2>
      <NoteActiveList notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      <NoteArchiveList
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteList;
