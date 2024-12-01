// Apply , call & Bind in js

//problem statement 
/*

let userDetails={
    name:"Rahul",
    Age:28,
    passion:'software Engineer',
    printDetails:function(){
        console.log(this.name,this.Age,this.passion);
    }
}
// userDetails.printDetails();
let userDetails2={
    name:"Sumit Rahul",
    Age:32,
    passion:'software Engineer',
}
// function borrowing 
userDetails.printDetails.call(userDetails2);
*/
let userDetails={
    name:"Rahul",
    Age:28,
    passion:'software Engineer',
    
}
// generic function 
let printDetails=function(state,country){
    console.log(this.name,this.Age,this.passion," ",state," ",country);
}
let userDetails2={
    name:"Sumit Rahul",
    Age:32,
    passion:'software Engineer',
}
// function borrowing 
// printDetails.call(userDetails2,'bihar','india');
// printDetails.call(userDetails,'up','india');
//apply function 
// printDetails.apply(userDetails2,['bihar','india']);
// printDetails.apply(userDetails,['up','india']);
//bind  function 
printDetails.bind(userDetails2,'bihar','india')();
