import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text, Button, Icon } from "react-native-elements";

export default class AlbumsScreens extends Component {
  static navigationOptions = {
    title: "Album Detail"
  };
  render() {
    const album = this.props.navigation.getParam("album", {});
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text> {album.title} </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
