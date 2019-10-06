javascript: (function () {
    /* ************************************************************************
    ** This is bookmarklets to generate 'easy-to-use-script' for downloading
    ** any online-video (e.g. Youtube.com) as MP3 file to listen off-line.
    **
    ** Its instructions are written in Polish, as it is aimed for my Dad.
    ** It expects that target computer has installed:
    **   * PowerShell: https://chocolatey.org/packages/PowerShell
    **   * youtube-dl: https://chocolatey.org/packages/youtube-dl
    **   * and ffmpeg: https://chocolatey.org/packages/ffmpeg
    ** ********************************************************************* */

    var downloadCommand = "youtube-dl --abort-on-error --restrict-filenames --extract-audio --audio-format mp3";
    var command = downloadCommand + " " + window.location.href;

    var echoSpace = " \\\" \\\"";
    var fullCommand = [
        "powershell -Command \"",
        "echo \\\"Executing: '" + command + "'...\\\"" + echoSpace,
        "; &" + command,
        "; if ($LastExitCode -ne 0) {",
        " echo" + echoSpace + echoSpace + echoSpace + echoSpace,
        " \\\"Coś poszło nie tak :(\\\"",
        " \\\"Przekaż wszystkie powyższe informacje autorowi, aby rozwiązać ten problem.\\\"",
        echoSpace + echoSpace,
        " \\\"Wciśnij klawisz Enter aby zamknąć to okno . . .\\\"",
        "; [void][System.Console]::ReadLine()",
        "}\""
    ].join("");

    var easySelectPadding = "                ";
    alert([
        "Pobieranie audio z YouTube i innych stron:",
        "",
        "Aby pobrać bieżący film jako MP3, należy zaznaczyć i skopiować (Ctrl+C) poniższą komendę:",
        "",
        easySelectPadding + fullCommand + easySelectPadding + easySelectPadding,
        "",
        "",
        "Następnie należy otworzyć docelowy katalog, ten do którego ma zostać pobrany dźwięk z bieżącego YouTube.",
        "W tym folderze, w jego „pasku adresu”, musi zostać wklejona i potwierdzona powyższa komenda (Ctrl+V, Enter).",
        ""
    ].join("\n"));
})();
