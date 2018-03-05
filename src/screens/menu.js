import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class MenuScreen extends Component {

  static navigationOptions = {
    title: 'React Native Calendar Demo',
  };

  render() {
    return (
      <View>
        <TouchableOpacity 
          style={styles.menu} 
          onPress={() => this.props.navigation.navigate('Calendars')}
        >
          <Text style={styles.menuText}>Calendars</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menu} 
          onPress={() => this.props.navigation.navigate('CalendarsList')}
        >
          <Text style={styles.menuText}>Calendar List</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Agenda')}
        >
          <Text style={styles.menuText}>Agenda</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1
  },
  menuText: {
    fontSize: 18
  }
});
