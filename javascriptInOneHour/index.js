var ourCounter = 1;
var ourList = document.getElementById("list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var ourListItems = document.getElementById("list").getElementsByTagName("li");

for (var i=0; i<ourListItems.length; i++){
    ourListItems[i].addEventListener("click", activateItem);
}

function activateItem(){
    ourHeadline.innerHTML = this.innerHTML;
    for (var i=0; i<ourListItems.length; i++){
        ourListItems[i].classList.remove("active");
    }
    this.classList.add("active");
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){
  ourList.innerHTML += "<li>Something " + ourCounter + "</li>";
  ourCounter ++;
 }

    




