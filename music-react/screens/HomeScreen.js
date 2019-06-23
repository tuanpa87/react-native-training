import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";

import { MonoText } from "../components/StyledText";

export default (HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Button
        title="Navigate to Albums"
        onPress={() => props.navigation.navigate("Albums")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
