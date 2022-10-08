function bai1 (){
    var ten = "Hung"
    var tongTien1Nam = 240
    var soNguoiPhuThuoc = 2
    var thuNhapChiuThue = tongTien1Nam - 4 -soNguoiPhuThuoc * 1.6
    var thue = 0

    if(tongTien1Nam <= 60){
        thue =thuNhapChiuThue * 0.05;
    }else if(tongTien1Nam <= 120){
        thue = 60 * 0.05 + (tongTien1Nam - 60)* 0.1;
    }else if(tongTien1Nam <=210){
        thue = 60 * 0.05 + 60 * 1 + (tongTien1Nam - 120) * 0.15;
    }else if(tongTien1Nam <=384){
        thue = 60 * 0.05 + 60 * 1 + 90 * 0.15 + (tongTien1Nam -210) * 0.2;  
    }else if(tongTien1Nam <=624){
        thue = 60 * 0.05 + 60 * 1 + 90 * 0.15 + 174 * 0.2 + (tongTien1Nam -384) * 0.25;
    }else if(tongTien1Nam <=960){
        thue = 60 * 0.05 + 60 * 1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + (tongTien1Nam -624)* 0.3;
    }else{
        thue = 60 * 0.05 + 60 * 1 + 90 * 0.15 + 174 * 0.2 + 240 * 0.25 + 336 * 0.3 + (tongTien1Nam -960)* 0.35;
    }
    console.log(thue);  
}
function bai2(){
    var nhaDan = 1  ; var doanhNghiep = 2
    var thanhToan = 0

    var kenhCaoCap =5
    var kenhThem = 20
    if(kenhThem > 10){
        kenhThem = (kenhThem -10 )*5;
    }
    // nhà dân là 1 doanh nghiệp là 2
    switch (2) {
    case 1 : 
        p1 = 4.5
        p2 = 20.5
        p3 = 7.5
        thanhToan = p1 + p2 + p3 *kenhCaoCap;
        console.log(thanhToan)
        break;
    case 2: 
        p1 = 15
        p2 = 75
        p3 = 50
        thanhToan = p1 + p2 + p3 * kenhCaoCap +kenhThem ;
        console.log(thanhToan)
        break;
    }
}