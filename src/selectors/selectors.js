export const getSelectedCategory = data => {
    return data.filter(item => item.selected && item)
                .map(item => item.title).join('')
}

export const getLastPlan = data => {
    return data[0];
}