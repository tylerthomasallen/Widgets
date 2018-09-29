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

        <div className="clock">
          <ul>
            <li>Clock</li>
            <li>Hours: {date.getHours() % 12}</li>
            <li>Minutes: {date.getMinutes()}</li>
            <li>Seconds: {date.getSeconds()}</li>
          </ul>

        </div>


      </div>
    );
  }

}

export default Clock;
