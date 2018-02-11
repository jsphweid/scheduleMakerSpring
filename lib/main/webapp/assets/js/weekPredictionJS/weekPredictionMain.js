"use strict";

function attachValuesToSelect(badJson) {

    // fix json object for javascript
    var jsonObj = JSON.parse(badJson.replace(/'/g, "\""));

    // loop through and fix
    for (var i = 0; i < 7; i++) {
        var key = "day" + i + "Id";
        $('#select' + i).val(jsonObj[key]);
    }
}