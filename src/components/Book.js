import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
import dummyImage from "../assets/images/book-logo.png";
import TruncateString from "react-truncate-string";

class Book extends Component {
  state = {
    book: {}
  };
  componentDidMount() {
    const apiKey = "AIzaSyDHToN9pW9MBM8wWki4sx7U1RLZRY0L9uU";
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${
          this.props.match.params.id
        }?key=${apiKey}`
      )
      .then(res => {
        const result = res.data.volumeInfo;

        this.setState({
          book: result
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { book } = this.state;
    console.log(book.title);

    if (book === undefined || Object.keys(book).length === 0) {
      return <Loading />;
    } else {
      return (
        // <div>
        //   <h1>hillo</h1>
        // </div>
        <section className="overview">
          <div className="cover">
            <div className="cover__img">
              <img
                src={book.imageLinks ? book.imageLinks.medium : `${dummyImage}`}
                alt=""
              />
            </div>
            <div className="cover__icons">
              <i className="fab fa-wikipedia-w" />
              <i className="fas fa-share-square" />
              <i className="fas fa-book-open" />
            </div>
          </div>
          <div className="description">
            <h3 className="description__author">{book.title}</h3>
            <h1 className="description__title">{book.authors}</h1>
            <p className="description__text">{book.description}</p>
            <div className="description__cart">
              <div className="description__cart__e-book">
                <strong>E-book Available:</strong> Yes
              </div>
              <button className="description__cart__button">
                Add to cart{" "}
              </button>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Book;
