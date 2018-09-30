import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete';

class Widgets extends React.Component {


  render() {

    const names = ['tyler', 'logan', 'quinn', 'lynn', 'tim', 'tom', 'ginna', 'katie'];

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
        <AutoComplete names={names}/>
      </div>
    );
  }
}

export default Widgets;
