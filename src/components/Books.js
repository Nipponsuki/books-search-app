import React, { Component } from "react";
import BookCard from "./BookCard";
import Fade from "react-reveal/Fade";
import { Consumer } from "../context";
import Loading from "./Loading";

class Books extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { book_list, heading } = value;
          console.log(value);
          if (book_list === undefined || book_list.length === 0) {
            return <Loading />;
          } else {
            return (
              <section className="books">
                <h1 className="books__heading">{heading}</h1>
                <div className="books__wrapper">
                  {book_list.map(item => (
                    <Fade right>
                      <BookCard key={item.id} book={item} />
                    </Fade>
                  ))}
                </div>
              </section>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Books;
