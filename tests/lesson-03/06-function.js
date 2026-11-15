//1
function multiply(a,b){
    let ketQua=a*b;
    console.log("Tich cua 2 so la: "+ketQua);
}
multiply(5,6);
multiply(11,10);

//2
function findMin(a,b,c){
    if(a<b){
        if(a<c){
            console.log("So be nhat la: "+a);
        }
        else 
            console.log("So be nhat la: "+c);
    }
    else
        if(b<c){
            console.log("So be nhat la: "+b);
        }
        else 
            console.log("So be nhat la: "+c);
}
findMin(2,4,1);
findMin(1,-10,5);

//3
let student=[
    { name: "An", score: 9 },
    { name: "Bình", score: 7 },
    { name: "Tinh", score: 8 },
    { name: "Di", score: 5 }
];
let threshold=8;
function getTopStudent(student,threshold){
    let topStudentList=[];
    for(let i=0;i<student.length;i++){
        if(student[i].score>=threshold){
        topStudentList.push(student[i].name);
        }
    }
    return topStudentList;
}
console.log("Danh sách học sinh có điểm cao: ", getTopStudent(student,threshold));

//4
function caculateInterest(principal,rate,years){
    let total = principal + (principal * rate * years)/100;
    return total;
}
console.log("Tong so tien goc + lai: ", caculateInterest(100, 5, 1));
