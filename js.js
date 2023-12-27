// âm thanh

var nhacnen = new Audio();
nhacnen.src = './sound/theme.mp3';
nhacnen.volume = 0.25;////////////////////////////////////////////////////
document.addEventListener('keydown', function() {
    nhacnen.play();
})
 nhacnen.addEventListener('ended', function() {
    nhacnen.currentTime = 0;
    nhacnen.play();
})

var sounds = [
    new Audio('./sound/kamehaCut3.mp3'),
    new Audio('./sound/kick2.mp3'),
    new Audio('./sound/flyingSlow.mp3'),
    new Audio('./sound/flyingFast.mp3'),
];

sounds.forEach(function(sound) {
    sound.volume = 0.5;/////////////////////////////////////////////////
})


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvas_width = canvas.width = 800;
var canvas_height = canvas.height = 500;

canvas.addEventListener('click', function(e) {
    var clickX = e.offsetX;
    var clickY = e.offsetY;
    console.log('tọa độ x: ' + clickX);
    console.log('tọa độ y: ' + clickY);

})

// tạo mảng lưu 2 ảnh bự
var arrGokuImg = [];
var imgPaths = ['GokuLonmin.png', 'GokuLon180min.png'];
imgPaths.forEach(function(path) {
    var gokuImg = new Image();
    gokuImg.src = path;
    arrGokuImg.push(gokuImg);
});

// T, biến đếm////////////////////////////////////////////
var frameX = 0;
var frameX2 = 0;
var dem = 0;
// điểm bắt đầu vẽ
var vitriCanvas = {
    vitriXcanvas: 200,
    vitriYcanvas: 310,
}
// var vitriXcanvas = 200;
// var vitriYcanvas = 310;
// lấy id skill từ css để hồi skill
var skill1 = document.getElementById('skill1');
var skill2 = document.getElementById('skill2');
var skill3 = document.getElementById('skill3');

var  amthanh = document.getElementById('amthanh');
var  amthanh1 = document.getElementById('amthanh1');
var tatNhac = true;
amthanh1.addEventListener('click', function() {
    if (tatNhac) {
        nhacnen.volume = 0;
        for (let i=0; i<sounds.length; i++) {
            sounds[i].volume = 0;
        }
        amthanh.classList.remove('fa-volume-up');
        amthanh.classList.add('fa-volume-off');
        tatNhac = false;
    }
    else {
        nhacnen.volume = 0.25;
        for (let i=0; i<sounds.length; i++) {
            sounds[i].volume = 0.5;
        }
        amthanh.classList.remove('fa-volume-off');
        amthanh.classList.add('fa-volume-up');
        tatNhac = true;
    }
});
// mảng đối tượng skill
var skills = [
    {
        tenSkill: 'Bay tới nhanh',
        isUse: true,
        tgHoiChieu: 5,
        blackbkgr: skill1,
        hoiChieu: function() {
            setTimeout(() => {
                skills[0].isUse = true;
                skills[0].blackbkgr.classList.remove('hoichieu');
            }, 5000)
        },
    },
///////////////////////////
    {
        tenSkill: 'Kameha',
        isUse: true,
        tgHoiChieu: 5,
        hoiChieu: function() {
            setTimeout(() => {
                skills[1].isUse = true;
                console.log(skills[1].isUse);
            }, 5000)
        }, 
    },
/////////////////////////////
    {
        tenSkill: 'Đá',
        isUse: true,
        tgHoiChieu: 3,
        hoiChieu: function() {
            setTimeout(() => {
                skills[2].isUse = true;
                console.log(skills[2].isUse);
            }, 3000)
        },
    },
];
// mảng đối tượng Goku
var kmImg = new Image();
kmImg.src = './skills/kamejoko.png';
var kmImg180 = new Image();
kmImg180.src = './skills/kamejoko180.png';
var GokuLon = [
   {
        trangthai: 'Đứng',
        soKhungHinh: 4,
        chieurong: 57,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 0
   },

   {
        trangthai: 'Bay tới',
        soKhungHinh: 4,
        chieurong: 63,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 70
    },
    
    {
        trangthai: 'Bay tới nhanh',
        flyFast: false,
        soKhungHinh: 2,
        chieurong: 70,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 133
    },

    {
        trangthai: 'Kameha',
        kameha: false,
        soKhungHinh: 8,
        chieurong: 53,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 1,
        SpaceFrameY: 715,
        // làm cho kame bay ra
        kameX: vitriCanvas.vitriXcanvas + 150,
        kamejoko(kameXtienlen) {
            ctx.fillRect(kameXtienlen, 355, 50, 50);
            ctx.drawImage(kmImg, 0, 0, 60, 24, kameXtienlen - 60, 355, 120, 50);
        },
    },
    
    {
        trangthai: 'Đá',
        kick: false,
        soKhungHinh: 13,
        chieurong: 54,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 550
    },

];
// Ảnh lật ngược
var GokuLon180 = [
    {
         trangthai: 'Đứng',
         soKhungHinh: 4,
         chieurong: 57,
         chieucao: 80,
         vitriX: vitriCanvas.vitriXcanvas,
         vitriY: vitriCanvas.vitriYcanvas,
         fristPX: 1600,
         SpaceFrameY: 0
         
    },
 
    {
         trangthai: 'Bay tới',
         soKhungHinh: 4,
         chieurong: 63,
         chieucao: 80,
         vitriX: vitriCanvas.vitriXcanvas,
         vitriY: vitriCanvas.vitriYcanvas,
         fristPX: 1576,
         SpaceFrameY: 70
     },

     {
        trangthai: 'Bay tới nhanh',
        flyFast: false,
        soKhungHinh: 2,
        chieurong: -70,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas + 120,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 1828,
        SpaceFrameY: 133
    },

    {
        trangthai: 'Kameha',
        kameha: false,
        soKhungHinh: 8,
        chieurong: -53,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas + 120,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 1832,
        SpaceFrameY: 715,
        // làm cho kame bay xa
        kameX: 260 + vitriCanvas.vitriXcanvas - 50,
        kamejoko(kameXtienlen) {
            ctx.fillRect(kameXtienlen + 10, 355, 50, 50);
            ctx.drawImage(kmImg180, 0, 0, 60, 24, kameXtienlen, 355, 120, 50);
        },
    },

    {
        trangthai: 'Đá',
        kick: false,
        soKhungHinh: 13,
        chieurong: -54,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas + 100,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 1828,
        SpaceFrameY: 550
    },

];
var GokuLon0 = [];
GokuLon0.push(GokuLon);
GokuLon0.push(GokuLon180);

//background
var bkgrSpeed = 15;
// tạo lớp pờ lây dơ
class Layer {
    constructor(anhNen, tocdo) {
        this.anhNen = anhNen;
        this.rong = 1912;
        this.cao = 500;
        this.startX = 0;
        this.startY = 0;
        this.tocdo = tocdo;
        this.speed = bkgrSpeed * this.tocdo;
    }
    capnhatPhai() {
        if (isPress && Chay) {
            this.speed = bkgrSpeed * this.tocdo;
            if (this.startX < -this.rong) this.startX = 0;
            this.startX -= this.speed;
        }
    }
    capnhatTrai() {
        if (isPress && Chay) {
            this.speed = bkgrSpeed * this.tocdo;
            if (this.startX > this.rong - this.speed) this.startX = 0;
            this.startX += this.speed;
        }
    }
    chaySangPhai() {
        ctx.drawImage(this.anhNen, this.startX - this.rong, this.startY, this.rong, this.cao);
        ctx.drawImage(this.anhNen, this.startX, this.startY, this.rong, this.cao);
        ctx.drawImage(this.anhNen, this.startX + this.rong, this.startY, this.rong, this.cao);
    }
    chaySangTrai() {
        ctx.drawImage(this.anhNen, this.startX + this.rong, this.startY, this.rong, this.cao);
        ctx.drawImage(this.anhNen, this.startX, this.startY, this.rong, this.cao);
        ctx.drawImage(this.anhNen, this.startX - this.rong, this.startY, this.rong, this.cao);
    }

}
///////////////////////
var bkgrImg = new Image();
bkgrImg.src = 'background2.png';
var anhnen1 = new Layer(bkgrImg, 1); 
// ảnh nền
var isSkill3 = true; 
var isSkill2 = true;
var isPress = false;
var bkgrX = 0;
var idxBkgr = 0;
// vẽ
var dem2 = 0;
var dem1 = 0; 
//
var idx = 0;
var flip = 0;
// KAMEHAMEHA
var kameXtienlen0 = GokuLon0[0][3].kameX;
var kameXtienlen1 = GokuLon0[1][3].kameX;
var tocdoKameha = 25;
var chuongXongChua = false;
/////////// tốc đọ hình fps/////////////////////////////////
var tocdokhunghinh = 5;
// đổi chiều
var batdau = true;
var doiChieuChua = false;
var doiChieuChuaDem = 0;
//
function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    let vitriFrameX = Math.floor(dem/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
    frameX = vitriFrameX;
    if (flip === 0) {

        GokuLon.forEach(function(ob) {
            ob.vitriX = 200;
        })
        if (doiChieuChua) {
            var doichieuSmooth = setInterval(() => {
                anhnen1.startX -= 10;

            }, 10)
            setTimeout(() => {
                clearInterval(doichieuSmooth);
            }, 200);
            doiChieuChua = false;
            batdau = true;
        }
        anhnen1.chaySangPhai();
        anhnen1.capnhatPhai();
    }
    else { 
        GokuLon180.forEach(function(ob, index) {
            if (index >=2 && index <= 3) {
                ob.vitriX = 620;
            }
            else if (index === 4) {
                ob.vitriX = 600;
            }
            else {
                ob.vitriX = 500;
            }
        })
        if (doiChieuChua) {
            var doichieuSmooth = setInterval(() => {
                anhnen1.startX += 10;

            }, 10)
            setTimeout(() => {
                clearInterval(doichieuSmooth);
            }, 200);

            doiChieuChua = false;
            batdau = false;
        }
        anhnen1.chaySangTrai();
        anhnen1.capnhatTrai();
    }
    // Kameha //////////////////////////////////////
    if (GokuLon0.kameha && isSkill2) {
        if (flip === 0) {
            var kameXtienlen = kameXtienlen0;
            isSkill3 = false;
            idx = 3;
            let vitriFrameX2 = Math.floor(dem2/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
            frameX2 = vitriFrameX2;
            // tốc độ khung hình càng lớn thì dem2 phải càng lớn mới đạt được số khung hình tối đa của vitriFramX2
            // dem3 sẽ bằng số khung hình nhân tocdokhunghinh -1,, khi dem3 == dem2 cũng là lúc khung hình cuối chạy
            // phép math.floor sẽ luôn làm cho vitriFrameX2 bằng số khung hình -1
            let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
            let diemBatDau = 1;
            // kame bay ra    
            if (frameX2 >= 4){
                diemBatDau = -209;
                GokuLon0[flip][idx].chieurong = 105;
                GokuLon0[0][3].kamejoko(kameXtienlen);
                kameXtienlen0 += tocdoKameha;
            }
            else {
                GokuLon0[flip][idx].chieurong = 53;
            }
            // tro ve trang thai ban dau
            if (frameX2 === 7 && dem3 === dem2) {
                dem2 = -1
                GokuLon0.kameha = false;
                idx = 0;
                isSkill3 = true;
                kameXtienlen0 = GokuLon0[0][3].kameX;
                if (GokuLon0.flyFast) idx = 2;
            }
            // draw
            console.log(frameX2);
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, GokuLon0[flip][idx].vitriY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            dem2++;
            requestAnimationFrame(animate);
        }
        else {
            var kameXtienlen = kameXtienlen1;
            isSkill3 = false;
            idx = 3;
            let vitriFrameX2 = Math.floor(dem2/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
            frameX2 = vitriFrameX2;
            let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
            let diemBatDau = 1832;
            if (frameX2 >= 4){
                diemBatDau = 2040;
                GokuLon0[flip][idx].chieurong = -105;
                GokuLon0[flip][idx].kamejoko(kameXtienlen);
                kameXtienlen1 -= tocdoKameha;
            }
            else {
                GokuLon0[flip][idx].chieurong = -53;
            }
            // tro ve trang thai ban dau
            if (frameX2 === 7 && dem3 === dem2) {
                dem2 = -1
                GokuLon0.kameha = false;
                idx = 0;
                isSkill3 = true;
                kameXtienlen1 = GokuLon0[1][3].kameX;
                if (GokuLon0.flyFast) idx = 2;
            }
            // draw
            console.log(frameX2);
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, GokuLon0[flip][idx].vitriY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            dem2++;
            requestAnimationFrame(animate);
        }
    }
   
     // Đá ///////////////////////////////////////////////////////
    else if (GokuLon0.kick && isSkill3) {
        if (flip === 0) {
            isSkill2 = false;
            idx = 4;
            let vitriFrameX2 = Math.floor(dem1/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
            frameX2 = vitriFrameX2;
            let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
            let diemBatDau = 5;
            if (frameX2 >= 3 && frameX2 <= 10){
                diemBatDau = -43;
                GokuLon0[flip][idx].chieurong = 70;

            }
            else if (frameX2 >= 11) {
                diemBatDau = 143;
                GokuLon0[flip][idx].chieurong = 53;

            }
            else {
                GokuLon0[flip][idx].chieurong = 54;
            }
            // tro ve trang thai ban dau
            if (frameX2 === 12 && dem3 === dem1) {
                dem1 = -1;
                GokuLon0.kick = false;
                idx = 0;
                isSkill2 = true;
                if (GokuLon0.flyFast) idx = 2;
            }
            console.log(frameX2);
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, GokuLon0[flip][idx].vitriY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            if (bkgrX < -1912) anhnen1.startX = 0;
            anhnen1.startX  -= 5;
            dem1++;
            ;
            requestAnimationFrame(animate);
        }
        else {
            isSkill2 = false;
            idx = 4;
            let vitriFrameX2 = Math.floor(dem1/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
            frameX2 = vitriFrameX2;
            let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
            let diemBatDau = 1827;
            if (frameX2 >= 3 && frameX2 <= 10){
                diemBatDau = 1827 + 48;
                GokuLon0[flip][idx].chieurong = -70;

            }
            else if (frameX2 >= 11) {
                diemBatDau = 1827 - 138;
                GokuLon0[flip][idx].chieurong = -53;

            }
            else {
                GokuLon0[flip][idx].chieurong = -54;
            }
            // tro ve trang thai ban dau
            if (frameX2 === 12 && dem3 === dem1) {
                dem1 = -1;
                GokuLon0.kick = false;
                idx = 0;
                isSkill2 = true;
                if (GokuLon0.flyFast) idx = 2;
            }
            console.log(frameX2);
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, GokuLon0[flip][idx].vitriY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            if (bkgrX > 1912) anhnen1.startX = 0;
            anhnen1.startX  += 5;
            dem1++;
            ;
            requestAnimationFrame(animate);
        }
    }
   
    else {
        // console.log(GokuLon0[flip][idx].vitriX);
        ctx.drawImage(arrGokuImg[flip], GokuLon0[flip][idx].fristPX + GokuLon0[flip][idx].chieurong * frameX, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, GokuLon0[flip][idx].vitriY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
        dem++;
        ;
        requestAnimationFrame(animate);
    }
    
};
animate();

// lắng nghe sự kiện, isPress để di chuyển background
var isKeyUpFly = true;
var Chay = false;
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 39 || e.key === 'd') {
       if (!GokuLon0.flyFast) {
            if (!batdau) {
                doiChieuChua = true;
            }
            idx = 1;
            flip = 0;
            isPress = true;
            Chay = isPress;
            if (isPress) {
                sounds[2].play();
                
                if (sounds[2].currentTime > 1) {
                    // Đặt lại thời điểm phát về 0 để phát lại từ đầu
                    sounds[2].currentTime = 0.708 - 0.25;
                    // Bắt đầu phát lại
                    sounds[2].play();
                }
            }
       }
        
    }
    if (e.keyCode === 37 || e.key === 'a') {
        if (!GokuLon0.flyFast) {
            if (batdau) {
                doiChieuChua = true;
            }
            idx = 1;
            flip = 1;
            isPress = true;
            Chay = true;
            if (isPress) {
                sounds[2].play();
                
                if (sounds[2].currentTime > 1) {
                    // Đặt lại thời điểm phát về 0 để phát lại từ đầu
                    sounds[2].currentTime = 0.708 - 0.25;
                    // Bắt đầu phát lại
                    sounds[2].play();
                }
            }
        }
    }
    // Sờ killlllll/////////////////////////////////////////
    if (e.key === '1') {
        if (skills[0].isUse) {
            // thời gian hồi background
            skill1.classList.add('hoichieu');
            let soGiay = skills[0].tgHoiChieu - 0.5;
            if (soGiay > 0) {
                let demnguoc = setInterval(() => {
                    skill1.style.height = (soGiay/skills[0].tgHoiChieu)*100 + '%';
                    soGiay -= 0.5;
                }, 500);
                setTimeout(() => {
                    clearInterval(demnguoc);
                }, 5000);
            }
            idx = 2;
            bkgrSpeed = 50;
            isPress = true;
            Chay = isPress;
            GokuLon0.flyFast = true;
            if (isPress && Chay) {
                sounds[3].play();
                // console.log(sounds[3].currentTime)
            }
            skills[0].hoiChieu();
            skills[0].isUse = false;
        }
        else {
            console.log('Đang hồi chiêu!');
        }
    }
    if (e.key === '2') {
        if (skills[1].isUse && isSkill2) {
            // thời gian hồi background
            skill2.classList.add('hoichieu');
            let soGiay = skills[1].tgHoiChieu - 0.5;
         
            let demnguoc = setInterval(() => {
                skill2.style.height = (soGiay/skills[1].tgHoiChieu)*100 + '%';
                soGiay -= 0.5;
                console.log(soGiay)
            }, 500);
            setTimeout(() => {
                clearInterval(demnguoc);
            }, 5000);
            

            if (isSkill2) sounds[0].play();
            GokuLon0.kameha = true;
            skills[1].hoiChieu();
            skills[1].isUse = false;
        }
        else {
            console.log('Đang hồi chiêu!');
        }
    }
    if (e.key === '3') {
        if (skills[2].isUse && isSkill3) {
            // thời gian hồi background
            skill3.classList.add('hoichieu');
            let soGiay = skills[2].tgHoiChieu - 0.5;
            if (soGiay > 0) {
                let demnguoc = setInterval(() => {
                    skill3.style.height = (soGiay/skills[2].tgHoiChieu)*100 + '%';
                    soGiay -= 0.5;
                }, 500);
                setTimeout(() => {
                    clearInterval(demnguoc);
                }, 3000);
            }

            if (isSkill3) sounds[1].play();
            GokuLon0.kick = true
            skills[2].hoiChieu();
            skills[2].isUse = false;
        }
        else {
            console.log('Đang hồi chiêu!');
        }
    }
    
    
});
document.addEventListener('keyup', function(e) {
        if (GokuLon0.flyFast) {
            if (isKeyUpFly) {
                isKeyUpFly = false;
                setTimeout(() => {
                    GokuLon0.flyFast = false;
                    isPress = false;
                    Chay = false;
                    idx = 0;
                    bkgrSpeed = 15;
                    isKeyUpFly = true;
                }, 500)
            }
        }
        else {
            idx = 0;
            isPress = false;
            sounds[2].pause();
            sounds[2].currentTime = 0;
            sounds[3].pause();
            sounds[3].currentTime = 0;
            bkgrSpeed = 15;
            Chay = false;
        }
});

