window.addEventListener("getready",getready);
function getready() {
    kahoot.current_question = JSON.parse(localStorage.getItem("kahoot-game_session")).questionNumber;
    console.log("Question " + kahoot.current_question)
}

window.addEventListener("gameblock",answer);
function answer() {
    var correctBlocks = new Array();

    kahoot.answers[kahoot.current_question].array.forEach(element => {
        correctBlocks.push(document.querySelector("[data-functional-selector='answer-" + element + "']"));
    });
    console.log(correctBlocks);
}