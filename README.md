# multitrim
multiline string trimming

```javascript

import multitrim from 'multitrim'

const tpl = `
  indentation, yeah!
`

tpl /*\n  indentation, yeah!\n*/

multitrim(tpl) /*\nindentation, yeah!\n*/

// aggressive mode: remove any empty lines
multitrim(tpl, true) /*indentation, yeah!*/

```
