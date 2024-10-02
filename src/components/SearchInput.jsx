import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className='note-search'>
        <input
          placeholder='Cari catatan...'
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
      </div>
    );
  }
}

export default SearchInput;
