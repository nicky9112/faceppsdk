Face++ node.js sdk.
============

Based on the face++ official API build.

# Install

npm

```shell
    npm install faceppsdk
```
    
github

```shell
    $ git clone https://github.com/nicky9112/faceppsdk.git
    $ cd faceppsdk
    $ npm install .
```
    
# Usage

```javascript

    var facePP = require('faceppsdk'),
        detectParams = {
            url : 'http://faceplusplus.com/static/img/demo/1.jpg';
            mode: 'normal'
        }
        verifyParams = {
            person_id : 'person_id'
        };
    
    facePP.api_key = '<YOUR_API_KEY_HERE>';
    facePP.api_secret = '<YOUR_API_SECRET_HERE>';
    
    facePP.detection.detect(detectParams, function (err, res) {
        // to do something
        console.log(res.face[0].attribute.age);    
    });
    
    facePP.train.verify(verifyParams, function (err, res) {
        // to do something
        
    }
```

# Face++ API overview

http://www.faceplusplus.com/api-overview/