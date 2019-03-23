// binary
var Binary = [
  [0, 0, 1, 0, 0, 0, 0, 1], //!
  [0, 0, 1, 0, 0, 0, 1, 0], //"
  [0, 0, 1, 0, 0, 0, 1, 1], //#
  [0, 0, 1, 0, 0, 1, 0, 0], //$
  [0, 0, 1, 0, 0, 1, 0, 1], //%
  [0, 0, 1, 0, 0, 1, 1, 0], //&
  [0, 0, 1, 0, 0, 1, 1, 1], //'
  [0, 0, 1, 0, 1, 0, 0, 0], //(
  [0, 0, 1, 0, 1, 0, 0, 1], //)
  [0, 0, 1, 0, 1, 0, 1, 0], //*
  [0, 0, 1, 0, 1, 0, 1, 1], //+
  [0, 0, 1, 0, 1, 1, 0, 0], //,
  [0, 0, 1, 0, 1, 1, 0, 1], //-
  [0, 0, 1, 0, 1, 1, 1, 0], //.
  [0, 0, 1, 0, 1, 1, 1, 1], // /
  [0, 0, 1, 1, 0, 0, 0, 0], //0
  [0, 0, 1, 1, 0, 0, 0, 1], //1
  [0, 0, 1, 1, 0, 0, 1, 0], //2
  [0, 0, 1, 1, 0, 0, 1, 1], //3
  [0, 0, 1, 1, 0, 1, 0, 0], //4
  [0, 0, 1, 1, 0, 1, 0, 1], //5
  [0, 0, 1, 1, 0, 1, 1, 0], //6
  [0, 0, 1, 1, 0, 1, 1, 1], //7
  [0, 0, 1, 1, 1, 0, 0, 0], //8
  [0, 0, 1, 1, 1, 0, 0, 1], //9
  [0, 0, 1, 1, 1, 0, 1, 0], //:
  [0, 0, 1, 1, 1, 0, 1, 1], //;
  [0, 0, 1, 1, 1, 1, 0, 0], //<
  [0, 0, 1, 1, 1, 1, 0, 1], //=
  [0, 0, 1, 1, 1, 1, 1, 0], //>
  [0, 0, 1, 1, 1, 1, 1, 1], //?
  [0, 1, 0, 0, 0, 0, 0, 0], //@
  [0, 1, 0, 0, 0, 0, 0, 1], //A
  [0, 1, 0, 0, 0, 0, 1, 0], //B
  [0, 1, 0, 0, 0, 0, 1, 1], //C
  [0, 1, 0, 0, 0, 1, 0, 0], //D
  [0, 1, 0, 0, 0, 1, 0, 1], //E
  [0, 1, 0, 0, 0, 1, 1, 0], //F
  [0, 1, 0, 0, 0, 1, 1, 1], //G
  [0, 1, 0, 0, 1, 0, 0, 0], //H
  [0, 1, 0, 0, 1, 0, 0, 1], //I
  [0, 1, 0, 0, 1, 0, 1, 0], //J
  [0, 1, 0, 0, 1, 0, 1, 1], //K
  [0, 1, 0, 0, 1, 1, 0, 0], //L
  [0, 1, 0, 0, 1, 1, 0, 1], //M
  [0, 1, 0, 0, 1, 1, 1, 0], //N
  [0, 1, 0, 0, 1, 1, 1, 1], //O
  [0, 1, 0, 1, 0, 0, 0, 0], //P
  [0, 1, 0, 1, 0, 0, 0, 1], //Q
  [0, 1, 0, 1, 0, 0, 1, 0], //R
  [0, 1, 0, 1, 0, 0, 1, 1], //S
  [0, 1, 0, 1, 0, 1, 0, 0], //T
  [0, 1, 0, 1, 0, 1, 0, 1], //U
  [0, 1, 0, 1, 0, 1, 1, 0], //V
  [0, 1, 0, 1, 0, 1, 1, 1], //W
  [0, 1, 0, 1, 1, 0, 0, 0], //X
  [0, 1, 0, 1, 1, 0, 0, 1], //Y
  [0, 1, 0, 1, 1, 0, 1, 0], //Z
  [0, 1, 0, 1, 1, 0, 1, 1], //[
  [0, 1, 0, 1, 1, 1, 0, 0], //\
  [0, 1, 0, 1, 1, 1, 0, 1], //]
  [0, 1, 0, 1, 1, 1, 1, 0], //^
  [0, 1, 0, 1, 1, 1, 1, 1], //_
  [0, 1, 1, 0, 0, 0, 0, 0], //`
  [0, 1, 1, 0, 0, 0, 0, 1], //a
  [0, 1, 1, 0, 0, 0, 1, 0], //b
  [0, 1, 1, 0, 0, 0, 1, 1], //c
  [0, 1, 1, 0, 0, 1, 0, 0], //d
  [0, 1, 1, 0, 0, 1, 0, 1], //e
  [0, 1, 1, 0, 0, 1, 1, 0], //f
  [0, 1, 1, 0, 0, 1, 1, 1], //g
  [0, 1, 1, 0, 1, 0, 0, 0], //h
  [0, 1, 1, 0, 1, 0, 0, 1], //i
  [0, 1, 1, 0, 1, 0, 1, 0], //j
  [0, 1, 1, 0, 1, 0, 1, 1], //k
  [0, 1, 1, 0, 1, 1, 0, 0], //l
  [0, 1, 1, 0, 1, 1, 0, 1], //m
  [0, 1, 1, 0, 1, 1, 1, 0], //n
  [0, 1, 1, 0, 1, 1, 1, 1], //o
  [0, 1, 1, 1, 0, 0, 0, 0], //p
  [0, 1, 1, 1, 0, 0, 0, 1], //q
  [0, 1, 1, 1, 0, 0, 1, 0], //r
  [0, 1, 1, 1, 0, 0, 1, 1], //s
  [0, 1, 1, 1, 0, 1, 0, 0], //t
  [0, 1, 1, 1, 0, 1, 0, 1], //u
  [0, 1, 1, 1, 0, 1, 1, 0], //v
  [0, 1, 1, 1, 0, 1, 1, 1], //w
  [0, 1, 1, 1, 1, 0, 0, 0], //x
  [0, 1, 1, 1, 1, 0, 0, 1], //y
  [0, 1, 1, 1, 1, 0, 1, 0], //z
  [0, 1, 1, 1, 1, 0, 1, 1], //{
  [0, 1, 1, 1, 1, 1, 0, 0], //|
  [0, 1, 1, 1, 1, 1, 0, 1], //}
  [0, 1, 1, 1, 1, 1, 1, 0], //~
  [0, 1, 1, 1, 1, 1, 1, 1] // [SPACE]
];

// karakteret
var char = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
  " "
];


var convertBtn = document.getElementById('chartobinary');
convertBtn.addEventListener('click', function getWord() {
  // get the word
  var word = document.getElementById("word").value;

  BitsMatrix = createBitsMatrix(word);

  BitsArray = createBitsArray(word, BitsMatrix);

  BitsText = ArrayToText(word, BitsArray, 8);

  showText("coded", BitsText);

});


/* Functions for creating and showing the BitsArray*/

function createBitsMatrix(word) {
  /* 
  Create a wordS array where we will save the word bits
  We loop through the char array to find a match for every char of the word .. word[i]
  When we find a match we add the Binary[j] at that index in the BitsMatrix array 
  */

  var BitsMatrix = [];
  for (i = 0; i < word.length; i++) {
    for (j = 0; j < Binary.length; j++) {
      if (word[i] == char[j]) {
        BitsMatrix.push(Binary[j]);
      }
    }
  }
  return BitsMatrix;
}

function createBitsArray(word, BitsMatrix) {
  /*
  It has two arguments, word to get the length of the word and BitsMatrix 
  This converts and Matrix into and array
  */

  var BitsArray = [];
  for (m = 0; m < word.length; m++) {
    for (n = 0; n < 8; n++) {
      BitsArray.push(BitsMatrix[m][n]);
    }
  }
  return BitsArray;
}

function ArrayToText(word, Array, BitLength) {
  /* 
  Declares a var and adds array's bits to it
  So, it turns an array to a string var 
  ? BitLength is used to sum length of the bit. 
  * Ex: When we want to Convert From Char to Bit, BitLength will be 8 
  * When we want to Convert From Bits To Chars, Bitlength will be 1
  */
  var Text = "";
  for (l = 0; l < word.length * BitLength; l++) {
    Text += "" + Array[l];
  }
  return Text;
}

function showText(id, text) {
  // a function that accepts an id and text and
  id = String(id);
  document.getElementById(id).innerHTML = text;
}


/* Converting Bits to characters */

var decodeBtn = document.getElementById('binarytochar');
decodeBtn.addEventListener('click', function turnBack() {

  var code = document.getElementById("code").value;
  code = code.replace(/\s+/g, "");

  CharArray = BitsToChars(code);

  // we use ArrayToText function to convert that CharArray to Text and than show it in html
  CharText = ArrayToText(CharArray, CharArray, 1);
  showText("decoded", CharText);

});

function BitsToChars(code) {
  // Declaring an array for later use
  let SevenBitArray = [];
  // CharArray will keep the decoded characters
  let CharArray = [];

  // loops through the code
  for (let a = 0; a < code.length; a++) {
    // if 8 bits are completed than do ...
    if (a % 8 == 0) {
      // Declare BitCounter That will count from 0 to 7 
      let BitCounter = 0;
      // j will start from a and will go to a+8 .. 
      for (j = a; j < a + 8; j++) {
        // adds bit from code to SevenBitArray and than increases the counter
        SevenBitArray[BitCounter] = code[j];
        BitCounter++;
      }
      // after getting the array of bits we use the function EightBitsToChar to get the char of that group of bits
      // and than we add the char to a CharArray
      Character = EightBitsToChar(SevenBitArray);
      CharArray.push(Character);
    }
  }
  return CharArray;
}

// accepts an array of bits, and return the character of that group of bits
function EightBitsToChar(bitsArray) {

  for (i = 0; i < Binary.length; i++) {
    // k to count if 5 bits are the same if yes add to array
    let k = 0;
    for (j = 0; j < 8; j++) {
      if (bitsArray[j] == Binary[i][j]) {
        k++;
      }
    }
    // if 8 bits are the same as in the Matrix than return the char that belongs to that Index i
    if (k == 8) {
      return char[i];
      break;
    }
  }
}


// function that shows the table in html
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  for (i = 0; i < Binary.length; i++) {
    let newRow = tableRef.insertRow(-1);
    // Insert a cell in the row at index 0
    let FirstCell = newRow.insertCell(0);
    let SecondCell = newRow.insertCell(1);
    let CharValue = document.createTextNode(char[i]);
    let BinaryValue = document.createTextNode(ArrayToText(Binary[i], Binary[i], 1));
    FirstCell.appendChild(CharValue);
    SecondCell.appendChild(BinaryValue);
  }
}
// Call addRow() with the table's ID
addRow('char-binary');