
var listitem = document.getElementById("listitem");
listitem.style.maxHeight = "0px";
function togglelist(){
    if(listitem.style.maxHeight == "0px"){
        listitem.style.maxHeight = "170px";
    }
    else
    listitem.style.maxHeight = "0px";
}

