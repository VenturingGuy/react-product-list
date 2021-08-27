import logo from './logo.svg';
import './App.css';
import data, { allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories } from './data';

console.log(data)
console.log(allCategories)
console.log(categoriesUnique)
console.log(categoriesWithCounts)
console.log(namesAndCategories)

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <h2>Product Count: {data.length}</h2>
      <h2>Cateogry Count: {categoriesUnique.length}</h2>
        {namesAndCategories.map(obj => {
          return (
            <button>
              {obj.name}
            </button>
          )
        })}
    </div>
  );
}

export default App;
