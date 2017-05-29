var changeCarForm = function(form, carId) {

    var cars = JSON.parse(localStorage.cars);
    var selectedCar=cars.filter(function(elem){
        return elem.id==carId
    })[0];

    if(selectedCar) {
        var template = kendo.template($("#carForm").html());

        form.append("<div align='center' class='carForm'><h1>Изменение</h1><div id='changeCarForm'></div></div>");

        $("#changeCarForm").html(template);
    }
    else{

        form.append("<div align='center' style='margin: auto'><h1>Такого автомобиля нет</h1><br><img src='http://bumper-stickers.ru/30160-thickbox_default/grustnyy-smaylik.jpg'> </div>");
    }
    var viewModel = kendo.observable({

        yearValue:selectedCar.dateOfRelease,
        milleageValue: selectedCar.mileage,
        fuelAmmountValue: selectedCar.fuelAmmount,
        selectedMark: selectedCar.mark,
        selectedModel: selectedCar.name,
        isPrimitive: false,
        priceValue: selectedCar.price,
        transmission: selectedCar.transmission,
        fuelType:selectedCar.fuelType,
        pictureValue:selectedCar.picture,

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

            selectedCar.mark = this.get("selectedMark");
            selectedCar.name = this.get("selectedModel");
            selectedCar.dateOfRelease = this.get("yearValue");
            selectedCar.price = this.get("priceValue");
            selectedCar.fuelType = this.get("fuelType");
            selectedCar.transmission = this.get("transmission");
            selectedCar.mileage = this.get("milleageValue");
            selectedCar.fuelAmmount = this.get("fuelAmmountValue");
            selectedCar.picture = this.get("pictureValue");
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