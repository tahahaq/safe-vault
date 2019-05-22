var azure = require('azure-storage');
var fs = require('fs');


var fileService = azure.createFileService('safevault', 'FVRq9jdWI4XXbE6EZ/FAypP5M6KxcVpwTwKT1LrNwS7Ei42NicH4UWDuNkF8bd9MLDMvWNVlr5pv+LufuJN+Ug==');


test();
async function test() {

    await  fileService.getFileToStream('taskshare', 'taskdirectory', 'taskfile', fs.createWriteStream('test2.png'), function(error, result, response) {
        if (!error) {
            // file retrieved
        }
    });

}


