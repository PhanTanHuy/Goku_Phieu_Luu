// âm thanh
var saitama0 = new Image();
saitama0.src = './saitama0.png';
var saitama180 = new Image();
saitama180.src = './saitama180.png';

var avtGoku = new Image();
avtGoku.src = './skills/avtGoku.png';
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
    new Audio('./sound/ssjMod1.mp3'),
    new Audio('./sound/ssjMod2.mp3'),
    new Audio('./sound/saitamaPunch.mp3'), //10
    new Audio('./sound/dichchuyen.mp3'), //11


];


for (let i=0; i<sounds.length; i++) {
    if (i == 5) {
        sounds[i].volume = 1;
    }
    else if (i == 9) {
        sounds[i].volume = 0.2
    }
    else if (i == 10) {
        sounds[i].volume = 0.2
    }
    else {
        sounds[i].volume = 0.5;
    }

}

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
var imgPaths = ['GokuLonlarge.png', 'GokuLon180large.png', 'GokuLonSSJ2.png', 'GokuLonSSJ2180.png'];
imgPaths.forEach(function(path) {
    var gokuImg = new Image();
    gokuImg.src = path;
    arrGokuImg.push(gokuImg);
});

// T, biến đếm////////////////////////////////////////////
var frameX = 0;
var frameX2 = 0;
var frameX3 = 0;
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
var skill5 = document.getElementById('skill5');

var  amthanh = document.getElementById('amthanh');
var  amthanh1 = document.getElementById('amthanh1');
var  tatNhac = true;
amthanh.addEventListener('click', function() {
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
            if (i == 5) {
                sounds[i].volume = 1;
            }
            else if (i == 9) {
                sounds[i].volume = 0.2
            }
            else if (i == 10) {
                sounds[i].volume = 0.2
            }
            else {
                sounds[i].volume = 0.5;
            }

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
        tgHoiChieu: 2,
        blackbkgr: skill1,
        hoiChieu: function() {
            setTimeout(() => {
                skills[0].isUse = true;
                skills[0].blackbkgr.classList.remove('hoichieu');
            }, 2000)
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
            }, 5000)
        }, 
    },
/////////////////////////////
    {
        tenSkill: 'Đá',
        isUse: true,
        tgHoiChieu: 3,
        dame: 1.17,
        dameKOK: 1.25,
        dameKOKkame: 1,
        hoiChieu: function() {
            setTimeout(() => {
                skills[2].isUse = true;
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
                skill5.classList.remove('hoichieu');
                console.log(skills[3].isUse + 'đã hồi kaioken');
            }, 20000)
        },
        tatKaiokenMod: function() {
            setTimeout(() => {
                skills[3].kaiokenMod = false;
                skills[3].sangsanKOK = false;
                skills[3].demkok = 0;
                skills[2].dame /= skills[2].dameKOK;
                skills[2].dameKOKkame /= 2.5;
                console.log('đã hết duy trì Kaioken');
                layerspeed = 8;
            }, 10000)
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
/////////////////////////////////
    {
        tenSkill: 'superSayan',
        isUse: true,
        tgHoiChieu: 60,
        isSsj: false,
        ssjMod: false,
        dameSSJ: 1,
        hoiChieu: function() {
            setTimeout(() => {
                skills[5].isUse = true;
                console.log('đã hồi superSayan')
            }, 60000)
        },
        tatSsjMod: function() {
            setTimeout(() => {
                skill4.classList.remove('hoichieu');
                skills[5].ssjMod = false;
                skills[5].dameSSJ /= 4;
                console.log('đã hết duy trì SSJ MOd');
            }, 40000)
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
            // ctx.fillRect(kameXtienlen, YjumpKame, 50, 50);
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
            // ctx.fillRect(kameXtienlen + 10, YjumpKame, 50, 50);
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
var layerspeed = 8
//background
var isQvAttack = false;
var bkgrSpeed = layerspeed;
// tạo lớp pờ lây dơ
class Layer {
    constructor(anhNen, tocdo, rongThis, caoThis, startYbkgr) {
        this.anhNen = anhNen;
        this.rong = rongThis;
        this.cao = caoThis;
        this.startX = 0;
        this.startY = startYbkgr;
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
            if (this.startX > this.rong) this.startX = 0;
            this.startX += this.speed;
        }
    }
    chaySangPhai() {
        ctx.drawImage(this.anhNen, this.startX - this.rong + 1, this.startY, this.rong, this.cao);
        ctx.drawImage(this.anhNen, this.startX + this.rong - 1 , this.startY, this.rong, this.cao);
        ctx.drawImage(this.anhNen, this.startX, this.startY, this.rong, this.cao);
    }
    chaySangTrai() {
        ctx.drawImage(this.anhNen, this.startX + this.rong - 1, this.startY, this.rong, this.cao);
        ctx.drawImage(this.anhNen, this.startX - this.rong + 1, this.startY, this.rong, this.cao); 
        ctx.drawImage(this.anhNen, this.startX, this.startY, this.rong, this.cao);
    }

}
// class quái vật
// var isJump = false;
var isJump2 = true;
var baynhanh = true;
var flip = 0;
function nhayLenRoiXuong(Yjump, Xjump, Wjump, Hjump) {
    ctx.fillRect(Xjump, Yjump, Wjump, Hjump);
}
class QuaiVatKhongLo {
    //anhQVKL, vitriXcanvasQVKL, vitriYcanvasQVKL, widthCanvasQVKL, heightCanvasQVKL 
    constructor(anhQVKL, vitriXcanvasQVKL, vitriYcanvasQVKL, widthCanvasQVKL, heightCanvasQVKL, startXQVKL, startYQVKL, widthQVKL, heightQVKL, heightJump, sokhunghinh, PlayerHP) {
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
        this.isJump = false;
        this.maxJump = false;
        this.jump = false;
        this.isHoiSinh = true;
        this.PlayerHP = PlayerHP;
        this.PlayerHPGoc = PlayerHP;
        this.isqvAT = false;
    }
    DrawAvtHP(avt, whp) {
        this.avt = avt;
        this.whp = 170*whp;
         // nền avt
        ctx.fillStyle = 'white';
        ctx.fillRect(0 , 0, 100, 100)
        ctx.drawImage(this.avt ,0, 0, 270, 270, 0, 0, 100, 100);
        ctx.fillStyle = 'white';
        ctx.fillRect(0 , 100, 170, 20)
        ctx.fillStyle = 'rgb(190, 10, 6)';
        ctx.fillRect(0, 100, this.whp, 20)
        ctx.fillStyle = 'black';
        ctx.strokeRect(0 , 100, 170, 20);
        //khung avt
        ctx.strokeRect(0 , 0, 100, 100)
    }
    drawtancong(wtc, htc, traiHayphai, ytc) {
        this.xtc = this.vitriXcanvasQVKL;
        this.ytc = ytc;
        this.wtc = wtc;
        this.htc = htc;
        this.traiHayphai = traiHayphai;
        // if (traiHayphai == 0) {
        //     ctx.fillStyle = "rgba(0, 0, 0, 0.295)";
        //     ctx.fillRect(this.xtc + 80, this.ytc, this.wtc, this.htc)
        // }
        // else {
        //     ctx.fillStyle = "rgba(0, 0, 0, 0.295)";
        //     ctx.fillRect(this.xtc, this.ytc, this.wtc, this.htc)        
        // }
    }
    TaoQuaiVat(yqv, wqv, hqv, xGoku, hp, qvspeed, dameQV, tocdodanhQV, spf) {
        this.xqv = Math.floor(Math.random()*100 + 1300);;
        this.yqv = yqv;
        this.wqv = wqv;
        this.hqv = hqv - 25;
        this.isLive = true;
        this.xGoku = xGoku;
        this.hp = hp;
        this.hpGoc = hp;
        this.thanhHP = hp;
        this.qvspeed = qvspeed;
        this.stop = 0;
        this.continue = qvspeed;
        this.dameQV = dameQV;
        this.tocdodanhQV = tocdodanhQV;
        this.sangtrai = true;
        this.sangphai = false;
        this.speedframe = spf;
        this.demQV = 0;
    }
    // vẽ quái vật gồm có máu, di chuyển đến ng chơi và tấn công
   
    QuaiVatDiChuyen() {
        let vitriFrameX = Math.floor(this.demQV/this.speedframe) % 8;
        let frameXSTM = vitriFrameX;
        let diemBatDau = 3;
        let rongstm = 27;
        if (this.xqv <= 1000 && this.sangphai) {
            this.sangtrai = false;
            this.xqv += (Math.floor(Math.random()*this.qvspeed));
            if (this.xqv >= 1000) this.sangtrai = true;
            if (frameXSTM == 3) {
                diemBatDau = 15;
            }
            if (frameXSTM >= 4) {
                diemBatDau = 20;
            }
            if (frameXSTM >= 6) {
                diemBatDau = 25;
            }
            if (!(this.xqv <= 500 && this.xqv >= 360 - this.wqv)) ctx.drawImage(saitama0, diemBatDau + 28*frameXSTM, 97, rongstm, 57, this.xqv, this.jumpY + 25, this.wqv - 30, this.hqv - 25)
        }
        else if (this.xqv >= -100 && this.sangtrai) {
            this.sangphai = false;
            this.xqv -= (Math.floor(Math.random()*this.qvspeed));
            if (this.xqv <= -100) this.sangphai = true;
            if (frameXSTM == 3) {
                diemBatDau = 15;
            }
            if (frameXSTM >= 4) {
                diemBatDau = 20;
            }
            if (frameXSTM >= 6) {
                diemBatDau = 27;
            }
            if (!(this.xqv <= 500 && this.xqv >= 360 - this.wqv)) ctx.drawImage(saitama180, 1009 - diemBatDau + -28*frameXSTM, 97, -rongstm , 57, this.xqv, this.jumpY + 25, this.wqv - 30, this.hqv - 25)  
        }
            if (this.xqv <= 500 && this.xqv >= 360 - this.wqv) {
                let randomAttack = Math.floor(Math.random()*this.tocdodanhQV);
                if (randomAttack == this.tocdodanhQV - 1) {
                        SonGoKu.PlayerHP -= this.dameQV;
                        this.isqvAT = true;
                }
                sounds[10].play();
                
                        
                        if (this.xqv + this.wqv <= canvas_width/2) {
                            // ctx.fillStyle ='red'
                            // ctx.fillRect(this.xqv + this.wqv, this.yqv, 100, 100)
                            switch(frameXSTM) {
                                case 0:
                                    ctx.drawImage(saitama0, 97 + 60*0, 1990, 60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 1:
                                    ctx.drawImage(saitama0, 97 + 60*1, 1990, 60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 2:
                                    ctx.drawImage(saitama0, 105 + 60*2, 1990, 60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 3:
                                    ctx.drawImage(saitama0, 109 + 60*3, 1990, 60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 4:
                                    ctx.drawImage(saitama0, 113 + 60*4, 1990, 60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 5:
                                    ctx.drawImage(saitama0, 113 + 60*5, 1990, 60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 6:
                                    ctx.drawImage(saitama0, 113 + 50*6, 1990, 60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 7:
                                    ctx.drawImage(saitama0, 113 + 60*7, 1990, 60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                            }
                        }
                        else {
                            switch(frameXSTM) {
                                case 0:
                                    ctx.drawImage(saitama180, 1009 -  97 + -60*0, 1990, -60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 1:
                                    ctx.drawImage(saitama180, 1009 -  97 + -60*1, 1990, -60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 2:
                                    ctx.drawImage(saitama180, 1009 -  105 + -60*2, 1990, -60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 3:
                                    ctx.drawImage(saitama180, 1009 -  109 + -60*3, 1990, -60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 4:
                                    ctx.drawImage(saitama180, 1009 -  113 + -60*4, 1990, -60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 5:
                                    ctx.drawImage(saitama180, 1009 -  113 + -60*5, 1990, -60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 6:
                                    ctx.drawImage(saitama180, 1009 -  113 + -50*6, 1990, -60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                                case 7:
                                    ctx.drawImage(saitama180, 1009 -  113 + -60*7, 1990, -60, 57, this.xqv, this.jumpY + 25, this.wqv + 30, this.hqv - 20)
                                    break;
                            }
                            // ctx.fillStyle ='red'
                            // ctx.fillRect(this.xqv, this.yqv, -100, 100)
                        }   
            }
            else {
                this.isqvAT = false;   
            }
        if (!baynhanh) {
            if (flip == 0) {
                this.xqv -= 50;
            }
            if (flip == 1) {
                this.xqv += 50;
            }
        }
        else {
            if (isPress && flip == 0) {
                if (skills[5].ssjMod) this.xqv -= 15;
                else this.xqv -= layerspeed;

            }
            if (isPress && flip == 1) {
                if (skills[5].ssjMod) this.xqv += 15;
                else this.xqv += layerspeed;
            }
        }
        if (this.hp <= 0) {
            this.isLive = false;
        }
        this.demQV++;
        if (frameXSTM == 7 && this.speedframe*8 - 1 == this.demQV) {
            this.demQV = 0;
        }
    }
    VeQuaiVat(wqvHP) {
        this.wqvHP = this.wqv*wqvHP;
        this.QuaiVatDiChuyen();
        ctx.fillStyle = 'white';
        ctx.fillRect(this.xqv, this.jumpY - 10, this.wqv, 10)
      
        ctx.fillStyle = 'rgb(190, 10, 6)';
        ctx.fillRect(this.xqv, this.jumpY - 10, this.wqvHP, 10)
                
        ctx.lineWidth = 2;
        ctx.fillStyle = 'black';
        ctx.strokeRect(this.xqv, this.jumpY - 10, this.wqv, 10)
    }
    nhayGoku(jumpImg) { 
        this.jumpImg = jumpImg;  
        let currentFrameX = (Math.floor(this.dem/tocdokhunghinh) % this.sokhunghinh)*this.b + this.a;
        if (this.isJump) {
            if (this.doNhayCao >= this.jumpY) {
                this.a = 4;
                this.b = 0;
            }
            if (this.maxJump) {
                // RƠI XUỐNG
                if (this.jumpY <= this.vitriYcanvasQVKL) {
                    if (this.jumpY >= 200) {
                        this.a = 0;
                        this.b = 1;
                    }
                }
                else {
                    this.a = 0;
                    this.b = 1;
                    this.c = false;
                }
            }
            if (flip == 0 || flip == 2) {
                if (currentFrameX === 2) {
                    this.TruHao = -211;
                }
                if (currentFrameX === 3 && !this.maxJump) {
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
                if (baynhanh && !GokuLon0.kameha && !GokuLon0.kick && !GokuLon0.kaioken && !skills[5].isSsj) {
                    if (skills[5].ssjMod) {
                        ctx.drawImage(this.jumpImg, 7 + this.TruHao + this.xQVKL + this.wQVKL * 2, this.yQVKL + 22, this.wQVKL - 5, this.hQVKL, this.vitriXcanvasQVKL, this.jumpY, this.wQVKL*2 + 5, this.hQVKL*2)
                    }
                    else {
                        ctx.drawImage(this.jumpImg,this.TruHao + this.xQVKL + this.wQVKL * 2, this.yQVKL, this.wQVKL, this.hQVKL, this.vitriXcanvasQVKL, this.jumpY, this.wQVKL*2, this.hQVKL*2)
                    }
                }
            }
            else if (flip == 1 || flip == 3){
                if (currentFrameX === 2) {
                    this.TruHao = 100;
                }
                if (currentFrameX === 3 && !this.maxJump) {
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
                if (baynhanh && !GokuLon0.kameha && !GokuLon0.kick && !GokuLon0.kaioken && !skills[5].isSsj) {
                    if (skills[5].ssjMod) {
                        ctx.drawImage(this.jumpImg, this.TruHao + 1625 + -55, this.yQVKL + 22, this.wQVKL - 5, this.hQVKL, this.vitriXcanvasQVKL, this.jumpY, this.wQVKL*2 + 5, this.hQVKL*2)
                    }
                    else {
                        ctx.drawImage(this.jumpImg, this.TruHao + 1628 + -55, this.yQVKL, this.wQVKL, this.hQVKL, this.vitriXcanvasQVKL, this.jumpY, this.wQVKL*2, this.hQVKL*2)
                    }
                }
            }
        }
        
       
    }
    HoiSinh () {
        console.log('đang hồi sinh')
        setTimeout(() => {
            console.log('đã hồi sinh')
            this.isHoiSinh = true;
            this.isLive = true;
            this.hp = this.hpGoc;
            this.xqv = Math.floor(Math.random()*100 + 1300);;
        }, 2000);
        this.isHoiSinh = false;
    }
    randomJump () {
            var dCRandom = Math.floor(Math.random()*151);
            if (dCRandom == 50) this.isJump = true;
    }
    nhay () {  
        if (this.isJump) {      
            if (this.doNhayCao >= this.jumpY) {
                this.maxJump = true;
                this.giatoc = this.copygiatoc*3;
            }
            if (this.maxJump) {
                // RƠI XUỐNG
                if (this.jumpY <= this.vitriYcanvasQVKL) {
                    this.jumpY += this.giatoc*this.trongluc;
                    this.giatoc += this.tangiatoc;
                }
                else {
                    this.maxJump = false;
                    this.jumpY = this.vitriYcanvasQVKL;
                    this.isJump = false;
                    this.jump = false;
                    this.giatoc = this.copygiatoc;
                    this.dem = 0;
                }
            }
            else {
                // BAY LÊN
                    this.jumpY -= this.giatoc*this.trongluc;
                    this.giatoc += this.tangiatoc;
            }
            this.dem += this.demPlusPlus;
        }
    }
}
var quaivat1 = new QuaiVatKhongLo( 0, 0, vitriCanvas.vitriYcanvas, 0, 0, 0, 0, 0, 0, 40, 0, 'quái vật');
var quaivat2 = new QuaiVatKhongLo( 0, 0, vitriCanvas.vitriYcanvas, 0, 0, 0, 0, 0, 0, -120, 0, 'quái vật');
var quaivat3 = new QuaiVatKhongLo( 0, 0, vitriCanvas.vitriYcanvas, 0, 0, 0, 0, 0, 0, 100, 0, 'quái vật');

quaivat1.TaoQuaiVat(310, 100, 160, canvas_width/2, 500, 6, 10, 20, 5);
quaivat2.TaoQuaiVat(310, 100, 160, canvas_width/2, 500, 10, 6, 20, 3);
quaivat3.TaoQuaiVat(310, 100, 160, canvas_width/2, 500, 5, 5, 20, 5);

var QuaiVatArr = [];
QuaiVatArr.push(quaivat1);
QuaiVatArr.push(quaivat2);
QuaiVatArr.push(quaivat3);
QuaiVatArr.forEach(quaivat => {
    quaivat.isJump = true;
})
/////////////////////
var SonGoKu = new QuaiVatKhongLo(0, vitriCanvas.vitriXcanvas, vitriCanvas.vitriYcanvas, canvas_width, canvas_height, 205, 210, 55, 80, 50, 7, 1000);
///////////////////////
var bkgrImg1 = new Image();
bkgrImg1.src = 'bkground6.jpg';
var bkgrImg2 = new Image();
bkgrImg2.src = 'bkground8.png';

var anhnen1 = new Layer(bkgrImg1, 0.5, 1200, 500, -100); 
var anhnen2 = new Layer(bkgrImg2, 1, 1200, 500, 25); 
var ArrBkgr = [];
ArrBkgr.push(anhnen1)
ArrBkgr.push(anhnen2)

// ảnh nền
var isSkill3 = true; 
var isSkill2 = true;
var isSkill4 = true;
var isSkill5 = true;
var isPress = false;
var bkgrX = 0;
var idxBkgr = 0;
// vẽ
var dem5 = 0;
var dem2 = 0;
var dem1 = 0; 
var dem0 = 0;
var dem6 = 0;
var dem7 = 0;
var dem8 = 0;


//
var idx = 0;
// KAMEHAMEHA
var kameXtienlen0 = GokuLon0[0][3].kameX;
var kameXtienlen2 = GokuLon0[0][3].kameX;
var kameXtienlen22 = GokuLon0[0][3].kameX;

var kameXtienlen1 = GokuLon0[1][3].kameX;
var kameXtienlen3 = GokuLon0[1][3].kameX;
var kameXtienlen33 = GokuLon0[1][3].kameX;


var tocdoKameha = 40;
var chuongXongChua = false;
var kameYet = false;
/////////// tốc đọ hình fps/////////////////////////////////
var tocdokhunghinh = 5;
// đổi chiều
var batdau = true;
var doiChieuChua = false;
var doiChieuChuaDem = 0;
var YKame;
//4
var KhoangCanhDayLui = 1;
function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    if (skills[5].ssjMod) KhoangCanhDayLui = 3;
    else if (skills[3].kaiokenMod) KhoangCanhDayLui = 1.75
    else KhoangCanhDayLui = 1
    if (skills[5].ssjMod) {
        var ssjGoku = new Image();
        ssjGoku.src = 'GokuLonSSJ2.png';
        var ssjGoku180 = new Image();
        ssjGoku180.src = 'GokuLonSSJ2180.png';
        arrGokuImg[0] = ssjGoku;
        arrGokuImg[1] = ssjGoku180;
    }
    else {
        var ssjGoku = new Image();
        ssjGoku.src = 'GokuLonlarge.png';
        var ssjGoku180 = new Image();
        ssjGoku180.src = 'GokuLon180large.png';
        arrGokuImg[0] = ssjGoku;
        arrGokuImg[1] = ssjGoku180;
    }
    let vitriFrameX = Math.floor(dem/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
    frameX = vitriFrameX;
    var Ychung = SonGoKu.jumpY;
    if (flip === 0 || flip === 2) {
        if (doiChieuChua) {
            var doichieuSmooth = setInterval(() => {
                anhnen1.startX -= 1;

            }, 2)
            setTimeout(() => {
                clearInterval(doichieuSmooth);
            }, 200);
            doiChieuChua = false;
            batdau = true;
        }
        ArrBkgr.forEach(anhnen => {
            anhnen.chaySangPhai();
            anhnen.capnhatPhai();
        })
    }
    else if (flip == 1 || flip == 3) { 
        if (doiChieuChua) {
            var doichieuSmooth = setInterval(() => {
                anhnen1.startX += 1;
            }, 2)
            setTimeout(() => {
                clearInterval(doichieuSmooth);
            }, 200);
            doiChieuChua = false;
            batdau = false;
        }
        ArrBkgr.forEach(anhnen =>{
            anhnen.chaySangTrai();
            anhnen.capnhatTrai();
        })
    }
    // Kameha //////////////////////////////////////
    if (SonGoKu.jump && !skills[5].isSsj) {
        SonGoKu.nhay();
        if (SonGoKu.isJump) SonGoKu.nhayGoku(arrGokuImg[flip]);
    }
    ///////kaioken hào quang////////////////////////////// && skills[3].kaiokenMod
    if (skills[3].kaiokenMod) {
        sounds[6].play();
        let vitriXkok = Math.floor(skills[3].demkok/3) % 3;
        skills[3].frameXkok = vitriXkok;
        if (flip === 0 || flip == 2) {
            switch (skills[3].frameXkok) {
                case 0:
                    ctx.drawImage(arrGokuImg[0], 130 + 50*skills[3].frameXkok, 2200, 80, 80, GokuLon0[0][0].vitriX - 59, Ychung - 40, 230, 160 + 40);
                    break;
                case 1:
                    ctx.drawImage(arrGokuImg[0], 167 + 50*skills[3].frameXkok, 2200, 80, 80, GokuLon0[0][0].vitriX - 59, Ychung - 40, 230, 160 + 40);
                    break;
                case 2:
                    ctx.drawImage(arrGokuImg[0], 205 + 50*skills[3].frameXkok, 2190, 100, 90, GokuLon0[0][0].vitriX - 79, Ychung - 40, 270, 180 + 40);
                    break;
            }
        }
        else if (flip == 1 || flip == 3) {
            switch (skills[3].frameXkok) {
                case 0:
                    ctx.drawImage(arrGokuImg[1], 1833 - 130 + -50*skills[3].frameXkok, 2200, -80, 80, GokuLon0[1][0].vitriX - 59, Ychung - 40, 230, 160 + 40);
                    break;
                case 1:
                    ctx.drawImage(arrGokuImg[1], 1833 - 167 + -50*skills[3].frameXkok, 2200, -80, 80, GokuLon0[1][0].vitriX - 59, Ychung - 40, 230, 160 + 40);
                    break;
                case 2:
                    ctx.drawImage(arrGokuImg[1], 1833 - 205 + -50*skills[3].frameXkok, 2190, -100, 90, GokuLon0[1][0].vitriX - 79, Ychung - 40, 270, 180 + 40);
                    break;
            }
        }
        skills[3].demkok++;
    }
    if (skills[5].ssjMod) {
        if (SonGoKu.PlayerHP <= SonGoKu.PlayerHPGoc) SonGoKu.PlayerHP += SonGoKu.PlayerHPGoc*0.0005
        sounds[9].play();
        let vitriXkok = Math.floor(skills[3].demkok/2) % 4;
        skills[3].frameXkok = vitriXkok;
        if (flip === 0 || flip == 2) {
            switch (skills[3].frameXkok) {
                case 0:
                    ctx.drawImage(arrGokuImg[0], 12 + 50*skills[3].frameXkok, 2718, 90, 80, GokuLon0[0][0].vitriX - 59, Ychung - 60, 230, 160 + 40);
                    break;
                case 1:
                    ctx.drawImage(arrGokuImg[0], 52 + 50*skills[3].frameXkok, 2718, 90, 80, GokuLon0[0][0].vitriX - 59, Ychung - 60, 230, 160 + 40);
                    break;
                case 2:
                    ctx.drawImage(arrGokuImg[0], 95+ 50*skills[3].frameXkok, 2718, 110, 80, GokuLon0[0][0].vitriX - 79, Ychung - 80, 270, 180 + 40);
                    break;
                case 3:
                    ctx.drawImage(arrGokuImg[0], 154 + 50*skills[3].frameXkok, 2718, 110, 80, GokuLon0[0][0].vitriX - 79, Ychung - 80, 270, 180 + 40);
                    break;
            }
        }
        else if (flip == 1 || flip == 3) {
            switch (skills[3].frameXkok) {
                case 0:
                    ctx.drawImage(arrGokuImg[1], 1833 - 12 + -50*skills[3].frameXkok, 2718, -90, 80, GokuLon0[1][0].vitriX - 59, Ychung - 60, 230, 160 + 40);
                    break;
                case 1:
                    ctx.drawImage(arrGokuImg[1], 1833 - 52 + -50*skills[3].frameXkok, 2718, -90, 80, GokuLon0[1][0].vitriX - 59, Ychung - 60, 230, 160 + 40);
                    break;
                case 2:
                    ctx.drawImage(arrGokuImg[1], 1833 - 95 + -50*skills[3].frameXkok, 2718, -110, 80, GokuLon0[1][0].vitriX - 79, Ychung - 80, 270, 180 + 40);
                    break;
                case 3:
                    ctx.drawImage(arrGokuImg[1],  1833 - 452 + 50*skills[3].frameXkok, 2718, -110, 80, GokuLon0[0][0].vitriX - 79, Ychung - 80, 270, 180 + 40);
                    break;
            }
        }
        skills[3].demkok++;
        if (baynhanh) bkgrSpeed = 15;
    }
    else {
        sounds[9].currentTime = 0;
        if (!skills[3].kaiokenMod && baynhanh) bkgrSpeed = layerspeed;
    }
    if (GokuLon0.kameha && isSkill2) {
        if (!skills[5].ssjMod) {
            if (flip === 0 || flip == 2) {
                if (SonGoKu.isJump) {
                    tocdokhunghinh = 3;
                }
                var kameXtienlen = kameXtienlen0;
                isSkill3 = false;
                isSkill4 = false;
                isSkill5 = false;
                idx = 3;
                let vitriFrameX2 = Math.floor(dem6/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
                frameX2 = vitriFrameX2;
                // tốc độ khung hình càng lớn thì dem2 phải càng lớn mới đạt được số khung hình tối đa của vitriFramX2
                // dem3 sẽ bằng số khung hình nhân tocdokhunghinh -1,, khi dem3 == dem2 cũng là lúc khung hình cuối chạy
                // phép math.floor sẽ luôn làm cho vitriFrameX2 bằng số khung hình -1
                let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
                let diemBatDau = 1;
                // kame bay ra 
                if (frameX2 == 0) kameYet = true;
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
                if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem6) {
                    tocdokhunghinh = 5;
                    dem6 = -1
                    GokuLon0.kameha = false;
                    idx = 0;
                    if (isPress) idx = 1;
                    isSkill3 = true;
                    isSkill4 = true;
                    isSkill5 = true;
                    kameXtienlen0 = GokuLon0[0][3].kameX;
                    if (GokuLon0.flyFast) idx = 2;
                }
                // draw
                ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                dem6 += 1;
                requestAnimationFrame(animate);
            }
            else if (flip == 1 || flip == 3) {
                if (SonGoKu.isJump) tocdokhunghinh = 3;
                var kameXtienlen = kameXtienlen1;
                isSkill3 = false;
                isSkill4 = false;
                isSkill5 = false;
                idx = 3;
                let vitriFrameX2 = Math.floor(dem6/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
                frameX2 = vitriFrameX2;
                let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
                let diemBatDau = 1832;
                if (frameX2 == 0) kameYet = true;
    
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
                if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem6) {
                    tocdokhunghinh = 5;
                    dem6 = -1
                    GokuLon0.kameha = false;
                    idx = 0;
                    if (isPress) idx = 1;
                    isSkill3 = true;
                    isSkill4 = true;
                    isSkill5 = true;;
                    kameXtienlen1 = GokuLon0[1][3].kameX;
                    if (GokuLon0.flyFast) idx = 2;
                }
                // draw
                ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                dem6++;
                requestAnimationFrame(animate);
            }
        }
        else {
            if (flip === 0 || flip == 2 ) {
                if (SonGoKu.isJump) {
                    tocdokhunghinh = 3;
                }
                var kameXtienlen = kameXtienlen2;
                var kameXtienlenDouble = kameXtienlen22;

                isSkill3 = false;
                isSkill4 = false;
                isSkill5 = false;
                idx = 3;
                let kame2 = 0;
                let vitriFrameX2 = Math.floor(dem2/3) % (GokuLon[idx].soKhungHinh*0 + 17);
                frameX2 = vitriFrameX2;
                // tốc độ khung hình càng lớn thì dem2 phải càng lớn mới đạt được số khung hình tối đa của vitriFramX2
                // dem3 sẽ bằng số khung hình nhân tocdokhunghinh -1,, khi dem3 == dem2 cũng là lúc khung hình cuối chạy
                // phép math.floor sẽ luôn làm cho vitriFrameX2 bằng số khung hình -1
                let dem3 = 3*34 - 1;
                let diemBatDau = 1;
                // kame bay ra 
                if (frameX2 == 0) {
                    kameYet = true;
                    kameXtienlen22 = GokuLon0[0][3].kameX;

                }
                if (frameX2 >= 4){
                    diemBatDau = -209;
                    GokuLon0[flip][idx].chieurong = 105;
                    GokuLon0[0][3].kamejoko(kameXtienlen, YKame + 45);
                    kameXtienlen2 += tocdoKameha; 
                }
                else {
                    GokuLon0[flip][idx].chieurong = 53;
                }
                if (frameX2 >= 8) {
                    if (frameX2 == 8) {
                        kameYet = true;
                        kameXtienlen2 = GokuLon0[0][3].kameX;
                    } 
                    if (frameX2 >= 13){
                        diemBatDau = -1030;
                        kame2 = 83
                        GokuLon0[flip][idx].chieurong = 100;
                        GokuLon0[0][3].kamejoko(kameXtienlenDouble, YKame + 45);
                        kameXtienlen22 += tocdoKameha; 
                    }
                    else {
                        kame2 = 83
                        diemBatDau = -420;
                        GokuLon0[flip][idx].chieurong = 53;
                    }
                }
                // tro ve trang thai ban dau
                if (dem3 === dem2) {
                    tocdokhunghinh = 5;
                    dem2 = -1
                    GokuLon0.kameha = false;
                    idx = 0;
                    if (isPress) idx = 1;
                    isSkill3 = true;
                    isSkill4 = true;
                    isSkill5 = true;
                    kameXtienlen2 = GokuLon0[0][3].kameX;
                    kameXtienlen22 = GokuLon0[0][3].kameX;

                    if (GokuLon0.flyFast) idx = 2;
                }
                ctx.drawImage(arrGokuImg[flip], 10 + diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY - 12 - kame2, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                dem2 += 1;
                requestAnimationFrame(animate);
            }
            else if (flip == 1 || flip == 3) {
                if (SonGoKu.isJump) tocdokhunghinh = 3;
                var kameXtienlen = kameXtienlen3;
                var kameXtienlenDouble = kameXtienlen33;

                isSkill3 = false;
                isSkill4 = false;
                isSkill5 = false;
                idx = 3;
                let kame2 = 0;
                let vitriFrameX2 = Math.floor(dem2/3) %( GokuLon[idx].soKhungHinh*0 + 17 );
                frameX2 = vitriFrameX2;
                let dem3 = 3*34 - 1;
                let diemBatDau = 1832;
                if (frameX2 == 0) {
                    kameYet = true;
                    kameXtienlen33 = GokuLon0[1][3].kameX;
                }
    
                if (frameX2 >= 4){
                    diemBatDau = 2040;
                    GokuLon0[flip][idx].chieurong = -105;
                    GokuLon0[1][3].kamejoko(kameXtienlen, YKame + 45);
                    kameXtienlen3 -= tocdoKameha;
                }
                else {
                    GokuLon0[flip][idx].chieurong = -53;
                }
                if (frameX2 >= 8) {
                    if (frameX2 == 8) {
                        kameYet = true;
                        kameXtienlen3 = GokuLon0[1][3].kameX;
                    }
                    if (frameX2 >= 13){
                        diemBatDau =1833 - -1030;
                        kame2 = 83
                        GokuLon0[flip][idx].chieurong = -100;
                        GokuLon0[1][3].kamejoko(kameXtienlenDouble, YKame + 45);
                        kameXtienlen33 -= tocdoKameha; 
                    }
                    else {
                        kame2 = 83
                        diemBatDau = 1833 - -420;
                        GokuLon0[flip][idx].chieurong = -53;
                    }
                }
                // tro ve trang thai ban dau
                if (dem3 === dem2) {
                    tocdokhunghinh = 5;
                    dem2 = -1
                    GokuLon0.kameha = false;
                    idx = 0;
                    if (isPress) idx = 1;
                    isSkill3 = true;
                    isSkill4 = true;
                    isSkill5 = true;;
                    kameXtienlen3 = GokuLon0[1][3].kameX;
                    kameXtienlen33 = GokuLon0[1][3].kameX;
                    if (GokuLon0.flyFast) idx = 2;
                }
                // draw
                ctx.drawImage(arrGokuImg[flip], -10 + diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY - 12 - kame2, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                dem2++;
                requestAnimationFrame(animate);
            }
        }
    console.log(kameXtienlen)

    }
     // Đá ///////////////////////////////////////////////////////
    else if (GokuLon0.kick && isSkill3) {
        bkgrSpeed = 0;
        if (skills[5].ssjMod) {
            sounds[7].play();
            if (flip === 0 || flip == 2) {
                isSkill2 = false;
                isSkill4 = false;
                isSkill5 = false;
                let vitriFrameX3 = Math.floor(dem8/tocdokhunghinh) % 38;
                frameX2 = vitriFrameX3
                let dem3 = tocdokhunghinh*38 - 1;
                if (frameX2 <= 3) {
                    ctx.drawImage(arrGokuImg[flip], 13 + 55*frameX2, 895, 55, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 4) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 8 + 57*frameX2, 895, 60, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 5) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 15 + 57*frameX2, 895, 50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 6) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 5 + 57*frameX2, 895, 50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 7) {
                    ctx.drawImage(arrGokuImg[flip], -6 + 57*frameX2, 895, 45, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2 - 10, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 8) {
                    ctx.drawImage(arrGokuImg[flip], -20 + 57*frameX2, 895, 50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 9) {
                    ctx.drawImage(arrGokuImg[flip], -25 + 57*frameX2, 895, 50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 10) {
                    sounds[11].play();
                    ctx.drawImage(arrGokuImg[flip], -30 + 57*frameX2, 882, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 11) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 69*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 69
                    })
                    ctx.drawImage(arrGokuImg[flip], -45 + 57*frameX2, 882, 20, 80, GokuLon0[flip][idx].vitriX + 10, Ychung - 20, GokuLon0[flip][idx].chieurong * 2 - 60, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 12) {
                    ctx.drawImage(arrGokuImg[flip], -80 + 57*frameX2, 895, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 >= 13 && frameX2 <= 15) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 10
                    })
                    ctx.drawImage(arrGokuImg[1], 1833 - -705 + -55*frameX2, 450, -55, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 16) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 10
                    })
                    ctx.drawImage(arrGokuImg[1], 1833 - -705 + -55*frameX2, 450, -65, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 17) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 10
                    })
                    ctx.drawImage(arrGokuImg[1], 1833 - -686 + -55*frameX2, 450, -55, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 18) {
                    ctx.drawImage(arrGokuImg[1], 1833 - -675 + -55*frameX2, 450, -65, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 19) {
                    ctx.drawImage(arrGokuImg[1], 1833 - -660 + -55*frameX2, 450, -65, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 20) {
                    ctx.drawImage(arrGokuImg[flip], -25 + 57*9, 895, 50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 21) {
                    sounds[11].play();
                    ctx.drawImage(arrGokuImg[flip], -30 + 57*10, 882, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 22) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 69*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 69
                    })
                    ctx.drawImage(arrGokuImg[flip], -45 + 57*11, 882, 20, 80, GokuLon0[flip][idx].vitriX + 10, Ychung - 20, GokuLon0[flip][idx].chieurong * 2 - 60, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 23) {
                    ctx.drawImage(arrGokuImg[flip], -80 + 57*12, 895, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 24) {
                    ctx.drawImage(arrGokuImg[flip], 12 + 57*0, 780, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 25) {
                    ctx.drawImage(arrGokuImg[flip], 10 + 57*1, 780, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 26) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 5 + 57*2, 780, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 27) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 20*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 20
                    })
                    ctx.drawImage(arrGokuImg[flip], 3 + 57*3, 780, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 28) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 2 + 57*4, 780, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 29) {
                    sounds[11].currentTime = 0;
                    ctx.drawImage(arrGokuImg[flip], -25 + 57*9, 895, 50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 30) {
                    sounds[11].play();
                    ctx.drawImage(arrGokuImg[flip], -30 + 57*10, 882, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 31) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 69*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 69
                    })
                    ctx.drawImage(arrGokuImg[flip], -45 + 57*11, 882, 20, 80, GokuLon0[flip][idx].vitriX + 10, Ychung - 20, GokuLon0[flip][idx].chieurong * 2 - 60, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 32) {
                    sounds[11].currentTime = 0;
                    sounds[11].play();

                    ctx.drawImage(arrGokuImg[flip], -80 + 57*12, 895, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                ////
                if (frameX2 == 33) {
                    ctx.drawImage(arrGokuImg[1],1833 - 12 + -57*0, 1230, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 120, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 34) {
                    ctx.drawImage(arrGokuImg[1], 1833 - 5 + -57*1, 1230, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 30, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 35) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 20*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 20
                    })
                    ctx.drawImage(arrGokuImg[1],1833 - 0 -57*2, 1230, -60, 80, GokuLon0[flip][idx].vitriX, Ychung - 30, GokuLon0[flip][idx].chieurong * 2 + 10, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 36) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 20*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 20
                    })
                    ctx.drawImage(arrGokuImg[1],1833 - 3 + -57*3, 1230, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 37) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 20*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 20
                    })
                    ctx.drawImage(arrGokuImg[1],1833 - 7 + -57*4, 1230, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                // tro ve trang thai ban dau
                if (frameX2 === 37 && dem3 === dem8) {
                    sounds[7].pause();
                    sounds[7].currentTime = 0;
                    dem8 = -1;
                    GokuLon0.kick = false;
                    idx = 0;
                    isSkill2 = true;
                    isSkill4 = true;
                    isSkill5 = true;
                    if (GokuLon0.flyFast) idx = 2;
                }
                dem8++;
                requestAnimationFrame(animate);
            }
            ////////////////////////////////////////////////////
            else if (flip == 1 || flip == 3){
                isSkill2 = false;
                isSkill4 = false;
                isSkill5 = false;
                let vitriFrameX3 = Math.floor(dem8/tocdokhunghinh) % 38;
                frameX2 = vitriFrameX3
                let dem3 = tocdokhunghinh*38 - 1;
                if (frameX2 <= 3) {
                    ctx.drawImage(arrGokuImg[flip], 1833 - 13 + -55*frameX2, 895, -55, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 4) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 1833 -  8 + -57*frameX2, 895, -60, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 5) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 1833 -  15 + -57*frameX2, 895, -50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 6) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 1833 -  5 + -57*frameX2, 895, -50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 7) {
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -6 + -57*frameX2, 895, -45, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2 - 10, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 8) {
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -20 + -57*frameX2, 895, -50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 9) {
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -25 + -57*frameX2, 895, -50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 10) {
                    sounds[11].play();

                    ctx.drawImage(arrGokuImg[flip], 1833 -  -30 + -57*frameX2, 882, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 11) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 69*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 69
                    })
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -45 + -57*frameX2, 882, -20, 80, GokuLon0[flip][idx].vitriX + 10, Ychung - 20, GokuLon0[flip][idx].chieurong * 2 - 60, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 12) {
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -80 + -57*frameX2, 895, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 >= 13 && frameX2 <= 15) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 10
                    })
                    ctx.drawImage(arrGokuImg[0],-705 + 55*frameX2, 450, 55, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 16) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 10
                    })
                    ctx.drawImage(arrGokuImg[0],-705 + 55*frameX2, 450, 65, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 17) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 10
                    })
                    ctx.drawImage(arrGokuImg[0],-686 + 55*frameX2, 450, 55, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 18) {
                    ctx.drawImage(arrGokuImg[0], -675 + 55*frameX2, 450, 65, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 19) {
                    ctx.drawImage(arrGokuImg[0],  -660 + 55*frameX2, 450, 65, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 20) {
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -25 + -57*9, 895, -50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 21) {
                    sounds[11].play();

                    ctx.drawImage(arrGokuImg[flip], 1833 -  -30 + -57*10, 882, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 22) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 69*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 69
                    })
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -45 + -57*11, 882, -20, 80, GokuLon0[flip][idx].vitriX + 10, Ychung - 20, GokuLon0[flip][idx].chieurong * 2 - 60, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 23) {
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -80 + -57*12, 895, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 24) {
                    ctx.drawImage(arrGokuImg[flip], 1833 -  12 + -57*0, 780, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 25) {
                    ctx.drawImage(arrGokuImg[flip], 1833 -  10 + -57*1, 780, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 26) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 1833 -  5 + -57*2, 780, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 27) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 20*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 20
                    })
                    ctx.drawImage(arrGokuImg[flip], 1833 -  3 + -57*3, 780, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 28) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 10*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv == 10
                    })
                    ctx.drawImage(arrGokuImg[flip], 1833 -  2 + -57*4, 780, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 29) {
                    sounds[10].currentTime = 0;
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -25 + -57*9, 895, -50, 80, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 30) {
                    sounds[11].play();
                    ctx.drawImage(arrGokuImg[flip],  1833 - -30 + -57*10, 882, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 31) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  += 69*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv += 69
                    })
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -37 + -57*11, 882, -20, 80, GokuLon0[flip][idx].vitriX + 10, Ychung - 20, GokuLon0[flip][idx].chieurong * 2 - 60, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 32) {
                    sounds[11].currentTime = 0;
                    sounds[11].play();
                    ctx.drawImage(arrGokuImg[flip], 1833 -  -80 + -57*12, 895, -50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                ////
                if (frameX2 == 33) {
                    ctx.drawImage(arrGokuImg[0],25 - 12 + 57*0, 1230, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 120, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 34) {
                    ctx.drawImage(arrGokuImg[0],5 - 5 + 57*1, 1230, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 30, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 35) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 20*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 20
                    })
                    ctx.drawImage(arrGokuImg[0], 57*2, 1230, 60, 80, GokuLon0[flip][idx].vitriX, Ychung - 30, GokuLon0[flip][idx].chieurong * 2 + 10, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 36) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 20*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 20
                    })
                    ctx.drawImage(arrGokuImg[0], 6- 3 + 57*3, 1230, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 20, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                if (frameX2 == 37) {
                    ArrBkgr.forEach(anhnen => {
                        if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                        anhnen.startX  -= 20*anhnen.tocdo;
                    })
                    QuaiVatArr.forEach(quaivat => {
                        quaivat.xqv -= 20
                    })
                    ctx.drawImage(arrGokuImg[0],15 - 7 + 57*4, 1230, 50, 80, GokuLon0[flip][idx].vitriX, Ychung - 3, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2)
                }
                // tro ve trang thai ban dau
                if (frameX2 === 37 && dem3 === dem8) {
                    sounds[7].pause();
                    sounds[7].currentTime = 0;
                    dem8 = -1;
                    GokuLon0.kick = false;
                    idx = 0;
                    isSkill2 = true;
                    isSkill4 = true;
                    isSkill5 = true;
                    if (GokuLon0.flyFast) idx = 2;
                }
                dem8++;
                requestAnimationFrame(animate);
            }
        }
        else if (!skills[3].kaiokenMod) {
            if (flip === 0 || flip == 2) {
                isSkill2 = false;
                isSkill4 = false;
                isSkill5 = false;

                idx = 4;
                let vitriFrameX3 = Math.floor(dem0/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
                frameX2 = vitriFrameX3;
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
                if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem0) {
                    dem0 = -1;
                    GokuLon0.kick = false;
                    idx = 0;
                    isSkill2 = true;
                    isSkill4 = true;
                    isSkill5 = true;

                    if (GokuLon0.flyFast) idx = 2;
                }
                if (skills[5].ssjMod) {
                    if (frameX2 >= 3 && frameX2 <= 10){
                        diemBatDau = -37;
                        GokuLon0[flip][idx].chieurong = 69;
                    }
                    ctx.drawImage(arrGokuImg[flip], 0 + diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY - 8, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);

                }
                else {
                    ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);

                }
                ArrBkgr.forEach(anhnen => {
                    if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                    anhnen.startX  -= 1*anhnen.tocdo;
                })
                dem0++;
                requestAnimationFrame(animate);
            }
            else if (flip == 1 || flip == 3){
                isSkill2 = false;
                isSkill4 = false;
                isSkill5 = false;
                
                idx = 4;
                let vitriFrameX3 = Math.floor(dem0/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
                frameX2 = vitriFrameX3;
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
                if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem0) {
                    dem0 = -1;
                    GokuLon0.kick = false;
                    idx = 0;
                    isSkill2 = true;
                    isSkill4 = true;
                    isSkill5 = true;

                    if (GokuLon0.flyFast) idx = 2;
                }
                if (skills[5].ssjMod) {
                    if (frameX2 >= 3 && frameX2 <= 10){
                        diemBatDau = 1869
                        GokuLon0[flip][idx].chieurong = -69;
                    }
                    ctx.drawImage(arrGokuImg[flip],  diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY - 8, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);

                }
                else {
                    ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);

                }
                ArrBkgr.forEach(anhnen => {
                    if (anhnen.startX  > anhnen.rong) anhnen.startX = 0;
                    anhnen.startX  += 1*anhnen.tocdo;
                })
                dem0++;
                ;
                requestAnimationFrame(animate);
            }
        }
        else {
            if (flip === 0 || flip == 2) {
                isSkill2 = false;
                isSkill4 = false;
                isSkill5 = false;

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
                    isSkill5 = true;
                    bkgrSpeed = layerspeed;
                    if (GokuLon0.flyFast) idx = 2;
                }
                ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, 2295, GokuLon0[flip][idx].chieurong + 1, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                ArrBkgr.forEach(anhnen => {
                    if (anhnen.startX < -anhnen.rong) anhnen.startX = 0;
                    anhnen.startX  -= 2*anhnen.tocdo;
                })
                dem1++;
                requestAnimationFrame(animate);
            }
            else if(flip == 1 || flip == 3) {
                console.log(flip)
                isSkill2 = false;
                isSkill4 = false;
                isSkill5 = false;

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
                    isSkill5 = true;
                    bkgrSpeed = layerspeed;
                    if (GokuLon0.flyFast) idx = 2;
                }
                ctx.drawImage(arrGokuImg[flip], 1831 -  diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, 2295, GokuLon0[flip][idx].chieurong + 1, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
                ArrBkgr.forEach(anhnen => {
                    if (anhnen.startX > anhnen.rong) anhnen.startX = 0;
                    anhnen.startX  += 2*anhnen.tocdo;
                })
                dem1++;
                requestAnimationFrame(animate);
            }
        }
    }

    /// KAIOKENNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    else if (isSkill4 && GokuLon0.kaioken) { // 
        if (flip === 0 || flip == 2) {
            // tocdokhunghinh = 30
            isSkill2 = false;
            isSkill3 = false;
            isSkill5 = false;

            idx = 5;
            let vitriFrameX2 = Math.floor(dem7/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
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
            if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem7) {
                dem7 = -1;
                GokuLon0.kaioken = false;
                idx = 0;
                isSkill2 = true;
                isSkill3 = true;
                isSkill5 = true;

            }
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            dem7++;
            requestAnimationFrame(animate);
        }
        else if (flip == 1 || flip == 3){
             // tocdokhunghinh = 30
            isSkill2 = false;
            isSkill3 = false;
            isSkill5 = false;

            idx = 5;
            let vitriFrameX2 = Math.floor(dem7/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
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
            if (frameX2 === GokuLon[idx].soKhungHinh - 1 && dem3 === dem7) {
                dem7 = -1;
                GokuLon0.kaioken = false;
                idx = 0;
                isSkill2 = true;
                isSkill3 = true;
                isSkill5 = true;;

            }
            ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX - 30, Ychung, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
            dem7++;
            ;
            requestAnimationFrame(animate);
        }
    }
    ///// SIÊU SAYAN
    else if (skills[5].isSsj) {
        if (SonGoKu.PlayerHP <= SonGoKu.PlayerHPGoc) SonGoKu.PlayerHP += SonGoKu.PlayerHPGoc*0.005
         
        if (flip == 0 || flip == 2) {
            let Yssj = 1485;
            let YssjCanvas = vitriCanvas.vitriYcanvas;
            let Xssj = 10;
            let vitriFrameX2 = Math.floor(dem5/tocdokhunghinh) % 45;
            frameX2 = vitriFrameX2;
            let Wssj = 2;
            let Hssj = 2;
            let rongSsj = 55;
            let caoSsj = 80;
            let HssjCanvas = 160;
            let XssjCanvas = GokuLon0[0][idx].vitriX;
            let ssjRONG = 55;
            let dem3 = tocdokhunghinh*45 - 1;
            if (frameX2 == 0) {
                Xssj = 10;
                ssjRONG = 55;
                rongSsj = 55
                caoSsj = 80;
            }
            if (frameX2 == 1) {
                Xssj = 10;
                ssjRONG = 55;
                rongSsj = 55;
                caoSsj = 80;
            }
            if (frameX2 == 2 || frameX2 == 4) {
                frameX2 = 0;
                Xssj = 10;
                ssjRONG = 55;
                rongSsj = 55
                caoSsj = 80;
            }
            if (frameX2 == 3 || frameX2 == 5) {
                frameX2 = 1;
                Xssj = 10;
                ssjRONG= 55;
                rongSsj = 55
                caoSsj = 80;
            }
            if (frameX2 == 6) {
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -214; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 365;
                ssjRONG = 55;
            }
            if (frameX2 == 7) {
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -183; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 365;
                ssjRONG= 55;
            }
            if (frameX2 == 8) {
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -148; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 353;
                ssjRONG = 55;
            }
            if (frameX2 == 9) {
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -100; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 353;
                ssjRONG = 55;
            }
            if (frameX2 == 10 || frameX2 == 14 || frameX2 == 18) {
                frameX2 = 6;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -214; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 365;
                ssjRONG = 55;
            }
            if (frameX2 == 11 || frameX2 == 15 || frameX2 == 19) {
                flip = 2;
                frameX2 = 7;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -183; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 365;
                ssjRONG = 55;
            }
            if (frameX2 == 12 || frameX2 == 16 || frameX2 == 20) {
                flip = 0;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -148; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 353;
                ssjRONG = 55;
                frameX2 = 8;

            }
            if (frameX2 == 13 || frameX2 == 17 || frameX2 == 21) {
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -100; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 353;
                ssjRONG= 55;
                frameX2 = 9;

            }
            ////////////  SIEUSAYJA
            if (frameX2 == 34 || frameX2 == 38 || frameX2 == 42) {

                flip = 2;
                frameX2 = 6;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -214; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 365;
                ssjRONG = 55;
            }
            if (frameX2 == 35 || frameX2 == 39 || frameX2 == 43) {
                flip = 2;
                frameX2 = 7;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -183; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 365;
                ssjRONG = 55;
            }
            if (frameX2 == 36 || frameX2 == 40 || frameX2 == 44) {
    
                flip = 2;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -148; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 353;
                ssjRONG = 55;
                frameX2 = 8;

            }
            if (frameX2 == 37 || frameX2 == 41 || frameX2 == 45) {
                flip = 2;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -100; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 353;
                ssjRONG= 55;
                frameX2 = 9;

            }
            //////////// NHAP NHAY SIEUSAYJA
            if (frameX2 == 22 || frameX2 == 26 || frameX2 == 30) {

                flip = 2;
                frameX2 = 6;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -214; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 365;
                ssjRONG = 55;
            }
            if (frameX2 == 23 || frameX2 == 27 || frameX2 == 31) {
                flip = 0;
                frameX2 = 7;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -183; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 365;
                ssjRONG = 55;
            }
             //////////// NHAP NHAY SIEUSAYJA
            if (frameX2 == 24 || frameX2 == 28 || frameX2 == 32) {

                flip = 2;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -148; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 353;
                ssjRONG = 55;
                frameX2 = 8;

            }
            if (frameX2 == 25 || frameX2 == 29 || frameX2 == 33) {
                flip = 0;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = -100; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = 100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                XssjCanvas = 353;
                ssjRONG= 55;
                frameX2 = 9;

            }
            if (dem3 == dem5) {
                skills[5].isSsj = false;
                dem5 = -1;
                flip = 0;
            }
            ctx.drawImage(arrGokuImg[flip], Xssj + frameX2*ssjRONG, Yssj, rongSsj, caoSsj, XssjCanvas, YssjCanvas,  ssjRONG* Wssj, HssjCanvas);
        }
        else if (flip == 1 || flip == 3) {
            let Yssj = 1485;
            let YssjCanvas = vitriCanvas.vitriYcanvas;
            let Xssj = 10;
            let vitriFrameX2 = Math.floor(dem5/tocdokhunghinh) % 45;
            frameX2 = vitriFrameX2;
            let Wssj = 2;
            let Hssj = 2;
            let rongSsj = 55;
            let caoSsj = 80;
            let HssjCanvas = 160;
            let XssjCanvas = GokuLon0[0][idx].vitriX + 110;
            let ssjRONG = 55;
            let dem3 = tocdokhunghinh*45 - 1;
            flip = 1;
            if (frameX2 == 0) {
                XssjCanvas = GokuLon0[0][idx].vitriX;
                Xssj = 1823;
                ssjRONG = 55;
                rongSsj = -55
                caoSsj = 80;
            }
            if (frameX2 == 1) {
                Xssj = 1823;
                ssjRONG = -55;
                rongSsj = 55;
                caoSsj = 80;
            }
            if (frameX2 == 2 || frameX2 == 4) {
                XssjCanvas = GokuLon0[0][idx].vitriX;
                frameX2 = 0;
                Xssj = 1823;
                ssjRONG = 55;
                rongSsj = -55
                caoSsj = 80;
            }
            if (frameX2 == 3 || frameX2 == 5) {
                frameX2 = 1;
                Xssj = 1823;
                ssjRONG= -55;
                rongSsj = 55
                caoSsj = 80;
            }
            if (frameX2 == 6) {
                XssjCanvas = GokuLon0[0][idx].vitriX + 120;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -214; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
            }
            if (frameX2 == 7) {
                XssjCanvas = GokuLon0[0][idx].vitriX + 130;

                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -183; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG= -55;
            }
            if (frameX2 == 8) {
                XssjCanvas = GokuLon0[0][idx].vitriX + 140;

                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 -  -148; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
            }
            if (frameX2 == 9) {
                XssjCanvas = GokuLon0[0][idx].vitriX + 140;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -100; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
            }
            if (frameX2 == 10 || frameX2 == 14 || frameX2 == 18) {
                frameX2 = 6;
                XssjCanvas = GokuLon0[0][idx].vitriX + 130;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -214; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
            }
            if (frameX2 == 11 || frameX2 == 15 || frameX2 == 19) {
                flip = 3;
                frameX2 = 7;
                XssjCanvas = GokuLon0[0][idx].vitriX + 130;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -183; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG= -55;
               
            }
            if (frameX2 == 12 || frameX2 == 16 || frameX2 == 20) {
                flip = 1;
                XssjCanvas = GokuLon0[0][idx].vitriX + 140;

                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 -  -148; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
                frameX2 = 8;

            }
            
            if (frameX2 == 13 || frameX2 == 17 || frameX2 == 21) {
                XssjCanvas = GokuLon0[0][idx].vitriX + 140;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -100; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
                frameX2 = 9;

            }
            ////////////  SIEUSAYJA
            if (frameX2 == 34 || frameX2 == 38 || frameX2 == 42) {
                flip = 3;
                frameX2 = 6;
                XssjCanvas = GokuLon0[0][idx].vitriX + 140;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -214; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
            }
            if (frameX2 == 35 || frameX2 == 39 || frameX2 == 43) {
                flip = 3;
                frameX2 = 7;
                XssjCanvas = GokuLon0[0][idx].vitriX + 130;

                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -183; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG= -55;
            }
            if (frameX2 == 36 || frameX2 == 40 || frameX2 == 44) {
                flip = 3;
                XssjCanvas = GokuLon0[0][idx].vitriX + 140;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 -  -148; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
                frameX2 = 8;

            }
            if (frameX2 == 37 || frameX2 == 41 || frameX2 == 45) {
                flip = 3;
                XssjCanvas = GokuLon0[0][idx].vitriX + 140;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -100; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
                frameX2 = 9;

            }

            //////////// NHAP NHAY SIEUSAYJA
            if (frameX2 == 22 || frameX2 == 26 || frameX2 == 30) {
                flip = 3;
                frameX2 = 6;
                XssjCanvas = GokuLon0[0][idx].vitriX + 130;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -214; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
            }
            if (frameX2 == 23 || frameX2 == 27 || frameX2 == 31) {
                flip = 1;
                frameX2 = 7;
                XssjCanvas = GokuLon0[0][idx].vitriX + 130;

                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -183; // bắt đầu vẽ X hình
                Wssj = 3; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -85 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG= -55;
            }
             //////////// NHAP NHAY SIEUSAYJA
            if (frameX2 == 24 || frameX2 == 28 || frameX2 == 32) {
    
                flip = 3;
                XssjCanvas = GokuLon0[0][idx].vitriX + 140;

                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 -  -148; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
                frameX2 = 8;

            }
            if (frameX2 == 25 || frameX2 == 29 || frameX2 == 33) {
                flip = 1;
                XssjCanvas = GokuLon0[0][idx].vitriX + 140;
                Yssj = 1460; // vị trí bắt đầu vẽ trên hình
                Xssj = 1832 - -100; // bắt đầu vẽ X hình
                Wssj = 3.5; // nhân với độ rộng muốn vẽ canvas
                rongSsj = -100 // rộng trên hình * Wssj
                caoSsj = 100; // cao trên hình
                Hssj = 3; // nhân với độ cao canvas
                YssjCanvas = 260 // vị trí vẽ ở canvas
                HssjCanvas = 200 // độ cao vẽ lên canvas
                ssjRONG = -55;
                frameX2 = 9;
            }
            if (dem3 == dem5) {
                skills[5].isSsj = false;
                dem5 = -1;
                flip = 1;
            }            
            ctx.drawImage(arrGokuImg[flip], Xssj + frameX2*ssjRONG, Yssj, rongSsj, caoSsj, XssjCanvas, YssjCanvas,  ssjRONG* Wssj, HssjCanvas);
           
        }
        dem5++;
        requestAnimationFrame(animate);
    }
    else {
        
        if (!SonGoKu.isJump) {
            for(let i=0; i<QuaiVatArr.length; i++) {
                if (QuaiVatArr[i].isqvAT) {
                    isQvAttack = true;
                    break;
                }
                else {
                    isQvAttack = false;;
                }
            }  
            if (skills[5].ssjMod) {
                if (isPress && flip == 0 || flip == 2) {
                    ctx.drawImage(arrGokuImg[flip], GokuLon0[flip][1].fristPX + GokuLon0[flip][idx].chieurong * frameX + 6, GokuLon0[flip][idx].SpaceFrameY + 22, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, SonGoKu.jumpY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);   
                }
                else if (isPress && flip == 1 || flip == 3) {
                    ctx.drawImage(arrGokuImg[flip], GokuLon0[flip][1].fristPX + GokuLon0[flip][idx].chieurong * frameX - 5, GokuLon0[flip][idx].SpaceFrameY + 22, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, SonGoKu.jumpY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);   
                }
                else if (flip == 0 || flip == 2) {
                    ctx.drawImage(arrGokuImg[flip],8 +  45*frameX , 22, 50, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, SonGoKu.jumpY, 50 * 2 , GokuLon0[flip][idx].chieucao * 2);
                }
                else {
                    ctx.drawImage(arrGokuImg[flip], 1825 + -45*frameX , 22, -50, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, SonGoKu.jumpY, 50 * 2 , GokuLon0[flip][idx].chieucao * 2);
                }
            }
            else { 
                if (!isQvAttack) ctx.drawImage(arrGokuImg[flip], GokuLon0[flip][idx].fristPX + GokuLon0[flip][idx].chieurong * frameX, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, SonGoKu.jumpY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);   

                if (isQvAttack) {
                    if (flip == 0) ctx.drawImage(arrGokuImg[0], 10 + GokuLon0[0][0].chieurong * 0, 986, GokuLon0[0][0].chieurong, GokuLon0[1][0].chieucao, GokuLon0[1][0].vitriX, SonGoKu.jumpY, GokuLon0[1][0].chieurong * 2, GokuLon0[1][0].chieucao * 2);
                    if (flip == 1) ctx.drawImage(arrGokuImg[1], 1833 + -GokuLon0[1][0].chieurong * 4, 986, GokuLon0[1][0].chieurong, GokuLon0[1][0].chieucao, GokuLon0[1][0].vitriX, SonGoKu.jumpY, GokuLon0[1][0].chieurong * 2, GokuLon0[1][0].chieucao * 2);
                }         

            }
        }
        if (idx === 2) {
            if (skills[5].ssjMod) {
                if (flip == 1){
                    ctx.drawImage(arrGokuImg[flip], -5 +  GokuLon0[flip][idx].fristPX + GokuLon0[flip][idx].chieurong * frameX, GokuLon0[flip][idx].SpaceFrameY + 22, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, SonGoKu.jumpY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);   
                }
            }
            else {
                ctx.drawImage(arrGokuImg[flip], GokuLon0[flip][idx].fristPX + GokuLon0[flip][idx].chieurong * frameX, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, SonGoKu.jumpY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);   
            }
        }
        dem++;
        YKame = Ychung;
        requestAnimationFrame(animate);
    }
    //////////// quái vật và tấn công và máu
    SonGoKu.DrawAvtHP(avtGoku, SonGoKu.PlayerHP/SonGoKu.PlayerHPGoc);
    SonGoKu.drawtancong(50, 70, flip, Ychung + 65);
    // COMENT QUÁI VẬT
// ////////////////////////////////
    QuaiVatArr.forEach(quaivat => {
        if (quaivat.isLive) {
            if (!quaivat.isJump) quaivat.randomJump();
            quaivat.VeQuaiVat(quaivat.hp/quaivat.thanhHP);
            quaivat.nhay();
        }
        else if (quaivat.isHoiSinh && !quaivat.isLive) {
            quaivat.HoiSinh();
        }
        ///////// GÂY SÁT THƯƠNG
        if (SonGoKu.xtc - 25 <= quaivat.xqv + quaivat.wqv && quaivat.xqv + quaivat.wqv <= 45 + 385 && flip == 1) {
            /// kameha
            if (GokuLon0.kameha && YKame + 75 >= quaivat.jumpY && YKame + 75 <= quaivat.jumpY + quaivat.hqv) {
                quaivat.hp -= 50*skills[2].dameKOKkame*skills[5].dameSSJ;
                kameYet = false;
                let dayluiquaivat = setInterval(() => {
                    quaivat.xqv -= 8*KhoangCanhDayLui;
                }, 10)
                setTimeout(() => {
                    clearInterval(dayluiquaivat)
                }, 300)
            }
            // đá
            else if (GokuLon0.kick && SonGoKu.ytc + SonGoKu.htc <= quaivat.jumpY + quaivat.hqv + SonGoKu.htc && SonGoKu.ytc + SonGoKu.htc >= quaivat.jumpY) {
                if (GokuLon0.kick && skills[5].ssjMod) {
                    quaivat.hp -= skills[2].dame*skills[5].dameSSJ*15;
                    let dayluiquaivat = setInterval(() => {
                        quaivat.xqv -= 2*KhoangCanhDayLui;
                    }, 100)
                    setTimeout(() => {
                        clearInterval(dayluiquaivat)
                    }, 300)
                }
                else {
                    quaivat.hp -= skills[2].dame*skills[5].dameSSJ;
                    let dayluiquaivat = setInterval(() => {
                        quaivat.xqv -= 2*KhoangCanhDayLui;
                    }, 100)
                    setTimeout(() => {
                        clearInterval(dayluiquaivat)
                    }, 300)
                }
            }
        }
        if (SonGoKu.xtc + 80 + SonGoKu.wtc >= quaivat.xqv && quaivat.xqv >= 45 + 385 && flip == 0) {
            //kameha
            if (GokuLon0.kameha && YKame + 75 >= quaivat.jumpY && YKame + 75 <= quaivat.jumpY + quaivat.hqv) {
                quaivat.hp -= 50*skills[2].dameKOKkame*skills[5].dameSSJ;
                kameYet = false;
                let dayluiquaivat = setInterval(() => {
                    quaivat.xqv += 8*KhoangCanhDayLui;
                }, 10)
                setTimeout(() => {
                    clearInterval(dayluiquaivat)
                }, 300)
            }
            // đá
            else if (GokuLon0.kick && SonGoKu.ytc + SonGoKu.htc <= quaivat.jumpY + quaivat.hqv + SonGoKu.htc && SonGoKu.ytc + SonGoKu.htc >= quaivat.jumpY) {
                if (GokuLon0.kick && skills[5].ssjMod) {
                    quaivat.hp -= skills[2].dame*skills[5].dameSSJ*15;
                    let dayluiquaivat = setInterval(() => {
                        quaivat.xqv -= 2*KhoangCanhDayLui;
                    }, 100)
                    setTimeout(() => {
                        clearInterval(dayluiquaivat)
                    }, 300)
                }
                else {
                    quaivat.hp -= skills[2].dame*skills[5].dameSSJ;
                    let dayluiquaivat = setInterval(() => {
                        quaivat.xqv -= 2*KhoangCanhDayLui;
                    }, 100)
                    setTimeout(() => {
                        clearInterval(dayluiquaivat)
                    }, 300)
                }
            }
        }
    })
    
    /////////////
    if (skills[3].kaiokenMod) SonGoKu.PlayerHP -= SonGoKu.PlayerHPGoc*0.0002
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
        if (skills[0].isUse && !skills[5].isSsj) {
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
                }, 2000);
            }
            idx = 2;     
            isPress = true;
            Chay = isPress;
            GokuLon0.flyFast = true;
            if (!skills[5].ssjMod) {
                bkgrSpeed = 50;
                setTimeout(() => {
                    GokuLon0.flyFast = false;
                    baynhanh = true;
                    idx = 0;
                    isPress = false;
                    Chay = false;
                    idx = 0;
                    bkgrSpeed = layerspeed;
                    isKeyUpFly = true;
                }, 200)
            }     
            else {
                bkgrSpeed = 100;
                setTimeout(() => {
                    bkgrSpeed = layerspeed;
                    GokuLon0.flyFast = false;
                    baynhanh = true;
                    idx = 0;
                    isPress = false;
                    Chay = false;
                    idx = 0;
                    bkgrSpeed = layerspeed;
                    isKeyUpFly = true;
                }, 200)
            }       

            if (isPress && Chay) {
                sounds[3].play();
                // console.log(sounds[3].currentTime)
            }
            skills[0].hoiChieu();
            skills[0].isUse = false;
            console.log('da chay nhanh')
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
        if (skills[1].isUse && isSkill2 && !skills[5].isSsj) {
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
            
            if (skills[5].ssjMod) {
                let kamehassj = setInterval(() => {
                    sounds[0].pause();
                    sounds[0].currentTime = 0.2;
                    sounds[0].play();   
                }, 500);
                setTimeout(() => {
                    clearInterval(kamehassj);
                }, 1600);
            }
                sounds[0].play();
                // sounds[4].play();
            GokuLon0.kameha = true;
            skills[1].hoiChieu();
            skills[1].isUse = false;
        }
        else {
            console.log('Đang hồi chiêu!');
        }
    }
    if (e.key === '3') {
        if (skills[2].isUse && isSkill3 && !skills[5].isSsj) {
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
        }
        else {
            console.log('Đang hồi chiêu!');
        }
    }
    if (e.key === '4') {
        if (skills[3].isUse && isSkill4 && !skills[5].isSsj && !skills[5].ssjMod) {
            GokuLon0.kaioken = true;
            // thời gian hồi background
            skill4.classList.add('hoichieu');
            skill5.classList.add('hoichieu');
            let soGiay = skills[3].tgHoiChieu - 0.05;
            let demnguoc = setInterval(() => {
                skill4.style.height = (soGiay/skills[3].tgHoiChieu)*100 + '%';
                soGiay -= 0.05;
            }, 50);
            setTimeout(() => {
                clearInterval(demnguoc);
            }, 20000);

            if (isSkill4) sounds[5].play();
            skills[3].sangsanKOK = true;
            setTimeout(() => {
                skills[2].dame *= skills[2].dameKOK;
                skills[2].dameKOKkame *= 2.5;
                skills[3].kaiokenMod = true;
                layerspeed = 13;
            }, 500)
            skills[3].hoiChieu();
            skills[3].tatKaiokenMod();
            skills[3].isUse = false;
        }
        else {
            console.log('Đang hồi chiêu! kaioken');
        }
    }
    if (e.key === ' ' && !SonGoKu.isJump) {
        SonGoKu.jump = true;
        SonGoKu.isJump = true;
    }
    if (e.key === '5') {
        if (skills[5].isUse && isSkill5 && !skills[3].kaiokenMod) {
            console.log('đã kích hoạt supersayan')
            skill5.classList.add('hoichieu');
            skill4.classList.add('hoichieu');
            // // thời gian hồi background;
            let soGiay = skills[5].tgHoiChieu - 0.05;
            let demnguoc = setInterval(() => {
                skill5.style.height = (soGiay/skills[5].tgHoiChieu)*100 + '%';
                soGiay -= 0.05;
            }, 50);
            setTimeout(() => {
                clearInterval(demnguoc);
            }, 60000);

            sounds[8].play();

            setTimeout(() => {
                console.log('kích hoặc ssj mod')
                skills[5].ssjMod = true;
                skills[5].dameSSJ *= 4;
                skills[5].tatSsjMod();
            }, 3000)
            skills[5].hoiChieu();
            skills[5].isSsj = true;
            skills[5].isUse = false;
        }
        else {
            console.log('Đang hồi chiêu! superSayan');
        }
    }
    
});
document.addEventListener('keyup', function(e) {
            if (e.key !== ' ') {
                  if (e.key != '2') {
                        if (GokuLon0.flyFast) {
                            if (isKeyUpFly) {
                               if (!skills[5].ssjMod) {
                                    isKeyUpFly = false;
                                    setTimeout(() => {
                                    GokuLon0.flyFast = false;
                                    isPress = false;
                                    Chay = false;
                                    idx = 0;
                                    bkgrSpeed = layerspeed;
                                    isKeyUpFly = true;
                                    baynhanh = true;
                                }, 200)
                               }
                               else {
                                    isKeyUpFly = false;
                                    setTimeout(() => {
                                    GokuLon0.flyFast = false;
                                    isPress = false;
                                    Chay = false;
                                    idx = 0;
                                    layerspeed = 8;
                                    isKeyUpFly = true;
                                    baynhanh = true;
                                }, 200)
                               }
                            }
                        }
                        else {
                            idx = 0;
                            isPress = false;
                            sounds[2].pause();
                            sounds[2].currentTime = 0;
                            sounds[3].pause();
                            sounds[3].currentTime = 0;
                            bkgrSpeed = layerspeed;
                            Chay = false;
                        }
                  }
            }
           
});
