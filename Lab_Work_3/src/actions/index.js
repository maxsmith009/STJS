export const addCar = (data) => ({
    type: 'ADD_CAR',
    id: data.id,
    mark: data.mark,
    model: data.name,
    price: data.price,
    picture: data.picture,
    fuelType: data.fuelType,
    dateOfRelease: data.dateOfRelease,
    fuelAmmount: data.fuelAmmount,
    mileage: data.mileage,
    transmission: data.transmission
});

export const setFilterInput = (inputs) => ({
    type: 'FILTER_INPUT',
    inputs
});

export const resetFilterInput = () => ({
    type: 'RESET_FILTER'
});

export const addSearchText = (text) => ({
    type: 'ADD_SEARCH_TEXT',
    text
});

export const changeCar=(data)=>({
    type: 'CHANGE_CAR',
    id: data.id,
    mark: data.mark,
    model: data.name,
    price: data.price,
    picture: data.picture,
    fuelType: data.fuelType,
    dateOfRelease: data.dateOfRelease,
    fuelAmmount: data.fuelAmmount,
    mileage: data.mileage,
    transmission: data.transmission
})
