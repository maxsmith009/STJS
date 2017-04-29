var a=function(){
    $.getJSON('cars.json', function(data) {
    console.log(data.cars);
    console.log(data.cars.length);
    for(var i=0;i<data.cars.length;i++){
        $('#nn').append('<tr><td>' + data.cars[i].id + '</td><td>' + data.cars[i].name +
            '</td><td>' + data.cars[i].mark + '</td><tr>');
    }
});}