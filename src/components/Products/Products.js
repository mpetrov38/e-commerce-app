import './Products.css';
import {AiOutlineStar} from 'react-icons/ai'
import {BiSolidCartAdd} from 'react-icons/bi'

function Products() {
  return (
    <section className='card-container'>
      <section className='card'>
        <img className='card-image' src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='Shoe'></img>
        <div className='card-details'>
          <h3 className='card-title'>Shoe</h3>
          <section className='card-reviews'>
            <AiOutlineStar className='ratings-star'/>
            <span className='reviews'>4</span>
          </section>
          <section className='card-price'>
            <div className='price'>
              <del>199$</del>159$
            </div>
            <div ><BiSolidCartAdd className='add-product'/></div>
          </section>
        </div>
      </section>
    </section>
  )
}
export default Products;
