//1
let formula=0;
for(let i=1; i<=10;i++){
    formula=(i*(i+1)/2);
}
console.log("Tong tu 1 den 10: " + formula);

//2
console.log("In bang cuu chuong tu 2 den 9: ");
for (let i=2; i<=9;i++){
    console.log("Bang cuu chuong " + i + ":");
    for (let j=1; j<=10;j++){
        console.log(i + " x " + j + " = " + (i*j));
    }
}

//3
let arr=[];
for (let i=1; i<=99;i++){
    if(i%2!=0){
        arr.push(i);
    }
}
console.log("Cac so le tu 1 den 99: " + arr);

//4
let arr1=[];
for (let i=1; i<=10;i++){
    arr1.push("user" + i + "@example.com");
}
console.log("Danh sach email: " + arr1);

//5
let tongDoanhThu=0;
let doanhThu={
    month: 2,
    total: [100,200,300,400,500,600,700,800,900,1000,1100,1200]
};
for(let i=1;i<=12;i++){
    let doanhThuThang=doanhThu.total[i-1];
    console.log("Doanh thu cua thang "+i+" la: "+ doanhThuThang);
    tongDoanhThu=tongDoanhThu+doanhThuThang;
}
console.log("Tong doanh thu 12 thang la: " + tongDoanhThu);