import "./CategoryButton.css"

function CategoryButton(props) {
    const { className, category, count, onClick} = props
    return (
        <div>
            <button 
                category={category}
                className={className}
                onClick={() => onClick(category)}
            >
                {category}
                    <span> {count}</span>
            </button>
        </div>
    )
}

export default CategoryButton