import data from "./data"

const total = data.reduce((acc, obj) => {
    return acc + parseFloat(obj.price.slice(1))
}, 0).toFixed(2)

const totalUnits = data.reduce((acc, obj) => {
    return acc + obj.units
}, 0)

function Inventory() {
    return(
        <div className="Inventory">
            <h2>Total cost of inventory: ${total}</h2>
            <h2>Total units in stock: {totalUnits}</h2>
        </div>
    )
}

export default Inventory