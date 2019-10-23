import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class EventList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>1Open1 up App.js to start working on your app!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EventList;
