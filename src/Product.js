function Product(props) {
    const { name, description, price, category, rating } = props
    return(
        <div className="ProductDisplay">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Category: {category}</p>
            <small>Rating: {Math.round(rating)}</small>
        </div>
    )
}

export default Product