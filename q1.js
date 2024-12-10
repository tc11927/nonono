const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/

/* 
NOTES:
Work on normal stuff first.
1) Work on registerusers. Reference notes taken. Ask "what is your age?" 
2) Use > and < to use age ranges, can be done in RegisterUser. Reference old notes. Can toggle this in Function StartApp, no need for seperate function!

Challenge 2:
I'm not sure how to do this, and I probably won't get it right. But, I think that you use !settings.vip =!settings.vip to do this. Then surround the registerUser with it to allow if VIP or not. I don't know how to make something specifically VIP :( but do it just like the alcohol setting.


*/

let registry = [];
let settings = {
  alcohol: true,
  vip: false
};

//rename this to RegisterUser
function RegisterUser(){
  if(settings.vip === false) {
  if(settings.alcohol === true ) {
  readline.question("What is your age?", _registry=>{
    if(_registry < 19) {
      console.log("You can't drink!")
      StartApp();
    } else if(_registry > 19){
      console.log("drink away!");
      StartApp();
    }
  })} else{
  console.log ("everyone is welcome!");
  StartApp();
}

} else {
  console.log("Store is closed.");
  StartApp();
}

}

//rename this to ToggleAlcohol
function funtion80() {}
  


//rename this to NotifyAll
function Function3(){
  //go through the array to notify everyone
}


function VIP()
{ readline.question("What do you want to do with VIP? ", _command=>{ 
  if(_command === "make vip")
  { readline.question("Who is VIP?", _age =>{ 
    settings.vip = !settings.vip 
    console.log (`${_age} is now vip`); 
    StartApp(); 
  })
 } else if(_command === "cancel vip") 
  settings.vip = !settings.vip
  StartApp(); 
}) }

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "register"){
      RegisterUser();
    } else if(_command ==="toggle alcohol"){
      settings.alcohol = !settings.alcohol
      StartApp();
    } else if (_command ==="VIP"){
      VIP();
    }
  })
}

StartApp();