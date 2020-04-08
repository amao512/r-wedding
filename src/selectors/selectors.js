export const getSelectedCategory = data => {
    return data.filter(item => item.selected && item)
                .map(item => item.title).join('')
}

export const getLastRestaurants = data => {
    return [data[0], data[1], data[2], data[3]];
}