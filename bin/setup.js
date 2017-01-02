/**
 * Created by danieldihardja on 28/12/16.
 */
var app = require("../server/server");
var dataSource = app.dataSources.mysqlDs;

    var models = [
        "Role",
        "RoleMapping",
        "ACL",
        "AccessToken",
        "User"
    ];

    dataSource.autoupdate(models, function(err) {
        if(err) {
            throw err;
        }
        dataSource.disconnect();
    });
