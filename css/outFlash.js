function zzjCallOneUrl(us) {
    document.getElementById("zzj_fun_426s").src = us;
}

var timeID = 0;
var tt1 = 600;
tt2 = 0;
tt3 = 0;
var timeID = setInterval("hnceTimer()", 1000);

function hnceTimer() {
    tt1--;
    if (tt1 >= 0) {
        if ((tt1 % 2) == 1) {
            document.getElementById('bian92a').style.backgroundColor = "#aab0fe";
            document.getElementById('bian92b1').style.backgroundColor = "#aab0fe";
            document.getElementById('bian92b2').style.backgroundColor = "#aab0fe";
            document.getElementById('bian92c').style.backgroundColor = "#aab0fe";
        } else {
            document.getElementById('bian92a').style.backgroundColor = "#0012ff";
            document.getElementById('bian92b1').style.backgroundColor = "#0012ff";
            document.getElementById('bian92b2').style.backgroundColor = "#0012ff";
            document.getElementById('bian92c').style.backgroundColor = "#0012ff";
        }
        tt2 = tt1 % 60;
        tt3 = (tt1 - tt2) / 60;
        document.getElementById("tim317").innerHTML = tt3 + "分" + tt2 + "秒";
    } else {
        document.getElementById("tim317").innerHTML = "已作废";
    }
}