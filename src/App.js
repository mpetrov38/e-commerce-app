import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import Recomended from './components/Recomended/Recomended';
import Sidebar from './components/Sidebar/Sidebar';
import products from './data/data';
import Card from './components/Card';

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const inputFilter = products.filter(items => items.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1
  );

  const handleRadioChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleClick = (value) => {
    setSelectedCategory(value);
  }

  function filterData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = inputFilter;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, newPrice, company, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected)
    }
    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }, index) => (
      <Card
        key={index}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />));
  }

  const result = filterData(products, selectedCategory, query);
  
  return (
    <div className="App">
      <Sidebar handleRadioChange={handleRadioChange} />
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recomended handleClick={handleClick}/>
      <Products result={result}/>
    </div>
  );
}

export default App;
