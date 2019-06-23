import React from "react";
import { Card, Text, Button, Icon } from "react-native-elements";

const renderData = data => {
  return data.map((item, index) => (
    <Card key={index} title={item.title} image={{ uri: item.cover_medium }}>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        backgroundColor="#03A9F4"
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="See the Detail"
      />
    </Card>
  ));
};

export default (CardList = props =>
  props.data && props.data.length ? (
    renderData(props.data)
  ) : (
    <Text> ...Loading Data </Text>
  ));
