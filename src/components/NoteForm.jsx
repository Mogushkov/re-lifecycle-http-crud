import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default class NoteForm extends Component {
  state = { text: '' };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(nanoid(), this.state.text);
    this.setState({ text: '' });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="NoteForm" onSubmit={this.handleSubmit}>
        <label>
          <div>
            New Note
          </div>
          <textarea
            className="NoteForm-textarea"
            onChange={this.handleChange}
            name="text"
            value={this.state.text}
            required
          />
        </label>
        <button className="NoteForm-button" />
      </form>
    );
  }
}

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired,
};