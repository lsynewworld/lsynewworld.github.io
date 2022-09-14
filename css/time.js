function gettime() {
    var time = new Date();
    var arr = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var month = time.getMonth();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var madetime = (month + 1 < 10 ? "(0" : "(") + (month + 1) + "月" + time.getDate() + "日 " + (hour < 10 ? "0" : "") + hour + (min < 10 ? ":0" : ":") + min + "获取)";
    var madetime1 = "" + time.getFullYear() + "-" + (month + 1 < 10 ? "0" : "") + (month + 1) + "-" + (time.getDate() - 1);

    document.getElementById("nowtime").innerText = madetime;
    document.getElementById("nowtime1").innerText = madetime1;
}
gettime(); //显示第一秒的时间
setInterval("gettime()", 1000);