import React from 'react';
import Navbar from './Navbar';
import NoteInput from './NoteInput';
import { getInitialData } from '../utils';
import NoteList from './NoteList';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      unFilteredNotes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
        unFilteredNotes: [
          ...prevState.unFilteredNotes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
        unFilteredNotes: prevState.unFilteredNotes.filter(
          (note) => note.id !== id
        ),
      };
    });
  }

  onArchiveHandler(id) {
    const noteToArchive = this.state.unFilteredNotes.filter(
      (note) => note.id === id
    )[0];
    const archivedNote = {
      ...noteToArchive,
      archived: !noteToArchive.archived,
    };

    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes.filter((note) => note.id !== id),
          archivedNote,
        ],
        unFilteredNotes: [
          ...prevState.unFilteredNotes.filter((note) => note.id !== id),
          archivedNote,
        ],
      };
    });
  }

  onSearchHandler(title) {
    if (title.length !== 0 && title.trim() !== '') {
      this.setState({
        notes: this.state.unFilteredNotes.filter((note) =>
          note.title.toLowerCase().includes(title.toLowerCase())
        ),
      });
    } else {
      this.setState({
        notes: this.state.unFilteredNotes,
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar notes={this.state.notes} searchNote={this.onSearchHandler} />
        <div className='note-app__body'>
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default NotesApp;
