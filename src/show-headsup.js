javascript: (function () {
    var Verbose = true;

    var MsgHeader = "Show Heads-Up: ";
    var MsgContact = "In case of any problems please visit:"
        + "\nhttps://github.com/DominikJaniec/Bookmarklets";

    var CounterKey = "_show_headsup_counter_";
    var AnchorsClass = "show-headsup-hash-anchor";
    var AnchorTargetAttr = "data-show-headsup-target";

    function log(message) {
        console.info(MsgHeader + message);

    }

    function logError(message) {
        console.error(MsgHeader + message);
        alert("ERROR in " + MsgHeader
            + "\n" + message
            + "\n\n" + MsgContact);
    }

    function verbose(message, dumpObject) {
        if (Verbose) {
            console.debug(MsgHeader + message, dumpObject);
        }
    }

    function bumpExecutionCounter() {
        var execution = window[CounterKey];
        if (!execution) {
            execution = 0;
        }

        verbose("Was executed before, times", execution);
        window[CounterKey] = execution + 1;
        return execution;
    }

    function executeOverHtmlCollection(htmlCollectionElements, where, executeOver) {
        for (var i = 0; i < htmlCollectionElements.length; ++i) {
            var element = htmlCollectionElements.item(i);
            if (where(element)) {
                executeOver(element);
            }
        }
    }

    function showElementsAnchors(elements) {
        executeOverHtmlCollection(
            elements,
            el => el.id && el.offsetParent,
            el => {
                /* TODO: Implement #fragment Anchor creation. */
                verbose("Referable element via URL's #fragment", el);
            });
    }

    function removeAnchors() {
        log("Cleaning up generated Anchors...");

        executeOverHtmlCollection(
            document.getElementsByClassName(AnchorsClass),
            el => el.hasAttribute(AnchorTargetAttr),
            el => {
                el.parentNode.removeChild(el);

                var target = el.getAttribute(AnchorTargetAttr);
                verbose("Removed Anchor for #" + target, el);
            });
    }

    function showHeadersAnchors() {
        log("Showing Headers' Anchors...");

        Array.from({ length: 6 }, (v, k) => k + 1)
            .map(n => document.getElementsByTagName("H" + n))
            .forEach(gr => showElementsAnchors(gr));
    }

    function showEveryAnchors() {
        log("Showing every Elements' Anchors...");

        showElementsAnchors(
            document.getElementsByTagName("*"));
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
            logError("Something went very wrong...");
            break;
    }

    log("Thank you for usage :)\n\n" + MsgContact);
})();
