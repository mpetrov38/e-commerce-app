import { AiOutlineStar } from 'react-icons/ai'
import { BiSolidCartAdd } from 'react-icons/bi'

function Card({img, title, star, reviews, prevPrice, newPrice}) {
  return (
    <section className='card'>
      <img className='card-image' src={img} alt={title}></img>
      <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        <section className='card-reviews'>
          <AiOutlineStar className='ratings-star' star={star} />
          <span className='reviews'>{reviews}</span>
        </section>
        <section className='card-price'>
          <div className='price'>
            <del>${prevPrice}</del>${newPrice}
          </div>
          <div ><BiSolidCartAdd className='add-product' /></div>
        </section>
      </div>
    </section> 
  )
}
export default Card;
