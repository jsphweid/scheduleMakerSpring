function getData(specialString) {
    if (specialString) {
        return makeDataArray(JSON.parse(specialString.replace(/'/g, "\"")));
    } else {
        return Array.apply(null, Array(24)).map(Number.prototype.valueOf, 0);
    }
}

function makeDataArray(obj) {
    var ret = [];
    for (var i = 0; i < 24; i++) {
        var hour = "hour";
        hour += ("0" + i).slice(-2);
        ret.push(obj[hour]);
    }
    return ret;
}

function drawGraph(params, specialString) {
    var data = getData(specialString);
    return new RGraph.Bar({
        id: 'cvs',
        data: data,
        options: {
            adjustable: params.adjustable,
            titleYaxis: "Necessary Labor Index",
            ymax: 300,
            titleYaxisX: 30,
            ylabelsCount: 10,
            numyticks: 10,
            gutterLeft: 80,
            colors: [params.color],
            labels: ['4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM', '1 AM', '2 AM', '3 AM'],
            textAngle: -90,
            labelsOffsety: 50
        }
    }).draw();
}

function updateTagAssocations(rgraph, name) {
    $(function () {
        if (!name) alert('fix me');
        $("[path='" + name + "']").submit(function () {
            for (var i = 0; i < 24; i++) {
                var hour = "hour";
                hour += ("0" + i).slice(-2);
                $("#" + hour).val(Math.floor(rgraph.data[i]));
            }
        });
    });
}