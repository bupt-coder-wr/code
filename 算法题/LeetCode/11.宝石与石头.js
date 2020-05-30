// var numJewelsInStones = function (J, S) {
//     jLength = J.length;
//     sLength = S.length;
//     count = 0;
//     for (var i = 0; i < jLength; i++) {

//         for (var j = 0; j < sLength; j++) {
//             console.log((J[i] + '---' + S[j]));
//             if (J[i] == S[j]) {
//                 console.log('第' + i + j + '位')
//                 count++;
//             }
//         }
//     }
//     return count;
// };
var numJewelsInStones = function(J, S) {
    return S.split('').filter( i => J.includes(i)).length
}
var J = "aA",
    S = "aAAbbbb";
console.log(numJewelsInStones(J, S));