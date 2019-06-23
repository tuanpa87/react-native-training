import React, { Component } from "react";
import { SearchBar } from "react-native-elements";

export default class App extends React.Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  onSubmitSearch = () => this.props.submitSearch(this.state.search);

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search the artist..."
        onChangeText={this.updateSearch}
        value={search}
        onSubmitEditing={() => this.onSubmitSearch()}
      />
    );
  }
}
