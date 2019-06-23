import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Text, Button, Icon } from "react-native-elements";
import CardList from "../components/CardList";

export default class AlbumsScreens extends Component {
  static navigationOptions = {
    title: "Album"
  };

  state = {
    albums: [
      {
        title: "13424",
        image: "https://placeimg.com/640/480/any"
      },
      {
        title: "13425",
        image: "https://placeimg.com/640/480/any"
      },
      {
        title: "13426",
        image: "https://placeimg.com/640/480/any"
      }
    ]
  };

  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        <CardList data={albums} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
