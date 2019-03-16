import React, {Component} from 'react';

import './assets/css/dashboard.css';


import { MenuComponent } from './MenuComponent';
import BodyComponent from './BodyComponent';
export default class Dashboard extends Component {

  render() {
    return (
      <div style={{width: '100%'}}>
        <MenuComponent />
        <BodyComponent />
      </div>
    );
  }
}
