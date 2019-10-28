require('dotenv').config()
const app = require('./app')
//If the file required doesn't export anythig you should import
//Like this line below
require('./database')
async function main() {
    //when it runs the first line (6) and whet it works read the next line (7)
    const port = app.get('port')
    await app.listen(port);
    console.log("Server on port: "+port); 
}

main();