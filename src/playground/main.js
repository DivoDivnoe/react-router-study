class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }

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

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption(option) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(item => item !== option)
      };
    });
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);

    console.log(this.state.options[random]);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.includes(option)) {
      return 'This option already exists';
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />{' '}
        <Action
          hasOptions={!!this.state.options.length}
          handlePick={this.handlePick}
        />{' '}
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />{' '}
        <AddOption handleAddOption={this.handleAddOption} />{' '}
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1> {props.title} </h1> {props.subtitle && <h2> {props.subtitle} </h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> {this.props.title} </h1> <h2> {this.props.subtitle} </h2>{' '}
//       </div>
//     );
//   }
// }

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do ?
      </button>{' '}
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.handlePick}
//         >
//           What should I do ?
//         </button>{' '}
//       </div>
//     );
//   }
// }

const Option = props => {
  return (
    <div>
      {props.option}
      <button
        onClick={evt => {
          props.handleDeleteOption(props.option);
        }}
      >
        remove
      </button>
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     return <div> {this.props.option} </div>;
//   }
// }

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}> Remove All </button>{' '}
      {!props.options.length && <p>Please, add an option to get started</p>}
      {props.options.map(option => (
        <Option
          option={option}
          handleDeleteOption={props.handleDeleteOption}
          key={option}
        />
      ))}
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>
//           {' '}
//           Remove All{' '}
//         </button>{' '}
//         {this.props.options.map(option => (
//           <Option option={option} key={option} />
//         ))}{' '}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      error: undefined
    };
  }

  submitHandler(evt) {
    evt.preventDefault();

    const value = evt.target.elements.newOption.value.trim();
    const error = this.props.handleAddOption(value);

    this.setState(() => ({error}));

    if (!error) evt.target.elements.newOption.value = '';
  }

  render() {
    return (
      <div>
        {' '}
        {this.state.error && <p> {this.state.error} </p>}{' '}
        <form action="#" onSubmit={this.submitHandler}>
          <input type="text" name="newOption" />
          <button type="submit"> Add option </button>{' '}
        </form>{' '}
      </div>
    );
  }
}

const User = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

ReactDOM.render(
  <IndecisionApp options={['option one', 'option two']} />,
  document.querySelector('#app')
);
