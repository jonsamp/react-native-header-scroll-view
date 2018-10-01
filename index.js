// @flow
import React, { Component, type Node } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Fade from 'react-native-fade';
import styles from './styles';

type Props = {
  headerText?: string,
  children?: Node,
  containerStyle?: Object,
  headerContainerStyle?: Object,
  headerComponentContainerStyle?: Object,
  headerTextStyle?: Object,
  customHeaderComponent?: Node,
  customeHeaderTitleComponent?: Node,
  headerTitleStyle?: Object,
  scrollContainerStyle?: Object,
};

type State = {
  scrollOffset: number,
  headerHeight: number,
  headerY: number,
};

class HeaderScrollView extends Component<Props, State> {
  static propTypes = {};

  state = {
    scrollOffset: 0,
    headerHeight: 0,
    headerY: 0,
  };

  handleScroll = (event: Object) => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };

  onLayout = (event: Object) => {
    this.setState({
      headerHeight: event.nativeEvent.layout.height,
      headerY: event.nativeEvent.layout.y,
    });
  };

  render() {
    const {
      children,
      headerText,
      containerStyle,
      headerContainerStyle,
      headerComponentContainerStyle,
      headerTextStyle,
      customHeaderComponent,
      headerTitleStyle,
      customeHeaderTitleComponent,
      scrollContainerStyle,
    } = this.props;

    const scrollHeaderOffset = this.state.headerHeight + this.state.headerY - 8;
    const isHeaderScrolled = scrollHeaderOffset < this.state.scrollOffset;

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.headerContainer, headerContainerStyle]}>
          <Fade visible={isHeaderScrolled}>
            {customHeaderComponent || (
              <View
                style={[
                  styles.headerComponentContainer,
                  headerComponentContainerStyle,
                ]}
              >
                <Text style={[styles.headerText, headerTextStyle]}>
                  {headerText}
                </Text>
              </View>
            )}
          </Fade>
        </View>

        <ScrollView
          scrollEventThrottle={250}
          onScroll={this.handleScroll}
          style={scrollContainerStyle}
        >
          {customeHeaderTitleComponent || (
            <View>
              <Text
                style={[styles.headerTitle, headerTitleStyle]}
                onLayout={this.onLayout}
              >
                {headerText}
              </Text>
            </View>
          )}
          {children}
        </ScrollView>
      </View>
    );
  }
}

export default HeaderScrollView;
