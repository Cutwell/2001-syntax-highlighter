/*

*/

function highlight() {
    var blocks = document.getElementsByTagName("code");

    for (i = 0; i < blocks.length; i++) { 
        let language = blocks[i].className;
        let syntax = window[language];
        
        let code = blocks[i].innerHTML;
        
        for (let pattern in syntax) {
            if (syntax.hasOwnProperty(pattern)) {
                let regex = new RegExp(pattern, "g");
                let color = syntax[pattern].replace("#", "");

                if (code.match(regex) != null) {
                    code = code.replace(regex, "<span class="+color+">$1</span>");
                }
            }
        }
        blocks[i].innerHTML = code;
    }
}
