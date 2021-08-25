import data from './data.json' // imports data.json

const allCategories = data.map(obj => obj.category) // maps category json data into array


export default data // export the native JS array