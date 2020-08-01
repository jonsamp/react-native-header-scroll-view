# react-native-header-scroll-view

---

[🚨 DEPRECATED and unmaintained 🚨]
This library is an emulation of native iOS large headers. Now you can access the real thing with [react-native-screens/native-stack](https://github.com/software-mansion/react-native-screens/tree/master/native-stack). This library is a drop-in replacement for React Navigation's stack view, and includes direct access to native large headers/transitions etc. It has awesome performance. 

You can see it in action in this app: [github](https://github.com/jonsamp/gray-one), [download on the app stores](https://jovial-sammet-3cec91.netlify.app/).

---


A React Native component that mimicks Apple's large header that fades in a smaller header as you scroll, and slightly expands as you scroll up. You can see this effect in Apple's Messages, Books, etc.

![header scroll view gif](https://user-images.githubusercontent.com/6455018/49658165-6c1b9300-fa0f-11e8-9dd9-6d2ac53fe5e9.gif)

## Installation

```bash
# yarn
yarn add react-native-header-scroll-view

# npm
npm install react-native-header-scroll-view --save
```

Then, import with:

```js
import HeaderScrollView from 'react-native-header-scroll-view';
```

## Usage

Example usage:

```js
import React, { Component } from 'react';
import { Text } from 'react-native';
import HeaderScrollView from 'react-native-header-scroll-view';

class App extends Component {
  render() {
    return (
      <HeaderScrollView title="For You">
        <Text>...</Text>
      </HeaderScrollView>
    );
  }
}
```

To use this component with React Navigation, you'd want to disable the built-in header. There are 2 ways to disable the header in React Navigation:

Disable the default header for one screen:

```js
static navigationOptions = {
  headerShown: false
};
```

Disable header globally in `createStackNavigator`:

```js
const Home = createStackNavigator(
  {
    ExampleScreen1,
    ExampleScreen1,
  },
  {
    headerMode: 'none',
  }
);
```

## Props

For default Apple-style settings, you only need to provide:

| Prop    | Type   | Description                                                                                                                             |
| ------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `title` | string | The title of the header. This will show up as large text inside the scroll view and then fade in as the smaller text inside the header. |

From there, you can customize this component to get exactly what you want.

| Prop                            | Type                         | Description                                                                                                             |
| ------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `titleStyle`                    | React Native style or Object | Styles the large header title component inside the scroll view.                                                         |
| `containerStyle`                | React Native style or Object | Styles the entire container wrapping the header and the scrollview.                                                     |
| `headerContainerStyle`          | React Native style or Object | Styles the container of the header component that appears after scrolling.                                              |
| `headerComponentContainerStyle` | React Native style or Object | Styles the component inside the header. Anything within this style will fade in and out as the scroll position changes. |
| `headlineStyle`                 | React Native style or Object | Styles the header text inside the header that appears after scrolling.                                                  |
| `scrollContainerStyle`          | React Native style or Object | Styles the scroll view component.                                                                                       |
| `fadeDirection`                 | String                       | When the header component fades, it can fade `'up'` or `'down'`,                                                        |
| `scrollViewProps`               | Object                       | Pass any extra props to the scrollView.                                                                                 |

Visual reference of the styles containers:

<img width="1013" alt="screen shot 2018-12-07 at 10 55 25 am" src="https://user-images.githubusercontent.com/6455018/49657862-9de02a00-fa0e-11e8-8f10-37ada69d917d.png">
