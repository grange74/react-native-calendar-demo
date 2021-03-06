import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { Calendar } from 'react-native-calendars';

export default class CalendarsScreen extends Component {

  static navigationOptions = {
    title: 'Calendars',
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Calendar with selectable date and arrows</Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{ [this.state.selected]: { 
            selected: true,
            disableTouchEvent: true, 
            selectedColor: 'orange' 
          } }}
        />
        <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>
        <Calendar
          style={styles.calendar}
          current={'2018-02-16'}
          minDate={'2018-02-10'}
          maxDate={'2018-02-29'}
          firstDay={1}
          markedDates={{
            '2018-02-23': { selected: true, marked: true },
            '2018-02-24': { selected: true, marked: true, dotColor: 'green' },
            '2018-02-25': { marked: true, dotColor: 'red' },
            '2018-02-26': { marked: true },
            '2018-02-27': { disabled: true, activeOpacity: 0 }
          }}
          hideArrows
        />
        <Text style={styles.text}>Calendar with custom day component</Text>
        <Calendar
          style={[styles.calendar, { height: 300 }]}
          dayComponent={({ date, state }) => {
            return (
              <View style={{ flex: 1 }}>
                <Text 
                  style={{ 
                    textAlign: 'center', 
                    color: state === 'disabled' ? 'gray' : 'black' 
                  }}
                >
                  {date.day}
                </Text>
              </View>
            );
          }}
        />
        <Text style={styles.text}>Calendar with period marking and spinner</Text>
        <Calendar
          style={styles.calendar}
          current={'2018-02-16'}
          minDate={'2018-02-10'}
          displayLoadingIndicator
          markingType={'period'}
          theme={{
            calendarBackground: '#333248',
            textSectionTitleColor: 'white',
            dayTextColor: 'red',
            todayTextColor: 'white',
            selectedDayTextColor: 'white',
            monthTextColor: 'white',
            selectedDayBackgroundColor: '#333248',
            arrowColor: 'white',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            }
          }}
          markedDates={{
            '2018-02-17': { disabled: true },
            '2018-02-08': { textColor: '#666' },
            '2018-02-09': { textColor: '#666' },
            '2018-02-14': { startingDay: true, color: 'blue', endingDay: true },
            '2018-02-21': { startingDay: true, color: 'blue' },
            '2018-02-22': { endingDay: true, color: 'gray' },
            '2018-02-24': { startingDay: true, color: 'gray' },
            '2018-02-25': { color: 'gray' },
            '2018-02-26': { endingDay: true, color: 'gray' } }}
          hideArrows={false}
        />
        <Text style={styles.text}>Calendar with multi-dot marking</Text>
        <Calendar
          style={styles.calendar}
          current={'2018-02-16'}
          markingType={'multi-dot'}
          markedDates={{
            '2018-02-08': { 
              dots: [
                { key: 'vacation', color: 'blue', selectedDotColor: 'white' },
                { key: 'massage', color: 'red', selectedDotColor: 'white' }
              ],
              selected: true 
            },
            '2018-02-09': {
              dots: [
                { key: 'vacation', color: 'blue', selectedColor: 'red' },
                { key: 'massage', color: 'red', selectedColor: 'blue' }],
              disabled: true 
            }
          }}
          hideArrows={false}
        />
        <Text style={styles.text}>Calendar with week numbers</Text>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          showWeekNumbers
          markedDates={{ [this.state.selected]: { selected: true } }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
