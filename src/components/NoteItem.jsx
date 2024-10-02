import React from 'react';
import NoteItemActionButton from './NoteItemActionButton';
import NoteItemBody from './NoteItemBody';
import NoteItemCreatedAt from './NoteItemCreatedAt';
import NoteItemTitle from './NoteItemTitle';

function NoteItem({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <NoteItemTitle title={title} />
        <NoteItemCreatedAt createdAt={createdAt} />
        <NoteItemBody body={body} />
      </div>
      <NoteItemActionButton
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}

export default NoteItem;
