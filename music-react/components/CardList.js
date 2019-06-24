import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Button, Icon } from "react-native-elements";

const renderData = data =>
  data.map((item, index) => (
    <Card key={index} title={item.title} image={{ uri: item.cover_medium }}>
      {renderBottomNav()}
    </Card>
  ));

const renderBottomNav = () => (
  <View style={styles.albumMenu}>
    <Icon
      onPress={() => {}}
      raised
      name="play"
      type="font-awesome"
      color="#f50"
      size={30}
    />
    <Icon
      onPress={() => {}}
      raised
      name="info"
      type="font-awesome"
      color="#f50"
      size={30}
    />
    <Icon
      onPress={() => {}}
      raised
      name="thumbs-up"
      type="font-awesome"
      color="#f50"
      size={30}
    />
  </View>
);

export default (CardList = props => renderData(props.data));

const styles = StyleSheet.create({
  albumMenu: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
