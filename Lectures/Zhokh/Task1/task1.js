/**
 * Gets input text from user and calculate number of words length of maximal and minimum word and average length
 * of all words
 * @param  {string} inputText - get text entered by user.
 * @param  {string array} listOfWords - get array of words separeted in function separatorOfWords().
 * @param  {number array} wordLength - get array which contain length of each word in text.
 * @param  {number} numberOfWords - show number of words in the text. 
 * @param  {number} maxWord - get result of calculating length of the longest word in text.
 * @param  {number} minWord - get result of calculating length of the shortest word in text.
 * @function separatorOfWords() - function which separate text to array of words.
 * @function calcAverageWords() - function which calculate averege length of words.
 * @param  {HTMLElement} output1 - render value numberOfWords on html page.
 * @param  {HTMLElement} output2 - render value maxWord on html page.
 * @param  {HTMLElement} output1 - render value minWord on html page.
 * @param  {HTMLElement} output1 - render value calcAveregeWords() on html page.
 */
function Main(){
    var inputText = document.getElementById('input').value;
    if(inputText==false){
        return false;
    }
    var output1 = document.getElementById('numOfWords');
    var output2 = document.getElementById('maximalWord');
    var output3 = document.getElementById('minimumWord');
    var output4 = document.getElementById('averageWords');

    var listOfWords = separatorOfWords(inputText);

    var wordLength = listOfWords.map(function(word){
        return word.length;
    });

    var numberOfWords = listOfWords.length;
    var maxWord = Math.max(...wordLength);
    var minWord = Math.min(...wordLength);

    output1.innerHTML = "<" + numberOfWords + ">";
    output2.innerHTML = "<" + maxWord + ">";
    output3.innerHTML = "<" + minWord + ">";
    output4.innerHTML = "<" + calcAverageWords(wordLength, listOfWords) + ">";
}

/**@function
 * @name separatorOfWords separate text to array of words. 
 */
function separatorOfWords(text){
    var list = text.replace(/((([^\u0400-\u04FF\w])+(?=\s|\b|\W|$))(([^\u0400-\u04FF\w])+(?=\s|\b|\W|$)))|\s|^(([^\u0400-\u04FF\w])+(?=\s|\b|\W|$))|(([^\u0400-\u04FF\w])+(?=\s|\b|\W|$))$/gi, ' ');
    if (list===" ") {
        return false;
    }
    list = list.split(' ');
    var filtredList = list.filter(function(word){
        return word != "";
    });
    return filtredList;
}

/**@function
 * @name calcAverageWords calculate averege length of words. 
 */
function calcAverageWords(wordLength, listOfWords) {
    var totalLength = wordLength.reduce(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    })
    return totalLength/listOfWords.length;
}