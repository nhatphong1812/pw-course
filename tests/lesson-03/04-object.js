//1
let car={
    make: "Toyota",
    model: "Corolla",
    year: "2021",
}
console.log(car.year);

//2
let person={
    name: "Phong",
    adress:{
        street: "Go Vap",
        city: "Ho Chi Minh",
        country: "Vietnam",
    }
}
console.log(person.adress.street + ", " + person.adress.city + ", " + person.adress.country);

//3
let student={
    name: "Phong",
    grades:{
        math: 9.5,
        english: 10,
    }
}
console.log(student.grades["math"]);

//4
let setting={
    volume: 70,
    brightness: 30,
}
setting.volume=90;//cach 1
setting["volume"]=100; //cach 2
console.log(setting.volume);

//5
let bike={
    brand: "Asama"
}
bike.color="red"; //cach 1
bike["color"]="blue"; //cach 2
console.log(bike);

//6
let employee={
    name: "Phong",
    age: 24
}
delete employee.age; //cach 1
delete employee["age"]; //cach 2
console.log(employee);

//7
const school={
    classA:["An","Binh","Chau"],
    classB:["Dao","Huong","Giang"]
}
for(let i=0; i<school.classA.length; i++){
    console.log("Hoc sinh lop A: "+school.classA[i]);
}
for(let i=0; i<school.classB.length; i++){
    console.log("Hoc sinh lop B: "+school.classB[i]);
}


