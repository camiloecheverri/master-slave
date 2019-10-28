module.exports = {
  
    /**Declaration of databases for my development environment**/
          "databases": {
              "Database1": {
                  "database": process.env.DATA_BASE, //you should always save these values in environment variables
                  "username": process.env.USERNAME,  //only for testing purposes you can also define the values here
                  "password":  process.env.PASSWORD,
                  "host": process.env.HOST,
                  "port": process.env.PORT,
                  "dialect": "postgres"  //here you need to define the dialect of your databse, in my case it is Postgres
              },
              "Database2": {
                  "database": process.env.DATA_BASE2, 
                  "username": process.env.USERNAME2,  
                  "password":  process.env.PASSWORD2,
                  "host": process.env.HOST2,
                  "port": process.env.PORT2,
                  "dialect": "mssql"  //second database can have a different dialect
              },
          },
  }