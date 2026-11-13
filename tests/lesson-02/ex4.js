const Height=165; //centimet
if (Height>100) {
    console.log("Can nang ly tuong cua ban la: " + (Height-100)*9/10);
    console.log("Muc can toi da cua ban la: " + (Height-100));
    console.log("Muc can toi thieu cua ban la: " + (Height-100)*8/10);
}
else if (Height<=100) {
    console.log("Pham vi ap dung: Cong thuc ap dung cho chieu cao >100 centimet");
}