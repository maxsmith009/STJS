const initialState={
    mark:"",
    model: "",
    price:100000,
    fuelType: "",
    dateOfRelease: 1950,
    mileage:1000000,
    transmission:""
}

const filterInputs = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_INPUT':
            return {
                mark: action.inputs.mark,
                model: action.inputs.model,
                price: action.inputs.price,
                fuelType: action.inputs.fuelType,
                dateOfRelease: action.inputs.dateOfRelease,
                mileage: action.inputs.mileage,
                transmission: action.inputs.transmission
            };
        case 'RESET_FILTER':
            return initialState;
        default:

            return state
    }
};

export default filterInputs