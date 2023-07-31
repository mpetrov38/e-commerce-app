import './Recomended.css';
import Button from '../Buttons';

function Recomended({ handleClick, handleSelectClick }) {
  return (
    <div className='recomended-section'>
      <div >
        <h2 className='recommended-title'>
          Recomended
        </h2>
        <div className='recommended-flex'>
          <Button onClickHandler={handleClick} value="" title="All Products"></Button>
          <Button onClickHandler={handleClick} value="Nike" title="Nike"></Button>
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas"></Button>
          <Button onClickHandler={handleClick} value="Puma" title="Puma"></Button>
          <Button onClickHandler={handleClick} value="Vans" title="Vans"></Button>
        </div>
      </div>
      <div>
        <select className='btns select-menu' onChange={handleSelectClick}>
          <option value="" disabled selected>Choose an option...</option>
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