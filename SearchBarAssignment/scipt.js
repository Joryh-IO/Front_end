function fun(){
    var a = document.getElementById("userinput").value.toLowerCase();
    var li = document.getElementsByTagName("option");
    for(var i=0; i<li.length; i++){
        li[i].style.display="";
    }
    for(var i=0; i<li.length; i++){
        //console.log(li[0].value.substring(0,a.length));
        var b = li[i].value.toLowerCase();
        if(a == b.substring(0,a.length)){  
            console.log(li[i].value);
        }
        else{li[i].style.display="none";}
    }
    // console.log(li[0].value);
}