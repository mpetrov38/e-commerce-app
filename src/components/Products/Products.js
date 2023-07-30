import { Row, Col } from 'react-bootstrap';
import './Products.css';

function Products({result}) {
  return (
    <Row xs={2} md={6} lg={12}  className="g-4 product-container">
      {result.map((item, idx) => (
        <Col xs={12} md={6}lg={3}key={idx} className='my-col'>
          {item}
        </Col>
      ))}
    </Row>
  )
}

export default Products;
