import React, { Component } from 'react';

import { CalendarList } from 'react-native-calendars';

export default class CalendarsList extends Component {

  static navigationOptions = {
    title: 'Calendar List',
  };

  render() {
    return (
      <CalendarList current={'2018-03-05'} pastScrollRange={24} futureScrollRange={24} />
    );
  }
}
