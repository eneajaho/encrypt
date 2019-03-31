# Encrypt / Decrypt

A binary to char encryptor/decryptor made with JS

# How it works

// Encrypting

1. First we grab the word and the key from form input in HTML
2. Function getWord() accepts this 2 values
3. Than it shuffles the original bits matrix based on the key using the sortTableSeedBased function which accepts a copy of the original matrix and the encrypt key
4. After sorting the matrix using the key we create a matrix of bits we found from the matching chars.
5. We convert the matrix to an array
6. We join the array usin .join() and then show it using showText.

// Decrypting

1. First we grab the binary coded value and the key from form input in HTML
2. Function turnBack() accepts this 2 values and then shuffles a duplicate of original matrix array using the key.
3. We create an array of chars using BitsToChars function
4. BitsToChars loops every 8 bits, so captures the first one, than the eigth one and so on. After capturing the first one it checks the bits from 0 to 7 and searches for matches in the Binary Matrix array using EightBitsToChar, so if exist any match from the Binary table it returns the char that belongs to that key.
5. Then we join the array and show it using showText.

-- addRow - shows the table
-- showText - shows text in the id that accepts as parameter.

# Background image author/link

[Photo by Markus Spiske temporausch.com from Pexels](https://www.pexels.com/photo/codes-on-a-screen-1936299/)

# License

MIT - Use the code as you want!
