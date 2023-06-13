let timesClicked = 0;
const devButton = document.getElementById("skill");

function developerOfButtonClick() {
    timesClicked++
    if(timesClicked %= 2) {
        devButton.innerHTML = ("websites");
    } else {
        devButton.innerHTML = ("games");
    }
    console.log(timesClicked);
}


devButton.addEventListener("click", developerOfButtonClick);