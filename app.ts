//array
let arr=[1,2,3,"array",{name:"Aima"}];
let arrr:number[]=[1,2,3,"array",{name:"Aima"}];//not allowed bcz type of array is already defined as number
console.log(arr,arrr)
//tuples
let arr2:[number,string]=[12,"Aima"];
//enums(enemurations)
enum UserRoles{
    ADMIN="admin",
    GUEST="guest",
    SUPER_ADMIN="super_admin"
}
UserRoles.SUPER_ADMIN;
//any,undeefined , unknown,never,void,null
let a;
//type inference typescript itself guess type of variable
let b="Aima";
console.log(b)
// type annotations you define type of variable 
let c:number|string;
c=12;
c="kashmala"
//interface 
//two interface of same name get merged
interface User{
    name:string
    email:string
    password:string
    gender?:string//optional but first three mandatory
}
interface Admin extends User{
    admin:boolean;
}
function getUserData(obj:User){

}
function getAdminData(obj:Admin){

}
getUserData({name:"Aima",email:"email",password:"123"})//passing or not passing gender both are acceptable
getAdminData({name:"Aima",email:"email",password:"123",admin:true})
//aliases
type value=string | number ;
let d:value;//now type of d is your customized define type named value