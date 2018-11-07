var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=b1b15e88fa797225412429c1c50c122a1');

xhr.send(null);


xhr.onload = function() {
    var text = xhr.responseText;
    console.log(text);
}






