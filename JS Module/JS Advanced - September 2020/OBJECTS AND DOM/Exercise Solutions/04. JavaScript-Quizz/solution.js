function solve() {
    //buttons
    let firstButton = document.getElementsByClassName("answer-text")[0];
    let secondButton = document.getElementsByClassName("answer-text")[1];
    let thirdButton = document.getElementsByClassName("answer-text")[2];
    let fourthButton = document.getElementsByClassName("answer-text")[3];
    let fifthbButton= document.getElementsByClassName("answer-text")[4];
    let sixeddButton = document.getElementsByClassName("answer-text")[5];

    //sections
    let firstSection = document.getElementsByTagName("section")[0];
    let secondSection = document.getElementsByTagName("section")[1];
    let thirdSection = document.getElementsByTagName("section")[2];

    let liResult = document.getElementsByClassName("results-inner")[0].getElementsByTagName("h1")[0];
    let resultElement = document.getElementById("results");
    let rightAnswersCounter = 0;

    firstButton.addEventListener("click", ()=> {
        firstSection.setAttribute("class", "hidden");
        secondSection.removeAttribute("class");
        firstSection.style.display = "none";
        secondSection.style.display = "block";
        rightAnswersCounter++;
    });
    secondButton.addEventListener("click", ()=> {
        firstSection.setAttribute("class", "hidden");
        secondSection.removeAttribute("class");
        firstSection.style.display = "none";
        secondSection.style.display = "block";
    });
    thirdButton.addEventListener("click", ()=> {
        secondSection.setAttribute("class", "hidden");
        thirdSection.removeAttribute("class");
        secondSection.style.display = "none";
        thirdSection.style.display = "block";
    });
    fourthButton.addEventListener("click", ()=> {
        secondSection.setAttribute("class", "hidden");
        thirdSection.removeAttribute("class");
        rightAnswersCounter++;
        secondSection.style.display = "none";
        thirdSection.style.display = "block";
    });
    fifthbButton.addEventListener("click", ()=> {
        thirdSection.setAttribute("class", "hidden");
        rightAnswersCounter++;
        thirdSection.style.display = "none";

        resultDisplay(rightAnswersCounter);
        console.log(rightAnswersCounter);
    });
    sixeddButton.addEventListener("click", ()=> {
        thirdSection.setAttribute("class", "hidden");
        thirdSection.style.display = "none";

        resultDisplay(rightAnswersCounter);
        console.log(rightAnswersCounter);
    });


    function resultDisplay(rightAnswersCounter) {
        if (rightAnswersCounter === 3){
            liResult.innerHTML = "You are recognized as top JavaScript fan!";
            resultElement.style.display = "block";

        }
        else if ( rightAnswersCounter <= 2){
            liResult.innerHTML = `You have ${rightAnswersCounter} right answers`;
            resultElement.style.display = "block";
        }
    }

}