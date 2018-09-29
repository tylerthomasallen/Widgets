import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

  }

  componentDidMount() {
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h1>In Clock!</h1>

        <div className="clock">
          <ul>
            <li>{date.getHours() % 12}</li>
            <li>{date.getMinutes()}</li>
            <li>{date.getSeconds()}</li>
          </ul>

        </div>


      </div>
    );
  }

}

export default Clock;
