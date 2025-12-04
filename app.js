"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//array
let arr = [1, 2, 3, "array", { name: "Aima" }];
let arrr = [1, 2, 3, "array", { name: "Aima" }]; //not allowed bcz type of array is already defined as number
console.log(arr, arrr);
//tuples
let arr2 = [12, "Aima"];
//enums(enemurations)
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.SUPER_ADMIN;
//any,undeefined , unknown,never,void,null
let a;
//type inference typescript itself guess type of variable
let b = "Aima";
console.log(b);
// type annotations you define type of variable 
let c;
c = 12;
c = "kashmala";
function getUserData(obj) {
}
function getAdminData(obj) {
}
getUserData({ name: "Aima", email: "email", password: "123" }); //passing or not passing gender both are acceptable
getAdminData({ name: "Aima", email: "email", password: "123", admin: true });
let d; //now type of d is your customized define type named value
//# sourceMappingURL=app.js.map