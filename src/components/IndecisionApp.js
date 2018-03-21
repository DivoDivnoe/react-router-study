import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import User from './User';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: null
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');

      if (json) this.setState(() => ({options: JSON.parse(json)}));
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length === this.state.options.length) return false;

    localStorage.setItem('options', JSON.stringify(this.state.options));
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleResetSelectedOption = () => {
    this.setState(() => ({
      selectedOption: null
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  };

  handleDeleteOption = option => {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(item => item !== option)
      };
    });
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];

    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.includes(option)) {
      return 'This option already exists';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  };

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={!!this.state.options.length} handlePick={this.handlePick} />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleResetSelectedOption={this.handleResetSelectedOption}
          />
        </div>
      </div>
    );
  }
}
