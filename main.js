/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
	if (typeof a === 'number' && typeof b === 'number') {
		
		if(a > b){
			return a
		}
		if(a < b){
			return b
		}
		return NaN
	}
		
	if (typeof a !== 'number' && typeof b === 'number'){

		return b
	}
}



console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

// /**
 // * PART 1
 // *
 // * Define a function maxOfThree() that takes three
 // * numbers as arguments and returns the largest of them.
 // */

function maxOfThree(a, b, c){
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
    	if (a > b && a > c) {
    	return a
    	}
    	if (b > a && b > c)	{
    	return b
    	}
    	if (c > a && c > b) {
    	return c
    	}
    return NaN
    }
    if (typeof a !== 'number' && typeof b === 'number' & typeof c === 'number'){
    	if (b > c) {
    		return b
    	}
    	if (c > b) {
    		return c
    	}
    }
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
    if (typeof char === 'string'){

    char = char.toLowerCase();
    }
	
    if (char === 'a'|| char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    	return true
    }
    return false
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

// // /**
//  * PART 3
//  *
//  * Write a function rovarspraket() that will translate
//  * a text into a "rövarspråket". That is, double every
//  * consonant and place an occurrence of "o" in between.
 // *
 // * For example, rovarspraket("this is fun") should
 // * return the string "tothohisos isos fofunon".

 // */

function rovarspraket(input){
	var newString = '';
	var x;
	if (typeof input !== 'string')
		return "0";

	for (var x = 0; x < input.length; x++) {
		if (isVowel(input[x]) === false){
			newString += input[x] + 'o';
		}
	

	newString += input[x];
}
	return newString
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
   var newString = '';
   var x; 

   for (x = str.length -1; x >=0; x--){

   	newString += str[x];
   }
   return newString;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){ 
 	
 	var str = sentence.split(" ");
 	
 	var longest = 0;
    
    var word = '';

    var length;
    
    for (var i = 0; i < str.length; i++) {

    	length = str[i].length;

    	for (var j = 0; j < str[i].length; j++) {
    		
    		if (str[i][j] === "'"){
    			length--;
    		}
    	}

      	if (longest < length) {
      		longest = length;
            word = str[i];
        }
    }
    
    return word;
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")

