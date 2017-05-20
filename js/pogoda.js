$(document).ready(function() {

    // Pokazanie pogody
    showWeather();
    setInterval(showWeather, 30000)


    function showWeather() {
        //Pobieranie pogody z api
        //var weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=Lublin,pl&appid=68bf0520ba5e0b83ffe2e3568f6eca01';


        $.getJSON(weatherApi, function(json) {
            console.log(json);
            //Zmiana Stopni
            var ktemp = json.main.temp;
            var ctemp = (ktemp - 273).toFixed(2);
            var wind = json.wind.speed
            var mainWea = json.weather[0].main;
            var hum = json.main.humidity
                //Json na HTML
            var html = "";
            html += "<p><span>" + json.name + "</span>," + json.sys.country + "</p>";
            html += "<p>" + mainWea + "</p>";
            html += "<p>" + "Prędkosc wiatru : " + wind + "m/s";
            html += "<p>" + "Zachmurzenie : " + hum + "%";
            $("#wInfo").html(html);
            var tempid = $("#temp");
            tempid.html(ctemp + " &degC");

            //Zmiana ikony w zależności od pogody
            var iconDiv = $(".icon");

            switch (mainWea) {
                case "Rain":
                    iconDiv.removeClass('cloud');
                    iconDiv.removeClass('clear');
                    iconDiv.addClass('rain');
                    break;

                case "Clouds":
                    iconDiv.removeClass('rain');
                    iconDiv.removeClass('clear');
                    iconDiv.addClass('cloud');
                    break;
                case "Clear":
                    iconDiv.removeClass('rain');
                    iconDiv.removeClass('cloud');
                    iconDiv.addClass('clear');
                    break;
                default:
                    iconDiv.addClass('brak');
            }

        })


    }
})