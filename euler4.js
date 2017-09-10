let test = 90909;
function isPalindrome(number){
    let n = number.toString();
    for (i=0;i<Math.floor(n.length/2);i++){
	    if(n.charAt(i) !== n.charAt(n.length-1-i)){return false}
    }
    return true
}
console.log(isPalindrome(test))