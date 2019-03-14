// binary
var Binary = [
  [0, 0, 0, 0, 0], //a
  [0, 0, 0, 0, 1], //b
  [0, 0, 0, 1, 0], //c
  [0, 0, 0, 1, 1], //d
  [0, 0, 1, 0, 0], //e
  [0, 0, 1, 0, 1], //f
  [0, 0, 1, 1, 0], //g
  [0, 0, 1, 1, 1], //h
  [0, 1, 0, 0, 0], //i
  [0, 1, 0, 0, 1], //j
  [0, 1, 0, 1, 0], //k
  [0, 1, 0, 1, 1], //l
  [0, 1, 1, 0, 0], //m
  [0, 1, 1, 0, 1], //n
  [0, 1, 1, 1, 0], //o
  [0, 1, 1, 1, 1], //p
  [1, 0, 0, 0, 0], //q
  [1, 0, 0, 0, 1], //r
  [1, 0, 0, 1, 0], //s
  [1, 0, 0, 1, 1], //t
  [1, 0, 1, 0, 0], //u
  [1, 0, 1, 0, 1], //v
  [1, 0, 1, 1, 0], //w
  [1, 0, 1, 1, 1], //x
  [1, 1, 0, 0, 0], //y
  [1, 1, 0, 0, 1], //z
  [1, 1, 0, 1, 0], //.
  [1, 1, 0, 1, 1], //,
  [1, 1, 1, 0, 0] // [SPACE]
];

// karakteret
var char = [
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
  ".",
  ",",
  " "
];

// get the word
function getWord() {
  var word = document.getElementById("word").value;
  word = word.toUpperCase();

  // define a word array
  let wordS = [];
  //   console.log(word);
  wordLength = word.length;
  //   console.log(wordLength);

  for (i = 0; i < wordLength; i++) {
    // console.log(word.charAt(i));
    let errorChar = 0;
    for (j = 0; j < 29; j++) {
      if (word.charAt(i) == char[j]) {
        wordS.push(Binary[j]);
        errorChar++;
      }
    }
    if (errorChar == 0) {
      let warning =
        "<div class='alert alert-warning' role='alert'>" +
        "The script can't convert: '" +
        word.charAt(i) +
        "' for the moment! Please remove it!" +
        "</div>";
      document.getElementById("error").innerHTML = warning;
    }
  }

  let coded = [];
  for (m = 0; m < wordLength; m++) {
    for (n = 0; n < 5; n++) {
      coded.push(wordS[m][n]);
      //   console.log(wordS[m][n]);
    }
  }
  // console.log(coded);
  codedText = "<code>";
  for (l = 0; l < wordLength * 5; l++) {
    if (l % 5 == 4 && l != 0) {
      codedText += " " + coded[l] + "&ensp;";
      continue;
    }
    codedText += " " + coded[l];
  }
  codedText += "</code>";

  document.getElementById("coded").innerHTML = codedText;
}

let decoded = "";

// get the word
function turnBack() {
  var code = document.getElementById("code").value;
  code = code.toUpperCase();
  code = code.replace(/\s+/g, "");

  //   console.log(code);
  codeLength = code.length;

  if (codeLength % 5 != 0) {
    document.getElementById("code").value = "Your code isn't correct";
  } else {
    // console.log(codeLength);
    let karaktere = codeLength / 5;

    let codeS = [];

    for (i = 0; i < 29; i++) {
      // k to count if 5 bits are the same if yes add to array
      let k = 0;
      for (j = 0; j < 5; j++) {
        if (code[j] == Binary[i][j]) {
          k++;
        }
      }
      if (k == 5) {
        codeS.push(i);
        // console.log("We got sth");
      }
    }
    // console.log(codeS);

    decodedText = "<code>";
    for (m = 0; m < codeLength / 5; m++) {
      decodedText += " " + char[codeS[m]];
      decoded += " " + char[codeS[m]];
      //   console.log(char[codeS[m]]);
    }
    decodedText += "</code>";

    document.getElementById("decoded").innerHTML = decoded;
  }
}
