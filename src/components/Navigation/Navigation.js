import './Navigation.css';
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';

function Navigation() {
  return (
    <nav>
      <div className='navigation'>
        <input type='text' className='search-input' placeholder='Search' />
      </div>
      <div className='profile'>
        <a>
          <FiHeart className='nav-icon'/>
        </a>
        <a>
          <AiOutlineShoppingCart className='nav-icon'/>
        </a>
        <a>
          <AiOutlineUserAdd className='nav-icon'/>
        </a>
      </div>
    </nav>

  )
}
export default Navigation;
