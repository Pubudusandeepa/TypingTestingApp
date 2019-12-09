
const wording = ["Do you like JavaScript as much as I do?",
"Hope you are having fun this is a simple game you can make"
,"Source code is included so you can create your own version of this challange"];
let startTime,endTime;
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click" ,function(){
console.log(this.innerText);
if(this.innerText == "Start"){
    playText.disabled = false;
    playGame();
}else if(this.innerText == "Done"){
    playText.disabled = true;
    button.innerText = "Start";
    endPlay();
}
})
 function endPlay(){
     let date = new Date();
     endTime = date.getTime();
     let totalTime = ((endTime-startTime)/1000);
     console.log(totalTime);
     let str = playText.value;
     console.log(str);
     let wordCount = wordCounter(str);
     let speed = Math.round((wordCount/totalTime)*60);
     console.log(speed);
     let finalMessage = "You typed at  "+ speed +" words per minute"+" __";
     
     
    finalMessage +=  compareWord(message.innerText,str); 
     
     message.innerText = finalMessage;
 }
 function wordCounter(strWords){
     let response = strWords.split("").length;
     return response;
 }
 function compareWord(str1, str2){
      let words1 = str1.split(" ");
      let words2 = str2.split(" ");
      let cnt=0;
      words2.forEach(function(item,index){
         if(item == words2[index]){
           cnt++;
         }
      })
      return(cnt+" correct out of "+words2.length+ " words");
     
 }

function playGame(){
  let randomNum = Math.floor(Math.random()*wording.length);
  message.innerText = wording[randomNum];
  let date = new Date();
  startTime = date.getTime();
  console.log(startTime);
 button.innerText = "Done";
  console.log(randomNum);  
}