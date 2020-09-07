
var submitButton = document.getElementById('submit');
var clearButton = document.getElementById('clear');


submitButton.addEventListener('click',function(){

    let wordBox = document.getElementById('word-box').value;
    wordBox = wordBox.trim();
    wordBox = wordBox.split(' ').length;
    document.getElementById('count-box').value = wordBox;
    
    // using regular expression

    //wordBox = wordBox.replace(/(^\s*)|(\s*$)/gi,""); // remove the star and end space
    // wordBox = wordBox.replace(/[ ]{2,}/gi," "); // reduce multiple spce to single space
    //wordBox = wordBox.replace(/\n /,"\n");//exclude new line with single space
});

clearButton.addEventListener('click',function(){

    let wordBox = document.getElementById('word-box').value = "";
    let clearBox = document.getElementById('count-box').value = "";
});