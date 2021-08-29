
import './App.css';
import data, { allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories, namesAndPrices, ratingAverage, toyProducts } from './data';
import ProductList from './ProductList'
import CategoryList from './CategoryList'
console.log(data)
console.log(allCategories)
console.log(categoriesUnique)
console.log(categoriesWithCounts)
console.log(namesAndCategories)
console.log(namesAndPrices)
console.log(toyProducts)
console.log(ratingAverage)

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <h2>Product Count: {data.length}</h2>
      <h2>Cateogry Count: {categoriesUnique.length}</h2>
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;
