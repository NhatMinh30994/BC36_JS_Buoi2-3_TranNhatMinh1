// ========Bài 1: Tính tiền lương nhân viên========
/**
 * INPUT: lương 1 ngày , số ngày làm
 * PROCESS:
 *    1. lấy input
 *    2. tính tổng lương
 * OUTPUT: tính lương theo số ngày làm
 */
function tinhTongLuong(){
    var luong1Ngay = document.getElementById('luong1Ngay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    var tongLuong = luong1Ngay * soNgayLam;
    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString() + " đ";
}



// ========Bài 2: Tính giá trị trung bình========
/**
 * INPUT: cho 5 số thực
 * PROCESS:
 *    1. lấy input
 *    2. tính trung bình cộng
 * OUTPUT: tính trung bình
 */
function tinhTB(){
    var n1 = +document.getElementById('soThuNhat').value;
    var n2 = +document.getElementById('soThuHai').value;
    var n3 = +document.getElementById('soThuBa').value;
    var n4 = +document.getElementById('soThuTu').value;
    var n5 = +document.getElementById('soThuNam').value;
    var tinhTrungBinh = tinhTrungBinh = (n1 + n2 + n3 + n4 + n5) / 5;
    document.getElementById('trungBinh').innerHTML = tinhTrungBinh;
}



// ========Bài 3: Quy đổi tiền========
/**
 * INPUT: tỉ giá usd sang vnd, số usd cần quy đổi
 * PROCESS:
 *    1. lấy input
 *    2. tính tiền quy đổi
 * OUTPUT: tính tổng tiền
 */
function tinhTongTien(){
    var tiGiaUSD = 23500;
    var soUSD = document.getElementById('soUSD').value;
    var tongTien = tiGiaUSD * soUSD;
    document.getElementById('tongTien').innerHTML = tongTien.toLocaleString() + " VNĐ";
}


// ========Bài 4: Tính diện tích, chu vi HCN========
/**
 * INPUT: chiều dài và chiều rộng
 * PROCESS:
 *    1. lấy input
 *    2. chu vi, diện tích
 * OUTPUT: tính ra chu vi và diện tích HCN
 */
function tinh(){
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById('tinh').innerHTML = "Chu vi: " + chuVi + " và Diện tích: " + dienTich;
}



// ========Bài 5: Tính tổng 2 ký số========
/**
 * INPUT: số nguyên có 2 chữ số
 * PROCESS:
 *    1. lấy input
 *    2. tách hàng đơn vị, hàng chục
 *    3. tổng ký số
 * OUTPUT: tính ra tổng 2 ký số
 */
function tinhTong(){
    var n = document.getElementById('so').value;
    var so_hang_dv = n % 10;
    var so_hang_chuc = Math.floor(n % 100/10);
    var sum = so_hang_dv + so_hang_chuc;
    
    document.getElementById('tong').innerHTML = sum;
}