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
    new Audio('./sound/sayKame.mp3'),
    new Audio('./sound/kok.mp3'),
    new Audio('./sound/koke.mp3'),
    new Audio('./sound/kokkick2.mp3'),
];

sounds.forEach(function(sound, index) {
    if (index == 5) {
        sound.volume = 1;
    }
    else {
        sound.volume = 0.5;
    }
    /////////////////////////////////////////////////
})


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvas_width = canvas.width = 900;
var canvas_height = canvas.height = 500;

canvas.addEventListener('click', function(e) {
    var clickX = e.offsetX;
    var clickY = e.offsetY;
    console.log('tọa độ x: ' + clickX);
    console.log('tọa độ y: ' + clickY);

})

// tạo mảng lưu 2 ảnh bự
var arrGokuImg = [];
var imgPaths = ['GokuLonlarge.png', 'GokuLon180large.png'];
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
    vitriXcanvas: 385,
    vitriYcanvas: 310,
}
// var vitriXcanvas = 200;
// var vitriYcanvas = 310;
// lấy id skill từ css để hồi skill
var skill1 = document.getElementById('skill1');
var skill2 = document.getElementById('skill2');
var skill3 = document.getElementById('skill3');
var skill4 = document.getElementById('skill4');

var  amthanh = document.getElementById('amthanh');
var  amthanh1 = document.getElementById('amthanh1');
var  tatNhac = true;
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
/////////////////////////////////
    {
        tenSkill: 'Kaioken',
        isUse: true,
        tgHoiChieu: 20,
        kaiokenMod: false,
        demkok: 0,
        frameXkok: 0,
        sangsanKOK: false,
        hoiChieu: function() {
            setTimeout(() => {
                skills[3].isUse = true;
                console.log(skills[3].isUse + 'đã hồi kaioken');
            }, 20000)
        },
        tatKaiokenMod: function() {
            setTimeout(() => {
                skills[3].kaiokenMod = false;
                skills[3].sangsanKOK = false;
                skills[3].demkok = 0;
                console.log('đã hết duy trì Kaioken');
            }, 15000)
        },
    },
/////////////////////////////////
    {
        tenSkill: 'kickKok',
        isUse: true,
        tgHoiChieu: 3,
        hoiChieu: function() {
            setTimeout(() => {
                skills[4].isUse = true;
                console.log(skills[4].isUse);
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
        kameX: vitriCanvas.vitriXcanvas + 100,
        kamejoko(kameXtienlen, YjumpKame) {
            ctx.fillRect(kameXtienlen, 355, 50, 50);
            ctx.drawImage(kmImg, 0, 0, 60, 24, kameXtienlen, YjumpKame, 120, 50);
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

    {
        trangthai: 'Kaioken 5',
        kaioken: false,
        soKhungHinh: 15,
        chieurong: 45,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas + 10,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 1924
    },

    {
        trangthai: 'Đá kaioken 6',
        kickKok: false,
        soKhungHinh: 27,
        chieurong: 45,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas + 10,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 2400
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
        vitriX: vitriCanvas.vitriXcanvas + 100,
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
        kameX: 260 + vitriCanvas.vitriXcanvas - 300,
        kamejoko(kameXtienlen, YjumpKame) {
            ctx.fillRect(kameXtienlen + 10, 355, 50, 50);
            ctx.drawImage(kmImg180, 0, 0, 60, 24, kameXtienlen - 60, YjumpKame, 120, 50);
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

    {
        trangthai: 'Kaioken',
        kaioken: false,
        soKhungHinh: 15,
        chieurong: -45,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas + 130,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 1828,
        SpaceFrameY: 1924
    },

    {
        trangthai: 'Đá kaioken 6',
        kickKok: false,
        soKhungHinh: 27,
        chieurong: -45,
        chieucao: 80,
        vitriX: vitriCanvas.vitriXcanvas + 100,
        vitriY: vitriCanvas.vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 2400
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
// class quái vật
var isJump = false;
var jump = true;
var isJump2 = true;
var maxJump = false;
var baynhanh = true;
var flip = 0;
function nhayLenRoiXuong(Yjump, Xjump, Wjump, Hjump) {
    ctx.fillRect(Xjump, Yjump, Wjump, Hjump);
}
class QuaiVatKhongLo {
    //anhQVKL, vitriXcanvasQVKL, vitriYcanvasQVKL, widthCanvasQVKL, heightCanvasQVKL 
    constructor(anhQVKL, vitriXcanvasQVKL, vitriYcanvasQVKL, widthCanvasQVKL, heightCanvasQVKL, startXQVKL, startYQVKL, widthQVKL, heightQVKL, heightJump, sokhunghinh) {
        this.anhQVKL = anhQVKL;
        this.vitriXcanvasQVKL = vitriXcanvasQVKL;
        this.vitriYcanvasQVKL = vitriYcanvasQVKL;
        this.widthCanvasQVKL =  widthCanvasQVKL;
        this.heightCanvasQVKL =  heightCanvasQVKL;
        this.xQVKL = startXQVKL;
        this.yQVKL = startYQVKL;
        this.wQVKL = widthQVKL;
        this.hQVKL = heightQVKL;
        this.trongluc = 0.98; 
        this.giatoc = 1;
        this.copygiatoc = 1;
        this.tangiatoc = 1.4;
        this.doNhayCao = heightJump;
        this.jumpY = vitriYcanvasQVKL;
        this.sokhunghinh = sokhunghinh;
        this.dem = 0;
        this.demPlusPlus = 1.5;
        this.TruHao = 0;
        this.a = 0;
        this.b = 1;
        this.c = false;
    }
    nhay() {
        let currentFrameX = (Math.floor(this.dem/tocdokhunghinh) % this.sokhunghinh)*this.b + this.a;
        if (isJump) {      
            if (this.doNhayCao >= this.jumpY) {
                maxJump = true;
                this.giatoc = this.copygiatoc*3;
                this.a = 4;
                this.b = 0;
            }
            if (maxJump) {
                // RƠI XUỐNG
                if (this.jumpY <= this.vitriYcanvasQVKL) {
                    if (this.jumpY >= 200) {
                        this.a = 0;
                        this.b = 1;
                    }
                    this.jumpY += this.giatoc*this.trongluc;
                    this.giatoc += this.tangiatoc;
                }
                else {
                    maxJump = false;
                    this.jumpY = this.vitriYcanvasQVKL;
                    isJump = false;
                    jump = false;
                    this.giatoc = this.copygiatoc;
                    this.dem = 0; 
                    this.a = 0;
                    this.b = 1;
                    this.c = false;
                }
            }
            else {
                // BAY LÊN
                if (this.c) {
                    this.jumpY -= this.giatoc*this.trongluc;
                    this.giatoc += this.tangiatoc;
                }
            }
            if (flip === 0) {
                if (currentFrameX === 2) {
                    this.TruHao = -211;
                }
                if (currentFrameX === 3 && !maxJump) {
                    this.TruHao = -259;
                    this.b = 0;
                    this.a = 3;
                    this.c = true;
                }
                if ( currentFrameX === 4) {
                    this.TruHao = -162;
                }
                if ( currentFrameX === 5 || currentFrameX === 1) {
                    this.TruHao = -55;
                }
                if ( currentFrameX === 6) {
                    this.TruHao = 0;
                }
                if (baynhanh && !GokuLon0.kameha && !GokuLon0.kick && !GokuLon0.kaioken) {
                    ctx.drawImage(this.anhQVKL,this.TruHao + this.xQVKL + this.wQVKL * 2, this.yQVKL, this.wQVKL, this.hQVKL, this.vitriXcanvasQVKL, this.jumpY, this.wQVKL*2, this.hQVKL*2)
                }
            }
            else {
                if (currentFrameX === 2) {
                    this.TruHao = 100;
                }
                if (currentFrameX === 3 && !maxJump) {
                    this.TruHao = 151;
                    this.b = 0;
                    this.a = 3;
                    this.c = true;
                }
                if ( currentFrameX === 4) {
                    this.TruHao = 55;
                }
                if ( currentFrameX === 5 || currentFrameX === 1) {
                    this.TruHao = -55;
                }
                if ( currentFrameX === 6) {
                    this.TruHao = 0;
                }
                if (baynhanh && !GokuLon0.kameha && !GokuLon0.kick && !GokuLon0.kaioken) {
                    ctx.drawImage(arrGokuImg[1],this.TruHao + 1628 + -55, this.yQVKL, this.wQVKL, this.hQVKL, this.vitriXcanvasQVKL, this.jumpY, this.wQVKL*2, this.hQVKL*2)
                }
            }
        }
        if (isJump) {
            this.dem += this.demPlusPlus;
        }
    }
}

var SonGoKu = new QuaiVatKhongLo(arrGokuImg[0], vitriCanvas.vitriXcanvas, vitriCanvas.vitriYcanvas, canvas_width, canvas_height, 205, 210, 55, 80, 50, 7);
///////////////////////
var bkgrImg = new Image();
bkgrImg.src = 'background2.png';
var anhnen1 = new Layer(bkgrImg, 1); 
// ảnh nền
var isSkill3 = true; 
var isSkill2 = true;
var isSkill4 = true;
var isPress = false;
var bkgrX = 0;
var idxBkgr = 0;
// vẽ
var dem2 = 0;
var dem1 = 0; 
//
var idx = 0;
// KAMEHAMEHA
var kameXtienlen0 = GokuLon0[0][3].kameX;
var kameXtienlen1 = GokuLon0[1][3].kameX;
var tocdoKameha = 30;
var chuongXongChua = false;
/////////// tốc đọ hình fps/////////////////////////////////
var tocdokhunghinh = 5;
// đổi chiều
var batdau = true;
var doiChieuChua = false;
var doiChieuChuaDem = 0;
var YKame;
//4
function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    let vitriFrameX = Math.floor(dem/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
    frameX = vitriFrameX;
    var Ychung = SonGoKu.jumpY;
    if (flip === 0) {
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
    if (jump) {
        SonGoKu.nhay();
    }
    ///////kaioken hào quang//////////////////////////////
    if (skills[3].kaiokenMod && skills[3].sangsanKOK) {
        sounds[6].play();
        let vitriXkok = Math.floor(skills[3].demkok/tocdokhunghinh) % 3;
        skills[3].frameXkok = vitriXkok;
        if (flip == 0) {
            switch (skills[3].frameXkok) {
                case 0:
                    ctx.drawImage(arrGokuImg[flip], 130 + 50*skills[3].frameXkok, 2200, 80, 80, GokuLon0[flip][0].vitriX - 59, Ychung, 230, 160);
                    break;
                case 1:
                    ctx.drawImage(arrGokuImg[flip], 167 + 50*skills[3].frameXkok, 2200, 80, 80, GokuLon0[flip][0].vitriX - 59, Ychung, 230, 160);
                    break;
                case 2:
                    ctx.drawImage(arrGokuImg[flip], 205 + 50*skills[3].frameXkok, 2190, 100, 90, GokuLon0[flip][0].vitriX - 79, Ychung, 270, 180);
                    break;
            }
        }
        else {
            switch (skills[3].frameXkok) {
                case 0:
                    ctx.drawImage(arrGokuImg[flip], 1833 - 130 + -50*skills[3].frameXkok, 2200, -80, 80, GokuLon0[flip][0].vitriX - 59, Ychung, 230, 160);
                    break;
                case 1:
                    ctx.drawImage(arrGokuImg[flip], 1833 - 167 + -50*skills[3].frameXkok, 2200, -80, 80, GokuLon0[flip][0].vitriX - 59, Ychung, 230, 160);
                    break;
                case 2:
                    ctx.drawImage(arrGokuImg[flip], 1833 - 205 + -50*skills[3].frameXkok, 2190, -100, 90, GokuLon0[flip][0].vitriX - 79, Ychung, 270, 180);
                    break;
            }
        }
        skills[3].demkok++;
    }
    if (GokuLon0.kameha && isSkill2) {
        if (flip === 0) {
            if (isJump) {
                tocdokhunghinh = 3;
            }
            var kameXtienlen = kameXtienlen0;
            isSkill3 = false;
            isSkill4 = false;
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
                GokuLon0[0][3].kamejoko(kameXtienlen, YKame + 45);
                kameXtienlen0 += tocdoKameha; 
            }
            else {
                GokuLon0[flip][idx].chieurong = 53;
            }
            // tro ve trang thai ban dau
            if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem2) {
                tocdokhunghinh = 5;
                dem2 = -1
                GokuLon0.kameha = false;
                idx = 0;
                if (isPress) idx = 1;
                isSkill3 = true;
                isSkill4 = true;
                kameXtienlen0 = GokuLon0[0][3].kameX;
                if (GokuLon0.flyFast) idx = 2;
            }
            // draw
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            dem2 += 1;
            requestAnimationFrame(animate);
        }
        else {
            if (isJump) tocdokhunghinh = 3;
            var kameXtienlen = kameXtienlen1;
            isSkill3 = false;
            isSkill4 = false;
            idx = 3;
            let vitriFrameX2 = Math.floor(dem2/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
            frameX2 = vitriFrameX2;
            let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
            let diemBatDau = 1832;
            if (frameX2 >= 4){
                diemBatDau = 2040;
                GokuLon0[flip][idx].chieurong = -105;
                GokuLon0[flip][idx].kamejoko(kameXtienlen, YKame + 45);
                kameXtienlen1 -= tocdoKameha;
            }
            else {
                GokuLon0[flip][idx].chieurong = -53;
            }
            // tro ve trang thai ban dau
            if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem2) {
                tocdokhunghinh = 5;
                dem2 = -1
                GokuLon0.kameha = false;
                idx = 0;
                if (isPress) idx = 1;
                isSkill3 = true;
                isSkill4 = true;
                kameXtienlen1 = GokuLon0[1][3].kameX;
                if (GokuLon0.flyFast) idx = 2;
            }
            // draw
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            dem2++;
            requestAnimationFrame(animate);
        }

    }
     // Đá ///////////////////////////////////////////////////////
    else if (GokuLon0.kick && isSkill3) {
        if (!skills[3].sangsanKOK) {
            if (flip === 0) {
                isSkill2 = false;
                isSkill4 = false;
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
                if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem1) {
                    dem1 = -1;
                    GokuLon0.kick = false;
                    idx = 0;
                    isSkill2 = true;
                    isSkill4 = true;
                    if (GokuLon0.flyFast) idx = 2;
                }
                console.log(frameX2);
                ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                if (bkgrX < -1912) anhnen1.startX = 0;
                anhnen1.startX  -= 2;
                dem1++;
                ;
                requestAnimationFrame(animate);
            }
            else {
                isSkill2 = false;
                isSkill4 = false;
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
                if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem1) {
                    dem1 = -1;
                    GokuLon0.kick = false;
                    idx = 0;
                    isSkill2 = true;
                    isSkill4 = true;
                    if (GokuLon0.flyFast) idx = 2;
                }
                console.log(frameX2);
                ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                if (bkgrX > 1912) anhnen1.startX = 0;
                anhnen1.startX  += 2;
                dem1++;
                ;
                requestAnimationFrame(animate);
            }
        }
        else {
            if (flip === 0) {
                isSkill2 = false;
                isSkill4 = false;
                idx = 6;
                let vitriFrameX2 = Math.floor(dem1/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
                frameX2 = vitriFrameX2;
                let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
                let diemBatDau = 135;
                switch (frameX2) {
                    case 1:
                        diemBatDau = 146;
                        GokuLon0[flip][idx].chieurong = 45;
                        break;
                    case 2:
                        diemBatDau = 125;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 3:
                        diemBatDau = 125;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 4:
                        diemBatDau = 125;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 5:
                        diemBatDau = 132;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 6:
                        diemBatDau = 146;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 7:
                        diemBatDau = 146;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 8:
                        diemBatDau = 70;
                        GokuLon0[flip][idx].chieurong = 70;
                        break;
                    case 9:
                        diemBatDau = 157;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 10:
                        diemBatDau = 157;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 11:
                        diemBatDau = 160;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 12:
                        diemBatDau = 220;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                    case 13:
                        diemBatDau = 213;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                    case 14:
                        diemBatDau = 213;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                    case 15:
                        diemBatDau = 213;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                    case 16:
                        diemBatDau = 224;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                    case 17:
                        diemBatDau = 226;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                    case 18:
                        diemBatDau = 224;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                    case 19:
                        diemBatDau = 232;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                    case 20:
                        diemBatDau = 146;
                        GokuLon0[flip][idx].chieurong = 60;
                        break;
                    case 21:
                        diemBatDau = 264;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                     case 22:
                        diemBatDau = 279;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                     case 23:
                        diemBatDau = 287;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                     case 24:
                        diemBatDau = 306;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                     case 25:
                        diemBatDau = 319;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                     case 26:
                        diemBatDau = 325;
                        GokuLon0[flip][idx].chieurong = 55;
                        break;
                        
                }
                // tro ve trang thai ban dau
                if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem1) {
                    dem1 = -1;
                    GokuLon0.kick = false;
                    idx = 0;
                    isSkill2 = true;
                    isSkill4 = true;
                    if (GokuLon0.flyFast) idx = 2;
                }
                ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, 2295, GokuLon0[flip][idx].chieurong + 1, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                if (bkgrX < -1912) anhnen1.startX = 0;
                anhnen1.startX  -= 5;
                dem1++;
                requestAnimationFrame(animate);
            }
            else {
                console.log(flip)
                isSkill2 = false;
                isSkill4 = false;
                idx = 6;
                let vitriFrameX2 = Math.floor(dem1/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
                frameX2 = vitriFrameX2;
                let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
                let diemBatDau = 135;
                switch (frameX2) {
                    case 1:
                        diemBatDau = 146;
                        GokuLon0[flip][idx].chieurong = -45;
                        break;
                    case 2:
                        diemBatDau = 125;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 3:
                        diemBatDau = 125;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 4:
                        diemBatDau = 125;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 5:
                        diemBatDau = 132;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 6:
                        diemBatDau = 146;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 7:
                        diemBatDau = 146;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 8:
                        diemBatDau = 70;
                        GokuLon0[flip][idx].chieurong = -70;
                        break;
                    case 9:
                        diemBatDau = 157;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 10:
                        diemBatDau = 157;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 11:
                        diemBatDau = 160;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 12:
                        diemBatDau = 220;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                    case 13:
                        diemBatDau = 213;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                    case 14:
                        diemBatDau = 213;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                    case 15:
                        diemBatDau = 213;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                    case 16:
                        diemBatDau = 224;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                    case 17:
                        diemBatDau = 226;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                    case 18:
                        diemBatDau = 224;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                    case 19:
                        diemBatDau = 232;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                    case 20:
                        diemBatDau = 146;
                        GokuLon0[flip][idx].chieurong = -60;
                        break;
                    case 21:
                        diemBatDau = 264;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                     case 22:
                        diemBatDau = 279;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                     case 23:
                        diemBatDau = 287;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                     case 24:
                        diemBatDau = 306;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                     case 25:
                        diemBatDau = 319;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                     case 26:
                        diemBatDau = 325;
                        GokuLon0[flip][idx].chieurong = -55;
                        break;
                        
                }
                // tro ve trang thai ban dau
                if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem1) {
                    dem1 = -1;
                    GokuLon0.kick = false;
                    idx = 0;
                    isSkill2 = true;
                    isSkill4 = true;
                    if (GokuLon0.flyFast) idx = 2;
                }
                ctx.drawImage(arrGokuImg[flip], 1831 -  diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, 2295, GokuLon0[flip][idx].chieurong + 1, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                if (bkgrX > 1912) anhnen1.startX = 0;
                anhnen1.startX  += 5;
                dem1++;
                requestAnimationFrame(animate);
            }
        }
    }
    /// KAIOKENNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    else if (isSkill4 && GokuLon0.kaioken) { // 
        if (flip === 0) {
            // tocdokhunghinh = 30
            isSkill2 = false;
            isSkill3 = false;
            idx = 5;
            let vitriFrameX2 = Math.floor(dem1/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
            frameX2 = vitriFrameX2;
            let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
            let diemBatDau = 183;
            switch(frameX2) {
                case 1:
                    diemBatDau = 188;
                    GokuLon0[flip][idx].chieurong = 40;
                    break;
                case 2:
                    diemBatDau = 186;
                    GokuLon0[flip][idx].chieurong = 41;
                    break;
                case 3:
                    diemBatDau = 190;
                    GokuLon0[flip][idx].chieurong = 41;
                    break;
                case 4:
                    diemBatDau = 180;
                    GokuLon0[flip][idx].chieurong = 45;
                    break;
                case 5:
                    diemBatDau = 169;
                    GokuLon0[flip][idx].chieurong = 48;
                    break;
                case 6:
                    skills[3].sangsanKOK = true;
                    frameX2 = 5;
                    diemBatDau = 169;
                    GokuLon0[flip][idx].chieurong = 48;
                    break;
                case 7:
                    frameX2 = 5;
                    diemBatDau = 169;
                    GokuLon0[flip][idx].chieurong = 48;
                    break;
                case 8:
                    frameX2 = 5;
                    diemBatDau = 169;
                    GokuLon0[flip][idx].chieurong = 48;
                    break;
                case 9:
                    frameX2 = 5;
                    diemBatDau = 169;
                    GokuLon0[flip][idx].chieurong = 48;
                    break;
                case 10:
                    frameX2 = 5;
                    diemBatDau = 169;
                    GokuLon0[flip][idx].chieurong = 48;
                    break;
                case 11:
                    frameX2 = 5;
                    diemBatDau = 169;
                    GokuLon0[flip][idx].chieurong = 48;
                    break;
                case 12:
                    diemBatDau = -75;
                    GokuLon0[flip][idx].chieurong = 45;
                    break;
                case 13:
                    diemBatDau = -68;
                    GokuLon0[flip][idx].chieurong = 45;
                    break;
                case 14:
                    diemBatDau = -113;
                    GokuLon0[flip][idx].chieurong = 45;
                    break;
                    
            }
            // tro ve trang thai ban dau
            if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem1) {
                dem1 = -1;
                GokuLon0.kaioken = false;
                idx = 0;
                isSkill2 = true;
                isSkill3 = true;
            }
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            dem1++;
            ;
            requestAnimationFrame(animate);
        }
        else {
             // tocdokhunghinh = 30
            isSkill2 = false;
            isSkill3 = false;
            idx = 5;
            let vitriFrameX2 = Math.floor(dem1/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
            frameX2 = vitriFrameX2;
            let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
            let diemBatDau = 1833 - 183;
            switch(frameX2) {
                case 1:
                    diemBatDau = 1833 - 188;
                    GokuLon0[flip][idx].chieurong = -40;
                    break;
                case 2:
                    diemBatDau = 1833 - 186;
                    GokuLon0[flip][idx].chieurong = -41;
                    break;
                case 3:
                    diemBatDau = 1833 - 190;
                    GokuLon0[flip][idx].chieurong = -41;
                    break;
                case 4:
                    diemBatDau = 1833 - 180;
                    GokuLon0[flip][idx].chieurong = -45;
                    break;
                case 5:
                    diemBatDau = 1833 - 169;
                    GokuLon0[flip][idx].chieurong = -48;
                    break;
                case 6:
                    frameX2 = 5;
                    diemBatDau = 1833 - 169;
                    GokuLon0[flip][idx].chieurong = -48;
                    break;
                case 7:
                    frameX2 = 5;
                    diemBatDau = 1833 - 169;
                    GokuLon0[flip][idx].chieurong = -48;
                    break;
                case 8:
                    frameX2 = 5;
                    diemBatDau = 1833 - 169;
                    GokuLon0[flip][idx].chieurong = -48;
                    break;
                case 9:
                    frameX2 = 5;
                    diemBatDau = 1833 - 169;
                    GokuLon0[flip][idx].chieurong = -48;
                    break;
                case 10:
                    frameX2 = 5;
                    diemBatDau = 1833 - 169;
                    GokuLon0[flip][idx].chieurong = -48;
                    break;
                case 11:
                    frameX2 = 5;
                    diemBatDau = 1833 - 169;
                    GokuLon0[flip][idx].chieurong = -48;
                    break;
                case 12:
                    diemBatDau = 1833 - -75;
                    GokuLon0[flip][idx].chieurong = -45;
                    break;
                case 13:
                    diemBatDau = 1833 - -68;
                    GokuLon0[flip][idx].chieurong = -45;
                    break;
                case 14:
                    diemBatDau = 1833 - -113;
                    GokuLon0[flip][idx].chieurong = -45;
                    break;
                    
            }
            // tro ve trang thai ban dau
            if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem1) {
                dem1 = -1;
                GokuLon0.kaioken = false;
                idx = 0;
                isSkill2 = true;
                isSkill3 = true;
            }
            console.log(frameX2);
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            dem1++;
            ;
            requestAnimationFrame(animate);
        }
    }
   
    else {
        // console.log(SonGoKu.jumpY)
        if (!isJump) {
            ctx.drawImage(arrGokuImg[flip], GokuLon0[flip][idx].fristPX + GokuLon0[flip][idx].chieurong * frameX, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, SonGoKu.jumpY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);   
        }
        if (idx === 2) {
            ctx.drawImage(arrGokuImg[flip], GokuLon0[flip][idx].fristPX + GokuLon0[flip][idx].chieurong * frameX, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, SonGoKu.jumpY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);   

        }
        dem++;
        YKame = Ychung;
        requestAnimationFrame(animate);
    }
    
};
animate();

// lắng nghe sự kiện, isPress để di chuyển background
var isPressJump = true;
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
            baynhanh = false;
            // thời gian hồi background
            skill1.classList.add('hoichieu');
            let soGiay = skills[0].tgHoiChieu - 0.05;
            if (soGiay > 0) {
                let demnguoc = setInterval(() => {
                    skill1.style.height = (soGiay/skills[0].tgHoiChieu)*100 + '%';
                    soGiay -= 0.05;
                }, 50);
                setTimeout(() => {
                    clearInterval(demnguoc);
                }, 5000);
            }
            idx = 2;
            bkgrSpeed = 50;
            isPress = true;
            Chay = isPress;
            GokuLon0.flyFast = true;
            setTimeout(() => {
                bkgrSpeed = 15;
                GokuLon0.flyFast = false;
                idx = 0;
            }, 7000)
            

            if (isPress && Chay) {
                sounds[3].play();
                // console.log(sounds[3].currentTime)
            }
            skills[0].hoiChieu();
            skills[0].isUse = false;
        }
        else {
            if (!GokuLon0.flyFast) {
                // isPress = false;
                Chay = false;
            }
            console.log('Đang hồi chiêu!');
        }
    }
    if (e.key === '2') {
        if (skills[1].isUse && isSkill2) {
            // thời gian hồi background
            skill2.classList.add('hoichieu');
            let soGiay = skills[1].tgHoiChieu - 0.05;
            let demnguoc = setInterval(() => {
                skill2.style.height = (soGiay/skills[1].tgHoiChieu)*100 + '%';
                soGiay -= 0.05;
            }, 50);
            setTimeout(() => {
                clearInterval(demnguoc);
            }, 5000);
            
            if (isSkill2) {
                sounds[0].play();
                // sounds[4].play();
            }
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
            if (true) {
                  // thời gian hồi background
                skill3.classList.add('hoichieu');
                let soGiay = skills[2].tgHoiChieu - 0.05;
                let demnguoc = setInterval(() => {
                    skill3.style.height = (soGiay/skills[2].tgHoiChieu)*100 + '%';
                    soGiay -= 0.05;
                }, 50);
                setTimeout(() => {
                    clearInterval(demnguoc);
                }, 3000);
                if (skills[3].kaiokenMod) {
                    sounds[7].play();
                }
                else if (isSkill3) sounds[1].play();
                GokuLon0.kick = true
                skills[2].hoiChieu();
                skills[2].isUse = false;
            }
            // else {
            //       // thời gian hồi background
            //     skill3.classList.add('hoichieu');
            //     let soGiay = skills[2].tgHoiChieu - 0.05;
            //     let demnguoc = setInterval(() => {
            //         skill3.style.height = (soGiay/skills[2].tgHoiChieu)*100 + '%';
            //         soGiay -= 0.05;
            //     }, 50);
            //     setTimeout(() => {
            //         clearInterval(demnguoc);
            //     }, 3000);
   
            //     if (isSkill3) sounds[1].play();
            //     GokuLon0.kick = true
            //     skills[3].hoiChieu();
            //     skills[3].isUse = false;
            // }
        }
        else {
            console.log('Đang hồi chiêu!');
        }
    }
    if (e.key === '4') {
        if (skills[3].isUse && isSkill4) {
            GokuLon0.kaioken = true;
            // thời gian hồi background
            skill4.classList.add('hoichieu');
            let soGiay = skills[3].tgHoiChieu - 0.05;
            let demnguoc = setInterval(() => {
                skill4.style.height = (soGiay/skills[3].tgHoiChieu)*100 + '%';
                soGiay -= 0.05;
            }, 50);
            setTimeout(() => {
                clearInterval(demnguoc);
            }, 20000);

            if (isSkill4) sounds[5].play();
            skills[3].kaiokenMod = true;
            skills[3].hoiChieu();
            skills[3].tatKaiokenMod();
            skills[3].isUse = false;
        }
        else {
            console.log('Đang hồi chiêu! kaioken');
        }
    }
    if (e.key === ' ' && !isJump) {
        jump = true
        isJump = true;
    }
    
});
document.addEventListener('keyup', function(e) {
            if (e.key !== ' ') {
                  if (e.key != '2') {
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
                                    baynhanh = true;
                                }, 700)
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
                  }
            }
           
});

