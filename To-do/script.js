var id_set = 0;
const ORIGINAL = document.getElementsByClassName("item")[0];
var priority;
var d = document.querySelector(".dropmenu");


function rad(e){
    priority=e.target.value;
    console.log(priority);
}

function assign(){
    const textstuff = document.getElementById("textbox").value;
    create(textstuff);

}function  del(Event){
    console.log(Event.target.parentElement.remove());
}

function create(textstuff){
    var a = document.getElementById("textbox").value.trim();

    var parent = document.getElementsByClassName("container")[0];
    var div = ORIGINAL;
    const newdiv = div.cloneNode(true);
    newdiv.id=id_set;
    id_set++;
    newdiv.getElementsByTagName("p")[0].textContent= textstuff;
    switch(priority){
        case "low":newdiv.getElementsByTagName("h6")[0].style.backgroundColor="rgb(179, 179, 179)";
        break;
        case "medium":newdiv.getElementsByTagName("h6")[0].style.backgroundColor="rgba(212, 255, 0, 0.96)";
        break;
        case "high":newdiv.getElementsByTagName("h6")[0].style.backgroundColor="rgba(255, 0, 0, 0.582)";
        break;
    }
    
    parent.appendChild(newdiv);
    var div = document.getElementsByClassName("item");  
}



function ed(event){
    document.querySelector(".dropmenu").style.right=0;
    var stuff = event.target.parentElement.querySelector("p").innerHTML;
    console.log(stuff);
    var outin = document.getElementById("textbox").value;
    outin = "wtf";
    document.getElementById("textbox").value=stuff;
    del(event);
}

function tog(){
    var d = document.querySelector(".dropmenu");
    if(d.style.right == "-300px"){
        // console.log("open");
        openn();
    }else{
        // console.log("close");
        // console.log(d.style.right);
        closee();
    }
}

function closee(){
    document.querySelector(".dropmenu").style.right="-300px";
}

function openn(){
    document.querySelector(".dropmenu").style.right=0;
}


