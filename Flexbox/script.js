//window.alert("hello mf");
var a = document.getElementsByClassName("items")[0]
var b = document.querySelectorAll(".toggle button");

function tog(event){
    console.log(event);
    if(b[0].style.cursor =="pointer"){
        for(i=0;i<b.length;i++){
            b[i].style.cursor = "not-allowed";
            b[i].style.opacity = 0.5;
        }
    }else{
        for(i=0;i<b.length;i++){
            b[i].style.cursor = "pointer";
            b[i].style.opacity = 1;
        }
    }
}

function f(ele){
    a.style.justifyContent=ele;
    console.log(a);
}

function f2(ele){
    a.style.flexDirection = ele;
    console.log(a);
}

function f3(ele){
    a.style.alignItems = ele;
    console.log(a);
}