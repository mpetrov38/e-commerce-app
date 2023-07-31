import { Row, Col } from 'react-bootstrap';
import './Products.css';
import { useState, useRef, useEffect } from 'react';

function Products({ result, loadMore, setLoadMore, imagePerRow }) {

  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [loadMore])

  function loadHandler() {
    setLoadMore(loadMore + imagePerRow);
  }

  return (
    <>
      <Row xs={2} md={6} lg={12} className="g-4 product-container" style={{ overflow: 'auto' }}>
        {result?.slice(0, loadMore)?.map((item, idx) => (
          <Col xs={12} md={6} lg={3} key={idx} className='my-col' ref={bodyRef}>
            {item}
          </Col>
        ))}
      </Row>
      {
        (<div className='load-button' >
          <button
            style={{ cursor: loadMore >= result.length ? 'not-allowed' : 'pointer' }}
            className='btns btn-secondary'
            onClick={loadHandler}
            disabled={loadMore >= result.length}
          >Load More</button>
          <span>{Math.min(loadMore, result.length)} of {result.length} items. </span>
        </div>
        )
      }

    </>
  )
}
export default Products;
