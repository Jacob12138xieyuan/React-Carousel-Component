# React-Carousel-Component

An react implementation of carousel.

Use this component like this, set delay time and content of carousel (array of html node):
```
import React, { Component } from 'react';
import Carousel from 'Carousel';

class App extends Component {
  constructor() {
    super();
    this.delay = 1000;
    this.children = [1, 2, 3, 4, 5];
  }

  render() {
    return <Carousel delay={this.delay}>{this.children}</Info>;
  }
}

export default App;
```
![](https://github.com/Jacob12138xieyuan/React-Carousel-Component/blob/main/demo.gif)
