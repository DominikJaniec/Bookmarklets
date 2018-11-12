javascript: (function () {
    function log(message, asError) {
        var messageHeader = "Show Heads-Up"
            + (asError ? " ERROR: " : ": ");

        message = messageHeader + message;

        if (!asError) {
            console.info(message);
        } else {
            console.error(message);
            alert(message);
        }
    }

    function bumpExecutionCounter() {
        var Key = "_show_headsup_counter_";
        var execution = window[Key];
        if (!execution) {
            execution = 0;
        }

        log("Was " + execution + " times executed before.");
        window[Key] = execution + 1;
        return execution;
    }

    function showHeadersAnchors() {
        log("Showing Headers' Anchors...");
    }

    function showEveryAnchors() {
        log("Showing every Elements' Anchors...");
    }

    function removeAnchors() {
        log("Cleaning up generated Anchors...");
    }

    switch (bumpExecutionCounter() % 4) {
        case 0:
            showHeadersAnchors();
            break;

        case 2:
            showEveryAnchors();
            break;

        case 1:
        case 3:
            removeAnchors();
            break;

        default:
            log("Something went very wrong...", true);
            break;
    }

    log("Thank you for usage :) In case of any problems please look at https://github.com/DominikJaniec/Bookmarklets");
})();
