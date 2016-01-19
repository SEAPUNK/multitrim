# multitrim
multiline string trimming

```javascript

import multitrim from 'multitrim'

const tpl = `
  indentation, yeah!
`

tpl /*\n  indentation, yeah!\n*/

multitrim(tpl) /*\nindentation, yeah!\n*/

// aggressive mode: do String.trim() before doing the multitrim
multitrim(tpl, true) /*indentation, yeah!*/

```
