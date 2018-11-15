window.onload = function(){
  var inputField = document.querySelector(".input");
  var ButtonCalculate = document.querySelector(".button");
  var resultMessages = document.querySelector(".resultMessages");
  var wAmount = document.getElementById("wAmount");
  var maxWord = document.getElementById("maxWord");
  var minWord = document.getElementById("minWord");
  var aLength = document.getElementById("aLength");
  resultMessages.style.display = 'none';

  function call(){
    resultMessages.style.display = 'block';
    var res = inputField.value;
    countWords(res);
    var sign = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var a = replaceAll(res, sign, "");
    findMaxWord(a);
    findMinWord(a);
    findAverageLength(a);
  }

 function countWords(res){
    var result = res.trim().split(/\s+/); 
    wAmount.textContent =`Number of words:  ` + result.length; 
  }
  
  function findMaxWord(res){
    var longestWord = res.split(' ').reduce(function(longest, currentWord){
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    maxWord.textContent = `Length of the maximal word: ` + longestWord.length + "(" + longestWord + ")";
  }

  function findMinWord(res){
    var words = res.split(' ');
    var shortest = words.reduce((shortestWord, currentWord)=>{
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    minWord.textContent = `Length of the minimum word: ` + shortest.length + "(" + shortest + ")";
  }

  function findAverageLength(res) {
    var wordCount = res.split(" ").length;
    var wordArray = res.split(" ");
    var wordAvg = 0;
    for (var i = 0; i < wordCount; i++){
        wordAvg += wordArray[i].length;
    }
    var avgLen = wordAvg / wordCount;
    aLength.textContent = `Average length of words: ` + Math.round(avgLen);
  };
  
  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  ButtonCalculate.addEventListener('click', call);
}