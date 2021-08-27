import data from './data.json' // imports data.json

const allCategories = data.map(obj => obj.category) // maps category json data into array

// Make an object where each key is a category name
const categoryObjects = allCategories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
  }, {})
  // Makes an array of the keys
  const categoriesUnique = Object.keys(categoryObjects)

const categoriesWithCounts = allCategories.reduce((obj, cat) => {
  if (obj[cat] === undefined) {
    obj[cat] = 1
  }
  else {
    obj[cat] += 1
  }
  return obj
}, {})

const namesAndCategories = categoriesUnique.map(name => {
  // returns an object with the name and count
  return { name, count: categoriesWithCounts[name]}
})

export default data // export the native JS array
export {allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories}