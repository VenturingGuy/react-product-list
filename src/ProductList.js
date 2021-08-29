import data from './data'
import './ProductList.css'

function ProductList() {
    return (
        <div className="ProductList">
            {data.map(obj => {
            return (
                <div className="ProductDisplay">
                    <h1>{obj.name}</h1>
                    <p>{obj.description}</p>
                    <p>Price: {obj.price}</p>
                    <p>Category: {obj.category}</p>
                    <small>Rating: {obj.rating}</small>
                </div>
            )
        })}
        </div>
    )
}

export default ProductList