var createSearchBar = function(form){
    form.append("<input type='text' id='searchText' placeholder='Введите текст поиска...'>");
    form.append("<button type='button' id='searchButton'>Поиск</button>");
    $('#searchButton').on('click',function(){
        var searchTextArray=$('#searchText').val().split(' ');
        SwitchToCarsPage(searchTextArray);

    });
    };

var createCarGrid = function (form) {
    form.append("<table id='carTable'></table>");
    $.getJSON('cars.json', function(data) {
        for(var i=0;i<data.cars.length;i++){

            $('#carTable').append('<tr><td>' + data.cars[i].id +'\n'+ data.cars[i].name + '</td><td>' + data.cars[i].id +'/n'+ data.cars[i].name + '</td><td>' + data.cars[i].id +'/n'+ data.cars[i].name + '</td><td>' + data.cars[i].id +'/n'+ data.cars[i].name + '</td><tr>');
        }

    });
};