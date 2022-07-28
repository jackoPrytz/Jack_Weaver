
var darkMode =false

function darkSide(){
    document.getElementById('styles').href='./resources/darkStyles.css'
    /*let all = document.getElementById("all");
    all.style.backgroundColor="black";
    all.style.color="red";
    document.querySelector("h1").style.color="darkred";
    document.getElementById("imageOne").src ="C:\Users\jack\OneDrive\Desktop\Jack\Programming\Codecademy\Frontend_Projects\Jack_Weaver\resources\images\Darkside_banner.png";
    */
}
function lightSide(){
    document.getElementById('styles').href='./resources/styles.css'
    /*let all = document.getElementById("all");
    all.style.backgroundColor="#deb887";
    all.style.color= "darkslategray";
    document.querySelector("h1").style.color="white"
    */
}
document.querySelector("button").onclick = function(){
if (darkMode === false){
 darkSide()  
 return darkMode = true;
} else {
 lightSide() 
 return darkMode = false;  
}
}
