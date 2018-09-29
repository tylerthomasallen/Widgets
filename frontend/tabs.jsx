import React from 'react';


class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
  }

  
  render () {
    const { content } = this.props;


    return (
      <div className="tabs">
        <h1>Tabs</h1>

        <div className="tabs-header">
          <ul>
            {content.map((el, idx) => {
              return <li
                key={idx}
                onClick={() => this.setState({currentTab: idx})}
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
