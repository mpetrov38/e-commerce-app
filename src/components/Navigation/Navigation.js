import './Navigation.css';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

const Navigation = ({ handleInputChange, query }) => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-dark text-white navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">🛒</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <form className="d-flex mx-auto">
            <input
              className="form-control me-2"
              type="search"
              onChange={handleInputChange}
              value={query}
              placeholder="Search for shoes"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FiHeart className="nav-icons" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AiOutlineShoppingCart className="nav-icons" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AiOutlineUserAdd className="nav-icons" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navigation;