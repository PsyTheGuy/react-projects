import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];

  const indexValidator = (index) => {
    if (index > people.length - 1) {
      return 0;
    } else if (index < 0) {
      return people.length - 1;
    } else {
      return index;
    }
  };

  const nextReview = () => {
    setIndex(indexValidator(index + 1));
  };

  const prevReview = () => {
    setIndex(indexValidator(index - 1));
  };

  const randomReview = () => {
    const newIndex = Math.floor(Math.random() * people.length);
    setIndex(indexValidator(newIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
