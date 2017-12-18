var needle = require('needle');
needle.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function(error, response) {
    if (error) throw error;
        for (var prop in response.body) {
            console.log(response.body[prop]['ccy'] + ': ' + response.body[prop]['buy'] + ', ' + response.body[prop]['base_ccy'] + ', ' + response.body[prop]['sale'] + ' ' + response.body[prop]['base_ccy'] + ';');
        }
});