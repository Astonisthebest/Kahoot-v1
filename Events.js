window.addEventListener("getready",getready);
function getready() {
    kahoot.current_question = JSON.parse(localStorage.getItem("kahoot-game_session")).questionNumber;
    console.log("Question " + kahoot.current_question)
}

window.addEventListener("gameblock",answer);
function answer() {
    console.log(kahoot.answers[kahoot.current_question]);
}