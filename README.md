# 2001-highlight
GNU Nano-style syntax highlighting on the web.

### Including in your project
The highlighter is written in pure JavaScript, so no additional libraries are required. Just include the highlight and language files inside your .html project.
```html
<link rel=stylsheet href=path/to/Language.css>
<script src=path/to/Language.js></script>
<script src=path/to/2001.js></script>
```
```
path/to/ | -> 2001.js
         | -> Language.js
         | -> Language.css
```

### Usage
Insert code you want to highlight between ```<code>``` tags, then add the correct language to let the script provide correct colouring.
```html
<code class=Language>
Lorem Ipsum...
</code>
```

### Features
| Function |  |
| :---: | :---: |
| ```highlight()``` | Adds correct syntax highlighting to all ```<code>``` blocks inside the file. |

### Obtaining text from inside a formatted <code> block
```javascript
var text = document.getElementById(id).innerText;
```

### Custom syntax highlighting
2001 supports different themes within a language.
1. *.JS contains the regex and intended color code.
2. *.CSS matches those color codes into the correct text color.
By customising the .CSS file, or creating new files, you can use a different theme for a language.

### Contributing
Additional syntax themes for new languages, or new themes for currently supported languages, are always welcome. Ensure you make clear what language your are supporting and the name of your theme inside the pull request in order to get it accepted swiftly.

### Why 2001?
2001 was the year Nano became part of the GNU project, under which it gained syntax colouring, which this project looks to mirror.