import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import Recomended from './components/Recomended/Recomended';
import Sidebar from './components/Sidebar/Sidebar';
import products from './data/data';
import Card from './components/Card';

function App() {
  const imagePerRow = 4;
  const [loadMore, setLoadMore] = useState(imagePerRow);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectSort, setSelectSort] = useState(null);
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const inputFilter = products.filter(items => items.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  const handleRadioChange = (event) => {
    // console.log({[event.target.name]: event.target.checked})
    setSelectedCategory(event.target.value);
    // setSelectedCategory({...selectedCategory, [event.target.name]: event.target.checked })
    console.log(selectedCategory);
  }
  //TODO uncheck the radio buttons 
  //filter by the criteria which is true

  const handleClick = (value) => {
    setSelectedCategory(value);
  }
  const handleSelectClick = (event) => {
    setSelectSort(event.target.value);
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
    
    return filteredProducts;
  }

  function sortData(products, selectedSort) {
    let copy = [...products];
    if (selectedSort === "price-ascending") {
      return copy.sort((a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice));
    }
    if (selectedSort === "price-descending") {
      return copy.sort((a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice));
    }
    if (selectedSort === "a-z") {
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (selectedSort === "z-a") {
      return copy.sort((a, b) => b.title.localeCompare(a.title));
    }
    return copy;
  }


  let result = filterData(products, selectedCategory, query);
  const finishedResult = sortData(result, selectSort);

  const renderedCards = finishedResult.map(({ img, title, star, reviews, prevPrice, newPrice }, index) => (
    <Card
      key={index}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
    />
  ));

  return (
    <div className="App">
      <Sidebar handleRadioChange={handleRadioChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recomended handleClick={handleClick} handleSelectClick={handleSelectClick} />
      <Products result={renderedCards} loadMore={loadMore} setLoadMore={setLoadMore} imagePerRow={imagePerRow} />
    </div>
  );
}

export default App;
