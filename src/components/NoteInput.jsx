import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className='note-app__body'>
        <div className='note-input'>
          <h2>Buat Catatan</h2>
          <form onSubmit={this.onSubmitEventHandler}>
            <input
              className='note-input__title'
              type='text'
              placeholder='Masukkan judul catatan...'
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <span className='note-input__title__char-limit'>
              Sisa Karakter: 50
            </span>
            <textarea
              className='note-input__body'
              name='body'
              id='body'
              placeholder='Tuliskan catatanmu disini...'
              rows='8'
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            ></textarea>
            <button type='submit'>Buat</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NoteInput;
