var defangIPaddr = function (address) {
    var result = address.split('.').join('[.]');
    return result;
};
var address = "255.100.50.0";
console.log(defangIPaddr(address));