import React from 'react';


class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
  }

  handleClick(idx) {
    this.setState({currentTab: idx});

  }

  handleClass(idx) {
    return idx === this.state.currentTab ? 'active' : '';
  }


  render () {
    const { content } = this.props;



    return (
      <div className="tabs">

        <div className="tabs-header">
          <ul>
            {content.map((el, idx) => {
              return <li
                key={idx}
                onClick={() => this.handleClick(idx)}
                className={this.handleClass(idx)}
                >{el.title}</li>;
            })}
          </ul>
        </div>

        <div className="tabs-content">
          <p>{content[this.state.currentTab].content}</p>
        </div>

      </div>
    );
  }
}

export default Tabs;
