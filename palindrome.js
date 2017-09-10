let number = 90909;
let n = number.toString();
for (i=0;i<Math.floor(n.length/2);i++){
	if(n.charAt(i) == n.charAt(n.length-1-i)){console.log("yes")}
		else{console.log("no")}
}