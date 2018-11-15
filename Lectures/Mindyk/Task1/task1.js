//Calling multiple functions
function countWords() {
    countNumWords(splitWords());
    countLongWord(splitWords());
    countShortWord(splitWords());
    countAverLeng(splitWords());
}
//Separate words by space
function splitWords() {
    var str = document.getElementById("textInput").value;
    str = str.replace(/(\B[^\wа-я0-9])|([^\wа-я0-9]\B)|\s|\b_\b/gi, " ");
    var strArray = str.split(" ");
    var filtredList = strArray.filter(function(word) {
        return word != "";
    });
    return filtredList;
}
//Find the number​ of words​ in​ ​the​ ​text
function countNumWords(filtredList) {
    return document.getElementById("numWordCount").innerHTML = filtredList.length;
};

//Find the ​number​ ​of​ ​letters​ ​in​ ​the​ ​longest word
function countLongWord(filtredList) {
    filtredList.sort(function(a, b) {
        return a.split("").length < b.split("").length;
    })
    return document.getElementById("maxWordCount").innerHTML = filtredList[0].length;
}

//Find the ​number​ ​of​ ​letters​ ​in​ ​the​ ​shortest word
function countShortWord(filtredList) {
    filtredList.sort(function(a, b) {
        return a.split("").length > b.split("").length;
    })
    return document.getElementById("minWordCount").innerHTML = filtredList[0].length;
}

//Find the ​average​ ​length​ ​of​ ​words​ ​in​ ​the​ ​text
function countAverLeng(filtredList) {
    var sumCharWords = 0;
    for (var i = 0; i < filtredList.length; i++) {
        filtredList[i] = filtredList[i].length
        sumCharWords += filtredList[i]
    }
    var averLength = Math.round(sumCharWords / filtredList.length);
    return document.getElementById("averWordCount").innerHTML = averLength;
}