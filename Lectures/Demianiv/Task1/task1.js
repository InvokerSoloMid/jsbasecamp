'use strict';

const PUNCTUATIONS= ";,./[]{}()'\"!?";

function parseWords(text) {//returns an array of words from text
    
    let punctuationsRegExp=new RegExp('['+PUNCTUATIONS+']');//punctuations range 
    let wordRegExp=new RegExp('[^'+PUNCTUATIONS+']+.*[^'+PUNCTUATIONS+']+')//RegExp that starts and ends with any symbol exept punctuations
    let twords=text.split(/[\s\n]/);//spliting text by spaces and new line symbols
   
    
    for (let [index,word] of twords.entries()){
      
        let wordMatchingPart=word.match(wordRegExp);
        
        if (word.match(punctuationsRegExp)){    //if word contains punctuation
            if (wordMatchingPart){
                twords[index]=wordMatchingPart[0];       
            }
            else{
                twords[index]="";
            }
        }
       
    }
    let words=twords.filter(n=>n!="");//deleting empty strings

    return words;
}

function getWordLengths(words){
    let wordLengths=[];
   
    words.forEach(word => {
    wordLengths.push(word.length);    
    });

    return wordLengths;
}

function getAvgWordLengths(wordLengths){
    let sum=0;
    wordLengths.forEach(length=>{
        sum+=length;
    });
    return sum/wordLengths.length;   
}

function calculateClickHandler(){
    

    let inputFieldNode= document.querySelector('.inputField');
    if (!inputFieldNode.value){
        inputFieldNode.setAttribute('placeholder','Firstly fill in some text here ...');
        inputFieldNode.focus();
    }
    else{
    
    let text=inputFieldNode.value;    
    let words=parseWords(text);
    let wordLengths= getWordLengths(words);
    


    document.querySelector('#wordsCount').textContent=words.length;
    document.querySelector('#maxWordLength').textContent=Math.max(...wordLengths);
    document.querySelector('#minWordLength').textContent=Math.min(...wordLengths);
    document.querySelector('#avgWordLength').textContent=getAvgWordLengths(wordLengths).toFixed(2);
    
    document.querySelector('#outputArea').style.display='block';
    inputFieldNode.removeAttribute('placeholder');
    }
}


