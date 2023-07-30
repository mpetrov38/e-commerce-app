import './Recomended.css';
import Button from '../Buttons';

function Recomended({handleClick}) {
  return (
    <div>
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
  )
}

export default Recomended;