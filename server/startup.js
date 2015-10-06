Meteor.startup(function (){
    var data = {'c:areaChart':{'needthis':{'propArea':'value'},'dontneedthis':{}},
            'c:pieChart':{'needthis':{'propPie':'value'},'dontneedthis':{}}};

    var transform = {'$[var=c:(.+)Chart]':'','chart':'$(var)','stuff':'${c:$(var)Chart.needthis}'};

    var result = json2json.transform(data,transform);

    console.log('json2json.result', result);
});
