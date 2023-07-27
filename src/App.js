import './App.css';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import Recomended from './components/Recomended/Recomended';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navigation/>
      <Recomended/>
      <Products/>
    </div>
  );
}

export default App;
