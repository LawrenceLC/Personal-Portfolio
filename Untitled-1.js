// Write class below
class ShiftCipher {
    constructor(shiftGoal) {
      this._shiftGoal = shiftGoal
    }
    encrypt(toEncryptString) {

      let returnStringUTF = [];
      let returnString;
      for(let i= 0; i < toEncryptString.length; i++){
        let CharUTF = toEncryptString.charCodeAt(i);
        console.log(CharUTF)
              if (CharUTF >= 65 && CharUTF <= 90) {
              CharUTF = (((CharUTF - 65 + this._shiftGoal) % 26) + 65);

            } else if (CharUTF >= 97 && CharUTF <= 122) {
                CharUTF = (((CharUTF - 97 + this._shiftGoal) % 26) + 97);
            }
        returnStringUTF.push(CharUTF);
      }
      console.log(returnStringUTF)
       returnString = String.fromCharCode.apply(null, returnStringUTF)
       console.log(returnString)
       return returnString.toUpperCase() ;
    };
  

  
  
    decrypt(toDecryptString) {
  
        let returnStringUTF = [];
        let returnString;
        for(let i= 0; i < toDecryptString.length; i++){
          let CharUTF = toDecryptString.charCodeAt(i);
          console.log(CharUTF)
                if (CharUTF >= 65 && CharUTF <= 90) {
                CharUTF = (((CharUTF - 65 - this._shiftGoal) % 26) + 65);
  
              } else if (CharUTF >= 97 && CharUTF <= 122) {
                  CharUTF = (((CharUTF - 97 - this._shiftGoal) % 26) + 97);
              }
          returnStringUTF.push(CharUTF);
        }
        console.log(returnStringUTF);
         returnString = String.fromCharCode.apply(null, returnStringUTF);
         console.log(returnString);
         return returnString.toLowerCase() ;
    
    }
}
  
  
  const cipher = new ShiftCipher(2);
  console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
  console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
  
  