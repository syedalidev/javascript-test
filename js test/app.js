
   /// --- first task
/// Reverse the order of two provided strings
function nameSwap (str){
    str = str.split('').reverse(' ').join(' ')
    return str
}
console.log(nameSwap("abraham lincoln"))
console.log(nameSwap("Hank Aaron"))


// -- Second task
//// for loop even number

let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19.20];
let ans = []
function evenonly(array1){
    for(let i = 0; i <array1.length; i++){
        if(array1[i] %2===0){
           ans.push(array1[i])
        }
    }
    return ans
}

console.log(evenonly(array1));

///---- Third task
/// Remove Odd Numbers From an Array in filter method
let array = [1,2,3,4,5,6,7,8,9,10];

function one(array){
    return array % 2 ===0;
}
 let evennumber = array.filter(one);

 console.log(evennumber); 

 let array2 = [21,26,28,29];
  
 function two(array2){
    return array2 % 2 ===0;
 }

 let even2 = array2.filter(two);
 console.log(even2);

//---- fourth task
//  reapeat string 

 function repeatString(str, num) {
     let ans = ""
    for(var i =1 ;i <=num;i++){
        ans += str;
     }
     return ans
   }
    
      console.log(repeatString('car', 4));
      console.log(repeatString('bar', 3)) 
 
/// --- fifth task
//// repeat string2

function reapeatstring2(str , num){

    let ans2 = ""
    let i = 0;
    while(i < num){
        ans2 += str;
        i++;
    }
  
    return ans2;
}

console.log(reapeatstring2('car', 5));
console.log(reapeatstring2('bar' , 7));




/// --- six task      
/// find the longest function

function longestWordLength(str) {
    let words = str.split(" ");
    let maxlength = ""
    for(let i = 1; i<words.length;i++){
        if(words[i].length>maxlength){
            maxlength = words[i].length
        }
    }return maxlength
}
 console.log(longestWordLength('Hi, where is the airport ?'));
console.log(longestWordLength('Thanks for stopping by!'));


/// --- Seven task
/// Alphabetical order1

function nameSwap2 (str){
    str = str.split('').sort().join('')
    return str
}
console.log(nameSwap2("hello"))
console.log(nameSwap2("bdegooy"))

///--- Eight task
/// --- alpahabetical order2
function nameSwap3(str){
    let strrtoarray =  str = [...str.toLowerCase()]
    strrtoarray = str.sort();
    strrtoarray = str.join("");

    return strrtoarray;
}


console.log(nameSwap3("helooo"));
console.log(nameSwap3("good morning"));

/// --- Ninth task
/// Alphabetical order3 

function alphaOrder3 (str){
    let splitStr = str.split("");
    splitStr = splitStr.reverse();
    splitStr = splitStr.join("");

    return splitStr;

}

console.log(alphaOrder3("car"));
console.log(alphaOrder3('bar'));

// Ten task 

function alphaOrder4 (str){
    let splitStr = [...str];
    splitStr = splitStr.reverse();
    splitStr = splitStr.join("");

    return splitStr;

}

console.log(alphaOrder4("car"));
console.log(alphaOrder4('bar'));


/// eleven task
//// --- Palindrome

function Palindrome(str){
    
    let isPalindrome = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    isPalindrome = str.split('').reverse().join('');
    
    return isPalindrome;

}


console.log(Palindrome('Eva, Can I Stab Bats In A Cave?'));
console.log(Palindrome('Was It A Rat I Saw?'));
console.log(Palindrome('A nut for a jar of tuna?'));