import { namesAndCategories } from "./data"
import './CategoryList.css'
import CategoryButton from "./CategoryButton"

function CategoryList(props) {
    const { category, onClick } = props
    return (
        <div className="CategoryList">
            {namesAndCategories.map(obj => {
                const className = obj.name === category ? 'ChosenCategory' : ''
            return (
                <CategoryButton
                    className={className}
                    category={obj.name}
                    count={obj.count}
                    onClick={onClick}
                />
            )
            })}
        </div>
    )
}

export default CategoryList