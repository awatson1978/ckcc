## json2json  

JSON transformation library for data pipelines using the [json2json](https://github.com/moappi/json2json) library.

===============================
#### Installation  

````sh
$ meteor add clinical:json2json  
````  


===============================
#### Basic Usage    

Add the following to ``server/startup.js``.

````js
Meteor.startup(function (){
  var data = {'c:areaChart':{'needthis':{'propArea':'value'},'dontneedthis':{}},
          'c:pieChart':{'needthis':{'propPie':'value'},'dontneedthis':{}}};

  var transform = {'$[var=c:(.+)Chart]':'','chart':'$(var)','stuff':'${c:$(var)Chart.needthis}'};

  var result = json2json.transform(data,transform);

  console.log(result);  
});
````


===============================
#### Licensing  

MIT.  Use as you will.  
