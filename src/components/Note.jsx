import { Component } from 'react';
import NoteForm from './NoteForm';
import Notes from './Notes';

const serverURL = 'http://localhost:7777/notes';

export default class Note extends Component {
  state = { notes: [] };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(serverURL)
      .then(response => response.json())
      .then(result => {
        this.setState({
          notes: [...result]
        });
      });
  }

  postData = (id, content) => {
    const data = JSON.stringify({ id, content });
    fetch(serverURL, {
      method: 'POST',
      body: data,
    })
      .then(this.getData);
  }

  deleteData = (id) => {
    fetch(`${serverURL}/${id}`, {
      method: 'DELETE'
    })
      .then(this.getData);
  }

  render() {
    return (
      <div className="Note">
        <header className="Note-header">
          <h2>Notes</h2>
          <div className="Note-reload" onClick={this.getData} />
        </header>
        <ul className="Block-notes">
          {this.state.notes.map((note) =>
            <Notes key={note.id} content={note.content}>
              <div
                className="Note-delete"
                onClick={() => this.deleteData(note.id)}
              />
            </Notes>
          )}
        </ul>
        <NoteForm addNote={this.postData} />
      </div>
    );
  }
}