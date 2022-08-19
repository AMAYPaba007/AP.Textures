var theme = 1;


function themeChange(){

    if( theme == 1){

        document.getElementById("themes").style.background= "#111";
        document.getElementById("theme-btn").innerHTML= "LIGHT";
        document.getElementById("theme-btn").style.color= "#111";
        document.getElementById("theme-btn").style.backgroundColor= "blanchedalmond";
        theme= 2;
    }
    else{

        document.getElementById("themes").style.background= "blanchedalmond";
        document.getElementById("theme-btn").innerHTML= "DARK";
        document.getElementById("theme-btn").style.color= "blanchedalmond";
        document.getElementById("theme-btn").style.backgroundColor= "#111";
        theme= 1;
    }
    
}
