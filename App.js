import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MenuScreen from './src/screens/menu';
import AgendaScreen from './src/screens/agenda';
import CalendarsScreen from './src/screens/calendars';
import CalendarsListScreen from './src/screens/calendarsList';

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = StackNavigator(
  {
    Menu: {
      screen: MenuScreen,
    },
    Agenda: {
      screen: AgendaScreen,
    },
    Calendars: {
      screen: CalendarsScreen,
    },
    CalendarsList: {
      screen: CalendarsListScreen,
    },
  },
  {
    initialRouteName: 'Menu',
  }
);
