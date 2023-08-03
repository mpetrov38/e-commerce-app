import { Card, Button } from 'react-bootstrap';
import Rating from './Rating/Rating';
import '../components/Products/Products.css';
import { toast } from 'react-toastify';

function MyCard({ img, title, star, reviews, prevPrice, newPrice }) {

  const quantity = 1;

  const handleClick = () => {
    const existingDataJSON = localStorage.getItem('cartObjects');
    const existingDataArray = existingDataJSON ? JSON.parse(existingDataJSON) : [];
    const newData = { img, title, star, reviews, prevPrice, newPrice, quantity };
    const existingItemIndex = existingDataArray.findIndex(item => item.title === newData.title);
    if (existingItemIndex !== -1) {
      existingDataArray[existingItemIndex].quantity += newData.quantity
    }else{
      existingDataArray.push(newData);
    }
    const updatedDataJSON = JSON.stringify(existingDataArray);
    localStorage.setItem("cartObjects", updatedDataJSON);
    toast.success(`${title} was added to cart!`);
  }
  return (
    <Card className='product-card h-100 '>
      <Card.Img variant="top" className='card-image' src={img} />
      <Card.Body className='card-details'>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='card-reviews'>
          <Rating className='ratings-star' rating={star} />
          <span className='reviews'>{reviews}</span>
        </Card.Text>
        <div className='card-price'>
          <del>{prevPrice}.00$</del>{newPrice}.00$
        </div>
        <Button className='btns btn-secondary' onClick={() => handleClick()}>Add to Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default MyCard;
