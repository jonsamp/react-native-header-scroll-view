import React, { Component, type Node } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, Text } from "react-native";
import Fade from "react-native-fade";
import styles from "./styles";

class HeaderScrollView extends Component {
  static propTypes = {
    headerTitle: PropTypes.string,
    children: PropTypes.node,
    containerStyle: PropTypes.object,
    headerContainerStyle: PropTypes.object,
    headerComponentContainerStyle: PropTypes.object,
    headerTextStyle: PropTypes.object,
    headerTitleStyle: PropTypes.object,
    scrollContainerStyle: PropTypes.object
  };

  state = {
    scrollOffset: 0,
    headerHeight: 0,
    headerY: 0
  };

  handleScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
  };

  onLayout = event => {
    this.setState({
      headerHeight: event.nativeEvent.layout.height,
      headerY: event.nativeEvent.layout.y
    });
  };

  render() {
    const {
      children,
      headerTitle,
      containerStyle,
      headerContainerStyle,
      headerComponentContainerStyle,
      headerTextStyle,
      headerTitleStyle,
      scrollContainerStyle
    } = this.props;

    const scrollHeaderOffset = this.state.headerHeight + this.state.headerY - 8;
    const isHeaderScrolled = scrollHeaderOffset < this.state.scrollOffset;

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.headerContainer, headerContainerStyle]}>
          <Fade visible={isHeaderScrolled}>
            <View
              style={[
                styles.headerComponentContainer,
                headerComponentContainerStyle
              ]}
            >
              <Text style={[styles.headerText, headerTextStyle]}>
                {headerTitle}
              </Text>
            </View>
          </Fade>
        </View>

        <ScrollView
          scrollEventThrottle={250}
          onScroll={this.handleScroll}
          style={scrollContainerStyle}
        >
          <View>
            <Text
              style={[styles.headerTitle, headerTitleStyle]}
              onLayout={this.onLayout}
            >
              {headerTitle}
            </Text>
          </View>
          {children}
        </ScrollView>
      </View>
    );
  }
}

export default HeaderScrollView;
