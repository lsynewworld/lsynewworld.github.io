let dtY = new Date();
document.getElementById("dateY").innerHTML =
   "2022年"+ (("0"+(dtY.getMonth() + 1)).slice(-2)) + "月" + (("0" + dtY.getDate()).slice(-2)) + "日";