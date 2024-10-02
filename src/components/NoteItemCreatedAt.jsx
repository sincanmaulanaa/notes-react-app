import React from 'react';

function NoteItemCreatedAt({ createdAt }) {
  const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <span className='note-item__date'>{formattedDate}</span>;
}

export default NoteItemCreatedAt;
