# lighthouse ecoIndex aggregator

this tools is the cli version of v1.0.0
this tools is used for aggragate reports lighthoure and reports ecoIndex in unique reports. 
----

##  Options

**_--srcLighthouse_**
   
_type:_ string

_description:_ 

 options is used for defined lighthouse reports path 

**_--srcEcoIndex_**
   
_type:_ string

_description:_

 options is used for defined ecoIndex reports path 

**_-h_**
   
_type:_ boolean

_description:_

 options is used for see informations cli

**_--reports_**
   
_type:_ string

_description:_

 options is used for defined format reports after task 
 unique value possible used is "html"

**_-v_**
_type:_ boolean

_description:_

  options is used for verbose task
----

## Example usage

```bash
node ./index.js  --srcLighthouse="C:\Workspace\reports\lighthouse" --srcEcoIndex="C:\Workspace\reports\ecoindex" --reports="html"
```

You can also used this module programmatically

```js
const aggregate = require('lighthouse-eco-index-aggregator/src/main');

console.log(aggregate({
  srcLighthouse: './reports/lighthouse',
  srcEcoIndex: './reports/ecoindex'
}))
```
