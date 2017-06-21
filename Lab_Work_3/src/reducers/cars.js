const carsData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return [
                ...state,
                {
                    id: action.id,
                    mark: action.mark,
                    model: action.model,
                    price: action.price,
                    picture: action.picture,
                    fuelType: action.fuelType,
                    dateOfRelease: action.dateOfRelease,
                    fuelAmmount: action.fuelAmmount,
                    mileage: action.mileage,
                    transmission: action.transmission
                }
            ];
        case 'CHANGE_CAR':
            return state.map(car=>
                car.id===action.id ? {
                    ...car,
                        mark: action.mark,
                        model: action.model,
                        price: action.price,
                        picture: action.picture,
                        fuelType: action.fuelType,
                        dateOfRelease: action.dateOfRelease,
                        fuelAmmount: action.fuelAmmount,
                        mileage: action.mileage,
                        transmission: action.transmission
                    }
                :car
            );
        default:
            return state
    }
};

export default carsData