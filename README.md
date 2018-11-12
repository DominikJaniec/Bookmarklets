# Bookmarklets

Let's automate your browser flow

----

## Show Heads-Up - Headers' Anchors

[Bookmarklet](show-headsup.js) which shows _#anchors_ near elements with `ID` attribute on any web page. Thus, they allows to obtain sharable URLs for specific paragraph on page. Will not work well on [SPA pages](https://en.wikipedia.org/wiki/Single-page_application) - because they exploit already [#fragments](https://en.wikipedia.org/wiki/Fragment_identifier).

- [ ] First execution shows _#anchors_ for every `Hn` tag with `ID` attribute.
- [ ] Every other call removes all generated _#anchors_ on page.
- [ ] Third time shows _#anchors_ for any element with `ID` attribute.
