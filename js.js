// âm thanh

var nhacnen = new Audio();
nhacnen.src = './sound/theme.mp3';
nhacnen.volume = 0.25;
document.addEventListener('keydown', function() {
    nhacnen.play();
})
 nhacnen.addEventListener('ended', function() {
    nhacnen.currentTime = 0;
    nhacnen.play();
})

var sounds = [
    new Audio('./sound/kamehaCut2.mp3'),
    new Audio('./sound/kick2.mp3'),
    new Audio('./sound/flyingSlow.mp3'),
    new Audio('./sound/flyingFast.mp3'),
];




var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvas_width = canvas.width = 800;
var canvas_height = canvas.height = 500;
// tạo mảng lưu 2 ảnh bự
var arrGokuImg = [];
var imgPaths = ['GokuLonmin.png', 'GokuLon180min.png'];
imgPaths.forEach(function(path) {
    var gokuImg = new Image();
    gokuImg.src = path;
    arrGokuImg.push(gokuImg);
});

// Tốc độ khung hình, biến đếm
var tocdokhunghinh = 5;
var frameX = 0;
var frameX2 = 0;
var dem = 0;
// điểm bắt đầu vẽ
var vitriXcanvas = 300;
var vitriYcanvas = 310;
// mảng đối tượng skill
var skills = [
    {
        tenSkill: 'Bay tới nhanh',
        isUse: true,
        tgHoiChieu: 10,
        hoiChieu: function() {
            setTimeout(() => {
                skills[0].isUse = true;
                console.log(skills[0].isUse);
            }, 10000)
        },
    },
///////////////////////////
    {
        tenSkill: 'Kameha',
        isUse: true,
        tgHoiChieu: 7,
        hoiChieu: function() {
            setTimeout(() => {
                skills[1].isUse = true;
                console.log(skills[1].isUse);
            }, 7000)
        }, 
    },
/////////////////////////////
    {
        tenSkill: 'Đá',
        isUse: true,
        tgHoiChieu: 5,
        hoiChieu: function() {
            setTimeout(() => {
                skills[2].isUse = true;
                console.log(skills[2].isUse);
            }, 5000)
        },
    },
];
// mảng đối tượng Goku
var GokuLon = [
   {
        trangthai: 'Đứng',
        soKhungHinh: 4,
        chieurong: 57,
        chieucao: 80,
        vitriX: vitriXcanvas,
        vitriY: vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 0
   },

   {
        trangthai: 'Bay tới',
        soKhungHinh: 4,
        chieurong: 63,
        chieucao: 80,
        vitriX: vitriXcanvas,
        vitriY:vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 70
    },
    
    {
        trangthai: 'Bay tới nhanh',
        flyFast: false,
        soKhungHinh: 2,
        chieurong: 70,
        chieucao: 80,
        vitriX: vitriXcanvas,
        vitriY: vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 133
    },

    {
        trangthai: 'Kameha',
        kameha: false,
        soKhungHinh: 8,
        chieurong: 53,
        chieucao: 80,
        vitriX: vitriXcanvas,
        vitriY: vitriYcanvas,
        fristPX: 1,
        SpaceFrameY: 715
    },
    
    {
        trangthai: 'Đá',
        kick: false,
        soKhungHinh: 13,
        chieurong: 54,
        chieucao: 80,
        vitriX: vitriXcanvas,
        vitriY: vitriYcanvas,
        fristPX: 5,
        SpaceFrameY: 550
    },
    
    // {
    //     trangthai: 'Đá2',
    //     soKhungHinh: 8,
    //     chieurong: 70,
    //     chieucao: 80,
    //     vitriX: vitriXcanvas,
    //     vitriY: vitriYcanvas,
    //     fristPX: 166,
    //     SpaceFrameY: 550
    // },

    // {
    //     trangthai: 'Đá3',
    //     soKhungHinh: 2,
    //     chieurong: 53,
    //     chieucao: 80,
    //     vitriX: vitriXcanvas,
    //     vitriY: vitriYcanvas,
    //     fristPX: 726,
    //     SpaceFrameY: 550
    // },
];
// Ảnh lật ngược
var GokuLon180 = [
    {
         trangthai: 'Đứng',
         soKhungHinh: 4,
         chieurong: 57,
         chieucao: 80,
         vitriX: vitriXcanvas,
         vitriY: vitriYcanvas,
         fristPX: 1600,
         SpaceFrameY: 0
         
    },
 
    {
         trangthai: 'Bay tới',
         soKhungHinh: 4,
         chieurong: 63,
         chieucao: 80,
         vitriX: vitriXcanvas,
         vitriY: vitriYcanvas,
         fristPX: 1576,
         SpaceFrameY: 70
     },

];
var GokuLon0 = [];
GokuLon0.push(GokuLon);
GokuLon0.push(GokuLon180);
var idx = 0;
var flip = 0;
//background
// ảnh nền
var isSkill3 = true; 
var isSkill2 = true;
var isPress = false;
var bkgrImg = new Image();
bkgrImg.src = 'background2.png';
var bkgrX = 0;
var bkgrX2 = 1060;

var idxBkgr = 0;
var bkgrSpeed = 20;
// vẽ
var dem2 = 0;
var dem1 = 0; 
function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    let vitriFrameX = Math.floor(dem/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
    frameX = vitriFrameX;

    ctx.drawImage(bkgrImg, bkgrX, 0, 1912, 500);
    ctx.drawImage(bkgrImg, bkgrX2, 0, 1912, 500);
    if (isPress && Chay) {
        if (bkgrX < -1060) bkgrX = 1060 + bkgrX2 - bkgrSpeed;
        else bkgrX -= bkgrSpeed;
        if (bkgrX2 < -1060) bkgrX2 = 1060 + bkgrX - bkgrSpeed;
        else bkgrX2 -= bkgrSpeed;
    }
    // Kameha //////////////////////////////////////
    if (GokuLon0.kameha && isSkill2) {
        isSkill3 = false;
        idx = 3;
        let vitriFrameX2 = Math.floor(dem2/tocdokhunghinh) % GokuLon[idx].soKhungHinh;
        frameX2 = vitriFrameX2;
        let dem3 = tocdokhunghinh*GokuLon[idx].soKhungHinh - 1;
        let diemBatDau = 1;
        if (frameX2 >= 4){
            diemBatDau = -209;
            GokuLon0[flip][idx].chieurong = 105;

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
            if (GokuLon0.flyFast) idx = 2;
        }
        console.log(frameX2);
        ctx.drawImage(arrGokuImg[flip], diemBatDau + GokuLon0[flip][idx].chieurong * frameX2, GokuLon0[flip][idx].SpaceFrameY, GokuLon0[flip][idx].chieurong, GokuLon0[flip][idx].chieucao, GokuLon0[flip][idx].vitriX, GokuLon0[flip][idx].vitriY, GokuLon0[flip][idx].chieurong * 2, GokuLon0[flip][idx].chieucao * 2);
        dem2++;
        ;
        requestAnimationFrame(animate);
        
    }
     // Đá ///////////////////////////////////////////////////////
    else if (GokuLon0.kick && isSkill3) {
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
        if (bkgrX < -1060) bkgrX = 1060 + bkgrX2 - 5;
        else bkgrX -= 5;
        if (bkgrX2 < -1060) bkgrX2 = 1060 + bkgrX - 5;
        else bkgrX2 -= 5;
        dem1++;
        ;
        requestAnimationFrame(animate);
    }
   
    else {
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
    if (e.keyCode === 39) {
       if (!GokuLon0.flyFast) {
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
    if (e.keyCode === 37) {
        if (!GokuLon0.flyFast) {
            idx = 1;
            flip = 1;
            isPress = true;
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
    
    if (e.key === '1') {
        if (skills[0].isUse) {
            idx = 2;
            flip = 0;
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
        if (skills[1].isUse) {
            if (isSkill2) sounds[0].play();
            GokuLon0.kameha = true;
            flip = 0;
            skills[1].hoiChieu();
            skills[1].isUse = false;
        }
        else {
            console.log('Đang hồi chiêu!');
        }
    }
    if (e.key === '3') {
        if (skills[2].isUse) {
            if (isSkill3) sounds[1].play();
            GokuLon0.kick = true
            flip = 0;
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
                    bkgrSpeed = 20;
                    console.log('da ngung bay');
                    isKeyUpFly = true;
                }, 5000)
            }
        }
        else {
            idx = 0;
            isPress = false;
            sounds[2].pause();
            sounds[2].currentTime = 0;
            sounds[3].pause();
            sounds[3].currentTime = 0;
            bkgrSpeed = 20;
            Chay = false;
        }
});

