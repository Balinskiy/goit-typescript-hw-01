import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
// test Типи для змінних та аргументів //////////////
// type OneOrTwo = 1 | 2;
// let value: OneOrTwo;
// value = 1;
// value = 3;
//
// type Employee = {
//   name: string;
//   id: number;
// };
// type Manager = {
//   employees: Employee[];
// };
// type CEO = Employee & Manager;
// const ceo: CEO = {
//   name: "Alice",
//   id: 1,
//   employees: [
//     {
//       name: "Bob",
//       id: 2,
//     },
//     {
//       name: "Mile",
//       id: 3,
//     },
//   ],
// };
// console.log(ceo);
// export {};
//
// type Dog = {
//   legs: 4;
//   bark: () => void;
// };
// type Fish = {
//   fins: 2;
//   swim: () => void;
// };
// let pet: Dog | Fish;
// function isDog(pet: Dog | Fish): pet is Dog {
//   return "bark" in pet;
// }
// if (isDog(pet)) {
//   pet.bark();
// } else {
//   pet.swim();
// }
// console.log(isDog(pet));
// export {};
//
// function combine(param1: string | number, param2: string | number) {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }
// console.log(combine(12, 15));
// export {};
//
// let mixedType: string | number | boolean;
// (mixedType = "ok"), (mixedType = 10), (mixedType = {});
// export {};
//
// const enum Test {
//   A = 1,
//   B = 2,
// }
// for (let item in Test) {
//   console.log(item);
// }
//
// const enum HttpCodes {
//   Ok = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
// }
// const status = HttpCodes.Ok;
// console.log(status);
//
// enum UserStatus {
//   Active = "ACTIVE",
//   Inacive = "INACTIVE",
//   Banned = "BANNED",
// }
// let status: UserStatus = UserStatus.Active;
// console.log(UserStatus);
//
// enum Role {
//   ADMIN,
//   USER,
// }
// console.log(Role.ADMIN);
// console.log(Role[Role.ADMIN]);
//
// enum Role {
//   ADMIN,
//   USER,
// }
// const person = { role: Role.ADMIN };
// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }
// export {};
// //
// let tuple: [string, ...number[]];
// tuple = ["tom", 1, 1, 1, 1, 1];
// //
// let fixed: [string, number];
// fixed = ["Tom", 10];
// fixed.push("add new string");
// export {};
// //
// let currentData: [number, number, number];
// currentData = [31, 1, 2024];
// //
// let tupleData: [string, boolean];
// tupleData = ["Tom", true];
// tupleData = [false, "Bill"];
// tupleData = ["Tom", false, false];
// //
// function fetchUserData() {
//   return "Tom";
// }
// let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
// if (typeof userData === "string") {
//   console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
// }
// //
// let anyData: unknown = 4;
// anyData = "string";
// anyData = false;
// let num: number;
// num = anyData;
// export {};
// //
// function fetchUserData(id: string, callback: (data: any) => void): void {
//   const responseData = { name: "Tom" };
//   callback(responseData);
// }
// fetchUserData("123", (data) => {
//   console.log(data.name);
// });
// export {};
// //
// let data: any = fetchData();
// //
// let anyData: any = 4;
// (anyData = "string"), (anyData = 123), (anyData = {});
// let num: number;
// num = anyData;
// export {};
// test Базові типи //////////////
// //
// let arrAny: any[] = [1, 2, "3", false, { name: 'Tom, age:10' }, { [1, 2, 3]}];
// //
// type Users = {
//   nameUser: string;
//   age: number;
// };
// let users: Users[] = [
//   { nameUser: "Tom", age: 30 },
//   { nameUser: "Tom", age: 30 },
// ];
// //
// let users: {
//   nameUser: string;
//   age: number;
// }[] = [
//   { nameUser: "Tom", age: 30 },
//   { nameUser: "Bill", age: "50" },
// ];
// //
// let users: {
//   nameUser: string;
//   age: number;
// }[] = [
//   { nameUser: "Tom", age: 20 },
//   { nameUser: Bill, age: 40 },
// ];
// //
// let numbers: Array<number> = [1, 2, 3, "4"];
// //
// let mixer: (string | number)[] = ["text", 1, 2, "3"];
// //
// let matrix: number[][];
// matrix = [10, [2, 3, 4, 5, "5"]];
// //
// let arrNumber: number[];
// arrNumber = [1, 2, 3, "4"];
// //
// let arrString: string[];
// arrString = ["10", 1, "array"];
// // interface User {
// //   nameUser: string;
// //   age: number;
// // }
// // const user: User = {
// //   nameUser: "Nom",
// //   age: 20,
// // };
// // export {};
// // type User = {
// //   nameUser: string;
// //   age: number;
// // };
// // const user: User = {
// //   nameUser: "TransformStream",
// //   age: 10,
// // };
// // export {};
// // type User = {
// //   nameUser: string;
// //   age: number;
// // };
// // let user: User = {
// //   nameUser: 10,
// //   age: 50,
// // };
// // const user: { nameUser: string; age: number } = {
// //   nameUser: "Tom",
// //   age: 40,
// // };
// // const userNew: { nameUser: string; age: number } = {
// //   nameUser: 10,
// //   age: 30,
// // };
//# sourceMappingURL=index.js.map