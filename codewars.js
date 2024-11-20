//1-chi masala
function multiply(a, b){
    return a * b
   }

//2-chi masala
function evenOrOdd(number) {
    if(number % 2 === 0){
      return "Even"
    }else{
      return "Odd"
    }
  }

  //3-chi masala
  function numberToString(num) {
    // Return a string of the number here!
    return num.toString()
   
  }

  //4-chi masala
  function solution(str){
    let arr = str.split("").reverse().join("")
    return arr
}

  //5-chi masala
  function makeNegative(num) {
    // Code?
    if(num > 0){
      return -num
    }else{
      return num
    }
  }

  //6-chi masala
  function opposite(number) {
    //your code here
    return (-number)
  }

  //7-chi masala
  function boolToWord( bool ){
    //...
    if(bool === true){
      return "Yes"
    }else{
      return "No"
    }
  }
  //8-chi masala
  function repeatStr (n, s) {
    return s.repeat(n);
  }
  //9-chi masala
  function removeChar(str){
    //You got this!
    return str.slice(1, -1)
   };
   //10-chi masala
   const stringToNumber = function(str){
    // put your code here
    return Number(str);
  }
