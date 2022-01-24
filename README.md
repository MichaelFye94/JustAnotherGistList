### Just Another Gist List

# Setup:
* Prerequisites
  * Requires Node
  * Requires MongoDB
* Configration
  * `/api` 
    * The API defaults to Port 4000
      * change this in `api/config.json[port]` to your desired port
    * Defaults to using local default MongoDB url `mongodb://localhost:27017`
      * change this in `api/config.json[mongoURL]` to the url your MongoDB is accessed at
  * `/client`
    * The client defaults to using `http://localhost:4000` as the url to the JAGL api
      * If you need to change this, you need to do so both in `client/apollo.config.js[client][service][url]` as well as `client/src/config.js[jaglURL]`
* Installation
  * To install, you will need to run `npm install` in both `/api` and `/client`
* Serve
  * To run, you will need to run `npm start` in both `/api` and `/client`
