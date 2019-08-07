javascript: (function () {
    /* ************************************************************************
    ** This is form-executor to check if your passport is ready to take.
    ** It is designed to work with Polish system available at obywatel.gov.pl
    ** ('expectedPage') and within shape as it was when developed - August '19.
    **
    ** How to use:
    **   1. Change 16-digit number passed to 'check' method at the end.
    **   2. Create bookmark in your browser with content of this file as URL.
    **   3. Go to 'expectedPage' and execute this bookmarklet via Click.
    **   4. There should be executed check call with your number on that page.
    ** ********************************************************************* */

    var expectedPage = "https://obywatel.gov.pl/wyjazd-za-granice/sprawdz-czy-twoj-paszport-jest-gotowy";

    function failWith(message) {
        var err = "Paszport Ready-Checker: " + message;
        window.alert(err);
        throw new Error(err);
    }

    function ensureOnExpectedPage() {
        if (expectedPage !== window.location.href) {
            failWith([
                "This checker works only on expected page:",
                expectedPage,
                "",
                "",
                "Please navigate there and re-execute this bookmarklet."
            ].join("\n"));
        }
    }

    function get(selector) {
        var element = $(selector);
        if (element.length === 1)
            return element;

        failWith("Cannot find '" + selector + "' as single element on the page.");
    }

    function check(number) {
        var checkForm = get(".form-box");
        var numberInput = get("#numer-wniosku");
        var submitButton = get("#sprawdzWniosekSubmit");

        checkForm.get(0)
            .scrollIntoView();

        numberInput
            .val(number)
            .change();

        submitButton
            .click();
    }

    ensureOnExpectedPage();
    check("1234123412341234");
})();
