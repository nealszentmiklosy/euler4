let isPalindrome = true;
let number = 909099999;
let n = number.toString();
for (i=0;i<Math.floor(n.length/2);i++){
	if(n.charAt(i) !== n.charAt(n.length-1-i)){isPalindrome = false}
}
// isPalindrome = true
console.log(isPalindrome)