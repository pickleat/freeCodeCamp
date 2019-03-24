

function rot13(str) {
    var decypheredString = "";
    var newChar = "";
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt([i]) < 64 || str.charCodeAt([i]) > 90) {
        decypheredString += str[i];
        i++
      }
      newChar = str.charCodeAt(i) -13
      if (newChar > 64) {
        decypheredString += String.fromCharCode((newChar));
      } 
      if (newChar <= 64) {
          decypheredString += String.fromCharCode((newChar+26));
      }
      }
    return decypheredString;
    }
    
  
  
  // Change the inputs below to test
  // rot13("SERR PBQR PNZC");
  // rot13("SERR CVMMN!");
  // rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
  // rot13("SERR YBIR?");
  // rot13("LBH QVQ VG!")