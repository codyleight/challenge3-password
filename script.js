// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;


  function generatePassword(){ //we want to put all the code for making the actual password here. 
    var generatorArray = []; //Used to push the values from our PasswordKey into with rng.
    var alphabetKey = "abcdefghijklmnopqrstuvwxyz"; // We alternatively could have made an Object for every variable that we need and called it within our code.
    var alphabetKeyCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Mentioned below but we could use toUpperCase on our original key, but we would already need another variable to not overwrite the whole key.
    var numberKey = "123456789";
    var specialKey = "!@#$%^&*()<>?,./{}[]|";
    var passwordKey = ""; //holds every selected array inside and we will pull from here when using random.
    var passwordArray = []; //will be the password that we return
    var n ; // bool Variables for the math
    var l ;
    var lc ;
    var uc ;
    var sc ;
    var pl ;

    //all statements are bool type except how many letters.

// If statements to edit array depending on true or false, as well as add an alert that we have or have not added these characters to our passwordKey.
    n = confirm('Do you want Numbers in your password?');

     if (n){
      //numbers are in! use rng with numberKey
      alert("Numbers have been added");
      passwordKey = passwordKey.concat(numberKey);  //asigns number keys to password
      
    } else {
      alert("numbers were not added.")
    }
  

    l = confirm('Do you want Letters in your password?');
    
    if (l){ // Asking for letters as a whole, can do alerts for both however it is getting a bit redundant.
      alert("Letters have been added");
   
    lc = confirm('Do you want lowercase letters?');
  
    uc = confirm('Do you want uppercase letters?');

    } else {
      alert("letters have not been added to our key");
    }
  
    sc = confirm('Do you want special characters');

    if(sc){
      //special characters being added
      alert("special characters have been added");
      passwordKey = passwordKey.concat(specialKey);
    } else {
      alert("special characters have not been added");
    }
  
    pl = prompt('How long do you want your password to be? Enter a number between 8-128'); //take user input for how many keys they want in their password, fill slots of passwordArray.length with it.
    if (pl < 8 || pl > 128 ){ //user fails to enter a correct amount, they are given 1 more try before we restart.
      pl = prompt('please re-enter a number higher than 8 and less than 128 or ELSE');
      if (pl < 8 || pl > 128 ){
        alert("Restarting since you didn't meet the length criteria :(")
        console.log("restarting because we didnt choose a number correctly :(")
        generatePassword();
      }
    }

    if (!n && !l && !lc && !uc && !sc){ //user fails to choose any keys for their password, we can't have a blank password, so we will not move forward!
      alert("No characters chosen means no password. Restarting now :()")
      console.log("yeah you gotta restart...")
      generatePassword();
    }
  
    console.log("n = "+ n) // logging for development end to see.
    console.log("l = "+ l)
    console.log("lc = "+ lc)
    console.log("uc = "+ uc)
    console.log("sc = "+ sc)
    console.log("pl = "+ pl)
    console.log("password is being made");

    
    passwordArray.length = pl; // setting password length from our gathered information.


// Done: use random.math to cycle through indexes of the array and place a value from selected type. - for future we should include all so we dont rewrite/miss values in the array.
 
if (lc){ // Left out notification when selecting lowercase and uppercase as it may be redundant clicking so many boxes.

  passwordKey = passwordKey.concat(alphabetKey);
  // lowercase is in! -- we could alternatively edit the alphabetKey to be capital or lowercase with toUpperCase and toLowercase  however we may need another variable anyways to not overwrite the original.
  
}

  if(uc){
    // uppercase made it
    passwordKey = passwordKey.concat(alphabetKeyCap);
  }


  // DONE: set the array to a singular string so we don't get commas in our password. may need to change the keys to include a string instead of full on arrays and choose the i from there.
  //now that we have made conditions to add to a master Key we can select from this array at random and then set it equal to generatorArray.
  //for every passwordArray.length set a key from passwordKey at random to that index number.

  for (var i = 0; i < passwordArray.length; i++) { // i will continue to run until as long as it is less than 8, since we count from 0 in our array and our number from user does not count 0 we dont want it to be <= or will have an extra chracter.
    var random = Math.floor(Math.random() * passwordKey.length);//assign a variable called random  and have it  = return an interger from 0 to our passwordKey length.
    generatorArray += passwordKey.substring(random, random +1); // generatorArray = generatorArray + passwordKey.Substring(random, random +1). passwordKey.substring will return a part of our string, and random assigned each time if statement runs to a random number.
   }  
         //we made generatorArray to pratice pushing it into another value as well as if we want to edit it further before we have a finalized password.



  passwordArray = generatorArray;
  console.log(passwordArray);





    return passwordArray;

    }


    
   

  

  

  console.log(password)
  console.log("button has been pressed");



}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //calls writePassword -- include new function that we make to immediately pop up


