const setLocalStorage = (cleanItems, itemType) => {
  localStorage.setItem(itemType, JSON.stringify(cleanItems))
}

const getLocalStorage = (itemType) => {
  const items = JSON.parse(localStorage.getItem(itemType))
  return items
}

module.exports = { setLocalStorage, getLocalStorage }


