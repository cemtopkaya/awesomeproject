import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

let data = [
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  { userId: 1, id: 3, title: "fugiat veniam minus", completed: false },
  { userId: 1, id: 4, title: "et porro tempora", completed: true },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  }
];

class EventList extends Component {
  state = {
    veriler: []
  };

  componentDidMount() {
      console.log({ data })
      console.log({ veriler:data })
    this.setState({ veriler:data });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>1Open1 up App.js to start working on your app!</Text>
        <FlatList
          data={this.state.veriler}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => "list-"+parseInt(item.id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default EventList;
