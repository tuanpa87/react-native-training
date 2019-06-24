import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import * as actions from "../actions/";

export default class AlbumsScreens extends Component {
  static navigationOptions = {
    title: "Album"
  };

  state = {
    albums: [],
    isFetching: false
  };

  searchTracks(keyword) {
    this.setState({ isFetching: true });

    actions
      .searchTracks(keyword)
      .then(albums => this.setState({ isFetching: false, albums }))
      .catch(err => this.setState({ isFetching: false, albums: [] }));
  }

  render() {
    const { albums, isFetching } = this.state;
    return (
      <ScrollView style={styles.container}>
        <SearchBar submitSearch={keyword => this.searchTracks(keyword)} />
        {albums.length ? (
          !isFetching ? (
            <CardList data={albums} />
          ) : (
            <Text style={{ textAlign: "center" }}>Loading Albums...</Text>
          )
        ) : null}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  albumMenu: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
