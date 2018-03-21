import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <header className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={props.handleDeleteOptions}>
        Remove All
      </button>
    </header>
    {!props.options.length && (
      <p className="widget__message">Please, add an option to get started</p>
    )}
    {props.options.map((option, index) => (
      <Option
        option={option}
        handleDeleteOption={props.handleDeleteOption}
        key={option}
        count={index + 1}
      />
    ))}
  </div>
);

export default Options;
