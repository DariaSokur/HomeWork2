var Event = require('events').EventEmitter;
var date = new Date();
var event = new Event();
event.on('login', function() {
    console.log('Пользователь зашел на сайт: ' + date);
});
event.on('logout', function() {
    console.log('Пользователь покинул сайт: ' + date);
});
event.on('formSend', function() {
    console.log('Пользователь отправил данные: ' + date);
});
event.on('linkTrans', function() {
    console.log('Пользователь перешел по ссылке: ' + date);
});
event.emit('login');
event.emit('logout');
event.emit('formSend');
event.emit('linkTrans');
