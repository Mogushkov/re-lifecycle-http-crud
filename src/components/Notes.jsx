import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notes extends Component {
  render() {
    return (
      <li className="Notes">
        <div className="Notes-container">
          <div className="Notes-content">
            {this.props.content}
          </div>
          {this.props.children}
        </div>
      </li>
    );
  }
}

Notes.propTypes = {
  content: PropTypes.string.isRequired,
};