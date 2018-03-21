console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const formSubmitHandler = evt => {
  evt.preventDefault();

  const option = evt.target.elements.option.value;

  if (option) {
    app.options.push(option);
    evt.target.elements.option.value = '';

    renderApp();
  }
};

const removeAllHandler = () => {
  app.options = [];

  renderApp();
};

const makeDesisionHandler = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const root = document.querySelector('#app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
      <button disabled={!app.options.length} onClick={makeDesisionHandler}>
        What should I do?
      </button>
      <button onClick={removeAllHandler}>Remove All</button>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
      <form action="#" onSubmit={formSubmitHandler}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, root);
};

renderApp();
