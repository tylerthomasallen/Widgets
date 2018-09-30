import React from 'react';

class AutoComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
  }

  componentDidMount() {
    document.getElementsByName('autocomplete-input')[0].addEventListener('input', (e) => {
      return this.handleInput(e);
    });
  }

  handleInput(e) {
    if (e.data === null) {
      this.setState({inputVal: this.state.inputVal.slice(1)});
      console.log(this.state.inputVal);
    } else {
      this.setState({inputVal: this.state.inputVal += e.data});
      console.log(this.state.inputVal);
    }

  }

  render() {
    const { names } = this.props;

    return (
      <div className="autocomplete">
        <input type="text" name="autocomplete-input"></input>
        <ul>
          {names.map((name, idx) => {
            if (name.includes(this.state.inputVal)) {
              return <li key={idx}>{name}</li>;
            }
          }) }
        </ul>

      </div>
    );
  }
}

export default AutoComplete;
