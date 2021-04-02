import colorGenerator from './colorGenerator'

const createCategories = categoryList => {
  const categories = []

  // eslint-disable-next-line
  categoryList.split(',').map(category => {
    categories.push({
      id: categories.length,
      name: category,
      color: colorGenerator(),
    })
  })

  return categories
}

export default createCategories
