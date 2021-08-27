import data from './data.json' // imports data.json

const allCategories = data.map(obj => obj.category) // maps category json data into array

// Make an object where each key is a category name
const categoryObjects = allCategories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!
  // Make an arr array of the keys
  const categoriesUnique = Object.keys(categoryObjects)

const categoriesWithCounts = data.reduce((obj, cat) => {
  if (obj[cat] === "undefined") {
    obj[cat] = 1
  }
  else {
    obj[cat] += 1
  }
  return obj
}, {})

console.log(data)

export default data // export the native JS array