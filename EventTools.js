//when script injects immediately send inject event;
const injectEvent = new Event("inject");
window.dispatchEvent(injectEvent);


(() => {

    let previousUrl = '';

    const observer = new MutationObserver(function(mutations) {

        if (location.href !== previousUrl) {

            previousUrl = location.href;

            window.dispatchEvent(new Event("urlchange"));

        }

    });
        
    const config = {

        subtree: true,

        childList: true

    };

    observer.observe(document, config);

})();

window.addEventListener("urlchange", function() {
        
        var url = location.href;

        var sub_url = url.slice(url.indexOf("kahoot.it/") + 10,url.length);

        var event = sub_url == "join" ? "PinEnter" : sub_url == "instructions" ? "QuizJoin" : sub_url == "start" ? "QuizStart" : sub_url == "getready" ? "BeforeQuestion" : sub_url == "gameblock" ? "QuestionStart" : sub_url == "answer/result" ? "AfterQuestion": sub_url == "answer/sent" ? "QuestionAnswer" : 1;

        var details = event == "QuizJoin" ? () => {
            var data = {
                PlayerName : JSON.parse(localStorage.getItem("kahoot-game_session")).playerName,
                QuizPin : JSON.parse(localStorage.getItem("kahoot-game_session")).pin
            }
            return data;
        } : event == "BeforeQuestion" ? () => {
            var data = {
                QuestionText : document.querySelector("[data-functional-selector]='question-block-title'").children[0].children[0]
            }
            return data
        } : event == "QuestionStart" ? () => {
            var data = {
                Answer1 : {
                    button : document.querySelector("[data-functional-selector]='answer-0'"),
                    text : document.querySelector("[data-functional-selector]='question-choice-text-0'")
                },
                Answer2 : {
                    button : document.querySelector("[data-functional-selector]='answer-1'"),
                    text : document.querySelector("[data-functional-selector]='question-choice-text-1'")
                },
                Answer3 : {
                    button : document.querySelector("[data-functional-selector]='answer-1'"),
                    text : document.querySelector("[data-functional-selector]='question-choice-text-1'")
                },
                Answer4 : {
                    button : document.querySelector("[data-functional-selector]='answer-1'"),
                    text : document.querySelector("[data-functional-selector]='question-choice-text-1'")
                }
            }
            return data;
        } : false;
        document.dispatchEvent(new CustomEvent(event),details);
        console.log("event:" + event + "\ndata :",data)
});

