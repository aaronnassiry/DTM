const Connection = require('tedious').Connection;  
    const myConfig = {  
        server: 'interview-sql-server-2.database.windows.net',
        authentication: {
            type: 'default',
            options: {
                userName: 'interview_user', 
                password: ''  
            }
        },
        options: {
            encrypt: true,
            database: 'interview' 
        }
    };  
    const newConnection = new Connection(myConfig);  
    newConnection.on('connect', function(err) {  
        console.log("Connected");  
    });
    newConnection.connect(function(err) {
        if (err) throw err;
        console.info("Connected!");
        const sql = "CREATE TABLE weblog (Timestamp VARCHAR(255), MethodType VARCHAR(255), RequestNumber VARCHAR(255), SourceIP VARCHAR(255))";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
      });
