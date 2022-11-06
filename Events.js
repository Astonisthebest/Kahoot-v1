window.addEventListener("getready",getready);
function getready() {
    kahoot.current_question = JSON.parse(localStorage.getItem("kahoot-game_session")).questionNumber;
    console.log("Question " + kahoot.current_question)
}