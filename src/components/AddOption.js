import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  submitHandler = evt => {
    evt.preventDefault();

    const value = evt.target.elements.newOption.value.trim();
    const error = this.props.handleAddOption(value);

    this.setState(() => ({error}));

    if (!error) evt.target.elements.newOption.value = '';
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option__error"> {this.state.error} </p>}
        <form className="add-option" action="#" onSubmit={this.submitHandler}>
          <input className="add-option__input" type="text" name="newOption" />
          <button className="button" type="submit">
            Add option
          </button>
        </form>
      </div>
    );
  }
}
