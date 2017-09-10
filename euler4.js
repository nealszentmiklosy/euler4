let a = 999;
let b = a;
let l = 100;
function isPalindrome(number){
    let n = number.toString();
    for (i=0;i<Math.floor(n.length/2);i++){
	    if(n.charAt(i) !== n.charAt(n.length-1-i)){return false}
    }
    return true
}
while(isPalindrome(a*b)==false){
	if(b>=99){b=b-1;}
	else{a=a-1
	b=a}
}
console.log(a)
console.log(b)