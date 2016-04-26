# exmo-api

Exmo (Bitcoin Exchange) API client

## Getting Started
Install the module with: `npm install exmo-api`

```javascript
var exmo = require('exmo-api');
exmo.init_exmo({key:"your_key", secret:"your_secret"});
exmo.api_query("user_info", { }, function(result){
  var data = JSON.parse(result);
  ...
});
```

## Documentation
[Exmo.com Trade API](https://wallet.exmo.com/en/api_doc#/authenticated_api)

## Release History
_0.1.0_

## License
Copyright (c) 2016 exmo-dev  
Licensed under the MIT license.
