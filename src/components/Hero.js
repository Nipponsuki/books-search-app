import React, { Component } from "react";
import bck from "../assets/images/h-5.jpg";
import axios from "axios";
import { Consumer } from "../context";

class Hero extends Component {
  state = {
    bookTitle: ""
  };

  findBook = (dispatch, e) => {
    e.preventDefault();
    const apiKey = "AIzaSyDHToN9pW9MBM8wWki4sx7U1RLZRY0L9uU";
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          this.state.bookTitle
        }&key=${apiKey}`
      )
      .then(res => {
        dispatch({
          type: "SEARCH_BOOKS",
          payload: res.data.items
        });
        this.setState({ bookTitle: "" });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <main
              className="main"
              style={{
                background: `url(${bck})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom center"
              }}
            >
              <div className="hero-content">
                <h1 className="hero-content__heading">Read your live away</h1>
                <form
                  className="hero-content__form"
                  onSubmit={this.findBook.bind(this, dispatch)}
                >
                  <input
                    className="hero-content__form__input"
                    type="text"
                    name="bookTitle"
                    value={this.state.bookTitle}
                    placeholder="Search by title..."
                    onChange={this.onChange}
                  />
                  <button className="hero-content__form__btn" type="submit">
                    <i className="fas fa-book" />
                  </button>
                </form>
              </div>
            </main>
          );
        }}
      </Consumer>
    );
  }
}

export default Hero;
