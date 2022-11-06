(() => {

        let previousUrl = '';

        const observer = new MutationObserver(function(mutations) {

            if (location.href !== previousUrl) {

                previousUrl = location.href;

                document.body.dispatchEvent(new Event("urlchange"));

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

        window.dispatchEvent(new Event(sub_url));

    });