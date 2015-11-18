var http = require('http');
var city = process.argv.slice(2).join('') ||"Bangalore";
const appid="2de143494c0b295cca9337e1e96b00e0";
const unit="metric";
var url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appid+'&units='+unit;
var display_information=function(city){
	console.log(city.name,city.sys.country,city.main.temp);
};

http.request(url, function(res) {
	var data='';
	res.on('data',function(chunk){
		data+=chunk;
	});
	res.on('end',function(){
		var parseddata=JSON.parse(data);
		display_information(parseddata);
	});
	res.on('error',function(){
		console.log("Something Went Wrong");
	});
}).end();