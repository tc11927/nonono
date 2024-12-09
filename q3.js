const { userInfo } = require("os");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/

/* 
NOTES:
1) Add to let theme, add red, green, blue, yellow and orange
2) Work on AddUserColor, this was done in your notes. Push the color to usercolors based on if it's a real color in let theme.
3)Display the colors in usercolors
4) Add toggling to each color (was done in past things, reference and copy paste as it should be the same but with the different colors)
*/

let userColors = [];
let theme = {
  //the 5 color and their boolean value goes here
  red:true,
  green:true,
  blue:true,
  yellow:true,
  orange:true,
};

//rename this to AddUserColor
function AddUserColor(){
  readline.question("What color would you like to add?", _color=>{
    let checkColorAllowed = false;
    for(let key in theme){
      if(_color === key && theme[key] === true){
        checkColorAllowed = true;
        userColors.push(_color)
      }
    } console.log ("your colors:")
    console.log(theme);
    StartApp();
  })
  //add a color to userColors
}

//rename this to DisplayUserColors
function DisplayUserColors(){ 
  console.log ("your colors:")
    console.log(userColors);
    StartApp();
}


//rename this to ToggleThemeColor
function ToggleThemeColor(){
  readline.question("Which color do you want to toggle?", _command =>{
  if(_command === "toggle red"){
    theme.red = !theme.red;
  } else if(_command === "toggle green"){
    theme.green = !theme.green;
  } else if(_command === "toggle blue"){
    theme.blue = !theme.blue;
  } else if(_command === "toggle yellow"){
    theme.yellow = !theme.yellow;
  } else if(_command === "toggle orange"){
    theme.orange = !theme.orange;
  }
  console.log ("your colors:")
    console.log(theme);
    StartApp();

  })
  //ask for a color to toggle
} 


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "add"){
      AddUserColor();
    } else if (_command === "show"){
      DisplayUserColors();
    } else if(_command === "toggle"){
      ToggleThemeColor();
    }
  })
}

StartApp();