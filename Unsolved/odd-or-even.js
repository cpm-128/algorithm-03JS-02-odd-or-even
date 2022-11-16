//TODO: Write code to return the string "odd" if `num` is an odd number
//TODO: and return the string "even" if `num` is an even number

var oddOrEven = function(num) {

    // num/2
    var remainder = num % 2;

    // if remainder !== 0
    if (remainder !== 0) {
        // string 'odd'
        return 'odd';
    }
    // else
    else {
        // string 'even'
        return 'even';
    }

};
