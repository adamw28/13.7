var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
path = require("path");

fs.stat('./cat.jpg', function(err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});
fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nPo zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});
fs.readdir('./',function(err, files) {
    if (err) {
        throw err;
    }
    var katalog = files;
    console.log(katalog);
    katalog.forEach(function(plik,index){plik = plik + '\n';console.log(plik);
        fs.appendFile('./katalog.txt',plik,function(err,data){
            fs.readFile('./katalog.txt', 'utf-8', function(err, data) {
                console.log(plik);
            });
        });
	});
});