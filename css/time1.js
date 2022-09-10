var shi1D = document.getElementById("shi1");
var shi2D = document.getElementById("shi2");
var fen1D = document.getElementById("fen1");
var fen2D = document.getElementById("fen2");
var miao1D = document.getElementById("miao1");
var miao2D = document.getElementById("miao2");

function getTime() {
    var myDate = new Date();
    var mytime = myDate.toLocaleString("chinese", { hour12: false });
    //获得时间格式为2020/12/30 18:54:39 第一个split(" ")[1]获得18:54:39这个字符串，在对其.split("")获得[1,8,:,5,4,:,3,9]这个数组
    //由此得到,time[0]time[1]为小时，time[3]time[4]为分钟，time[6]time[7]为秒
    time = mytime.split(" ")[1].split("");
    // console.log(time);
    return new Array(time[0], time[1], time[3], time[4], time[6], time[7]);
}

var h1 = 0,
    h2 = 0,
    f1 = 0,
    f2 = 0,
    m1 = 0,
    m2 = 0;

//更新小时1
var ht1 = 0;
setInterval(function() {
    var a = getTime();
    if (a[0] != h1) {
        h1 = a[0];
        //获得当前的子结点
        var childImg = shi1D.getElementsByTagName("img")[0];
        var imgM = document.createElement("img");
        imgM.src = "img/" + h1 + ".jpg";
        shi1D.appendChild(imgM);
        var s1 = setInterval(function() {
            ht1 += 1;
            shi1D.scrollTop = ht1;
            if (ht1 >= 70) {
                clearInterval(s1);
                setTimeout(function() {
                    childImg.remove();
                    ht1 = 0;
                }, 100)
            }
        }, 1)
    }
}, 1000);
//更新小时2
var ht2 = 0;
setInterval(function() {
    var a = getTime();
    if (a[1] != h2) {
        h2 = a[1];
        //获得当前的子结点
        var childImg = shi2D.getElementsByTagName("img")[0];
        var imgM = document.createElement("img");
        imgM.src = "img/" + h2 + ".jpg";
        shi2D.appendChild(imgM);
        var m2 = setInterval(function() {
            ht2 += 1;
            shi2D.scrollTop = mt1;
            if (ht2 >= 70) {
                clearInterval(m2);
                setTimeout(function() {
                    childImg.remove();
                    ht2 = 0;
                }, 100)
            }
        }, 1)
    }
}, 1000);
//更新分钟1
var ft1 = 0;
setInterval(function() {
    var a = getTime();
    if (a[2] != f1) {
        f1 = a[2];
        //获得当前的子结点
        var childImg = fen1D.getElementsByTagName("img")[0];
        var imgM = document.createElement("img");
        imgM.src = "img/" + f1 + ".jpg";
        fen1D.appendChild(imgM);
        var m2 = setInterval(function() {
            ft1 += 1;
            miao1D.scrollTop = ft1;
            if (ft1 >= 70) {
                clearInterval(m2);
                setTimeout(function() {
                    childImg.remove();
                    ft1 = 0;
                }, 100)
            }
        }, 1)
    }

}, 1000);
//更新分钟2
var ft2 = 0;
setInterval(function() {
    var a = getTime();
    if (a[3] != f2) {
        f2 = a[3];
        //获得当前的子结点
        var childImg = fen2D.getElementsByTagName("img")[0];
        var imgM = document.createElement("img");
        imgM.src = "img/" + f2 + ".jpg";
        fen2D.appendChild(imgM);
        var m2 = setInterval(function() {
            ft2 += 1;
            fen2D.scrollTop = ft2;
            if (ft2 >= 70) {
                clearInterval(m2);
                setTimeout(function() {
                    childImg.remove();
                    ft2 = 0;
                }, 100)
            }
        }, 1)
    }

}, 1000);
//更新秒1
var mt1 = 0;
setInterval(function() {
    var a = getTime();
    if (a[4] != m1) {
        m1 = a[4];
        //获得当前的子结点
        var childImg = miao1D.getElementsByTagName("img")[0];
        var imgM = document.createElement("img");
        imgM.src = "img/" + m1 + ".jpg";
        miao1D.appendChild(imgM);
        var m2 = setInterval(function() {
            mt1 += 1;
            miao1D.scrollTop = mt1;
            if (mt1 >= 70) {
                clearInterval(m2);
                setTimeout(function() {
                    childImg.remove();
                    mt1 = 0;
                }, 100)
            }
        }, 1)
    }
}, 1000);
//更新秒2
var mt2 = 0;
setInterval(function() {
    var a = getTime();
    //获得当前的子结点
    var childImg = miao2D.getElementsByTagName("img")[0];
    // miao2D.src="img/"+a[5]+".jpg"
    var imgM = document.createElement("img");
    imgM.src = "img/" + a[5] + ".jpg";
    miao2D.appendChild(imgM);
    var m2 = setInterval(function() {
        mt2 += 1;
        // console.log(mt2);
        miao2D.scrollTop = mt2;
        if (mt2 >= 70) {
            clearInterval(m2);
            setTimeout(function() {
                childImg.remove();
                mt2 = 0;
            }, 100)
        }
    }, 1)

}, 1000);

let dt = new Date();
document.getElementById("datetimenow").innerHTML = (("(" + (dt.getMonth() + 1)).slice(-2)) + "月" + (("0" +
        dt.getDate()).slice(-2)) + "日" + " " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) +
    "获取)";
let dt1 = new Date();
document.getElementById("datetimenow1").innerHTML = (("最近一次核酸结果: 2022" + (dt.getMonth() + 1)).slice(-2)) + "月" + (("0" +
    dt.getDate()).slice(-2));


// 上传通行码图片
function clickMe(imgFile) {
    var f = imgFile.files[0]
        // console.log(f);
    var fileReader = new FileReader()
    fileReader.onload = function(event) {
        let abc = event.target.result
            // console.log(abc)
        $("#passMa").attr("src", abc);
    }
    fileReader.readAsDataURL(f);
}

// 上传人脸
function clickMe1(imgFile) {
    var f = imgFile.files[0]
        // console.log(f);
    var fileReader = new FileReader()
    fileReader.onload = function(event) {
        let abc = event.target.result
            // console.log(abc)
        $("#rl").attr("src", abc);
    }
    fileReader.readAsDataURL(f);
}