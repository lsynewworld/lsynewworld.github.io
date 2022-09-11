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

function clickMe1(imgFile) {
    var f = imgFile.files[0]
    var fileReader = new FileReader()
    fileReader.onload = function(event) {
        let abc = event.target.result
            // console.log(abc)
        $("#person").attr("src", abc);
    }
    fileReader.readAsDataURL(f);
}