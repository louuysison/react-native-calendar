'use strict';

var React = require('react-native');
var Calendar = require('react-native-calendar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

var CalendarExample = React.createClass({
  render: function() {
    return (
      <Calendar
        ref="calendar"
        scrollEnabled={true}
        showControls={true}
        dayHeadings={customDayHeadings}
        titleFormat={'MMMM YYYY'}
        prevButtonText={'Prev'}
        nextButtonText={'Next'}
        onDateSelect={(date) => console.log(date)}
        onTouchPrev={() => console.log('Back TOUCH')}
        onTouchNext={() => console.log('Forward TOUCH')}
        onSwipePrev={() => console.log('Back SWIPE')}
        onSwipeNext={() => console.log('Forward SWIPE')}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CalendarExample', () => CalendarExample);
