
var darkMode =false

function darkSide(){
    document.getElementById('styles').href='./resources/darkStyles.css';
    document.getElementById('imageOne').src='./resources/images/Darkside_banner.png';
    document.getElementById('imageTwo').src='./resources/images/Darkside_banner.png';

    
}
function lightSide(){
    document.getElementById('styles').href='./resources/styles.css'
    document.getElementById('imageOne').src='./resources/images/Untitled design (21).png';
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
