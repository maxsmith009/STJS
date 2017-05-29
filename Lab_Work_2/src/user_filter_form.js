var createFilter = function(form, carList) {

    var searchedCarList=carList;

    var models=JSON.parse(localStorage.carsModels);

    var template = kendo.template($("#filterTemplate").html());

    form.append("<div  id='filter'></div>");
    form.append("<div   id='carList' data-template='carListTemplate' data-bind='source: searchedCarList'></div>");

    $("#filter").html(template);

    var viewModel = kendo.observable({

        yearValue: [1950, 2017],
        milleageValue: 0,
        fuelAmmountValue: 200,
        selectedMark: null,
        selectedModel: null,
        isPrimitive: false,
        priceValue: [0, 51000],
        transmission: "автомат",
        fuelType: "бензин",
        isVisible: false,
        isMessageVisible: false,

        onMarkChange: function() {

            models=JSON.parse(localStorage.carsModels);
            var mark= this.get("selectedMark");
            if(mark){
                models= models.filter(function(item){
                    return (item.mark==mark);
                })
                ;
            }

            viewModel.models.read();

        },

        showInput: function() {
            this.set("isVisible", (!this.get("isVisible")));
        },

        createModelOption: function() {

            var newModel = {};
            newModel.name = this.get("addModelValue");
            newModel.mark = this.get("selectedMark");
            var modelList = JSON.parse(localStorage.carsModels);
            modelList.push(newModel);
            localStorage.setItem('carsModels', JSON.stringify(modelList));
            this.set("isVisible", false);
            this.set("isMessageVisible", true);
            models=JSON.parse(localStorage.carsModels);
            viewModel.models.read();
        },

        runFilter: function() {

            searchedCarList=carList;
            var filter = {};
            filter.mark=this.get("selectedMark");
            filter.name = this.get("selectedModel");
            filter.dateOfRelease = this.get("yearValue");
            filter.price=this.get("priceValue");
            filter.fuelType=this.get("fuelType");
            filter.transmission=this.get("transmission");
            filter.mileage = this.get("milleageValue");
            filter.fuelAmmount=this.get("fuelAmmountValue");
            searchedCarList=runFilter(searchedCarList,filter);
            viewModel.searchedCarList.read();
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
        }),

        searchedCarList:new kendo.data.DataSource({
        transport: {
            read: function(e) {
                e.success(searchedCarList)
            }
        }
    })
    });

    kendo.bind(form, viewModel)

};

 var runFilter = function(cars,filter) {

 var newCarList=cars.filter(function(item) {

 if (filter.mark && filter.mark !== item.mark) {
return false;
 }
 if (filter.name && filter.name !== item.name) {
     return false;
 }

 if (filter.dateOfRelease[0] >= item.dateOfRelease) {
     return false;
 }
 if (filter.dateOfRelease[1] <= item.dateOfRelease) {
     return false;
 }

     if (filter.price[0] >= item.price) {
         return false;
     }
     if (filter.price[1] <= item.price) {
         return false;
     }

 if (filter.mileage >= item.mileage) {
     return false;
 }

 if (filter.fuelType !== item.fuelType) {
     return false;
 }
 if (filter.fuelAmmount >= item.fuelAmmount) {
     return false;
 }
 if (filter.transmission !== item.transmission) {
     return false;
 }
return true;
 });
return newCarList
 };