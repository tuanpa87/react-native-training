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

  renderAlbums = () => {
    const { albums } = this.state;

    return albums.map((album, index) => (
      <Card key={index} title={album.title} image={{ uri: album.image }}>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="VIEW NOW"
        />
      </Card>
    ));
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {(() => this.renderAlbums())()
        // just for fun ~ this.renderAlbums()
        }
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
