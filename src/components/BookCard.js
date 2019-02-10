import React from "react";
import { Link } from "react-router-dom";
import dummyImage from "../assets/images/book-logo.png";

const BookCard = ({ book }) => {
  return (
    <div className="book">
      <Link to={`/details/${book.id}`}>
        <div className="book__img">
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : `${dummyImage}`
            }
            alt=""
          />
        </div>
      </Link>
      <h2 className="book__title">{book.volumeInfo.title}</h2>
      <p className="book__author">{book.volumeInfo.authors}</p>
    </div>
  );
};

export default BookCard;
