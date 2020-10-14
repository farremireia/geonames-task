$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

$('#btnSearch1').click(function() {

    $.ajax({
        url: "libs/php/getWikipediaSearch.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lang: $('#selLanguage').val(),
            placeName: $('#q').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#txtResult').html(result['data'][0]['summary']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("An error occurred while processing your request. Please try again.");
        }
    }); 


});

$('#btnSearch2').click(function() {

    $.ajax({
        url: "libs/php/getNeighbours.php",
        type: 'POST',
        dataType: 'json',
        data: {
            countryCode: $('#countryCode').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {
                
                $('#txtNeighbours').html(result['data'][0]['toponymName']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("An error occurred while processing your request. Please try again.");
        }
    }); 


});

$('#btnSearch3').click(function() {

    $.ajax({
        url: "libs/php/getTimezone.php",
        type: 'POST',
        dataType: 'json',
        data: {
            latitude: $('#latitude').val(),
            longitude: $('#longitude').val(),
            date: $('#date').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {
                
                $('#txtTimezone').html(result['data']['timezoneId']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("An error occurred while processing your request. Please try again.");
        }
    }); 


});

$('#btnSearch4').click(function() {

    $.ajax({
        url: "libs/php/getWeather.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#north').val(),
            south: $('#south').val(),
            east: $('#east').val(),
            west: $('#west').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {
                
                $('#txtWeather').html(result['data'][0]['temperature']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("An error occurred while processing your request. Please try again.");
        }
    }); 


});

$('#btnSearch5').click(function() {

    $.ajax({
        url: "libs/php/getHierarchy.php",
        type: 'POST',
        dataType: 'json',
        data: {
            geonameId: $('#geonameId').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {
                
                $('#txtGeoname').html(result['data'][0]['toponymName']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("An error occurred while processing your request. Please try again.");
        }
    }); 


});