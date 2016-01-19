# multitrim
multiline string trimming

```javascript

import multitrim from 'multitrim'

const tpl = `
  indentation, yeah!
`

tpl /*\n  indentation, yeah!\n*/

multitrim(tpl) /*indentation, yeah!*/

// loose mode: don't do String.trim() before doing the multitrim
multitrim(tpl, true) /*\nindentation, yeah!\n*/

```
