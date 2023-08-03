import { Card, Button } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import Rating from './Rating/Rating';
import { useState } from 'react';

function MyCard({img, title, star, reviews, prevPrice, newPrice}) {
  const [rate,setRating] = useState(5);
  return (
    <Card className='product-card h-100 '>
      <Card.Img variant="top" className='card-image' src={img} />
      <Card.Body className='card-details'>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='card-reviews'>
          <AiOutlineStar className='ratings-star' />
          <span className='reviews'>{reviews}</span>
        </Card.Text>
        <div className='card-price'>
          <del>{prevPrice}.00$</del>{newPrice}.00$
        </div>
        <Button className='btns btn-secondary'>Add to Cart</Button>
      </Card.Body>
    </Card> 
  )
}

export default MyCard;
