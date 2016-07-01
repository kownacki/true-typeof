"use strict";

module.exports = function(value) {
    if (value === null) {
        return "null";
    }

    var t = typeof value;
    
    if (t === "function") {
        return "object";
    }
    
    return t;
};
