var createCarsList = function(form, text) {

    var textArray = text.trim().split(/\s+/);

    var cars = JSON.parse(localStorage.cars);
    cars = sortCars(cars);
    cars = selectNeededCar(textArray, cars);

    createFilter(form, cars);

};

var selectNeededCar = function(searchText, carsList) {

    if (searchText[0] === "") {

        return carsList;
    } else {
        var newCarList = [];
        for (var i = 0; i < carsList.length; i++) {
            var ammountOfSimilars = 0;
            for (var j = 0; j < searchText.length; j++) {
                for (var key in carsList[i]) {
                    if (carsList[i][key] === searchText[j]) {
                        ammountOfSimilars++;
                        break;
                    }
                }

            }
            if (ammountOfSimilars === searchText.length)
                newCarList.push(carsList[i]);
        }
        return newCarList;
    }
};