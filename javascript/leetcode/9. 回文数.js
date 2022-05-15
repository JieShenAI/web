/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
     x = String(x)
    if(x[0]==='+' || x[0]==='-'){
        return false
    }
    
    for (let index = 0; index < x.length/2; index++) {
        let last = x.length - 1 - index
        if(x[index] !== x[last]){
            return false
        }
        if(index === last){
            break
        }
    }
    return true
};

s = 10
console.log(isPalindrome(s));