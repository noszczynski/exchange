import React from "react";
import styled from "styled-components";

const StyledStars = styled.div`
  span {
    color: #fdba43;
  }
`;

export const getRandomId = () => Math.floor(Math.random() * 99999999);

function Rating({ rating }) {
  const renderStars = () => {
    const arr = [];
    if (rating % 1 === 0) {
      for (let i = 0; i < rating; i++) {
        arr.push(
          <span key={getRandomId()}>
            <i className="fa fa-star"></i>
          </span>
        );
      }
    } else {
      for (let i = 0; i < rating - 1; i++) {
        arr.push(
          <span key={getRandomId()}>
            <i className="fa fa-star"></i>
          </span>
        );
      }
      arr.push(
        <span key={getRandomId()}>
          <i className="fa fa-star-half"></i>
        </span>
      );
    }
    return arr;
  };

  return <StyledStars>{renderStars()}</StyledStars>;
}

export default Rating;
