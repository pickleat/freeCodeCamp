function telephoneCheck(str) {


    // number validation: checks for correct number of digits by removing other chars and then checking length
      var num = '';
      for (var i = 0; i<str.length; i++) {
        if (str.charCodeAt([i]) > 47 && str.charCodeAt([i])< 58) {
          num += str[i];
        } 
      }
      if (num.length < 10 || num.length > 11) {
          return false 
      }
      if (num.length == 11 && str[0] != 1) {
            return false
      }
      
      // Check for acceptable characters inside AllowedLib
      var allowedLib = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")", "-", " "];
      for (var h = 0; h<str.length; h++) {
          if (!allowedLib.includes(str[h])) {
            return false
          }
        }
    
    // format validation
      for (var j = 0 ; j < str.length; j++) {
        console.log(str[j]);
        // Parentheses Validation
        if (str[j] == '(') {
          if (str[j+4] != ")") {
         return false
          }
        }
        if (str[j] == ')') {
          if (str[j-4] != "(") {
         return false
          }
      }
    }
    return true
    }
  
//   telephoneCheck("555-555-5555");
//   telephoneCheck("123**&!!asdf#");
  telephoneCheck("0 (757) 622-7382");