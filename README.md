# react-native-header-scroll-view

A React Native component that creates a Apple-esque large header that fades in a smaller header as you scroll.

Apple features this UI pattern in Apple Music and Books.

![scrollheader](https://user-images.githubusercontent.com/6455018/46266839-15ba4180-c500-11e8-8c6c-df1d6b22e2bb.gif)

## Installation

```bash
# yarn
yarn add react-native-header-scroll-view

# npm
npm install react-native-header-scroll-view --save
```

Then, import with:

```js
import Fade from "react-native-header-scroll-view";
```

## Usage

Example usage:

```js
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import HeaderScrollView from "react-native-header-scroll-view";

class App extends Component {
  render() {
    return (
      <HeaderScrollView headerText="❤️ For You">
        <Text>...</Text>
      </HeaderScrollView>
    );
  }
}
```

## Props

For default Apple-style settings, you only need to provide:

| Prop         | Type   | Description                                                                                                                            |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `headerText` | string | The text of the header. This will show up as large text inside the scroll view and then fade in as the smaller text inside the header. |

From there, you can further customize this component to get exactly what you need.

| Prop                            | Type                         | Description                                                                                                             |
| ------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `containerStyle`                | React Native style or Object | Styles the entire container wrapping the header and the scrollview.                                                     |
| `headerContainerStyle`          | React Native style or Object | Styles the container of the header component that appears after scrolling.                                              |
| `headerComponentContainerStyle` | React Native style or Object | Styles the component inside the header. Anything within this style will fade in and out as the scroll position changes. |
| `headerTextStyle`               | React Native style or Object | Styles the header text inside the header that appears after scrolling.                                                  |
| `headerTitleStyle`              | React Native style or Object | Styles the header title component inside the scroll view.                                                               |
| `scrollContainerStyle`          | React Native style or Object | Styles the scroll view component.                                                                                       |
