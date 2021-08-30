
import './App.css';
import data, { allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories, namesAndPrices, ratingAverage, toyProducts } from './data';
import ProductList from './ProductList'
import CategoryList from './CategoryList'
import Header from './Header'

import { useState } from 'react'

console.log(data)
console.log(allCategories)
console.log(categoriesUnique)
console.log(categoriesWithCounts)
console.log(namesAndCategories)
console.log(namesAndPrices)
console.log(toyProducts)
console.log(ratingAverage)

function App() {
  const [category, setCategory] = useState('All')
  return (
    <div className="App">
      <Header
        title="Productify"
        productCount={data.length}
        categoryCount={categoriesUnique.length}
      />
      <CategoryList 
        category={category}
        onClick={newCategory => setCategory(newCategory)}
        />
      <ProductList category={category}/>
    </div>
  );
}

export default App;
