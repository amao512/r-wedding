export const getSelectedCategory = data => {
    return data.filter(item => item.selected && item)
                .map(item => item.title).join('')
}

export const getLastRestaurants = data => {
    return data.slice(0, 4);
}