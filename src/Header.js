

function Header(props) {
    const { title, productCount, categoryCount} = props
    return (
        <div>
            <h1>{ title }</h1>
            <h2>Product Count: {productCount}</h2>
            <h2>Category Count: {categoryCount}</h2>
        </div>
    )
}

export default Header