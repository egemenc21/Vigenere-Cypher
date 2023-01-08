// Get html Elements
const inputTextArea = document.getElementById('plain-text');
const keyTextArea = document.getElementById('key-text');
const encrypteBtn = document.getElementById('encrypt-btn');
const encryptedTextArea= document.getElementsByClassName('encrypted-text')[0];
const clearBtn = document.getElementById('clear-btn');

//
const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); //Alphabet as an array
let word = "";
let key = "";
let clearText = "";
let encryptedText = "";

// clears the inputs when refreshing the website
window.addEventListener('load',function(){
  inputTextArea.value = ''
    keyTextArea.value = ''
    encryptedTextArea.value = ''

});
//getting the input
inputTextArea.addEventListener("input",function(e){
    word = e.target.value;
    word = word.toLowerCase().replace(" ","").split("")
    console.log(word);

  })
  // getting the key
  keyTextArea.addEventListener("input",function(e){
    key = e.target.value;
    key = key.toLowerCase().replace(" ","").split("")
    

  })
  //encrypte the text according to key and rules
  encrypteBtn.addEventListener('click',function(){    
    let newIndex;
    let newLetter = ''; 

    if(key.length < word.length){
      for(let i =0; i <word.length;i++){
          key.push(key[i%5])
      }
   }

    for(let i =0; i<word.length; i++){
      newIndex = (alphabet.indexOf(word[i]) + alphabet.indexOf(key[i]) ) %26;
      newLetter = alphabet[newIndex];
      encryptedText += newLetter
    }
   console.log(encryptedText);
   encryptedTextArea.value = encryptedText;
   encryptedText = ''

  });

  //for clearing the inputs

  clearBtn.addEventListener('click',function(){
    inputTextArea.value = ''
    keyTextArea.value = ''
    encryptedTextArea.value = ''
  })





