/* --------------- Hàm getElement --------------- */
function getEle(id) {
    return document.getElementById(id);
}
/* --------------- Bài 1 --------------- */
function tinhTongDiem(diem1, diem2, diem3, khuVuc, DoiTuong) {
    var diemTB = diem1 + diem2 + diem3 + khuVuc + DoiTuong;
    return diemTB;
}
function xetTotNghiep(diemChuan, diemTong) {
    if (diemChuan <= diemTong) {
        getEle("result__bai1").innerHTML = "Bạn đã đậu. Tổng điểm: " + diemTong;
    }
    else {
        getEle("result__bai1").innerHTML = "Bạn đã trượt. Tổng điểm: " + diemTong;
    }
}
getEle("qlTuyenSinh").onclick = function () {
    var diemChuan = +getEle("diemChuan").value;
    var diem1 = +getEle("diem1").value;
    var diem2 = +getEle("diem2").value;
    var diem3 = +getEle("diem3").value;
    var khuVuc = +getEle("khuVuc").value;
    var DoiTuong = +getEle("doiTuong").value;
    var diemTong = tinhTongDiem(diem1, diem2, diem3, khuVuc, DoiTuong);
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        getEle("result__bai1").innerHTML = "Bạn đã trượt. Do có một môn bị điểm liệt";
    }
    else {
        xetTotNghiep(diemChuan, diemTong);
    }
}

/* --------------- Bài 2 --------------- */
function tinhTienDien(soKW) {
    const mocKW1 = 500 * 50;
    const mocKW2 = mocKW1 + (650 * 50);
    const mocKW3 = mocKW2 + (850 * 100);
    const mocKW4 = mocKW3 + (1100 * 150);
    var tongTien;
    if (soKW <= 50) {
        tongTien = soKW * 500;
    }
    else if (soKW > 50 && soKW <= 100) {
        tongTien = mocKW1 + ((soKW - 50) * 650);
    }
    else if (soKW > 100 && soKW <= 200) {
        tongTien = mocKW2 + ((soKW - 100) * 850);
    }
    else if (soKW > 200 && soKW <= 350) {
        tongTien = mocKW3 + ((soKW - 200) * 1100);
    }
    else {
        tongTien = mocKW4 + ((soKW - 350) * 1300);
    }
    return tongTien;
}

getEle("btnTienDien").onclick = function () {
    var hoTen = getEle("hoTen").value;
    var soKW = +getEle("dienSd").value;
    var tienDien = tinhTienDien(soKW);
    tienDien = tienDien.toLocaleString('vi');
    getEle("result__bai2").innerHTML = `Họ Tên: ${hoTen}; Tiền điện: ${tienDien}`;
}

/* --------------- Bài 3 --------------- */
function tinhThuNhapChiuThue(tongThuNhapNam, soNguoiPhuThuoc) {
    return tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
}

function tinhThueSuat(thuNhapChiuThue) {
    var thueSuat;
    if (thuNhapChiuThue <= 60000000) {
        thueSuat = thuNhapChiuThue * 0.05;
    }
    else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        thueSuat = thuNhapChiuThue * 0.1;
    }
    else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        thueSuat = thuNhapChiuThue * 0.15;
    }
    else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        thueSuat = thuNhapChiuThue * 0.20;
    }
    else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        thueSuat = thuNhapChiuThue * 0.25;
    }
    else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        thueSuat = thuNhapChiuThue * 0.30;
    }
    else {
        thueSuat = thuNhapChiuThue * 0.35;
    }
    return thueSuat;
}

getEle("tinhThue").onclick = function () {
    var fullName = getEle("fullName").value;
    var totalIncome = +getEle("totalIncome").value;
    var peopleDependent = +getEle("peopleDependent").value;
    var thuNhapChiuThue = tinhThuNhapChiuThue(totalIncome, peopleDependent);
    var thueSuat = tinhThueSuat(thuNhapChiuThue);

    if (thueSuat <= 0) {
        alert("Số tiền thu nhập không hợp lệ");
        getEle("result__bai3").innerHTML = `Họ tên ${fullName}; Tiền thuế thu nhập cá nhân: 0 VND`;
    }
    else {
        getEle("result__bai3").innerHTML = `Họ tên ${fullName}; Tiền thuế thu nhập cá nhân: ${thueSuat.toLocaleString('vi')} VND`;
    }
}

/* --------------- Bài 4 --------------- */
function handleHideInput() {
    var loaiKH = getEle("loaiKhachHang").value;
    if (loaiKH == "doanhNghiep") {
        getEle("soKN").classList.add("d-block");
    }
    else {
        getEle("soKN").classList.remove("d-block");
    }
}

function handleCableBill(soKenh, soKetNoi) {
    var loaiKH = getEle("loaiKhachHang").value;
    if (loaiKH == "nhaDan") {
        const phiHoaDon = 4.5;
        const phiDichVu = 20.5;
        const giaThue = 7.5;

        return phiHoaDon + phiDichVu + giaThue * soKenh;
    }
    else if (loaiKH == "doanhNghiep") {
        const phiHoaDon = 15;
        const phiDV10KnDau = 75;
        const phiDichVu = 5;
        const giaThue = 50;
        if (soKetNoi <= 10) {
            return phiHoaDon + phiDV10KnDau + giaThue * soKenh;
        }
        else {
            return phiHoaDon + phiDV10KnDau + phiDichVu * (soKetNoi - 10) + giaThue * soKenh;
        }
    }
    else {
        alert("Hãy chọn loại khách hàng");
        return 0;
    }
}

getEle("loaiKhachHang").onchange = function () {
    handleHideInput();
}

getEle("tinhTienCap").onclick = function () {
    var soKenh = +getEle("soKenh").value;
    var soKetNoi = +getEle("soKetNoi").value;
    var maKH = getEle("maKH").value;
    var tongTien = handleCableBill(soKenh, soKetNoi);
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    getEle("result__bai4").innerHTML = `Mã khách hàng: ${maKH}, Tiền cáp: ${formatter.format(tongTien)}`;
}

