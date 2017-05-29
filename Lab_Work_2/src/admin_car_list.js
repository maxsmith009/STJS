var createCarList = function(form) {

    form.append('<div id="grid"></div>');

    $(document).ready(function () {

        var dataSource = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    var localData = JSON.parse(localStorage["cars"]);
                    options.success(localData);
                },
                update: function (options) {
                    var localData = JSON.parse(localStorage["cars"]);

                    for (var i = 0; i < localData.length; i++) {
                        if (localData[i].id == options.data.id) {
                            localData[i].mark = options.data.mark;
                            localData[i].name = options.data.name;
                            localData[i].dateOfRelease = options.data.dateOfRelease;
                            localData[i].mileage = options.data.mileage;
                            localData[i].fuelType = options.data.fuelType;
                            localData[i].transmission = options.data.transmission;
                            localData[i].picture = options.data.picture;
                            localData[i].price = options.data.price;
                            break;

                        }
                    }
                    localStorage["cars"] = JSON.stringify(localData);
                    options.success(options.data);
                },
                destroy: function (options) {
                    var localData = JSON.parse(localStorage["cars"]);
                    for (var i = 0; i < localData.length; i++) {
                        if (localData[i].id === options.data.id) {
                            localData.splice(i, 1);
                            break;
                        }
                    }
                    localStorage["cars"] = JSON.stringify(localData);
                    options.success(localData);
                },
                create: function (options) {
                    var localData = JSON.parse(localStorage["cars"]);
                    options.data.id = localData[localData.length - 1].id + 1;
                    localData.push(options.data);
                    localStorage["cars"] = JSON.stringify(localData);
                    options.success(options.data);
                }
            },


            schema: {
                model: {
                    id: "id",
                    fields: {

                        mark: {
                            validation: {
                                required: true
                            }
                        },
                        name: {
                            validation: {
                                required: true
                            }
                        },
                        dateOfRelease: {
                            type: "number",
                            validation: {
                                required: true,
                                min: 1950,
                                max: 2017
                            }
                        },
                        mileage: {
                            type: "number",
                            validation: {
                                required: true
                            }
                        },
                        fuelType: {
                            validation: {
                                required: true
                            }
                        },
                        transmission: {
                            validation: {
                                required: true
                            }
                        },
                        picture: {
                            validation: {
                                required: true
                            }
                        },
                        price: {
                            type: "string",
                            validation: {
                                required: true
                            }
                        }

                    }
                }
            },
            pageSize: 10
        });


        $("#grid").kendoGrid({

            dataSource: dataSource,
            pageable: {
                pageSize: 10
            },
            scrollable: true,
            sortable: {
                mode: "multiple",
                allowUnsort: true
            },
            reorderable: true,
            resizable: true,
            filterable: true,

            toolbar: ["create"],
            columns: [{
                field: "mark",
                title: "Марка",
                width: "180px",
                editor: markDropDownEditor,
                filterable: {
                    ui: markFilter
                }
            }, {
                field: "name",
                title: "Модель",
                width: "180px",
                editor: modelDropDownEditor,
                filterable: {
                    ui: modelFilter
                }
            }, {
                field: "dateOfRelease",
                title: "Год выпуска"
            }, {
                field: "mileage",
                title: "Пробег"
            }, {
                field: "fuelType",
                title: "Тип топлива",
                filterable: {
                    ui: fuelTypeFilter
                },
                editor: fuelDropDownEditor
            }, {
                field: "transmission",
                title: "Тип трансмиссии",
                filterable: {
                    ui: transmissionFilter
                },
                editor: transmissionDropDownEditor

            }, {
                field: "picture",
                title: "Фото",
                template: '<img src="#=picture #" width="150" height="100">',
              // editor:pictureUploadEditor,
                sortable: false,
                filterable: false
            }, {
                field: "price",
                title: "Цена",
                sortable: {
                    compare: function compare(a, b) {
                        var arr = (a.price).split('$');
                        var newa = Number(arr[0]);
                        arr = (b.price).split('$');
                        var newb = Number(arr[0]);
                        return newa - newb;
                    }
                }

            }, {
                command: ["edit", "destroy"]
            }],
            editable: "inline"

        });

    });

    function fuelTypeFilter(element) {
        element.kendoDropDownList({
            dataSource: fuelTypeOptions,
            optionLabel: "--Select Value--"
        });
    }

    function transmissionFilter(element) {
        element.kendoDropDownList({
            dataSource: transmissionOptions,
            optionLabel: "--Select Value--"
        });
    }

    function markFilter(element) {
        element.kendoDropDownList({
            dataSource: JSON.parse(localStorage.carsMark),
            dataTextField: "mark",
            dataValueField: "mark",

            optionLabel: "--Select Value--"
        });
    }

    function modelFilter(element) {
        element.kendoDropDownList({
            dataSource: JSON.parse(localStorage.carsModels),
            dataTextField: "name",
            dataValueField: "name",
            optionLabel: "--Select Value--"
        });
    }

    function markDropDownEditor(container, options) {
        $('<input id="mark" name="mark" required name="' + options.field + '"/>')
            .appendTo(container)
            .kendoDropDownList({
                autoBind: false,
                dataTextField: "mark",
                dataValueField: "mark",
                dataSource: JSON.parse(localStorage.carsMark)
            });
    }

    function modelDropDownEditor(container, options) {
        $('<input id="modelName"required name="' + options.field + '"/>')
            .appendTo(container)
            .kendoDropDownList({
                autoBind: false,
                dataTextField: "name",
                dataValueField: "name",
                cascadeFrom: "mark",
                dataSource: JSON.parse(localStorage.carsModels)
            });
    }

    function fuelDropDownEditor(container, options) {
        $('<input required name="' + options.field + '"/>')
            .appendTo(container)
            .kendoDropDownList({
                autoBind: false,
                dataSource: fuelTypeOptions
            });
    }

    function transmissionDropDownEditor(container, options) {
        $('<input required name="' + options.field + '"/>')
            .appendTo(container)
            .kendoDropDownList({
                autoBind: false,
                dataSource: transmissionOptions
            });
    }

    function pictureUploadEditor(container, options) {
        $('<input type="file" id="files" name="files" />')
            .appendTo(container)
            .kendoUpload({
     async: {
         autoUpload: false,
         saveUrl: "/save",
         removeUrl: "/remove"
     }
     });

    }

    var fuelTypeOptions = ["бензин", "дизель", "газ"];
    var transmissionOptions = ["ручная", "автомат"];

};