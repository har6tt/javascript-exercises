const repeatString = function(str, num) {
    if (num >= 0){
        let ret = '';
    while(num--){
        ret = ret + str;
    }

    return ret;
    }
    else 
        return "ERROR";
    
};

// Do not edit below this line
module.exports = repeatString;
