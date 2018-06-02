import React, { Component } from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import TextTwo from '../styledComponents/TextTwo'

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  white: "white",
  black: "#1F2022",
  blue: "#03A9FC",
  tan: "#FFF9DE",
  orange: "#FFAE00",
  darkOrange: "#FF6E00"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

class PageOne extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div>
          <Heading size={1} fit caps lineHeight={1} textColor="tan">
            Context API
          </Heading>
          <Text margin="10px 0 0" textColor="blue" size={1} fit bold>
            What's all the buzz about?
          </Text>
          <TextTwo textColor="#FFF9DE">Context provides a way to pass data through the component tree without having to pass props down manually at every level.</TextTwo>
          <Cite textColor="orange">React Docs</Cite>
        </div>
    );
  }
}

export default PageOne;
