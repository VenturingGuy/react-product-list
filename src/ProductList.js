import data from './data'
import './ProductList.css'
import Product from './Product'

function ProductList(props) {
    const { category } = props
    return (
        <div className="ProductList">
            {data.filter(obj => 
                obj.category === category || category === 'All').map(obj => {
            return (
                <Product 
                name={obj.name}
                description={obj.description}
                price={obj.price}
                category={obj.category}
                rating={obj.rating}
                />
            )
        })}
        </div>
    )
}

export default ProductList