function clearValue() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("result").value = "";
}

function calcUlate() {
    var iNp1 = document.getElementById("first").value;
    var iNp2 = document.getElementById("second").value;
    var operAtor = document.getElementById("ope").value;

    if (operAtor == "+") {
        res = parseInt(iNp1) + parseInt(iNp2);
    }

    if (operAtor == "-") {
        res = parseInt(iNp1) - parseInt(iNp2);
    }

    if (operAtor == "*") {
        res = parseInt(iNp1) * parseInt(iNp2);
    }

    if (operAtor == "/") {
        res = parseInt(iNp1) / parseInt(iNp2);
    }

    if (operAtor == "%") {
        res = parseInt(iNp1) % parseInt(iNp2);
    }

    document.getElementById("result").value = res;

}