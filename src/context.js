import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_BOOKS":
      return {
        ...state,
        book_list: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    book_list: [],
    heading: "A Song of Ice and Fire",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    const apiKey = "AIzaSyDHToN9pW9MBM8wWki4sx7U1RLZRY0L9uU";
    const query = "A Song of Ice and Fire";
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
      )
      .then(res => {
        const results = res.data.items;
        this.setState({
          book_list: results
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
