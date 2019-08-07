# Bookmarklets

Let's automate your browser flow!

----

## Show Heads-Up - Headers' Anchors

[Bookmarklet](src/show-headsup.js) which shows _#anchors_ near elements with `ID` attribute on any web page. Thus, they allows to obtain sharable URLs for specific paragraph on page. Will not work well on [SPA pages](https://en.wikipedia.org/wiki/Single-page_application) - because they exploit already [#fragments](https://en.wikipedia.org/wiki/Fragment_identifier).

- [ ] First execution shows _#anchors_ for every `Hn` tag with `ID` attribute.
- [ ] Every other call removes all generated _#anchors_ on page.
- [ ] Third time shows _#anchors_ for any element with `ID` attribute.

## Paszport Ready-Checker (for Poland)

[Bookmarklet](src/paszport-check.js) which executes _check-form_ to find out if your passport is ready to take. It is designed to work with Polish system available at [https://obywatel.gov.pl](https://obywatel.gov.pl/wyjazd-za-granice/sprawdz-czy-twoj-paszport-jest-gotowy) page within shape as it was when developed - 7th August 2019.
