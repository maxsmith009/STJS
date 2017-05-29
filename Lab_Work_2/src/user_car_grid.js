var sortCars = function(obj) {

    obj.sort(function(obj1, obj2) {

        return obj2.clickAmmount - obj1.clickAmmount;

    });
    return obj;
};

var createCarGrid = function(form) {

    var cars = JSON.parse(localStorage.cars);
    cars = sortCars(cars);
    cars = cars.slice(0, 25);


    form.append('<div   id="formForGrid" data-template="carGridTemplate"  data-bind="source: cars"></div>');

    var viewModel = kendo.observable({
        cars: cars

    });
    kendo.bind($("#formForGrid"), viewModel)

};
