import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

class Widgets extends React.Component {


  render() {

    const tabs = [
      { title: 'One', content: 'First tab'},
      { title: 'Two', content: 'Second tab'},
      { title: 'Three', content: 'Third tab'}
    ];

    return (
      <div>
        <Clock />
        <Tabs content={tabs}/>
        <Weather />
      </div>
    );
  }
}

export default Widgets;
