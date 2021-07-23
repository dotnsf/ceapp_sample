//. app.js
var express = require( 'express' ),
    app = express();

app.use( express.Router() );
app.get( '/', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  var str = ( new Date() ).toISOString();
  console.log( str );
  res.write( str );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
