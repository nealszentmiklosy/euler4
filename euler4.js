let a = 999;
let b = a;
let l = 100;
let m = 0;
let first = 0;
let second = 0;
function isPalindrome(number){
    let n = number.toString();
    for (i=0;i<Math.floor(n.length/2);i++){
	    if(n.charAt(i) !== n.charAt(n.length-1-i)){return false}
    }
    return true
}
while(a>l){
	while(isPalindrome(a*b)==false){
		if(b>=l){b=b-1;}
		else{a=a-1
		b=a}
}
if(a*b>m){
	first=a;
	second=b;
	m=a*b;
}
a=a-1
l=b
b=a
}
console.log(first)
console.log(second)
console.log(m)