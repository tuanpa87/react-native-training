import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Text, Button, Icon } from "react-native-elements";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import * as actions from "../actions/";

export default class AlbumsScreens extends Component {
  static navigationOptions = {
    title: "Album"
  };

  state = {
    albums: []
  };

  searchTracks(keyword) {
    actions.searchTracks(keyword).then(albums => this.setState({ albums }));
  }

  render() {
    const { albums } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SearchBar submitSearch={keyword => this.searchTracks(keyword)} />
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
