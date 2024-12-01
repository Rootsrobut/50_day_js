// closure -> kuch new tarike se sikhte hai
/*
var sum=function(a){
  console.log('Total Viewers '+a);
  var c=4;
  return function(b){
       return a+b+c;
  }
}
const result=sum(200); // calling 
console.log(result(5));

var sum=function(a,b,c){
    return {
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}
var storesum=sum(3,4,5);
console.log(storesum.getSumThree());
console.log(storesum.getSumTwo());*/

// function inside functon 
function fun(){
    return function f(a,b){
       return a+b;
    }
}
var result=fun();
console.log(result(5,6));


