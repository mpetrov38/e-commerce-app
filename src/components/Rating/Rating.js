import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function Rating({ rating, onClick }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)}>
          {rating > i ? (
            <AiFillStar fontSize="0.9rem" />
          ) : (
            <AiOutlineStar fontSize="0.9rem" />
          )
          }
        </span>
      ))}
    </>
  )
}

export default Rating