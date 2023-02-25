//primitive & refrence:
//refrence...(array,object,function)=>prototype
//primitive...(string,number,boolean,undefined,null,symbol)=>ignore prototype
//deepcopy:[...data] , Array.from(data) , data.concat()
//shallow copy:
/*
let data=["alireza","moon",25,true,false,10.5,null,"test"]
let result=data
result.push("karim")
console.log(result);
console.log(data);


//deep copy:
let data=["alireza","moon",25,true,false,10.5,null,"test"]
let result=[...data]
result.push("karim")
console.log(result);
console.log(data);


//deep copy:
let data=["alireza","moon",25,true,false,10.5,null,"test"]
let result=Array.from(data)
result.push("karim")
console.log(result);
console.log(data);


//deep copy:
let data=["alireza","moon",25,true,false,10.5,null,"test"]
let result=data.concat() //make new Array
result.push("karim")
console.log(result);
console.log(data);


let data=["alireza","moon",25,true,false,10.5,null,"test"]
let result=[1,2,3,4]
let x=[10,20,30]
let test=[100,200]

test=test.concat(data,result,x)
console.log(test);


let data=["alireza","moon",25,true,false,10.5,null,"test"]
let result=[1,2,3,4]
let x=[10,20,30]
let test=[100,200]
for(let i=0;i<data.length;i++){
    test.push(data[i])
}
for(let i=0;i<result.length;i++){
    test.push(result[i])
}
for(let i=0;i<x.length;i++){
    test.push(x[i])
}
console.log(test);

//slice() :

let data=["alireza","moon",25,true,false,10.5,null,"test",100,5,3,20]
let test=data.slice(0,2)
console.log(data);
console.log(test);


//sort() :

let data=[10,27,100,5,3,20]
data.sort()
console.log(data);


let data1=[10,27,100,5,3,20]
data1.sort((a,b)=>a-b)
console.log(data1);


let data2=[10,27,100,5,3,20]
data2.sort(function(a,b){return a-b})
console.log(data2);


let data3=["karim","alireza","saman","hamid"]
data3.sort()
console.log(data3);


let data3=["karim","alireza","saman","hamid",25,]

//1)

for(const i of data3) {
    console.log(i);
}

//2)

for (let i = 0; i < data3.length; i++) {
    console.log(data3[i]);
}

//3) forEach() :(void) can't insert in a variable

data3.forEach(function(item,index,array){
    console.log(item,index,array);})

data3.forEach(function(item,index,array){
    if(item==="alireza"){
        console.log("ali");
    }else{
        console.log(item);
    }
})

//****************************** 
//update data3 with forEach() :
data3.forEach(function(item,index,array){
    data3[index]=item+"---:D"
})
console.log(data3);
//******************************
//update data3 with for :

for(let i=0;i<data3.length;i++){
    data3[i]=data3[i]+"---:D"
}console.log(data3);


//map() :(any return) can insert in a variable 
//deep copy:
let data4=["karim","alireza","saman","hamid",25,100]
let x=data4.map((elem)=>{
    return elem+5
})
x.push("amir")
console.log(x);
console.log(data4);


//filter():

let data5=[10,11,12,13,14,15,16]
let result=data5.filter((elem)=>{
    return elem>12
})
console.log(result);


let data6=[
    {firstName:"alireza",lastName:"moon",age:25},
    {firstName:"karim",lastName:"moon",age:15},
    {firstName:"rahim",lastName:"moon",age:5}
]
let result=data6.filter((elem)=>{
    return elem.age>20
})
console.log(data6);
console.log(result);


let data7=[
    {brand:"asus",price:"1000$"},
    {brand:"hp",price:"1200$"},
    {brand:"msi",price:"1500$"},
    {brand:"apple",price:"2000$"},
]
let result=data7.filter((elem)=>{
    return elem.brand==="apple" || elem.brand==="asus"
})
console.log(data7);
console.log(result);

//find(first elem) & findIndex(number) : 

let data7=[
    {brand:"asus",price:"1000$"},
    {brand:"asus",price:"1200$"},
    {brand:"asus",price:"1500$"},
    {brand:"asus",price:"2000$"},
]
let result=data7.find((elem)=>{
    return elem.brand==="asus"
})
console.log(data7);
console.log(result);


let data7=[
    {brand:"asus",price:"1000$"},
    {brand:"msi",price:"1200$"},
    {brand:"hp",price:"1500$"},
    {brand:"apple",price:"2000$"},
]
let result=data7.findIndex((elem)=>{
    return elem.brand==="hp"
})
console.log(data7);
console.log(result);


//indexOf(az aval) & lastIndexOf(az akhar) & includes(boolean):

let data8=[
    "turaj",
    "armin",
    "ali",
    25,
    "t@t.com",
    "ali"
]
console.log(data8.indexOf("ali")); //=>2
console.log(data8.indexOf("ali",3)); //=>5
console.log(data8.lastIndexOf("ali")); //=>5
console.log(data8.indexOf("alireza")); //=>-1 (vojod nadarad)

console.log(data8.includes("ali"))//=>true
console.log(data8.indexOf("alireza"))//=>false
*/
let data={
    firstName:"alireza",
    lastName:"moon",
    age:25,
    fatherName:"ali",
    email:"t@t.com",
    flag:true,
    avg:16.1,
    nn:false,
    test:null
}
data.motherName="hello"
console.log(data);

let data1=Object({
    firstName:"alireza",
    lastName:"moon",
    age:25,
    fatherName:"ali",
    email:"t@t.com",
    flag:true,
    avg:16.1,
    nn:false,
    test:null
})