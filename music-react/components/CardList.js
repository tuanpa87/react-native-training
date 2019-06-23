import React from "react";
import { Card, Text, Button, Icon } from "react-native-elements";

const renderAlbums = data => {
  return data.map((album, index) => (
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

export default (CardList = props => renderAlbums(props.data));
