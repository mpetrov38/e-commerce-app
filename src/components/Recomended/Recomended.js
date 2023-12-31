import './Recomended.css';
import Button from '../Buttons';

function Recomended({ handleClick, handleSelectClick }) {
  return (
    <div className='recomended-section'>
      <div className='recomended-items'>
        <h2 className='recommended-title'>
          Recomended
        </h2>
        <div className='recommended-flex'>
          <Button onClickHandler={handleClick} value="Nike" title="Nike" name="company"></Button>
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" name="company"></Button>
          <Button onClickHandler={handleClick} value="Puma" title="Puma" name="company"></Button>
          <Button onClickHandler={handleClick} value="Vans" title="Vans" name="company"></Button>
        </div>
      </div>
      <div className='m'>
        <select className='btns select-menu' onChange={handleSelectClick}>
          <option value="">Sort Products</option>
          <option value="price-ascending">Sort by Highest Price</option>
          <option value="price-descending">Sort by Lowest Price</option>
          <option value="a-z">Sort by Name ascending</option>
          <option value="z-a">Sort by Name descending</option>
        </select>
      </div>
    </div>
  )
}

export default Recomended;