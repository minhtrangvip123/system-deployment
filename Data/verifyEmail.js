var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "Jf3pXUPtNg",
  password: "h42cg6PZ9f",
  //port: "3306",
  database: "Jf3pXUPtNg"
});


module.exports.VerifyEmail = function (email, callback) { 
    var sql = "UPDATE users SET verified = '1' WHERE email = '" + email +"'"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
        return callback(result.affectedRows)
    });
};

module.exports.Destroy = function () {
    con.end(function(err) {
        if (err) {
        return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
    });
};

// module.exports.Connect = function (callback) {
    
// }

module.exports.Create = function () {
    con.connect(function(err) {
        // callback(err)
        if (err) {
            console.error('error connecting: ', err);
            return;
            // throw err;
        }
        console.log("Connected!");
    });
};