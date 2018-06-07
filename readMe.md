## Lowes Node JS assessment

To start, run "npm install" from the top level to install package.json.

Then run "node .bin/www start" or "nodemon start" to to initialize the server. Navigate to "localhost:7777/" to view the application.

V1 Stack used:
* NodeJS
* ExpressJS
* Pug
* Sass

V2 Stack used:
* NodeJS
* ExpressJS
* VueJS

#### Things editted to create proxy

* proxyTable in vue-client/config/index.js
* added lodash and cors to app.js and directed app to use cors()
* Needed to stand up concurrent processing of servers for dev environment
    * added concurrently and cors to backend package.json
    * chained the npm command to start front and backend simultaneously. set a kill command to help with managing open ports.
* used fetch as http command coupled with async await combo. Same as back-end strategy.


#### Pagination troubles

Had difficulty converting same format used in pug for pagination over to vueJS syntax. Ran into limitations with v-for range setting. 