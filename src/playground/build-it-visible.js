class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.toggleHandler = this.toggleHandler.bind(this);
    this.state = {
      visible: false
    };
  }

  toggleHandler() {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleHandler}>
          {this.state.visible ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visible && (
          <p>Hey. These are some details you can now see!</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.querySelector('#app'));

// const root = document.querySelector('#app');

// let hidden = true;
// const toggleHandler = () => {
//   hidden = !hidden;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
// <h1>Visibility Toggle</h1>
// <button onClick={toggleHandler}>
//   {hidden ? 'Show details' : 'Hide details'}
// </button>
// {!hidden && <p>Hey. These are some details you can now see!</p>}
//     </div>
//   );

//   ReactDOM.render(template, root);
// };

// render();
