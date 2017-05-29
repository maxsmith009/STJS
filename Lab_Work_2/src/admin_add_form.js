var addCarForm = function(form) {

    var template = kendo.template($("#carForm").html());

    form.append("<div align='center' class='carForm'><h1>Добавление</h1><div id='addCarForm'></div></div>");

    $("#addCarForm").html(template);

    var viewModel = kendo.observable({

        yearValue: 0,
        milleageValue: 0,
        fuelAmmountValue: 200,
        selectedMark: null,
        selectedModel: null,
        isPrimitive: false,
        priceValue: 0,
        transmission: "автомат",
        fuelType: "бензин",
        pictureValue: null,

        onMarkChange: function() {

            models = JSON.parse(localStorage.carsModels);
            var mark = this.get("selectedMark");
            if (mark) {
                models = models.filter(function(item) {
                    return (item.mark == mark);
                });
            }
            viewModel.models.read();
        },

        save: function() {
            var cars = JSON.parse(localStorage.cars);
            var newCar = {};
            newCar.id = cars[cars.length - 1].id + 1;
            newCar.mark = this.get("selectedMark");
            newCar.name = this.get("selectedModel");
            newCar.dateOfRelease = this.get("yearValue");
            newCar.price = this.get("priceValue");
            newCar.fuelType = this.get("fuelType");
            newCar.transmission = this.get("transmission");
            newCar.mileage = this.get("milleageValue");
            newCar.fuelAmmount = this.get("fuelAmmountValue");
            newCar.picture = this.get("pictureValue");
            newCar.clickAmmount = 0;
            cars.push(newCar);
            localStorage.setItem('cars', JSON.stringify(cars));
            SwitchToMainPage();
        },

        cancel: function() {
            SwitchToMainPage();
        },

        marks: new kendo.data.DataSource({

            data: JSON.parse(localStorage.carsMark)

        }),

        models: new kendo.data.DataSource({
            transport: {
                read: function(e) {
                    e.success(models)
                }
            }

        })

    });

    kendo.bind(form, viewModel)

};