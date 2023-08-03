import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import Recomended from './components/Recomended/Recomended';
import Sidebar from './components/Sidebar/Sidebar';
import products from './data/data';
import Card from './components/Card';
import Footer from './components/Footer/Footer';

//TODO make star component work 
//Make add to cart display an alert succes
//Make a cart component
//Pitai valio kak da se napravi responsive recomended i sidebar

function App() {
  const imagePerRow = 4;
  const [loadMore, setLoadMore] = useState(imagePerRow);
  const [selectedCategory, setSelectedCategory] = useState({
    category: null,
    price: null,
    company: null,
  });
  const [selectSort, setSelectSort] = useState(null);
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };


  const handleRadioChange = (event) => {
    setSelectedCategory((prevSelected) => ({
      ...prevSelected,
      [event.target.name]: event.target.value
    }));
  };

  const handleClick = (value) => {
    setSelectedCategory((prevSelected) => ({
      ...prevSelected,
      company: value
    }));
  };
  const handleSelectClick = (event) => {
    setSelectSort(event.target.value);
  }
  const handleClearFilterClick = () => {
    setSelectedCategory({});
  };

  function filterData(products, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter(items => items.title.toLowerCase().includes(query.toLowerCase()));
    }

    Object.keys(selectedCategory).forEach(key => {
      if (selectedCategory[key] && key !== "category" && key !== "price" && key !== "company") { // Skip the "category" key
        filteredProducts = filteredProducts.filter(product => product[key] === selectedCategory[key]);
      }
    });
    if (selectedCategory.price) {
      const priceRange = selectedCategory.price.split("-").map(Number);
      const [minPrice, maxPrice] = priceRange;
      filteredProducts = filteredProducts.filter(product => {
        const productPrice = parseFloat(product.newPrice);
        return (!minPrice || productPrice >= minPrice) && (!maxPrice || productPrice <= maxPrice);
      });
    }
    if (selectedCategory.category) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory.category);
    }
    if (selectedCategory.company) {
      filteredProducts = filteredProducts.filter(product => product.company === selectedCategory.company.company);
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


  let result = filterData(products, query);
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
      <Sidebar handleRadioChange={handleRadioChange} selectedCategory={selectedCategory} handleClick={handleClearFilterClick} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recomended handleClick={handleClick} handleSelectClick={handleSelectClick} />
      <Products result={renderedCards} loadMore={loadMore} setLoadMore={setLoadMore} imagePerRow={imagePerRow} />
      <Footer />
    </div>
  );
}

export default App;
