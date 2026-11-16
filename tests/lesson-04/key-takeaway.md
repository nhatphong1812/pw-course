# **CÁC KIẾN THỨC BÀI 4**
## Javascript nâng cao
### 1/ Phạm vi của biến (scope) bao gồm:
- Block scope:
    + Được khai báo trong {}
    + var không bị giới hạn trong {}, chỉ có let/const bị giới hạn. 
- Function scope:
    + Biến được khai báo trong 1 hàm
    + Cả var/let/const đều bị giới hạn khi ra ngoài hàm
- Global:
    - Biến được khai báo tự do, không nằm trong khối hay hàm gì cả

## 2/ Break và Continue trong Javascript
- break: dừng hoàn toàn vòng lặp ngay lập tức khi thỏa điều kiện
- continue: bỏ qua phần còn lại của vòng lặp và trực tiếp đi qua vòng lặp tiếp theo 

## 3/ Câu điều kiện nâng cao
Ngoài if...else, còn có 1 số câu lệnh khác như if...else...if, toán tử điều kiện ("?", không nên sử dụng nhiều)

## 4/ Vòng lặp nâng cao
- for...in Loop: dùng để duyệt các thuộc tính của object
- forEach Method: thực thi function cho mỗi phần tử. Tuy nhiên không thể dùng break/continue

## 5/ Utils function
Là các hàm có sẵn của Javascript. 2 loại thường dùng là string và array.
- sting utils: trim(), trimStart(), trimEnd(), includes(), split(), replace(), ...
- array utils: push(), pop(), unshift(), shift(), splice(), find(), filter(), map(), sort(), ... 

