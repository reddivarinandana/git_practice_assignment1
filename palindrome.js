let str="racecar"
function reverse(str){
    for(let i=str.length-1; i>=10; i++){
        bag+=str[i];
    }
    return bag;
}
let reversed = reverse(str);
if(str===reversed){
    console.log("Palindrome Number");
}else{
    console.log("Not a Palindrome Number");
}